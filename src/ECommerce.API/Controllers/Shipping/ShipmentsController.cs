using ECommerce.Application.Features.Shipping.DTOs;
using ECommerce.Application.Interfaces;
using ECommerce.Domain.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace ECommerce.API.Controllers.Shipping;

/// <summary>
/// API controller for shipment management.
/// </summary>
[ApiController]
[Route("api/[controller]")]
[Authorize]
public class ShipmentsController : ControllerBase
{
    private readonly IShipmentService _shipmentService;
    private readonly ILogger<ShipmentsController> _logger;

    public ShipmentsController(
        IShipmentService shipmentService,
        ILogger<ShipmentsController> logger)
    {
        _shipmentService = shipmentService;
        _logger = logger;
    }

    private string UserId => User.FindFirstValue(ClaimTypes.NameIdentifier) ?? "system";

    // ==============================================
    // Query Endpoints
    // ==============================================

    /// <summary>
    /// Get shipments list with filters and pagination.
    /// </summary>
    [HttpGet]
    // [Authorize(Policy = "SHIPMENT_VIEW")]
    public async Task<IActionResult> GetList([FromQuery] ShipmentFilterDto filter)
    {
        var (items, totalCount) = await _shipmentService.GetListAsync(filter);
        
        return Ok(new
        {
            items,
            totalCount,
            pageNumber = filter.PageNumber,
            pageSize = filter.PageSize,
            totalPages = (int)Math.Ceiling(totalCount / (double)filter.PageSize)
        });
    }

    /// <summary>
    /// Get shipment by ID with full details.
    /// </summary>
    [HttpGet("{id:int}")]
    // [Authorize(Policy = "SHIPMENT_VIEW")]
    public async Task<IActionResult> GetById(int id)
    {
        var shipment = await _shipmentService.GetByIdAsync(id);
        if (shipment == null)
            return NotFound(new { message = $"Shipment {id} not found" });

        return Ok(shipment);
    }

    /// <summary>
    /// Get tracking history for a shipment.
    /// </summary>
    [HttpGet("{id:int}/tracking")]
    // [Authorize(Policy = "SHIPMENT_VIEW")]
    public async Task<IActionResult> GetTracking(int id)
    {
        var tracking = await _shipmentService.GetTrackingHistoryAsync(id);
        return Ok(tracking);
    }

    /// <summary>
    /// Get shipments by order ID.
    /// </summary>
    [HttpGet("by-order/{orderId:int}")]
    // [Authorize(Policy = "SHIPMENT_VIEW")]
    public async Task<IActionResult> GetByOrderId(int orderId)
    {
        var shipments = await _shipmentService.GetByOrderIdAsync(orderId);
        return Ok(shipments);
    }

    /// <summary>
    /// Get all active carriers.
    /// </summary>
    [HttpGet("carriers")]
    public async Task<IActionResult> GetCarriers()
    {
        var carriers = await _shipmentService.GetCarriersAsync();
        return Ok(carriers);
    }

    // ==============================================
    // Command Endpoints
    // ==============================================

    /// <summary>
    /// Create a new shipment.
    /// </summary>
    [HttpPost]
    // [Authorize(Policy = "SHIPMENT_CREATE")]
    public async Task<IActionResult> Create([FromBody] CreateShipmentRequest request)
    {
        try
        {
            var shipment = await _shipmentService.CreateAsync(request, UserId);
            return CreatedAtAction(nameof(GetById), new { id = shipment.Id }, shipment);
        }
        catch (InvalidOperationException ex)
        {
            _logger.LogWarning(ex, "Failed to create shipment");
            return BadRequest(new { message = ex.Message });
        }
    }

    /// <summary>
    /// Assign carrier to shipment.
    /// </summary>
    [HttpPut("{id:int}/assign-carrier")]
    // [Authorize(Policy = "SHIPMENT_UPDATE")]
    public async Task<IActionResult> AssignCarrier(int id, [FromBody] AssignCarrierRequest request)
    {
        try
        {
            var shipment = await _shipmentService.AssignCarrierAsync(id, request, UserId);
            return Ok(shipment);
        }
        catch (InvalidOperationException ex)
        {
            _logger.LogWarning(ex, "Failed to assign carrier to shipment {Id}", id);
            return BadRequest(new { message = ex.Message });
        }
    }

    /// <summary>
    /// Add tracking event to shipment.
    /// </summary>
    [HttpPost("{id:int}/track")]
    // [Authorize(Policy = "SHIPMENT_UPDATE")]
    public async Task<IActionResult> AddTrackingEvent(int id, [FromBody] AddTrackingEventRequest request)
    {
        try
        {
            var tracking = await _shipmentService.AddTrackingEventAsync(id, request, UserId);
            return Ok(tracking);
        }
        catch (InvalidOperationException ex)
        {
            _logger.LogWarning(ex, "Failed to add tracking event to shipment {Id}", id);
            return BadRequest(new { message = ex.Message });
        }
    }

    /// <summary>
    /// Quick status update for shipment.
    /// </summary>
    [HttpPatch("{id:int}/status")]
    // [Authorize(Policy = "SHIPMENT_UPDATE")]
    public async Task<IActionResult> QuickStatusUpdate(int id, [FromBody] QuickStatusRequest request)
    {
        try
        {
            var trackingRequest = new AddTrackingEventRequest
            {
                Status = request.Status,
                Location = request.Location
            };
            var tracking = await _shipmentService.AddTrackingEventAsync(id, trackingRequest, UserId);
            return Ok(tracking);
        }
        catch (InvalidOperationException ex)
        {
            _logger.LogWarning(ex, "Failed to update shipment {Id} status", id);
            return BadRequest(new { message = ex.Message });
        }
    }

    /// <summary>
    /// Update shipment status.
    /// </summary>
    [HttpPut("{id:int}/status")]
    // [Authorize(Policy = "SHIPMENT_UPDATE")]
    public async Task<IActionResult> UpdateStatus(int id, [FromBody] UpdateShipmentStatusRequest request)
    {
        try
        {
            var shipment = await _shipmentService.UpdateStatusAsync(id, request, UserId);
            return Ok(shipment);
        }
        catch (InvalidOperationException ex)
        {
            _logger.LogWarning(ex, "Failed to update shipment {Id} status", id);
            return BadRequest(new { message = ex.Message });
        }
    }

    /// <summary>
    /// Mark shipment as shipped (in transit).
    /// </summary>
    [HttpPost("{id:int}/ship")]
    // [Authorize(Policy = "SHIPMENT_UPDATE")]
    public async Task<IActionResult> MarkAsShipped(int id)
    {
        try
        {
            var shipment = await _shipmentService.MarkAsShippedAsync(id, UserId);
            return Ok(shipment);
        }
        catch (InvalidOperationException ex)
        {
            _logger.LogWarning(ex, "Failed to mark shipment {Id} as shipped", id);
            return BadRequest(new { message = ex.Message });
        }
    }

    /// <summary>
    /// Mark shipment as delivered.
    /// </summary>
    [HttpPost("{id:int}/deliver")]
    // [Authorize(Policy = "SHIPMENT_UPDATE")]
    public async Task<IActionResult> MarkAsDelivered(int id)
    {
        try
        {
            var shipment = await _shipmentService.MarkAsDeliveredAsync(id, UserId);
            return Ok(shipment);
        }
        catch (InvalidOperationException ex)
        {
            _logger.LogWarning(ex, "Failed to mark shipment {Id} as delivered", id);
            return BadRequest(new { message = ex.Message });
        }
    }

    /// <summary>
    /// Cancel a shipment.
    /// </summary>
    [HttpPost("{id:int}/cancel")]
    // [Authorize(Policy = "SHIPMENT_UPDATE")]
    public async Task<IActionResult> Cancel(int id, [FromBody] CancelRequest request)
    {
        try
        {
            var shipment = await _shipmentService.CancelAsync(id, request.Reason, UserId);
            return Ok(shipment);
        }
        catch (InvalidOperationException ex)
        {
            _logger.LogWarning(ex, "Failed to cancel shipment {Id}", id);
            return BadRequest(new { message = ex.Message });
        }
    }
}

public record CancelRequest(string Reason);
