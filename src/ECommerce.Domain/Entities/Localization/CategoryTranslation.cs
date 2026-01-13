using ECommerce.Domain.Entities.Catalog;

namespace ECommerce.Domain.Entities.Localization;

/// <summary>
/// Translation for Category entity.
/// </summary>
public class CategoryTranslation
{
    public int Id { get; set; }
    public int CategoryId { get; set; }
    public string LanguageCode { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string Slug { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    // Navigation
    public Category Category { get; set; } = null!;
    public Language Language { get; set; } = null!;
}
