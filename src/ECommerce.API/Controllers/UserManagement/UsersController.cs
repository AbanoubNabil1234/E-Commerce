// ==============================================
// Users Controller
// User Management API Endpoints
// ==============================================

using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ECommerce.Application.DTOs.UserManagement;
using ECommerce.Application.Interfaces;
using ECommerce.Domain.Constants;

namespace ECommerce.API.Controllers.UserManagement;

/// <summary>
/// API controller for user management operations.
/// </summary>
[ApiController]
[Route("api/[controller]")]
[Authorize]
public class UsersController : ControllerBase
{
    private readonly IUserManagementService _userService;

    public UsersController(IUserManagementService userService)
    {
        _userService = userService;
    }

    /// <summary>
    /// Get all users with optional pagination and search.
    /// </summary>
    [HttpGet]
    [Authorize(Policy = Permissions.UsersView)]
    [ProducesResponseType(typeof(IList<UserListDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<IList<UserListDto>>> GetUsers(
        [FromQuery] int page = 1,
        [FromQuery] int pageSize = 20,
        [FromQuery] string? search = null)
    {
        var users = await _userService.GetAllUsersAsync(page, pageSize, search);
        return Ok(users);
    }

    /// <summary>
    /// Get a user by ID.
    /// </summary>
    [HttpGet("{id}")]
    [Authorize(Policy = Permissions.UsersView)]
    [ProducesResponseType(typeof(UserDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<UserDto>> GetUser(string id)
    {
        var user = await _userService.GetUserByIdAsync(id);
        if (user == null)
        {
            return NotFound(new ProblemDetails
            {
                Title = "User not found",
                Detail = $"User with ID '{id}' was not found.",
                Status = StatusCodes.Status404NotFound
            });
        }
        return Ok(user);
    }

    /// <summary>
    /// Create a new user.
    /// </summary>
    [HttpPost]
    [Authorize(Policy = Permissions.UsersCreate)]
    [ProducesResponseType(typeof(UserDto), StatusCodes.Status201Created)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<UserDto>> CreateUser([FromBody] CreateUserDto dto)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        try
        {
            var user = await _userService.CreateUserAsync(dto);
            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new ProblemDetails
            {
                Title = "Failed to create user",
                Detail = ex.Message,
                Status = StatusCodes.Status400BadRequest
            });
        }
    }

    /// <summary>
    /// Update an existing user.
    /// </summary>
    [HttpPut("{id}")]
    [Authorize(Policy = Permissions.UsersEdit)]
    [ProducesResponseType(typeof(UserDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<UserDto>> UpdateUser(string id, [FromBody] UpdateUserDto dto)
    {
        try
        {
            var user = await _userService.UpdateUserAsync(id, dto);
            return Ok(user);
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new ProblemDetails
            {
                Title = "Failed to update user",
                Detail = ex.Message,
                Status = StatusCodes.Status400BadRequest
            });
        }
    }

    /// <summary>
    /// Delete a user.
    /// </summary>
    [HttpDelete("{id}")]
    [Authorize(Policy = Permissions.UsersDelete)]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> DeleteUser(string id)
    {
        var result = await _userService.DeleteUserAsync(id);
        if (!result)
        {
            return NotFound();
        }
        return NoContent();
    }

    /// <summary>
    /// Assign roles to a user.
    /// </summary>
    [HttpPost("{id}/roles")]
    [Authorize(Policy = Permissions.UsersEdit)]
    [ProducesResponseType(typeof(UserDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<UserDto>> AssignRoles(string id, [FromBody] AssignRolesToUserDto dto)
    {
        try
        {
            var user = await _userService.AssignRolesToUserAsync(id, dto);
            return Ok(user);
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new ProblemDetails
            {
                Title = "Failed to assign roles",
                Detail = ex.Message,
                Status = StatusCodes.Status400BadRequest
            });
        }
    }

    /// <summary>
    /// Reset user password (admin action).
    /// </summary>
    [HttpPost("{id}/reset-password")]
    [Authorize(Policy = Permissions.UsersEdit)]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> ResetPassword(string id, [FromBody] ResetUserPasswordDto dto)
    {
        var result = await _userService.ResetUserPasswordAsync(id, dto);
        if (!result)
        {
            return BadRequest(new ProblemDetails
            {
                Title = "Failed to reset password",
                Status = StatusCodes.Status400BadRequest
            });
        }
        return NoContent();
    }

    /// <summary>
    /// Toggle user active status.
    /// </summary>
    [HttpPost("{id}/toggle-status")]
    [Authorize(Policy = Permissions.UsersEdit)]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> ToggleStatus(string id)
    {
        var result = await _userService.ToggleUserStatusAsync(id);
        if (!result)
        {
            return NotFound();
        }
        return NoContent();
    }

    /// <summary>
    /// Get current user's permissions.
    /// </summary>
    [HttpGet("me/permissions")]
    [ProducesResponseType(typeof(IList<string>), StatusCodes.Status200OK)]
    public async Task<ActionResult<IList<string>>> GetMyPermissions()
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (string.IsNullOrEmpty(userId))
        {
            return Unauthorized();
        }

        var permissions = await _userService.GetUserPermissionsAsync(userId);
        return Ok(permissions);
    }
}
