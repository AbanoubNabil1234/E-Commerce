using ECommerce.Domain.Common;
using ECommerce.Domain.Entities.Catalog;
using ECommerce.Domain.Entities.Warehouses;

namespace ECommerce.Domain.Entities.Orders;

/// <summary>
/// Items allocated to each sub-order for fulfillment.
/// </summary>
public class SubOrderItem : BaseEntity
{
    public int SubOrderId { get; set; }
    public int OrderItemId { get; set; }
    public int ProductId { get; set; }
    public int? BinId { get; set; }
    public int Quantity { get; set; }
    public int PickedQuantity { get; set; }

    // Navigation
    public virtual SubOrder SubOrder { get; set; } = null!;
    public virtual OrderItem OrderItem { get; set; } = null!;
    public virtual Product Product { get; set; } = null!;
    public virtual Bin? Bin { get; set; }
}
