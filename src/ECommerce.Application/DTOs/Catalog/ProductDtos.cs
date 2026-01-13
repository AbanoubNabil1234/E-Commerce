namespace ECommerce.Application.DTOs.Catalog;

/// <summary>
/// Product data transfer object with full details.
/// </summary>
public class ProductDto
{
    public int Id { get; set; }
    public string SKU { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string? ShortDescription { get; set; }
    public string? Description { get; set; }
    public decimal UnitPrice { get; set; }
    public decimal? CostPrice { get; set; }
    public decimal? Weight { get; set; }
    public decimal? Length { get; set; }
    public decimal? Width { get; set; }
    public decimal? Height { get; set; }
    public bool IsActive { get; set; }
    public bool IsFeatured { get; set; }
    public int BrandId { get; set; }
    public string BrandName { get; set; } = string.Empty;
    public int CategoryId { get; set; }
    public string CategoryName { get; set; } = string.Empty;
    public string? PrimaryImageUrl { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }
    public List<ProductImageDto> Images { get; set; } = new();
    public List<ProductTranslationDto> Translations { get; set; } = new();
}

/// <summary>
/// Localized product DTO for language-specific responses.
/// </summary>
public class LocalizedProductDto
{
    public int Id { get; set; }
    public string SKU { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string? ShortDescription { get; set; }
    public string? Description { get; set; }
    public decimal UnitPrice { get; set; }
    public bool IsActive { get; set; }
    public bool IsFeatured { get; set; }
    public int BrandId { get; set; }
    public string BrandName { get; set; } = string.Empty;
    public int CategoryId { get; set; }
    public string CategoryName { get; set; } = string.Empty;
    public string? PrimaryImageUrl { get; set; }
    public string LanguageCode { get; set; } = "en";
    public List<ProductImageDto> Images { get; set; } = new();
}

/// <summary>
/// Paginated product list response.
/// </summary>
public class ProductListDto
{
    public IReadOnlyList<LocalizedProductDto> Items { get; set; } = new List<LocalizedProductDto>();
    public int TotalCount { get; set; }
    public int PageNumber { get; set; }
    public int PageSize { get; set; }
    public int TotalPages => (int)Math.Ceiling(TotalCount / (double)PageSize);
    public bool HasPreviousPage => PageNumber > 1;
    public bool HasNextPage => PageNumber < TotalPages;
}

/// <summary>
/// Product translation DTO.
/// </summary>
public class ProductTranslationDto
{
    public int? Id { get; set; }
    public string LanguageCode { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string? ShortDescription { get; set; }
    public string? Description { get; set; }
    public string? MetaTitle { get; set; }
    public string? MetaDescription { get; set; }
    public string? MetaKeywords { get; set; }
}

/// <summary>
/// Product image DTO.
/// </summary>
public class ProductImageDto
{
    public int? Id { get; set; }
    public string ImageUrl { get; set; } = string.Empty;
    public string? AltText { get; set; }
    public int DisplayOrder { get; set; }
    public bool IsPrimary { get; set; }
}

/// <summary>
/// Create product request DTO.
/// </summary>
public class CreateProductDto
{
    public string SKU { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public decimal UnitPrice { get; set; }
    public decimal? CostPrice { get; set; }
    public decimal? Weight { get; set; }
    public decimal? Length { get; set; }
    public decimal? Width { get; set; }
    public decimal? Height { get; set; }
    public int BrandId { get; set; }
    public int CategoryId { get; set; }
    public bool IsFeatured { get; set; }
    public List<ProductTranslationDto> Translations { get; set; } = new();
    public List<ProductImageDto> Images { get; set; } = new();
}

/// <summary>
/// Update product request DTO.
/// </summary>
public class UpdateProductDto
{
    public int Id { get; set; }
    public string SKU { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public decimal UnitPrice { get; set; }
    public decimal? CostPrice { get; set; }
    public decimal? Weight { get; set; }
    public decimal? Length { get; set; }
    public decimal? Width { get; set; }
    public decimal? Height { get; set; }
    public int BrandId { get; set; }
    public int CategoryId { get; set; }
    public bool IsActive { get; set; }
    public bool IsFeatured { get; set; }
    public List<ProductTranslationDto> Translations { get; set; } = new();
    public List<ProductImageDto> Images { get; set; } = new();
}
