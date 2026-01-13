// ==============================================
// OrderController.cs - Order Management API
// ERP-grade Orders with Inventory Integration
// ==============================================

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ECommerce.Application.Features.Orders.DTOs;
using ECommerce.Application.Interfaces;
using System.Security.Claims;

namespace ECommerce.API.Controllers.Orders;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class OrderController : ControllerBase
{
    private readonly IOrderService _orderService;
    private readonly ILogger<OrderController> _logger;

    public OrderController(IOrderService orderService, ILogger<OrderController> logger)
    {
        _orderService = orderService;
        _logger = logger;
    }

    private string GetUserId() => User.FindFirstValue(ClaimTypes.NameIdentifier) ?? "system";

    #region Query Endpoints

    /// <summary>
    /// Get all orders with optional filters.
    /// </summary>
    [HttpGet]
    // [Authorize(Policy = "ORDER_VIEW")]
    public async Task<ActionResult<List<OrderListDto>>> GetAll([FromQuery] OrderFilterDto? filter)
    {
        var orders = await _orderService.GetAllAsync(filter);
        return Ok(orders);
    }

    /// <summary>
    /// Get order by ID.
    /// </summary>
    [HttpGet("{id:int}")]
    // [Authorize(Policy = "ORDER_VIEW")]
    public async Task<ActionResult<OrderDto>> GetById(int id)
    {
        var order = await _orderService.GetByIdAsync(id);
        if (order == null)
            return NotFound(new { message = $"Order {id} not found" });
        return Ok(order);
    }

    /// <summary>
    /// Get order by order number.
    /// </summary>
    [HttpGet("by-number/{orderNumber}")]
    // [Authorize(Policy = "ORDER_VIEW")]
    public async Task<ActionResult<OrderDto>> GetByOrderNumber(string orderNumber)
    {
        var order = await _orderService.GetByOrderNumberAsync(orderNumber);
        if (order == null)
            return NotFound(new { message = $"Order {orderNumber} not found" });
        return Ok(order);
    }

    /// <summary>
    /// Check stock availability for order items.
    /// </summary>
    [HttpGet("{id:int}/availability")]
    public async Task<ActionResult<OrderAvailabilityResult>> CheckAvailability(int id)
    {
        try
        {
            var result = await _orderService.CheckAvailabilityAsync(id);
            return Ok(result);
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    #endregion

    #region Order Lifecycle Endpoints

    /// <summary>
    /// Create new draft order.
    /// </summary>
    [HttpPost]
    // [Authorize(Policy = "ORDER_CREATE")]
    public async Task<ActionResult<OrderDto>> Create([FromBody] CreateOrderRequest request)
    {
        try
        {
            var order = await _orderService.CreateOrderAsync(request, GetUserId());
            return CreatedAtAction(nameof(GetById), new { id = order.Id }, order);
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    /// <summary>
    /// Add item to order.
    /// </summary>
    [HttpPost("{id:int}/items")]
    // [Authorize(Policy = "ORDER_CREATE")]
    public async Task<ActionResult<OrderDto>> AddItem(int id, [FromBody] AddOrderItemRequest request)
    {
        try
        {
            var order = await _orderService.AddItemAsync(id, request, GetUserId());
            return Ok(order);
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    /// <summary>
    /// Update order item.
    /// </summary>
    [HttpPut("{id:int}/items/{itemId:int}")]
    // [Authorize(Policy = "ORDER_CREATE")]
    public async Task<ActionResult<OrderDto>> UpdateItem(int id, int itemId, [FromBody] UpdateOrderItemRequest request)
    {
        try
        {
            var order = await _orderService.UpdateItemAsync(id, itemId, request, GetUserId());
            return Ok(order);
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    /// <summary>
    /// Remove item from order.
    /// </summary>
    [HttpDelete("{id:int}/items/{itemId:int}")]
    // [Authorize(Policy = "ORDER_CREATE")]
    public async Task<ActionResult<OrderDto>> RemoveItem(int id, int itemId)
    {
        try
        {
            var order = await _orderService.RemoveItemAsync(id, itemId, GetUserId());
            return Ok(order);
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    /// <summary>
    /// Confirm order - reserves stock for all items.
    /// </summary>
    [HttpPost("{id:int}/confirm")]
    // [Authorize(Policy = "ORDER_CONFIRM")]
    public async Task<ActionResult<OrderDto>> Confirm(int id)
    {
        try
        {
            var order = await _orderService.ConfirmOrderAsync(id, GetUserId());
            _logger.LogInformation("Order {OrderId} confirmed by {UserId}", id, GetUserId());
            return Ok(order);
        }
        catch (InvalidOperationException ex)
        {
            _logger.LogWarning("Failed to confirm order {OrderId}: {Message}", id, ex.Message);
            return BadRequest(new { message = ex.Message });
        }
    }

    /// <summary>
    /// Cancel order - releases reserved stock if confirmed.
    /// </summary>
    [HttpPost("{id:int}/cancel")]
    // [Authorize(Policy = "ORDER_CANCEL")]
    public async Task<ActionResult<OrderDto>> Cancel(int id, [FromBody] CancelOrderRequest request)
    {
        try
        {
            var order = await _orderService.CancelOrderAsync(id, request.Reason, GetUserId());
            _logger.LogInformation("Order {OrderId} cancelled by {UserId}: {Reason}", id, GetUserId(), request.Reason);
            return Ok(order);
        }
        catch (InvalidOperationException ex)
        {
            _logger.LogWarning("Failed to cancel order {OrderId}: {Message}", id, ex.Message);
            return BadRequest(new { message = ex.Message });
        }
    }

    /// <summary>
    /// Ship order - commits reserved stock.
    /// </summary>
    [HttpPost("{id:int}/ship")]
    // [Authorize(Policy = "ORDER_SHIP")]
    public async Task<ActionResult<OrderDto>> Ship(int id)
    {
        try
        {
            var order = await _orderService.ShipOrderAsync(id, GetUserId());
            _logger.LogInformation("Order {OrderId} shipped by {UserId}", id, GetUserId());
            return Ok(order);
        }
        catch (InvalidOperationException ex)
        {
            _logger.LogWarning("Failed to ship order {OrderId}: {Message}", id, ex.Message);
            return BadRequest(new { message = ex.Message });
        }
    }

    /// <summary>
    /// Mark order as delivered.
    /// </summary>
    [HttpPost("{id:int}/deliver")]
    // [Authorize(Policy = "ORDER_VIEW")]
    public async Task<ActionResult<OrderDto>> Deliver(int id)
    {
        try
        {
            var order = await _orderService.DeliverOrderAsync(id, GetUserId());
            return Ok(order);
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    #endregion
}

/// <summary>
/// Request model for cancelling an order.
/// </summary>
public record CancelOrderRequest(string Reason);
