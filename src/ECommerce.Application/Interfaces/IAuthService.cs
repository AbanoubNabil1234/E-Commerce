using ECommerce.Application.DTOs.Auth;

namespace ECommerce.Application.Interfaces;

/// <summary>
/// Service interface for authentication operations.
/// </summary>
public interface IAuthService
{
    /// <summary>
    /// Registers a new user with the default Customer role.
    /// </summary>
    Task<AuthResponseDto> RegisterAsync(RegisterDto dto, CancellationToken cancellationToken = default);
    
    /// <summary>
    /// Authenticates a user and returns a JWT token.
    /// </summary>
    Task<AuthResponseDto> LoginAsync(LoginDto dto, CancellationToken cancellationToken = default);
    
    /// <summary>
    /// Gets the current authenticated user's information.
    /// </summary>
    Task<UserDto> GetCurrentUserAsync(string userId, CancellationToken cancellationToken = default);
    
    /// <summary>
    /// Gets all permissions for a user based on their roles.
    /// </summary>
    Task<IList<string>> GetUserPermissionsAsync(string userId, CancellationToken cancellationToken = default);
}
