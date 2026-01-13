using ECommerce.Domain.Common;

namespace ECommerce.Domain.Entities.Warehouses;

/// <summary>
/// Aisle (row) within a zone.
/// </summary>
public class Aisle : BaseEntity, ISoftDeletable
{
    public int ZoneId { get; set; }
    public string Code { get; set; } = string.Empty;
    public string? Name { get; set; }
    public bool IsActive { get; set; } = true;
    public DateTime? DeletedAt { get; set; }
    public string? DeletedBy { get; set; }

    // Navigation
    public virtual Zone Zone { get; set; } = null!;
    public virtual ICollection<Shelf> Shelves { get; set; } = new List<Shelf>();
}
