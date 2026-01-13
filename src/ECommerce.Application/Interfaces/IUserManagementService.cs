// ==============================================
// User Management Service Interface
// ==============================================

using ECommerce.Application.DTOs.UserManagement;

namespace ECommerce.Application.Interfaces;

/// <summary>
/// Service for managing users (CRUD, role assignment).
/// </summary>
public interface IUserManagementService
{
    /// <summary>
    /// Get all users with pagination.
    /// </summary>
    Task<IList<UserListDto>> GetAllUsersAsync(int page = 1, int pageSize = 20, string? searchTerm = null);

    /// <summary>
    /// Get a user by ID with full details.
    /// </summary>
    Task<UserDto?> GetUserByIdAsync(string userId);

    /// <summary>
    /// Get a user by email.
    /// </summary>
    Task<UserDto?> GetUserByEmailAsync(string email);

    /// <summary>
    /// Create a new user.
    /// </summary>
    Task<UserDto> CreateUserAsync(CreateUserDto dto);

    /// <summary>
    /// Update an existing user.
    /// </summary>
    Task<UserDto> UpdateUserAsync(string userId, UpdateUserDto dto);

    /// <summary>
    /// Delete a user.
    /// </summary>
    Task<bool> DeleteUserAsync(string userId);

    /// <summary>
    /// Assign roles to a user (replaces existing roles).
    /// </summary>
    Task<UserDto> AssignRolesToUserAsync(string userId, AssignRolesToUserDto dto);

    /// <summary>
    /// Reset a user's password (admin action).
    /// </summary>
    Task<bool> ResetUserPasswordAsync(string userId, ResetUserPasswordDto dto);

    /// <summary>
    /// Get all roles assigned to a user.
    /// </summary>
    Task<IList<string>> GetUserRolesAsync(string userId);

    /// <summary>
    /// Get all permissions for a user (from all assigned roles).
    /// </summary>
    Task<IList<string>> GetUserPermissionsAsync(string userId);

    /// <summary>
    /// Toggle user active status.
    /// </summary>
    Task<bool> ToggleUserStatusAsync(string userId);
}
