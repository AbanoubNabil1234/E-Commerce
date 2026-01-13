using ECommerce.Domain.Common;
using ECommerce.Domain.Entities.Catalog;
using ECommerce.Domain.Entities.Warehouses;
using ECommerce.Domain.Enums;

namespace ECommerce.Domain.Entities.Inventory;

/// <summary>
/// Represents an IMMUTABLE audit log of all inventory changes.
/// </summary>
public class StockMovement : BaseEntity
{
    public int ProductId { get; set; }
    public int WarehouseId { get; set; }
    public MovementType MovementType { get; set; }
    public decimal Quantity { get; set; }
    public string? Reason { get; set; }
    public string? ReferenceType { get; set; }
    public int? ReferenceId { get; set; }
    
    // Auditing
    public string CreatedBy { get; set; } = string.Empty;

    // Navigation
    public virtual Product Product { get; set; } = null!;
    public virtual Warehouse Warehouse { get; set; } = null!;
}
