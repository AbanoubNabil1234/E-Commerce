// ==============================================
// Permissions Controller
// Permission API Endpoints
// ==============================================

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ECommerce.Application.DTOs.UserManagement;
using ECommerce.Application.Interfaces;
using ECommerce.Domain.Constants;

namespace ECommerce.API.Controllers.UserManagement;

/// <summary>
/// API controller for permission operations.
/// </summary>
[ApiController]
[Route("api/[controller]")]
[Authorize]
public class PermissionsController : ControllerBase
{
    private readonly IPermissionService _permissionService;

    public PermissionsController(IPermissionService permissionService)
    {
        _permissionService = permissionService;
    }

    /// <summary>
    /// Get all permissions.
    /// </summary>
    [HttpGet]
    [Authorize(Policy = Permissions.RolesView)]
    [ProducesResponseType(typeof(IList<PermissionDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<IList<PermissionDto>>> GetPermissions()
    {
        var permissions = await _permissionService.GetAllPermissionsAsync();
        return Ok(permissions);
    }

    /// <summary>
    /// Get all permissions grouped by module.
    /// </summary>
    [HttpGet("grouped")]
    [Authorize(Policy = Permissions.RolesView)]
    [ProducesResponseType(typeof(IList<PermissionGroupDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<IList<PermissionGroupDto>>> GetPermissionsGrouped()
    {
        var groups = await _permissionService.GetPermissionsGroupedAsync();
        return Ok(groups);
    }

    /// <summary>
    /// Get a permission by ID.
    /// </summary>
    [HttpGet("{id:int}")]
    [Authorize(Policy = Permissions.RolesView)]
    [ProducesResponseType(typeof(PermissionDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<PermissionDto>> GetPermission(int id)
    {
        var permission = await _permissionService.GetPermissionByIdAsync(id);
        if (permission == null)
        {
            return NotFound(new ProblemDetails
            {
                Title = "Permission not found",
                Detail = $"Permission with ID '{id}' was not found.",
                Status = StatusCodes.Status404NotFound
            });
        }
        return Ok(permission);
    }
}
