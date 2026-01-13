using ECommerce.Domain.Common;
using ECommerce.Domain.Entities.Localization;

namespace ECommerce.Domain.Entities.Catalog;

/// <summary>
/// Product manufacturer/brand entity.
/// </summary>
public class Brand : BaseEntity, ISoftDeletable
{
    public string Name { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? LogoUrl { get; set; }
    public string? Website { get; set; }
    public bool IsActive { get; set; } = true;
    public DateTime? DeletedAt { get; set; }
    public string? DeletedBy { get; set; }

    // Navigation
    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
    public virtual ICollection<BrandTranslation> Translations { get; set; } = new List<BrandTranslation>();
}
