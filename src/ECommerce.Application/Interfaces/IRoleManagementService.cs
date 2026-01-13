// ==============================================
// Role Management Service Interface
// ==============================================

using ECommerce.Application.DTOs.UserManagement;

namespace ECommerce.Application.Interfaces;

/// <summary>
/// Service for managing roles and their permissions.
/// </summary>
public interface IRoleManagementService
{
    /// <summary>
    /// Get all roles.
    /// </summary>
    Task<IList<RoleListDto>> GetAllRolesAsync();

    /// <summary>
    /// Get a role by ID with permissions.
    /// </summary>
    Task<RoleDto?> GetRoleByIdAsync(string roleId);

    /// <summary>
    /// Get a role by name.
    /// </summary>
    Task<RoleDto?> GetRoleByNameAsync(string roleName);

    /// <summary>
    /// Create a new role.
    /// </summary>
    Task<RoleDto> CreateRoleAsync(CreateRoleDto dto);

    /// <summary>
    /// Update an existing role.
    /// </summary>
    Task<RoleDto> UpdateRoleAsync(string roleId, UpdateRoleDto dto);

    /// <summary>
    /// Delete a role.
    /// </summary>
    Task<bool> DeleteRoleAsync(string roleId);

    /// <summary>
    /// Assign permissions to a role (replaces existing permissions).
    /// </summary>
    Task<RoleDto> AssignPermissionsToRoleAsync(string roleId, AssignPermissionsToRoleDto dto);

    /// <summary>
    /// Get all permissions for a role.
    /// </summary>
    Task<IList<PermissionDto>> GetRolePermissionsAsync(string roleId);

    /// <summary>
    /// Get users assigned to a role.
    /// </summary>
    Task<IList<UserListDto>> GetUsersInRoleAsync(string roleId);
}
