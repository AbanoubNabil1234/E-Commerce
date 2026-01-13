using ECommerce.Domain.Entities.Catalog;

namespace ECommerce.Domain.Entities.Localization;

/// <summary>
/// Translation for Brand entity.
/// </summary>
public class BrandTranslation
{
    public int Id { get; set; }
    public int BrandId { get; set; }
    public string LanguageCode { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string Slug { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    // Navigation
    public Brand Brand { get; set; } = null!;
    public Language Language { get; set; } = null!;
}
