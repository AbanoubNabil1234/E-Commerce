using ECommerce.Domain.Common;
using ECommerce.Domain.Entities.Localization;
using ECommerce.Domain.Enums;

namespace ECommerce.Domain.Entities.Warehouses;

/// <summary>
/// Zone within a warehouse (e.g., Receiving, Shipping, Storage).
/// </summary>
public class Zone : BaseEntity, ISoftDeletable
{
    public int WarehouseId { get; set; }
    public string Code { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public ZoneType ZoneType { get; set; }
    public bool IsActive { get; set; } = true;
    public DateTime? DeletedAt { get; set; }
    public string? DeletedBy { get; set; }

    // Navigation
    public virtual Warehouse Warehouse { get; set; } = null!;
    public virtual ICollection<Aisle> Aisles { get; set; } = new List<Aisle>();
    public virtual ICollection<ZoneTranslation> Translations { get; set; } = new List<ZoneTranslation>();
}
