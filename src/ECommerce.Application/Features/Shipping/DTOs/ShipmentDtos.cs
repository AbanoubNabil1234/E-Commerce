using ECommerce.Domain.Enums;

namespace ECommerce.Application.Features.Shipping.DTOs;

// ==============================================
// Response DTOs
// ==============================================

/// <summary>
/// Full shipment details DTO.
/// </summary>
public record ShipmentDto
{
    public int Id { get; init; }
    public int OrderId { get; init; }
    public string OrderNumber { get; init; } = string.Empty;
    public int WarehouseId { get; init; }
    public string WarehouseName { get; init; } = string.Empty;
    public int? CarrierId { get; init; }
    public string? CarrierName { get; init; }
    public string TrackingNumber { get; init; } = string.Empty;
    public string ShippingMethod { get; init; } = string.Empty;
    public ShipmentStatus Status { get; init; }
    public DateTime? EstimatedDeliveryDate { get; init; }
    public DateTime? ActualDeliveryDate { get; init; }
    public DateTime? ShippedAt { get; init; }
    public DateTime? DeliveredAt { get; init; }
    public decimal? Weight { get; init; }
    public decimal? ShippingCost { get; init; }
    public string? RecipientName { get; init; }
    public string? RecipientPhone { get; init; }
    public string? DeliveryAddress { get; init; }
    public string? DeliveryCity { get; init; }
    public string? DeliveryCountry { get; init; }
    public string? Notes { get; init; }
    public DateTime CreatedAt { get; init; }
    public string? CreatedBy { get; init; }
    public List<ShipmentItemDto> Items { get; init; } = new();
    public List<ShipmentTrackingDto> TrackingHistory { get; init; } = new();
}

/// <summary>
/// Shipment list item DTO.
/// </summary>
public record ShipmentListDto
{
    public int Id { get; init; }
    public string TrackingNumber { get; init; } = string.Empty;
    public string OrderNumber { get; init; } = string.Empty;
    public string WarehouseName { get; init; } = string.Empty;
    public string? CarrierName { get; init; }
    public ShipmentStatus Status { get; init; }
    public string ShippingMethod { get; init; } = string.Empty;
    public string? RecipientName { get; init; }
    public string? DeliveryCity { get; init; }
    public DateTime? EstimatedDeliveryDate { get; init; }
    public DateTime CreatedAt { get; init; }
    public int ItemCount { get; init; }
}

/// <summary>
/// Shipment item DTO.
/// </summary>
public record ShipmentItemDto
{
    public int Id { get; init; }
    public int ProductId { get; init; }
    public string ProductName { get; init; } = string.Empty;
    public string ProductSku { get; init; } = string.Empty;
    public string? ProductImageUrl { get; init; }
    public int Quantity { get; init; }
}

/// <summary>
/// Shipment tracking event DTO.
/// </summary>
public record ShipmentTrackingDto
{
    public int Id { get; init; }
    public ShipmentStatus Status { get; init; }
    public string? Location { get; init; }
    public string? Description { get; init; }
    public string? Notes { get; init; }
    public string? PerformedBy { get; init; }
    public string? PerformedByName { get; init; }
    public DateTime OccurredAt { get; init; }
}

/// <summary>
/// Carrier/Courier DTO.
/// </summary>
public record CarrierDto
{
    public int Id { get; init; }
    public string Name { get; init; } = string.Empty;
    public string Code { get; init; } = string.Empty;
    public string? TrackingUrlTemplate { get; init; }
    public string? ContactPhone { get; init; }
    public string? ContactEmail { get; init; }
    public bool IsActive { get; init; }
}

// ==============================================
// Request DTOs
// ==============================================

/// <summary>
/// Create shipment request.
/// </summary>
public record CreateShipmentRequest
{
    public int OrderId { get; init; }
    public int WarehouseId { get; init; }
    public int? CarrierId { get; init; }
    public string ShippingMethod { get; init; } = "Standard";
    public DateTime? EstimatedDeliveryDate { get; init; }
    public string? RecipientName { get; init; }
    public string? RecipientPhone { get; init; }
    public string? DeliveryAddress { get; init; }
    public string? DeliveryCity { get; init; }
    public string? DeliveryCountry { get; init; }
    public string? DeliveryPostalCode { get; init; }
    public string? Notes { get; init; }
    public List<ShipmentItemRequest> Items { get; init; } = new();
}

/// <summary>
/// Shipment item request.
/// </summary>
public record ShipmentItemRequest
{
    public int ProductId { get; init; }
    public int Quantity { get; init; }
    public int? OrderItemId { get; init; }
}

/// <summary>
/// Assign carrier to shipment request.
/// </summary>
public record AssignCarrierRequest
{
    public int CarrierId { get; init; }
    public string? TrackingNumber { get; init; }
    public DateTime? EstimatedDeliveryDate { get; init; }
}

/// <summary>
/// Update shipment status request.
/// </summary>
public record UpdateShipmentStatusRequest
{
    public ShipmentStatus Status { get; init; }
    public string? Location { get; init; }
    public string? Notes { get; init; }
}

/// <summary>
/// Shipment filter DTO.
/// </summary>
public record ShipmentFilterDto
{
    public int PageNumber { get; init; } = 1;
    public int PageSize { get; init; } = 10;
    public ShipmentStatus? Status { get; init; }
    public int? WarehouseId { get; init; }
    public int? CarrierId { get; init; }
    public int? OrderId { get; init; }
    public string? Search { get; init; }
    public DateTime? FromDate { get; init; }
    public DateTime? ToDate { get; init; }
}

/// <summary>
/// Add tracking event request - for logging shipment status changes.
/// </summary>
public record AddTrackingEventRequest
{
    public ShipmentStatus Status { get; init; }
    public string? Location { get; init; }
    public string? Description { get; init; }
    public string? Notes { get; init; }
}

/// <summary>
/// Quick status update request.
/// </summary>
public record QuickStatusRequest
{
    public ShipmentStatus Status { get; init; }
    public string? Location { get; init; }
}
