using ECommerce.Domain.Entities.Shipping;

namespace ECommerce.Domain.Entities.Localization;

/// <summary>
/// Translation for ShippingZone entity.
/// </summary>
public class ShippingZoneTranslation
{
    public int Id { get; set; }
    public int ShippingZoneId { get; set; }
    public string LanguageCode { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    // Navigation
    public ShippingZone ShippingZone { get; set; } = null!;
    public Language Language { get; set; } = null!;
}
