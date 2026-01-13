using ECommerce.Domain.Entities.Catalog;

namespace ECommerce.Domain.Entities.Localization;

/// <summary>
/// Translation for Product entity.
/// </summary>
public class ProductTranslation
{
    public int Id { get; set; }
    public int ProductId { get; set; }
    public string LanguageCode { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string? ShortDescription { get; set; }
    public string? Description { get; set; }
    public string? MetaTitle { get; set; }
    public string? MetaDescription { get; set; }
    public string? MetaKeywords { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    // Navigation
    public Product Product { get; set; } = null!;
    public Language Language { get; set; } = null!;
}
