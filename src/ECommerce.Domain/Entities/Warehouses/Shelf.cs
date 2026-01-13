using ECommerce.Domain.Common;

namespace ECommerce.Domain.Entities.Warehouses;

/// <summary>
/// Shelf (vertical level) within an aisle.
/// </summary>
public class Shelf : BaseEntity, ISoftDeletable
{
    public int AisleId { get; set; }
    public string Code { get; set; } = string.Empty;
    public int Level { get; set; }
    public decimal? MaxWeight { get; set; }
    public bool IsActive { get; set; } = true;
    public DateTime? DeletedAt { get; set; }
    public string? DeletedBy { get; set; }

    // Navigation
    public virtual Aisle Aisle { get; set; } = null!;
    public virtual ICollection<Bin> Bins { get; set; } = new List<Bin>();
}
