using MediatR;
using ECommerce.Application.DTOs.Catalog;

namespace ECommerce.Application.Features.Products.Commands.UpdateProduct;

/// <summary>
/// Command to update an existing product.
/// </summary>
public class UpdateProductCommand : IRequest<ProductDto>
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
