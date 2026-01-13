using ECommerce.Domain.Common;
using ECommerce.Domain.Entities.Catalog;
using ECommerce.Domain.Entities.Warehouses;

namespace ECommerce.Domain.Entities.Inventory;

/// <summary>
/// Represents the CURRENT state of inventory for a specific product in a warehouse.
/// </summary>
public class ProductStock : BaseEntity
{
    public int ProductId { get; set; }
    public int WarehouseId { get; set; }
    
    public decimal QuantityOnHand { get; set; }
    public decimal QuantityReserved { get; set; }
    public int? ReorderLevel { get; set; }

    /// <summary>
    /// Computed available quantity (not mapped to DB column directly if possible, or computed).
    /// Fluent API will configure this as ignored or computed.
    /// </summary>
    public decimal QuantityAvailable => QuantityOnHand - QuantityReserved;

    // Navigation
    public virtual Product Product { get; set; } = null!;
    public virtual Warehouse Warehouse { get; set; } = null!;
}
