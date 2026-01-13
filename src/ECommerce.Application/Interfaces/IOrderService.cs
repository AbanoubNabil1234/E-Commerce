// ==============================================
// IOrderService.cs - Order Service Contract
// ERP-grade Orders with Inventory Integration
// ==============================================

using ECommerce.Application.Features.Orders.DTOs;

namespace ECommerce.Application.Interfaces;

/// <summary>
/// Service interface for order management with inventory integration.
/// Orders interact with inventory via Reserve/Release/Commit pattern.
/// </summary>
public interface IOrderService
{
    #region Query Operations

    /// <summary>
    /// Get order by ID with all items.
    /// </summary>
    Task<OrderDto?> GetByIdAsync(int orderId, CancellationToken cancellationToken = default);

    /// <summary>
    /// Get order by order number.
    /// </summary>
    Task<OrderDto?> GetByOrderNumberAsync(string orderNumber, CancellationToken cancellationToken = default);

    /// <summary>
    /// Get all orders with optional filtering.
    /// </summary>
    Task<List<OrderListDto>> GetAllAsync(OrderFilterDto? filter = null, CancellationToken cancellationToken = default);

    /// <summary>
    /// Get orders by customer ID.
    /// </summary>
    Task<List<OrderListDto>> GetByCustomerAsync(string customerId, CancellationToken cancellationToken = default);

    #endregion

    #region Order Lifecycle Commands

    /// <summary>
    /// Create a new draft order. No inventory changes.
    /// </summary>
    Task<OrderDto> CreateOrderAsync(CreateOrderRequest request, string userId, CancellationToken cancellationToken = default);

    /// <summary>
    /// Add item to draft order. Validates product and calculates prices.
    /// </summary>
    Task<OrderDto> AddItemAsync(int orderId, AddOrderItemRequest request, string userId, CancellationToken cancellationToken = default);

    /// <summary>
    /// Update item quantity in draft order.
    /// </summary>
    Task<OrderDto> UpdateItemAsync(int orderId, int itemId, UpdateOrderItemRequest request, string userId, CancellationToken cancellationToken = default);

    /// <summary>
    /// Remove item from draft order.
    /// </summary>
    Task<OrderDto> RemoveItemAsync(int orderId, int itemId, string userId, CancellationToken cancellationToken = default);

    /// <summary>
    /// Confirm order - reserves stock for all items.
    /// Transactional: if ANY item fails to reserve, entire operation rolls back.
    /// </summary>
    Task<OrderDto> ConfirmOrderAsync(int orderId, string userId, CancellationToken cancellationToken = default);

    /// <summary>
    /// Cancel order - releases reserved stock if order was confirmed.
    /// </summary>
    Task<OrderDto> CancelOrderAsync(int orderId, string reason, string userId, CancellationToken cancellationToken = default);

    /// <summary>
    /// Ship order - commits reserved stock (decreases QuantityOnHand).
    /// </summary>
    Task<OrderDto> ShipOrderAsync(int orderId, string userId, CancellationToken cancellationToken = default);

    /// <summary>
    /// Mark order as delivered.
    /// </summary>
    Task<OrderDto> DeliverOrderAsync(int orderId, string userId, CancellationToken cancellationToken = default);

    #endregion

    #region Utility Operations

    /// <summary>
    /// Generate unique order number.
    /// </summary>
    Task<string> GenerateOrderNumberAsync(CancellationToken cancellationToken = default);

    /// <summary>
    /// Check if all items in order can be reserved from warehouse.
    /// </summary>
    Task<OrderAvailabilityResult> CheckAvailabilityAsync(int orderId, CancellationToken cancellationToken = default);

    #endregion
}
