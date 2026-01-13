// ==============================================
// WarehousesController.cs - Warehouse API Endpoints
// ==============================================

using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ECommerce.Application.DTOs;
using ECommerce.Application.Interfaces;
using ECommerce.Domain.Constants;

namespace ECommerce.API.Controllers.Warehouses;

/// <summary>
/// API endpoints for Warehouse management.
/// </summary>
[ApiController]
[Route("api/[controller]")]
[Authorize]
public class WarehousesController : ControllerBase
{
    private readonly IWarehouseService _warehouseService;

    public WarehousesController(IWarehouseService warehouseService)
    {
        _warehouseService = warehouseService;
    }

    private string CurrentUserId => User.FindFirstValue(ClaimTypes.NameIdentifier) ?? "";

    #region Query Endpoints

    /// <summary>
    /// Get all warehouses (active and inactive).
    /// </summary>
    [HttpGet]
    [Authorize(Policy = Permissions.WarehousesView)]
    [ProducesResponseType(typeof(List<WarehouseListDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<List<WarehouseListDto>>> GetAll(CancellationToken cancellationToken = default)
    {
        var warehouses = await _warehouseService.GetAllAsync(cancellationToken);
        return Ok(warehouses);
    }

    /// <summary>
    /// Get only active warehouses (for dropdowns).
    /// </summary>
    [HttpGet("active")]
    [Authorize(Policy = Permissions.WarehousesView)]
    [ProducesResponseType(typeof(List<WarehouseListDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<List<WarehouseListDto>>> GetActive(CancellationToken cancellationToken = default)
    {
        var warehouses = await _warehouseService.GetActiveAsync(cancellationToken);
        return Ok(warehouses);
    }

    /// <summary>
    /// Get warehouse by ID.
    /// </summary>
    [HttpGet("{id:int}")]
    [Authorize(Policy = Permissions.WarehousesView)]
    [ProducesResponseType(typeof(WarehouseDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<WarehouseDto>> GetById(int id, CancellationToken cancellationToken = default)
    {
        var warehouse = await _warehouseService.GetByIdAsync(id, cancellationToken);

        if (warehouse == null)
        {
            return NotFound(new ProblemDetails
            {
                Title = "Warehouse Not Found",
                Detail = $"Warehouse with ID {id} was not found."
            });
        }

        return Ok(warehouse);
    }

    /// <summary>
    /// Get the default warehouse.
    /// </summary>
    [HttpGet("default")]
    [Authorize(Policy = Permissions.WarehousesView)]
    [ProducesResponseType(typeof(WarehouseDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<WarehouseDto>> GetDefault(CancellationToken cancellationToken = default)
    {
        var warehouse = await _warehouseService.GetDefaultAsync(cancellationToken);

        if (warehouse == null)
        {
            return NotFound(new ProblemDetails
            {
                Title = "No Default Warehouse",
                Detail = "No default warehouse has been configured."
            });
        }

        return Ok(warehouse);
    }

    #endregion

    #region Command Endpoints

    /// <summary>
    /// Create a new warehouse.
    /// </summary>
    [HttpPost]
    [Authorize(Policy = Permissions.WarehousesManage)]
    [ProducesResponseType(typeof(WarehouseDto), StatusCodes.Status201Created)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<WarehouseDto>> Create(
        [FromBody] CreateWarehouseRequest request,
        CancellationToken cancellationToken = default)
    {
        try
        {
            var warehouse = await _warehouseService.CreateWarehouseAsync(request, CurrentUserId, cancellationToken);
            return CreatedAtAction(nameof(GetById), new { id = warehouse.Id }, warehouse);
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new ProblemDetails
            {
                Title = "Warehouse Creation Failed",
                Detail = ex.Message
            });
        }
    }

    /// <summary>
    /// Update an existing warehouse.
    /// </summary>
    [HttpPut("{id:int}")]
    [Authorize(Policy = Permissions.WarehousesManage)]
    [ProducesResponseType(typeof(WarehouseDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<WarehouseDto>> Update(
        int id,
        [FromBody] UpdateWarehouseRequest request,
        CancellationToken cancellationToken = default)
    {
        try
        {
            var warehouse = await _warehouseService.UpdateWarehouseAsync(id, request, CurrentUserId, cancellationToken);
            return Ok(warehouse);
        }
        catch (InvalidOperationException ex) when (ex.Message.Contains("not found"))
        {
            return NotFound(new ProblemDetails
            {
                Title = "Warehouse Not Found",
                Detail = ex.Message
            });
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new ProblemDetails
            {
                Title = "Warehouse Update Failed",
                Detail = ex.Message
            });
        }
    }

    /// <summary>
    /// Activate a deactivated warehouse.
    /// </summary>
    [HttpPost("{id:int}/activate")]
    [Authorize(Policy = Permissions.WarehousesManage)]
    [ProducesResponseType(typeof(WarehouseDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<WarehouseDto>> Activate(int id, CancellationToken cancellationToken = default)
    {
        try
        {
            var warehouse = await _warehouseService.ActivateWarehouseAsync(id, CurrentUserId, cancellationToken);
            return Ok(warehouse);
        }
        catch (InvalidOperationException ex) when (ex.Message.Contains("not found"))
        {
            return NotFound(new ProblemDetails
            {
                Title = "Warehouse Not Found",
                Detail = ex.Message
            });
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new ProblemDetails
            {
                Title = "Activation Failed",
                Detail = ex.Message
            });
        }
    }

    /// <summary>
    /// Deactivate a warehouse (soft delete).
    /// </summary>
    [HttpPost("{id:int}/deactivate")]
    [Authorize(Policy = Permissions.WarehousesManage)]
    [ProducesResponseType(typeof(WarehouseDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<WarehouseDto>> Deactivate(int id, CancellationToken cancellationToken = default)
    {
        try
        {
            var warehouse = await _warehouseService.DeactivateWarehouseAsync(id, CurrentUserId, cancellationToken);
            return Ok(warehouse);
        }
        catch (InvalidOperationException ex) when (ex.Message.Contains("not found"))
        {
            return NotFound(new ProblemDetails
            {
                Title = "Warehouse Not Found",
                Detail = ex.Message
            });
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new ProblemDetails
            {
                Title = "Deactivation Failed",
                Detail = ex.Message
            });
        }
    }

    /// <summary>
    /// Set a warehouse as the default.
    /// </summary>
    [HttpPost("{id:int}/set-default")]
    [Authorize(Policy = Permissions.WarehousesManage)]
    [ProducesResponseType(typeof(WarehouseDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<WarehouseDto>> SetDefault(int id, CancellationToken cancellationToken = default)
    {
        try
        {
            var warehouse = await _warehouseService.SetDefaultWarehouseAsync(id, CurrentUserId, cancellationToken);
            return Ok(warehouse);
        }
        catch (InvalidOperationException ex) when (ex.Message.Contains("not found"))
        {
            return NotFound(new ProblemDetails
            {
                Title = "Warehouse Not Found",
                Detail = ex.Message
            });
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new ProblemDetails
            {
                Title = "Set Default Failed",
                Detail = ex.Message
            });
        }
    }

    #endregion
}
