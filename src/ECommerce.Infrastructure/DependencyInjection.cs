using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using ECommerce.Application.Interfaces;
using ECommerce.Application.Interfaces.Repositories;
using ECommerce.Infrastructure.Services.Auth;
using ECommerce.Infrastructure.Services.Inventory;
using ECommerce.Infrastructure.Services.Orders;
using ECommerce.Infrastructure.Services.Warehouses;
using ECommerce.Infrastructure.Services.Shipping;
using ECommerce.Infrastructure.Services.UserManagement;
using ECommerce.Domain.Constants;
using ECommerce.Domain.Entities.Auth;
using ECommerce.Infrastructure.Persistence;
using ECommerce.Infrastructure.Repositories;
using ECommerce.Infrastructure.Authorization;

namespace ECommerce.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        // Configure DbContext with SQL Server
        services.AddDbContext<ApplicationDbContext>(options =>
            options.UseSqlServer(
                configuration.GetConnectionString("DefaultConnection"),
                sqlOptions => 
                {
                    sqlOptions.MigrationsAssembly(typeof(ApplicationDbContext).Assembly.FullName);
                    sqlOptions.EnableRetryOnFailure(
                        maxRetryCount: 5,
                        maxRetryDelay: TimeSpan.FromSeconds(30),
                        errorNumbersToAdd: null);
                }));

        // Register DbContext as abstract DbContext for services that need it
        services.AddScoped<DbContext>(provider => provider.GetRequiredService<ApplicationDbContext>());

        // Configure Identity
        services.AddIdentity<ApplicationUser, ApplicationRole>(options =>
        {
            // Password settings
            options.Password.RequireDigit = true;
            options.Password.RequireLowercase = true;
            options.Password.RequireUppercase = true;
            options.Password.RequireNonAlphanumeric = false;
            options.Password.RequiredLength = 8;

            // Lockout settings
            options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
            options.Lockout.MaxFailedAccessAttempts = 5;
            options.Lockout.AllowedForNewUsers = true;

            // User settings
            options.User.RequireUniqueEmail = true;
        })
        .AddEntityFrameworkStores<ApplicationDbContext>()
        .AddDefaultTokenProviders();

        // Configure JWT Authentication
        var jwtSettings = configuration.GetSection("JwtSettings");
        var secret = jwtSettings["Secret"] ?? throw new InvalidOperationException("JWT Secret not configured.");
        var key = Encoding.UTF8.GetBytes(secret);

        services.AddAuthentication(options =>
        {
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        })
        .AddJwtBearer(options =>
        {
            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                ValidIssuer = jwtSettings["Issuer"],
                ValidAudience = jwtSettings["Audience"],
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ClockSkew = TimeSpan.Zero // No tolerance for token expiration
            };

            // Allow SignalR to use tokens from query string
            options.Events = new JwtBearerEvents
            {
                OnMessageReceived = context =>
                {
                    var accessToken = context.Request.Query["access_token"];

                    // If the request is for our SignalR hub...
                    var path = context.HttpContext.Request.Path;
                    if (!string.IsNullOrEmpty(accessToken) && path.StartsWithSegments("/hubs"))
                    {
                        // Read the token out of the query string
                        context.Token = accessToken;
                    }
                    return Task.CompletedTask;
                }
            };
        });

        // Configure Authorization with dynamic permission policies
        services.AddAuthorization(options =>
        {
            // Generate a policy for each permission
            foreach (var permission in Permissions.GetAll())
            {
                options.AddPolicy(permission.Name, policy =>
                    policy.Requirements.Add(new PermissionRequirement(permission.Name)));
            }
        });

        // Register PermissionAuthorizationHandler
        services.AddScoped<IAuthorizationHandler, PermissionAuthorizationHandler>();

        // Register Services
        services.AddScoped<IAuthService, AuthService>();
        services.AddScoped<IInventoryService, InventoryService>();
        services.AddScoped<IOrderService, OrderService>();
        services.AddScoped<IWarehouseService, WarehouseService>();
        services.AddScoped<IShipmentService, ShipmentService>();
        services.AddScoped<INotificationService, Services.Notifications.NotificationService>();
        services.AddScoped<IAnalyticsService, Services.Analytics.AnalyticsService>();
        
        // User Management Services
        services.AddScoped<IUserManagementService, UserManagementService>();
        services.AddScoped<IRoleManagementService, RoleManagementService>();
        services.AddScoped<IPermissionService, PermissionService>();

        // Register Repositories
        services.AddScoped<IBrandRepository, BrandRepository>();
        services.AddScoped<ICategoryRepository, CategoryRepository>();
        services.AddScoped<IProductRepository, ProductRepository>();

        return services;
    }
}
