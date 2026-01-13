// ==============================================
// User Management DTOs
// ==============================================

using System.ComponentModel.DataAnnotations;

namespace ECommerce.Application.DTOs.UserManagement;

#region User DTOs

/// <summary>
/// DTO for displaying user information.
/// </summary>
public record UserDto
{
    public string Id { get; init; } = string.Empty;
    public string Email { get; init; } = string.Empty;
    public string FirstName { get; init; } = string.Empty;
    public string LastName { get; init; } = string.Empty;
    public string FullName => $"{FirstName} {LastName}".Trim();
    public string? ProfileImageUrl { get; init; }
    public bool IsActive { get; init; }
    public bool EmailConfirmed { get; init; }
    public DateTime CreatedAt { get; init; }
    public DateTime? LastLoginAt { get; init; }
    public IList<string> Roles { get; init; } = new List<string>();
    public IList<string> Permissions { get; init; } = new List<string>();
}

/// <summary>
/// DTO for displaying user in a list (minimal data).
/// </summary>
public record UserListDto
{
    public string Id { get; init; } = string.Empty;
    public string Email { get; init; } = string.Empty;
    public string FullName { get; init; } = string.Empty;
    public string? ProfileImageUrl { get; init; }
    public bool IsActive { get; init; }
    public DateTime CreatedAt { get; init; }
    public DateTime? LastLoginAt { get; init; }
    public IList<string> Roles { get; init; } = new List<string>();
}

/// <summary>
/// DTO for creating a new user.
/// </summary>
public record CreateUserDto
{
    [Required]
    [EmailAddress]
    public string Email { get; init; } = string.Empty;

    [Required]
    [MinLength(6)]
    public string Password { get; init; } = string.Empty;

    [Required]
    [MaxLength(50)]
    public string FirstName { get; init; } = string.Empty;

    [Required]
    [MaxLength(50)]
    public string LastName { get; init; } = string.Empty;

    public string? ProfileImageUrl { get; init; }

    /// <summary>
    /// Role names to assign to the user.
    /// </summary>
    public IList<string> Roles { get; init; } = new List<string>();
}

/// <summary>
/// DTO for updating an existing user.
/// </summary>
public record UpdateUserDto
{
    [MaxLength(50)]
    public string? FirstName { get; init; }

    [MaxLength(50)]
    public string? LastName { get; init; }

    [EmailAddress]
    public string? Email { get; init; }

    public string? ProfileImageUrl { get; init; }
    
    public bool? IsActive { get; init; }
}

/// <summary>
/// DTO for assigning roles to a user.
/// </summary>
public record AssignRolesToUserDto
{
    [Required]
    public IList<string> Roles { get; init; } = new List<string>();
}

/// <summary>
/// DTO for changing user password (admin action).
/// </summary>
public record ResetUserPasswordDto
{
    [Required]
    [MinLength(6)]
    public string NewPassword { get; init; } = string.Empty;
}

#endregion

#region Role DTOs

/// <summary>
/// DTO for displaying role information.
/// </summary>
public record RoleDto
{
    public string Id { get; init; } = string.Empty;
    public string Name { get; init; } = string.Empty;
    public string? Description { get; init; }
    public DateTime CreatedAt { get; init; }
    public int UsersCount { get; init; }
    public IList<PermissionDto> Permissions { get; init; } = new List<PermissionDto>();
}

/// <summary>
/// DTO for displaying role in a list (minimal data).
/// </summary>
public record RoleListDto
{
    public string Id { get; init; } = string.Empty;
    public string Name { get; init; } = string.Empty;
    public string? Description { get; init; }
    public int UsersCount { get; init; }
    public int PermissionsCount { get; init; }
}

/// <summary>
/// DTO for creating a new role.
/// </summary>
public record CreateRoleDto
{
    [Required]
    [MaxLength(100)]
    public string Name { get; init; } = string.Empty;

    [MaxLength(500)]
    public string? Description { get; init; }

    /// <summary>
    /// Permission IDs to assign to this role.
    /// </summary>
    public IList<int> PermissionIds { get; init; } = new List<int>();
}

/// <summary>
/// DTO for updating an existing role.
/// </summary>
public record UpdateRoleDto
{
    [MaxLength(100)]
    public string? Name { get; init; }

    [MaxLength(500)]
    public string? Description { get; init; }
}

/// <summary>
/// DTO for assigning permissions to a role.
/// </summary>
public record AssignPermissionsToRoleDto
{
    [Required]
    public IList<int> PermissionIds { get; init; } = new List<int>();
}

#endregion

#region Permission DTOs

/// <summary>
/// DTO for displaying permission information.
/// </summary>
public record PermissionDto
{
    public int Id { get; init; }
    public string Name { get; init; } = string.Empty;
    public string? Description { get; init; }
    public string Module { get; init; } = string.Empty;
}

/// <summary>
/// DTO for displaying permissions grouped by module.
/// </summary>
public record PermissionGroupDto
{
    public string Module { get; init; } = string.Empty;
    public IList<PermissionDto> Permissions { get; init; } = new List<PermissionDto>();
}

#endregion
