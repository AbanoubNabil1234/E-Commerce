// ==============================================
// Permission Service Interface
// ==============================================

using ECommerce.Application.DTOs.UserManagement;

namespace ECommerce.Application.Interfaces;

/// <summary>
/// Service for managing permissions.
/// </summary>
public interface IPermissionService
{
    /// <summary>
    /// Get all permissions.
    /// </summary>
    Task<IList<PermissionDto>> GetAllPermissionsAsync();

    /// <summary>
    /// Get all permissions grouped by module.
    /// </summary>
    Task<IList<PermissionGroupDto>> GetPermissionsGroupedAsync();

    /// <summary>
    /// Get a permission by ID.
    /// </summary>
    Task<PermissionDto?> GetPermissionByIdAsync(int permissionId);

    /// <summary>
    /// Get a permission by name.
    /// </summary>
    Task<PermissionDto?> GetPermissionByNameAsync(string permissionName);

    /// <summary>
    /// Check if a user has a specific permission.
    /// </summary>
    Task<bool> UserHasPermissionAsync(string userId, string permissionName);

    /// <summary>
    /// Get all permissions for a user (aggregated from all roles).
    /// </summary>
    Task<IList<string>> GetUserPermissionsAsync(string userId);
}
