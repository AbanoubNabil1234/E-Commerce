using ECommerce.Domain.Common;
using ECommerce.Domain.Entities.Inventory;

namespace ECommerce.Domain.Entities.Warehouses;

/// <summary>
/// Bin - smallest storage location unit.
/// </summary>
public class Bin : BaseEntity, ISoftDeletable
{
    public int ShelfId { get; set; }
    public string Code { get; set; } = string.Empty;
    public string? Barcode { get; set; }
    public int? MaxQuantity { get; set; }
    public bool IsActive { get; set; } = true;
    public DateTime? DeletedAt { get; set; }
    public string? DeletedBy { get; set; }

    // Navigation
    public virtual Shelf Shelf { get; set; } = null!;
    public virtual ICollection<ProductStock> Stocks { get; set; } = new List<ProductStock>();
}
