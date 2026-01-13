namespace ECommerce.Application.DTOs.Auth;

/// <summary>
/// Request DTO for user registration.
/// </summary>
public record RegisterDto(
    string Email,
    string Password,
    string FirstName,
    string LastName
);

/// <summary>
/// Request DTO for user login.
/// </summary>
public record LoginDto(
    string Email,
    string Password
);

/// <summary>
/// Response DTO after successful authentication (login/register).
/// Contains JWT token and user information.
/// </summary>
public record AuthResponseDto(
    string UserId,
    string Email,
    string FullName,
    IList<string> Roles,
    IList<string> Permissions,
    string AccessToken,
    DateTime ExpiresAt
);

/// <summary>
/// DTO for current authenticated user information.
/// </summary>
public record UserDto(
    string Id,
    string Email,
    string FirstName,
    string LastName,
    string FullName,
    string? ProfileImageUrl,
    IList<string> Roles,
    IList<string> Permissions,
    DateTime CreatedAt,
    DateTime? LastLoginAt
);

/// <summary>
/// DTO for permission information.
/// </summary>
public record PermissionDto(
    int Id,
    string Name,
    string Module,
    string? Description
);

/// <summary>
/// DTO for role with its permissions.
/// </summary>
public record RoleWithPermissionsDto(
    string Id,
    string Name,
    string? Description,
    IList<PermissionDto> Permissions
);
