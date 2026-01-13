// ==============================================
// Roles Controller
// Role Management API Endpoints
// ==============================================

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ECommerce.Application.DTOs.UserManagement;
using ECommerce.Application.Interfaces;
using ECommerce.Domain.Constants;

namespace ECommerce.API.Controllers.UserManagement;

/// <summary>
/// API controller for role management operations.
/// </summary>
[ApiController]
[Route("api/[controller]")]
[Authorize]
public class RolesController : ControllerBase
{
    private readonly IRoleManagementService _roleService;

    public RolesController(IRoleManagementService roleService)
    {
        _roleService = roleService;
    }

    /// <summary>
    /// Get all roles.
    /// </summary>
    [HttpGet]
    [Authorize(Policy = Permissions.RolesView)]
    [ProducesResponseType(typeof(IList<RoleListDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<IList<RoleListDto>>> GetRoles()
    {
        var roles = await _roleService.GetAllRolesAsync();
        return Ok(roles);
    }

    /// <summary>
    /// Get a role by ID with permissions.
    /// </summary>
    [HttpGet("{id}")]
    [Authorize(Policy = Permissions.RolesView)]
    [ProducesResponseType(typeof(RoleDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<RoleDto>> GetRole(string id)
    {
        var role = await _roleService.GetRoleByIdAsync(id);
        if (role == null)
        {
            return NotFound(new ProblemDetails
            {
                Title = "Role not found",
                Detail = $"Role with ID '{id}' was not found.",
                Status = StatusCodes.Status404NotFound
            });
        }
        return Ok(role);
    }

    /// <summary>
    /// Create a new role.
    /// </summary>
    [HttpPost]
    [Authorize(Policy = Permissions.RolesCreate)]
    [ProducesResponseType(typeof(RoleDto), StatusCodes.Status201Created)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<RoleDto>> CreateRole([FromBody] CreateRoleDto dto)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        try
        {
            var role = await _roleService.CreateRoleAsync(dto);
            return CreatedAtAction(nameof(GetRole), new { id = role.Id }, role);
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new ProblemDetails
            {
                Title = "Failed to create role",
                Detail = ex.Message,
                Status = StatusCodes.Status400BadRequest
            });
        }
    }

    /// <summary>
    /// Update an existing role.
    /// </summary>
    [HttpPut("{id}")]
    [Authorize(Policy = Permissions.RolesEdit)]
    [ProducesResponseType(typeof(RoleDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<RoleDto>> UpdateRole(string id, [FromBody] UpdateRoleDto dto)
    {
        try
        {
            var role = await _roleService.UpdateRoleAsync(id, dto);
            return Ok(role);
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new ProblemDetails
            {
                Title = "Failed to update role",
                Detail = ex.Message,
                Status = StatusCodes.Status400BadRequest
            });
        }
    }

    /// <summary>
    /// Delete a role.
    /// </summary>
    [HttpDelete("{id}")]
    [Authorize(Policy = Permissions.RolesDelete)]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> DeleteRole(string id)
    {
        try
        {
            var result = await _roleService.DeleteRoleAsync(id);
            if (!result)
            {
                return NotFound();
            }
            return NoContent();
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new ProblemDetails
            {
                Title = "Failed to delete role",
                Detail = ex.Message,
                Status = StatusCodes.Status400BadRequest
            });
        }
    }

    /// <summary>
    /// Assign permissions to a role.
    /// </summary>
    [HttpPost("{id}/permissions")]
    [Authorize(Policy = Permissions.RolesAssignPermissions)]
    [ProducesResponseType(typeof(RoleDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<RoleDto>> AssignPermissions(string id, [FromBody] AssignPermissionsToRoleDto dto)
    {
        try
        {
            var role = await _roleService.AssignPermissionsToRoleAsync(id, dto);
            return Ok(role);
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new ProblemDetails
            {
                Title = "Failed to assign permissions",
                Detail = ex.Message,
                Status = StatusCodes.Status400BadRequest
            });
        }
    }

    /// <summary>
    /// Get all permissions for a role.
    /// </summary>
    [HttpGet("{id}/permissions")]
    [Authorize(Policy = Permissions.RolesView)]
    [ProducesResponseType(typeof(IList<PermissionDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<IList<PermissionDto>>> GetRolePermissions(string id)
    {
        var permissions = await _roleService.GetRolePermissionsAsync(id);
        return Ok(permissions);
    }

    /// <summary>
    /// Get users assigned to a role.
    /// </summary>
    [HttpGet("{id}/users")]
    [Authorize(Policy = Permissions.RolesView)]
    [ProducesResponseType(typeof(IList<UserListDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<IList<UserListDto>>> GetUsersInRole(string id)
    {
        var users = await _roleService.GetUsersInRoleAsync(id);
        return Ok(users);
    }
}
