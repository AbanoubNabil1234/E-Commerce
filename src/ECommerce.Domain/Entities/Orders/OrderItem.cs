using ECommerce.Domain.Common;
using ECommerce.Domain.Entities.Catalog;

namespace ECommerce.Domain.Entities.Orders;

/// <summary>
/// Line item in an order (product snapshot at order time).
/// </summary>
public class OrderItem : BaseEntity
{
    public int OrderId { get; set; }
    public int ProductId { get; set; }
    public string SKU { get; set; } = string.Empty;           // Snapshot
    public string ProductName { get; set; } = string.Empty;   // Snapshot
    public decimal UnitPrice { get; set; }                    // Snapshot
    public int Quantity { get; set; }
    public decimal DiscountAmount { get; set; }
    public decimal TotalPrice { get; set; }

    // Navigation
    public virtual Order Order { get; set; } = null!;
    public virtual Product Product { get; set; } = null!;
    public virtual ICollection<SubOrderItem> SubOrderItems { get; set; } = new List<SubOrderItem>();
}
