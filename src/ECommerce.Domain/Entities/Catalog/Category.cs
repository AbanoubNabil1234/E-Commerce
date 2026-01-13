using ECommerce.Domain.Common;
using ECommerce.Domain.Entities.Localization;

namespace ECommerce.Domain.Entities.Catalog;

/// <summary>
/// Hierarchical product category with parent-child relationship.
/// </summary>
public class Category : BaseEntity, ISoftDeletable
{
    public int? ParentId { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? ImageUrl { get; set; }
    public int DisplayOrder { get; set; }
    public int Level { get; set; }
    public bool IsActive { get; set; } = true;
    public DateTime? DeletedAt { get; set; }
    public string? DeletedBy { get; set; }

    // Navigation
    public virtual Category? Parent { get; set; }
    public virtual ICollection<Category> Children { get; set; } = new List<Category>();
    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
    public virtual ICollection<CategoryTranslation> Translations { get; set; } = new List<CategoryTranslation>();
}
