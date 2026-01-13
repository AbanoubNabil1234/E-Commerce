using ECommerce.Domain.Common;
using ECommerce.Domain.Entities.Inventory;
using ECommerce.Domain.Entities.Localization;
using ECommerce.Domain.Entities.Orders;

namespace ECommerce.Domain.Entities.Catalog;

/// <summary>
/// Core product entity with brand and category relationships.
/// </summary>
public class Product : BaseEntity, ISoftDeletable
{
    public int BrandId { get; set; }
    public int CategoryId { get; set; }
    public string SKU { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? ShortDescription { get; set; }
    public decimal UnitPrice { get; set; }
    public decimal? CostPrice { get; set; }
    public decimal? Weight { get; set; }
    public decimal? Length { get; set; }
    public decimal? Width { get; set; }
    public decimal? Height { get; set; }
    public string? ImageUrl { get; set; }
    public bool IsActive { get; set; } = true;
    public bool IsFeatured { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string? DeletedBy { get; set; }

    // Navigation
    public virtual Brand Brand { get; set; } = null!;
    public virtual Category Category { get; set; } = null!;
    public virtual ICollection<ProductImage> Images { get; set; } = new List<ProductImage>();
    public virtual ICollection<ProductStock> Stocks { get; set; } = new List<ProductStock>();
    public virtual ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
    public virtual ICollection<ProductTranslation> Translations { get; set; } = new List<ProductTranslation>();
}
