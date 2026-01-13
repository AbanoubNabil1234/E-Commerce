using ECommerce.Domain.Common;
using ECommerce.Domain.Entities.Warehouses;
using ECommerce.Domain.Enums;

namespace ECommerce.Domain.Entities.Orders;

/// <summary>
/// Customer order header with warehouse-based inventory integration.
/// </summary>
public class Order : AuditableEntity
{
    public string OrderNumber { get; set; } = string.Empty;
    public string CustomerId { get; set; } = string.Empty; // AspNetUsers.Id
    
    /// <summary>
    /// Warehouse from which this order will be fulfilled.
    /// Required for inventory operations (Reserve/Release/Commit).
    /// </summary>
    public int? WarehouseId { get; set; }
    
    public OrderStatus OrderStatus { get; set; } = OrderStatus.Draft;
    public PaymentStatus PaymentStatus { get; set; } = PaymentStatus.Pending;
    
    public decimal SubTotal { get; set; }
    public decimal TaxAmount { get; set; }
    public decimal ShippingAmount { get; set; }
    public decimal DiscountAmount { get; set; }
    public decimal TotalAmount { get; set; }
    public string Currency { get; set; } = "USD";

    // Shipping Address (denormalized for historical accuracy)
    public string ShippingName { get; set; } = string.Empty;
    public string ShippingAddress { get; set; } = string.Empty;
    public string ShippingCity { get; set; } = string.Empty;
    public string? ShippingState { get; set; }
    public string ShippingCountry { get; set; } = string.Empty;
    public string? ShippingPostalCode { get; set; }
    public string? ShippingPhone { get; set; }

    public string? Notes { get; set; }
    
    // Workflow timestamps
    public DateTime? ConfirmedAt { get; set; }
    public DateTime? ShippedAt { get; set; }
    public DateTime? DeliveredAt { get; set; }
    public DateTime? CancelledAt { get; set; }
    public string? CancellationReason { get; set; }

    // Navigation
    public virtual Warehouse? Warehouse { get; set; }
    public virtual ICollection<OrderItem> Items { get; set; } = new List<OrderItem>();
    public virtual ICollection<SubOrder> SubOrders { get; set; } = new List<SubOrder>();
}
