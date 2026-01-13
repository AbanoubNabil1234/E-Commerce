using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ECommerce.Application.DTOs.Auth;
using ECommerce.Application.Interfaces;

namespace ECommerce.API.Controllers.Auth;

/// <summary>
/// Authentication controller for user registration, login, and profile access.
/// </summary>
[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    /// <summary>
    /// Register a new user account.
    /// </summary>
    /// <param name="dto">Registration details</param>
    /// <returns>JWT token and user information</returns>
    [HttpPost("register")]
    [AllowAnonymous]
    [ProducesResponseType(typeof(AuthResponseDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<AuthResponseDto>> Register([FromBody] RegisterDto dto)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        try
        {
            var result = await _authService.RegisterAsync(dto);
            return Ok(result);
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new ProblemDetails
            {
                Title = "Registration Failed",
                Detail = ex.Message,
                Status = StatusCodes.Status400BadRequest
            });
        }
    }

    /// <summary>
    /// Authenticate a user and receive a JWT token.
    /// </summary>
    /// <param name="dto">Login credentials</param>
    /// <returns>JWT token and user information</returns>
    [HttpPost("login")]
    [AllowAnonymous]
    [ProducesResponseType(typeof(AuthResponseDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status401Unauthorized)]
    public async Task<ActionResult<AuthResponseDto>> Login([FromBody] LoginDto dto)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        try
        {
            var result = await _authService.LoginAsync(dto);
            return Ok(result);
        }
        catch (InvalidOperationException ex)
        {
            return Unauthorized(new ProblemDetails
            {
                Title = "Authentication Failed",
                Detail = ex.Message,
                Status = StatusCodes.Status401Unauthorized
            });
        }
    }

    /// <summary>
    /// Get the current authenticated user's profile.
    /// </summary>
    /// <returns>User profile information</returns>
    [HttpGet("me")]
    [Authorize]
    [ProducesResponseType(typeof(UserDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    public async Task<ActionResult<UserDto>> GetCurrentUser()
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (string.IsNullOrEmpty(userId))
        {
            return Unauthorized();
        }

        try
        {
            var result = await _authService.GetCurrentUserAsync(userId);
            return Ok(result);
        }
        catch (InvalidOperationException ex)
        {
            return NotFound(new ProblemDetails
            {
                Title = "User Not Found",
                Detail = ex.Message,
                Status = StatusCodes.Status404NotFound
            });
        }
    }

    /// <summary>
    /// Get all permissions for the current authenticated user.
    /// </summary>
    /// <returns>List of permission names</returns>
    [HttpGet("permissions")]
    [Authorize]
    [ProducesResponseType(typeof(IList<string>), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    public async Task<ActionResult<IList<string>>> GetPermissions()
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (string.IsNullOrEmpty(userId))
        {
            return Unauthorized();
        }

        var permissions = await _authService.GetUserPermissionsAsync(userId);
        return Ok(permissions);
    }
}
