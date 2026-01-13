using ECommerce.Domain.Common;

namespace ECommerce.Domain.Entities.Catalog;

/// <summary>
/// Product images with primary image support.
/// </summary>
public class ProductImage : BaseEntity
{
    public int ProductId { get; set; }
    public string ImageUrl { get; set; } = string.Empty;
    public string? AltText { get; set; }
    public int DisplayOrder { get; set; }
    public bool IsPrimary { get; set; }

    // Navigation
    public virtual Product Product { get; set; } = null!;
}
