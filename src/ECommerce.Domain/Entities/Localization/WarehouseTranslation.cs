using ECommerce.Domain.Entities.Warehouses;

namespace ECommerce.Domain.Entities.Localization;

/// <summary>
/// Translation for Warehouse entity.
/// </summary>
public class WarehouseTranslation
{
    public int Id { get; set; }
    public int WarehouseId { get; set; }
    public string LanguageCode { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string? Address { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    // Navigation
    public Warehouse Warehouse { get; set; } = null!;
    public Language Language { get; set; } = null!;
}
