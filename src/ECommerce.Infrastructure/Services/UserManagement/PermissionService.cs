// ==============================================
// Permission Service Implementation
// ==============================================

using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ECommerce.Application.DTOs.UserManagement;
using ECommerce.Application.Interfaces;
using ECommerce.Domain.Entities.Auth;
using ECommerce.Infrastructure.Persistence;

namespace ECommerce.Infrastructure.Services.UserManagement;

/// <summary>
/// Service for managing permissions.
/// </summary>
public class PermissionService : IPermissionService
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly ApplicationDbContext _context;

    public PermissionService(
        UserManager<ApplicationUser> userManager,
        ApplicationDbContext context)
    {
        _userManager = userManager;
        _context = context;
    }

    public async Task<IList<PermissionDto>> GetAllPermissionsAsync()
    {
        return await _context.Set<Permission>()
            .OrderBy(p => p.Module)
            .ThenBy(p => p.Name)
            .Select(p => new PermissionDto
            {
                Id = p.Id,
                Name = p.Name,
                Description = p.Description,
                Module = p.Module
            })
            .ToListAsync();
    }

    public async Task<IList<PermissionGroupDto>> GetPermissionsGroupedAsync()
    {
        var permissions = await _context.Set<Permission>()
            .OrderBy(p => p.Module)
            .ThenBy(p => p.Name)
            .ToListAsync();

        return permissions
            .GroupBy(p => p.Module)
            .Select(g => new PermissionGroupDto
            {
                Module = g.Key,
                Permissions = g.Select(p => new PermissionDto
                {
                    Id = p.Id,
                    Name = p.Name,
                    Description = p.Description,
                    Module = p.Module
                }).ToList()
            })
            .ToList();
    }

    public async Task<PermissionDto?> GetPermissionByIdAsync(int permissionId)
    {
        var permission = await _context.Set<Permission>()
            .FirstOrDefaultAsync(p => p.Id == permissionId);

        if (permission == null) return null;

        return new PermissionDto
        {
            Id = permission.Id,
            Name = permission.Name,
            Description = permission.Description,
            Module = permission.Module
        };
    }

    public async Task<PermissionDto?> GetPermissionByNameAsync(string permissionName)
    {
        var permission = await _context.Set<Permission>()
            .FirstOrDefaultAsync(p => p.Name == permissionName);

        if (permission == null) return null;

        return new PermissionDto
        {
            Id = permission.Id,
            Name = permission.Name,
            Description = permission.Description,
            Module = permission.Module
        };
    }

    public async Task<bool> UserHasPermissionAsync(string userId, string permissionName)
    {
        var user = await _userManager.FindByIdAsync(userId);
        if (user == null) return false;

        var roles = await _userManager.GetRolesAsync(user);
        
        return await _context.Set<RolePermission>()
            .Include(rp => rp.Permission)
            .Include(rp => rp.Role)
            .AnyAsync(rp => roles.Contains(rp.Role.Name!) && rp.Permission.Name == permissionName);
    }

    public async Task<IList<string>> GetUserPermissionsAsync(string userId)
    {
        var user = await _userManager.FindByIdAsync(userId);
        if (user == null) return new List<string>();

        var roles = await _userManager.GetRolesAsync(user);
        
        return await _context.Set<RolePermission>()
            .Include(rp => rp.Permission)
            .Include(rp => rp.Role)
            .Where(rp => roles.Contains(rp.Role.Name!))
            .Select(rp => rp.Permission.Name)
            .Distinct()
            .ToListAsync();
    }
}
