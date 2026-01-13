using ECommerce.Domain.Entities.Warehouses;

namespace ECommerce.Domain.Entities.Localization;

/// <summary>
/// Translation for Zone entity.
/// </summary>
public class ZoneTranslation
{
    public int Id { get; set; }
    public int ZoneId { get; set; }
    public string LanguageCode { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    // Navigation
    public Zone Zone { get; set; } = null!;
    public Language Language { get; set; } = null!;
}
