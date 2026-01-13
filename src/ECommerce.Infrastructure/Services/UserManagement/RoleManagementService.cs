// ==============================================
// Role Management Service Implementation
// ==============================================

using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ECommerce.Application.DTOs.UserManagement;
using ECommerce.Application.Interfaces;
using ECommerce.Domain.Entities.Auth;
using ECommerce.Infrastructure.Persistence;

namespace ECommerce.Infrastructure.Services.UserManagement;

/// <summary>
/// Service for managing roles and their permissions.
/// </summary>
public class RoleManagementService : IRoleManagementService
{
    private readonly RoleManager<ApplicationRole> _roleManager;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly ApplicationDbContext _context;

    public RoleManagementService(
        RoleManager<ApplicationRole> roleManager,
        UserManager<ApplicationUser> userManager,
        ApplicationDbContext context)
    {
        _roleManager = roleManager;
        _userManager = userManager;
        _context = context;
    }

    public async Task<IList<RoleListDto>> GetAllRolesAsync()
    {
        var roles = await _roleManager.Roles
            .Include(r => r.RolePermissions)
            .OrderBy(r => r.Name)
            .ToListAsync();

        var result = new List<RoleListDto>();
        foreach (var role in roles)
        {
            var usersInRole = await _userManager.GetUsersInRoleAsync(role.Name!);
            result.Add(new RoleListDto
            {
                Id = role.Id,
                Name = role.Name ?? string.Empty,
                Description = role.Description,
                UsersCount = usersInRole.Count,
                PermissionsCount = role.RolePermissions.Count
            });
        }

        return result;
    }

    public async Task<RoleDto?> GetRoleByIdAsync(string roleId)
    {
        var role = await _roleManager.Roles
            .Include(r => r.RolePermissions)
                .ThenInclude(rp => rp.Permission)
            .FirstOrDefaultAsync(r => r.Id == roleId);

        if (role == null) return null;

        return await MapToRoleDto(role);
    }

    public async Task<RoleDto?> GetRoleByNameAsync(string roleName)
    {
        var role = await _roleManager.Roles
            .Include(r => r.RolePermissions)
                .ThenInclude(rp => rp.Permission)
            .FirstOrDefaultAsync(r => r.Name == roleName);

        if (role == null) return null;

        return await MapToRoleDto(role);
    }

    public async Task<RoleDto> CreateRoleAsync(CreateRoleDto dto)
    {
        var existingRole = await _roleManager.FindByNameAsync(dto.Name);
        if (existingRole != null)
        {
            throw new InvalidOperationException($"Role '{dto.Name}' already exists.");
        }

        var role = new ApplicationRole
        {
            Name = dto.Name,
            Description = dto.Description,
            CreatedAt = DateTime.UtcNow
        };

        var result = await _roleManager.CreateAsync(role);
        if (!result.Succeeded)
        {
            var errors = string.Join(", ", result.Errors.Select(e => e.Description));
            throw new InvalidOperationException($"Failed to create role: {errors}");
        }

        // Assign permissions if provided
        if (dto.PermissionIds.Any())
        {
            await AssignPermissionsInternalAsync(role, dto.PermissionIds);
        }

        return await MapToRoleDto(role);
    }

    public async Task<RoleDto> UpdateRoleAsync(string roleId, UpdateRoleDto dto)
    {
        var role = await _roleManager.FindByIdAsync(roleId);
        if (role == null)
        {
            throw new InvalidOperationException($"Role with ID '{roleId}' not found.");
        }

        if (!string.IsNullOrWhiteSpace(dto.Name))
            role.Name = dto.Name;

        if (dto.Description != null)
            role.Description = dto.Description;

        var result = await _roleManager.UpdateAsync(role);
        if (!result.Succeeded)
        {
            var errors = string.Join(", ", result.Errors.Select(e => e.Description));
            throw new InvalidOperationException($"Failed to update role: {errors}");
        }

        return await MapToRoleDto(role);
    }

    public async Task<bool> DeleteRoleAsync(string roleId)
    {
        var role = await _roleManager.FindByIdAsync(roleId);
        if (role == null) return false;

        // Check if it's a protected role
        if (role.Name == "SuperAdmin" || role.Name == "Admin")
        {
            throw new InvalidOperationException($"Cannot delete protected role '{role.Name}'.");
        }

        // Remove role permissions first
        var rolePermissions = await _context.Set<RolePermission>()
            .Where(rp => rp.RoleId == roleId)
            .ToListAsync();
        
        _context.Set<RolePermission>().RemoveRange(rolePermissions);
        await _context.SaveChangesAsync();

        var result = await _roleManager.DeleteAsync(role);
        return result.Succeeded;
    }

    public async Task<RoleDto> AssignPermissionsToRoleAsync(string roleId, AssignPermissionsToRoleDto dto)
    {
        var role = await _roleManager.Roles
            .Include(r => r.RolePermissions)
            .FirstOrDefaultAsync(r => r.Id == roleId);

        if (role == null)
        {
            throw new InvalidOperationException($"Role with ID '{roleId}' not found.");
        }

        // Remove existing permissions
        var existingPermissions = await _context.Set<RolePermission>()
            .Where(rp => rp.RoleId == roleId)
            .ToListAsync();
        
        _context.Set<RolePermission>().RemoveRange(existingPermissions);
        await _context.SaveChangesAsync();

        // Assign new permissions
        await AssignPermissionsInternalAsync(role, dto.PermissionIds);

        // Reload role with permissions
        role = await _roleManager.Roles
            .Include(r => r.RolePermissions)
                .ThenInclude(rp => rp.Permission)
            .FirstOrDefaultAsync(r => r.Id == roleId);

        return await MapToRoleDto(role!);
    }

    public async Task<IList<PermissionDto>> GetRolePermissionsAsync(string roleId)
    {
        var permissions = await _context.Set<RolePermission>()
            .Where(rp => rp.RoleId == roleId)
            .Include(rp => rp.Permission)
            .Select(rp => new PermissionDto
            {
                Id = rp.Permission.Id,
                Name = rp.Permission.Name,
                Description = rp.Permission.Description,
                Module = rp.Permission.Module
            })
            .ToListAsync();

        return permissions;
    }

    public async Task<IList<UserListDto>> GetUsersInRoleAsync(string roleId)
    {
        var role = await _roleManager.FindByIdAsync(roleId);
        if (role == null) return new List<UserListDto>();

        var users = await _userManager.GetUsersInRoleAsync(role.Name!);
        
        return users.Select(u => new UserListDto
        {
            Id = u.Id,
            Email = u.Email ?? string.Empty,
            FullName = u.FullName,
            ProfileImageUrl = u.ProfileImageUrl,
            IsActive = u.IsActive,
            CreatedAt = u.CreatedAt,
            LastLoginAt = u.LastLoginAt,
            Roles = new List<string> { role.Name! }
        }).ToList();
    }

    private async Task AssignPermissionsInternalAsync(ApplicationRole role, IList<int> permissionIds)
    {
        var permissions = await _context.Set<Permission>()
            .Where(p => permissionIds.Contains(p.Id))
            .ToListAsync();

        foreach (var permission in permissions)
        {
            _context.Set<RolePermission>().Add(new RolePermission
            {
                RoleId = role.Id,
                PermissionId = permission.Id
            });
        }

        await _context.SaveChangesAsync();
    }

    private async Task<RoleDto> MapToRoleDto(ApplicationRole role)
    {
        var usersInRole = await _userManager.GetUsersInRoleAsync(role.Name!);
        
        var permissions = role.RolePermissions.Select(rp => new PermissionDto
        {
            Id = rp.Permission.Id,
            Name = rp.Permission.Name,
            Description = rp.Permission.Description,
            Module = rp.Permission.Module
        }).ToList();

        return new RoleDto
        {
            Id = role.Id,
            Name = role.Name ?? string.Empty,
            Description = role.Description,
            CreatedAt = role.CreatedAt,
            UsersCount = usersInRole.Count,
            Permissions = permissions
        };
    }
}
