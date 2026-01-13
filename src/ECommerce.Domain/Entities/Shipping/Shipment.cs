using ECommerce.Domain.Common;
using ECommerce.Domain.Entities.Orders;
using ECommerce.Domain.Entities.Warehouses;
using ECommerce.Domain.Enums;

namespace ECommerce.Domain.Entities.Shipping;

/// <summary>
/// Physical shipment record for an order.
/// </summary>
public class Shipment : AuditableEntity
{
    // Core relationships
    public int OrderId { get; set; }
    public int? SubOrderId { get; set; }
    public int WarehouseId { get; set; }
    public int? CarrierId { get; set; }
    public int? ShippingZoneId { get; set; }
    
    // Tracking
    public string TrackingNumber { get; set; } = string.Empty;
    public string ShippingMethod { get; set; } = string.Empty; // Standard, Express, Overnight
    
    // Status & Dates
    public ShipmentStatus Status { get; set; } = ShipmentStatus.Pending;
    public DateTime? EstimatedDeliveryDate { get; set; }
    public DateTime? ActualDeliveryDate { get; set; }
    public DateTime? ShippedAt { get; set; }
    public DateTime? DeliveredAt { get; set; }
    
    // Physical properties
    public decimal? Weight { get; set; }
    public decimal? ShippingCost { get; set; }
    
    // Additional info
    public string? DriverId { get; set; } // AspNetUsers.Id for local delivery
    public string? Notes { get; set; }
    public string? RecipientName { get; set; }
    public string? RecipientPhone { get; set; }
    public string? DeliveryAddress { get; set; }
    public string? DeliveryCity { get; set; }
    public string? DeliveryCountry { get; set; }
    public string? DeliveryPostalCode { get; set; }
    public double? DeliveryLatitude { get; set; }
    public double? DeliveryLongitude { get; set; }
    
    // Live Tracking
    public double? CurrentLatitude { get; set; }
    public double? CurrentLongitude { get; set; }
    public DateTime? LocationUpdatedAt { get; set; }

    // Navigation
    public virtual Order Order { get; set; } = null!;
    public virtual SubOrder? SubOrder { get; set; }
    public virtual Warehouse Warehouse { get; set; } = null!;
    public virtual Carrier? Carrier { get; set; }
    public virtual ShippingZone? ShippingZone { get; set; }
    public virtual ICollection<ShipmentItem> Items { get; set; } = new List<ShipmentItem>();
    public virtual ICollection<ShipmentTracking> TrackingHistory { get; set; } = new List<ShipmentTracking>();
}
