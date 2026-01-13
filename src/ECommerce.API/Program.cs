using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using ECommerce.Application;
using ECommerce.Infrastructure;
using ECommerce.Infrastructure.Data;
using ECommerce.Infrastructure.Persistence;
using ECommerce.Domain.Entities.Auth;
using ECommerce.API.Middleware;
using ECommerce.API.Infrastructure;
using ECommerce.Infrastructure.Services.Notifications;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.Converters.Add(new System.Text.Json.Serialization.JsonStringEnumConverter());
    });
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
    {
        Title = "E-Commerce API",
        Version = "v1",
        Description = "Enterprise E-Commerce & Logistics Platform API"
    });
    
    // Add JWT Bearer authentication to Swagger
    c.AddSecurityDefinition("Bearer", new Microsoft.OpenApi.Models.OpenApiSecurityScheme
    {
        Description = "JWT Authorization header using the Bearer scheme. Example: \"Bearer {token}\"",
        Name = "Authorization",
        In = Microsoft.OpenApi.Models.ParameterLocation.Header,
        Type = Microsoft.OpenApi.Models.SecuritySchemeType.ApiKey,
        Scheme = "Bearer"
    });
    
    c.AddSecurityRequirement(new Microsoft.OpenApi.Models.OpenApiSecurityRequirement
    {
        {
            new Microsoft.OpenApi.Models.OpenApiSecurityScheme
            {
                Reference = new Microsoft.OpenApi.Models.OpenApiReference
                {
                    Type = Microsoft.OpenApi.Models.ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            Array.Empty<string>()
        }
    });


    // Use full name for schema IDs to avoid conflicts with same-named DTOs in different namespaces
    c.CustomSchemaIds(type => type.FullName!.Replace('+', '.'));
    
    // Set the comments path for the Swagger JSON and UI.
    var xmlFile = $"{System.Reflection.Assembly.GetExecutingAssembly().GetName().Name}.xml";
    var xmlPath = System.IO.Path.Combine(System.AppContext.BaseDirectory, xmlFile);
    if (System.IO.File.Exists(xmlPath))
    {
        c.IncludeXmlComments(xmlPath);
    }
});

// Add Memory Cache for Analytics and other caching needs
builder.Services.AddMemoryCache();

// Add SignalR for real-time notifications
builder.Services.AddSignalR();

// Register custom user ID provider for SignalR
builder.Services.AddSingleton<IUserIdProvider, CustomUserIdProvider>();

// Register Application layer services (includes MediatR, FluentValidation)
builder.Services.AddApplication();

// Register Infrastructure layer services (includes DbContext, Identity, Repositories)
builder.Services.AddInfrastructure(builder.Configuration);

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});

var app = builder.Build();

// =============================================
// Database Seeding (runs on startup)
// =============================================
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    try
    {
        var context = services.GetRequiredService<ApplicationDbContext>();
        var logger = services.GetService<ILogger<Program>>();
        
        // Apply pending migrations in development
        if (app.Environment.IsDevelopment())
        {
            // Uncomment below to auto-migrate (be careful in production!)
            // await context.Database.MigrateAsync();
        }
        
        // Seed catalog data (Languages, Brands, Categories, Products)
        await ApplicationDbContextSeed.SeedAsync(context, logger);
        
        // Seed Identity data (Roles, Permissions, Admin user)
        var userManager = services.GetRequiredService<UserManager<ApplicationUser>>();
        var roleManager = services.GetRequiredService<RoleManager<ApplicationRole>>();
        await IdentitySeeder.SeedAsync(context, userManager, roleManager, logger);
    }
    catch (Exception ex)
    {
        var logger = services.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex, "An error occurred while seeding the database.");
    }
}

// Global exception handling (must be first)
app.UseExceptionHandling();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "E-Commerce API v1");
    });
}

app.UseHttpsRedirection();
app.UseCors();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

// Map SignalR hubs
app.MapHub<NotificationHub>("/hubs/notifications");

app.Run();
