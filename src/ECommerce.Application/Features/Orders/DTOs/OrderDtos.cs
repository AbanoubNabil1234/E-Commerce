// ==============================================
// OrderDtos.cs - Order Data Transfer Objects
// ==============================================

using ECommerce.Domain.Enums;

namespace ECommerce.Application.Features.Orders.DTOs;

#region Query DTOs

/// <summary>
/// Full order details with items.
/// </summary>
public record OrderDto(
    int Id,
    string OrderNumber,
    string CustomerId,
    string? CustomerName,
    int? WarehouseId,
    string? WarehouseName,
    OrderStatus OrderStatus,
    PaymentStatus PaymentStatus,
    decimal SubTotal,
    decimal TaxAmount,
    decimal ShippingAmount,
    decimal DiscountAmount,
    decimal TotalAmount,
    string Currency,
    // Shipping
    string ShippingName,
    string ShippingAddress,
    string ShippingCity,
    string? ShippingState,
    string ShippingCountry,
    string? ShippingPostalCode,
    string? ShippingPhone,
    string? Notes,
    // Timestamps
    DateTime CreatedAt,
    DateTime? ConfirmedAt,
    DateTime? ShippedAt,
    DateTime? DeliveredAt,
    DateTime? CancelledAt,
    string? CancellationReason,
    // Items
    List<OrderItemDto> Items
);

/// <summary>
/// Order summary for list views.
/// </summary>
public record OrderListDto(
    int Id,
    string OrderNumber,
    string CustomerId,
    string? CustomerName,
    string? WarehouseName,
    OrderStatus OrderStatus,
    PaymentStatus PaymentStatus,
    int ItemCount,
    decimal TotalAmount,
    string Currency,
    DateTime CreatedAt
);

/// <summary>
/// Order line item.
/// </summary>
public record OrderItemDto(
    int Id,
    int ProductId,
    string SKU,
    string ProductName,
    string? ProductImageUrl,
    decimal UnitPrice,
    int Quantity,
    decimal DiscountAmount,
    decimal TotalPrice
);

/// <summary>
/// Stock availability result for order items.
/// </summary>
public record OrderAvailabilityResult(
    bool IsFullyAvailable,
    List<ItemAvailability> Items
);

/// <summary>
/// Availability for a single item.
/// </summary>
public record ItemAvailability(
    int ProductId,
    string ProductName,
    int RequestedQuantity,
    decimal AvailableQuantity,
    bool IsAvailable
);

#endregion

#region Command DTOs

/// <summary>
/// Create new draft order.
/// </summary>
public record CreateOrderRequest(
    string CustomerId,
    int WarehouseId,
    string? ShippingName,
    string? ShippingAddress,
    string? ShippingCity,
    string? ShippingState,
    string? ShippingCountry,
    string? ShippingPostalCode,
    string? ShippingPhone,
    string? Notes,
    string Currency = "USD"
);

/// <summary>
/// Add item to order.
/// </summary>
public record AddOrderItemRequest(
    int ProductId,
    int Quantity,
    decimal? OverrideUnitPrice = null,
    decimal? DiscountAmount = null
);

/// <summary>
/// Update order item quantity.
/// </summary>
public record UpdateOrderItemRequest(
    int Quantity,
    decimal? DiscountAmount = null
);

/// <summary>
/// Filter for orders query.
/// </summary>
public record OrderFilterDto(
    OrderStatus? Status = null,
    PaymentStatus? PaymentStatus = null,
    int? WarehouseId = null,
    string? CustomerId = null,
    DateTime? FromDate = null,
    DateTime? ToDate = null,
    string? SearchTerm = null,
    int PageNumber = 1,
    int PageSize = 20
);

#endregion
