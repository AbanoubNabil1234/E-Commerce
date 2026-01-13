// ==============================================
// Admin Seeder Controller (Development Only)
// For reseeding permissions
// ==============================================

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ECommerce.Domain.Constants;
using ECommerce.Domain.Entities.Auth;
using ECommerce.Infrastructure.Persistence;

namespace ECommerce.API.Controllers;

/// <summary>
/// Development controller for reseeding admin permissions.
/// Remove in production!
/// </summary>
[ApiController]
[Route("api/[controller]")]
[Authorize]
public class SeedController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly RoleManager<ApplicationRole> _roleManager;
    private readonly UserManager<ApplicationUser> _userManager;

    public SeedController(
        ApplicationDbContext context,
        RoleManager<ApplicationRole> roleManager,
        UserManager<ApplicationUser> userManager)
    {
        _context = context;
        _roleManager = roleManager;
        _userManager = userManager;
    }

    /// <summary>
    /// Reseed all permissions and assign to Admin role.
    /// </summary>
    [HttpPost("permissions")]
    public async Task<IActionResult> ReseedPermissions()
    {
        // 1. Seed any missing permissions
        var existingPermissions = await _context.Permissions.Select(p => p.Name).ToListAsync();
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
            await _context.Permissions.AddRangeAsync(permissionsToAdd);
            await _context.SaveChangesAsync();
        }

        // 2. Get Admin role
        var adminRole = await _roleManager.FindByNameAsync("Admin");
        if (adminRole == null)
        {
            return BadRequest("Admin role not found");
        }

        // 3. Get all permissions
        var allPermissions = await _context.Permissions.ToListAsync();

        // 4. Get existing admin role permissions
        var existingMappings = await _context.RolePermissions
            .Where(rp => rp.RoleId == adminRole.Id)
            .Select(rp => rp.PermissionId)
            .ToListAsync();

        // 5. Add missing permissions to Admin role
        var mappingsToAdd = new List<RolePermission>();
        foreach (var permission in allPermissions)
        {
            if (!existingMappings.Contains(permission.Id))
            {
                mappingsToAdd.Add(new RolePermission
                {
                    RoleId = adminRole.Id,
                    PermissionId = permission.Id
                });
            }
        }

        if (mappingsToAdd.Any())
        {
            await _context.RolePermissions.AddRangeAsync(mappingsToAdd);
            await _context.SaveChangesAsync();
        }

        // 6. Ensure admin user has Admin role
        var adminUser = await _userManager.FindByEmailAsync("admin@ecommerce.local");
        if (adminUser != null && !await _userManager.IsInRoleAsync(adminUser, "Admin"))
        {
            await _userManager.AddToRoleAsync(adminUser, "Admin");
        }

        return Ok(new
        {
            message = "Permissions reseeded successfully",
            newPermissions = permissionsToAdd.Count,
            newMappings = mappingsToAdd.Count,
            totalPermissions = allPermissions.Count
        });
    }

    /// <summary>
    /// Get current user permissions for debugging.
    /// </summary>
    [HttpGet("my-permissions")]
    public async Task<IActionResult> GetMyPermissions()
    {
        var userId = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
        if (string.IsNullOrEmpty(userId))
        {
            return Unauthorized();
        }

        var user = await _userManager.FindByIdAsync(userId);
        if (user == null)
        {
            return NotFound("User not found");
        }

        var roles = await _userManager.GetRolesAsync(user);
        
        var permissions = new List<string>();
        foreach (var roleName in roles)
        {
            var role = await _roleManager.FindByNameAsync(roleName);
            if (role != null)
            {
                var rolePermissions = await _context.RolePermissions
                    .Where(rp => rp.RoleId == role.Id)
                    .Include(rp => rp.Permission)
                    .Select(rp => rp.Permission.Name)
                    .ToListAsync();
                permissions.AddRange(rolePermissions);
            }
        }

        return Ok(new
        {
            email = user.Email,
            roles = roles,
            permissions = permissions.Distinct().OrderBy(p => p)
        });
    }
}
