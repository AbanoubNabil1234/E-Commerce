using ECommerce.Domain.Entities.Shipping;

namespace ECommerce.Domain.Entities.Localization;

/// <summary>
/// Translation for Carrier entity.
/// </summary>
public class CarrierTranslation
{
    public int Id { get; set; }
    public int CarrierId { get; set; }
    public string LanguageCode { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    // Navigation
    public Carrier Carrier { get; set; } = null!;
    public Language Language { get; set; } = null!;
}
