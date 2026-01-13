using ECommerce.Domain.Common;
using ECommerce.Domain.Entities.Catalog;

namespace ECommerce.Domain.Entities.Shipping;

/// <summary>
/// Line item in a shipment - tracks quantity shipped per product.
/// </summary>
public class ShipmentItem : BaseEntity
{
    public int ShipmentId { get; set; }
    public int ProductId { get; set; }
    public int Quantity { get; set; }
    
    // For partial shipments - tracks which order item this relates to
    public int? OrderItemId { get; set; }

    // Navigation
    public virtual Shipment Shipment { get; set; } = null!;
    public virtual Product Product { get; set; } = null!;
}
