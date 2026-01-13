using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ECommerce.Domain.Constants;
using ECommerce.Domain.Entities.Auth;
using ECommerce.Infrastructure.Persistence;

namespace ECommerce.Infrastructure.Data;

/// <summary>
/// Seeds Identity-related data: Roles, Permissions, RolePermissions, and Admin user.
/// Requires UserManager and RoleManager from DI.
/// </summary>
public static class IdentitySeeder
{
    /// <summary>
    /// Seeds all Identity-related data.
    /// Safe to run multiple times - only inserts if data doesn't exist.
    /// </summary>
    public static async Task SeedAsync(
        ApplicationDbContext context,
        UserManager<ApplicationUser> userManager,
        RoleManager<ApplicationRole> roleManager,
        ILogger? logger = null)
    {
        try
        {
            await SeedRolesAsync(roleManager, logger);
            await SeedPermissionsAsync(context, logger);
            await SeedRolePermissionsAsync(context, roleManager, logger);
            await SeedAdminUserAsync(userManager, logger);

            logger?.LogInformation("Identity seeding completed successfully.");
        }
        catch (Exception ex)
        {
            logger?.LogError(ex, "An error occurred while seeding Identity data.");
            throw;
        }
    }

    /// <summary>
    /// Seeds application roles: Admin, Staff, Customer
    /// </summary>
    private static async Task SeedRolesAsync(
        RoleManager<ApplicationRole> roleManager,
        ILogger? logger)
    {
        var roles = new[]
        {
            new ApplicationRole { Name = "Admin", Description = "Full system access" },
            new ApplicationRole { Name = "Staff", Description = "Inventory and order management" },
            new ApplicationRole { Name = "Customer", Description = "Customer access" }
        };

        foreach (var role in roles)
        {
            if (!await roleManager.RoleExistsAsync(role.Name!))
            {
                var result = await roleManager.CreateAsync(role);
                if (result.Succeeded)
                {
                    logger?.LogInformation("Created role: {RoleName}", role.Name);
                }
                else
                {
                    logger?.LogWarning("Failed to create role {RoleName}: {Errors}",
                        role.Name, string.Join(", ", result.Errors.Select(e => e.Description)));
                }
            }
            else
            {
                logger?.LogDebug("Role {RoleName} already exists, skipping.", role.Name);
            }
        }
    }

    /// <summary>
    /// Seeds all permissions defined in Permissions.GetAll()
    /// </summary>
    private static async Task SeedPermissionsAsync(
        ApplicationDbContext context,
        ILogger? logger)
    {
        var existingPermissions = await context.Permissions
            .Select(p => p.Name)
            .ToListAsync();

        var permissionsToAdd = new List<Permission>();

        foreach (var permDef in Permissions.GetAll())
        {
            if (!existingPermissions.Contains(permDef.Name))
            {
                permissionsToAdd.Add(new Permission
                {
                    Name = permDef.Name,
                    Module = permDef.Module,
                    Description = permDef.Description
                });
            }
        }

        if (permissionsToAdd.Any())
        {
            await context.Permissions.AddRangeAsync(permissionsToAdd);
            await context.SaveChangesAsync();
            logger?.LogInformation("Seeded {Count} permissions.", permissionsToAdd.Count);
        }
        else
        {
            logger?.LogDebug("All permissions already seeded.");
        }
    }

    /// <summary>
    /// Seeds RolePermission mappings for each role.
    /// </summary>
    private static async Task SeedRolePermissionsAsync(
        ApplicationDbContext context,
        RoleManager<ApplicationRole> roleManager,
        ILogger? logger)
    {
        // Get all permissions from DB
        var allPermissions = await context.Permissions.ToListAsync();
        var permissionsByName = allPermissions.ToDictionary(p => p.Name);

        // Admin Role - All permissions
        await AssignPermissionsToRoleAsync(
            context, roleManager, "Admin",
            Permissions.GetAdminPermissions(),
            permissionsByName,
            logger);

        // Staff Role - Limited permissions
        await AssignPermissionsToRoleAsync(
            context, roleManager, "Staff",
            Permissions.GetStaffPermissions(),
            permissionsByName,
            logger);

        // Customer Role - Minimal permissions
        await AssignPermissionsToRoleAsync(
            context, roleManager, "Customer",
            Permissions.GetCustomerPermissions(),
            permissionsByName,
            logger);
    }

    private static async Task AssignPermissionsToRoleAsync(
        ApplicationDbContext context,
        RoleManager<ApplicationRole> roleManager,
        string roleName,
        IEnumerable<string> permissionNames,
        IDictionary<string, Permission> permissionsByName,
        ILogger? logger)
    {
        var role = await roleManager.FindByNameAsync(roleName);
        if (role == null)
        {
            logger?.LogWarning("Role {RoleName} not found, skipping permission assignment.", roleName);
            return;
        }

        var existingMappings = await context.RolePermissions
            .Where(rp => rp.RoleId == role.Id)
            .Select(rp => rp.PermissionId)
            .ToListAsync();

        var mappingsToAdd = new List<RolePermission>();

        foreach (var permName in permissionNames)
        {
            if (permissionsByName.TryGetValue(permName, out var permission))
            {
                if (!existingMappings.Contains(permission.Id))
                {
                    mappingsToAdd.Add(new RolePermission
                    {
                        RoleId = role.Id,
                        PermissionId = permission.Id
                    });
                }
            }
            else
            {
                logger?.LogWarning("Permission {PermissionName} not found in database.", permName);
            }
        }

        if (mappingsToAdd.Any())
        {
            await context.RolePermissions.AddRangeAsync(mappingsToAdd);
            await context.SaveChangesAsync();
            logger?.LogInformation("Assigned {Count} permissions to role {RoleName}.",
                mappingsToAdd.Count, roleName);
        }
    }

    /// <summary>
    /// Seeds the default Admin user.
    /// </summary>
    private static async Task SeedAdminUserAsync(
        UserManager<ApplicationUser> userManager,
        ILogger? logger)
    {
        const string adminEmail = "admin@ecommerce.local";
        const string adminPassword = "Admin@123!";

        var existingAdmin = await userManager.FindByEmailAsync(adminEmail);
        if (existingAdmin != null)
        {
            logger?.LogDebug("Admin user already exists, skipping.");
            return;
        }

        var adminUser = new ApplicationUser
        {
            UserName = adminEmail,
            Email = adminEmail,
            FirstName = "System",
            LastName = "Administrator",
            EmailConfirmed = true,
            IsActive = true
        };

        var result = await userManager.CreateAsync(adminUser, adminPassword);
        if (result.Succeeded)
        {
            await userManager.AddToRoleAsync(adminUser, "Admin");
            logger?.LogInformation("Created admin user: {Email}", adminEmail);
        }
        else
        {
            logger?.LogError("Failed to create admin user: {Errors}",
                string.Join(", ", result.Errors.Select(e => e.Description)));
        }
    }
}
