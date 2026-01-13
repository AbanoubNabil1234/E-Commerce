using MediatR;
using ECommerce.Application.DTOs.Catalog;
using ECommerce.Application.Interfaces.Services;

namespace ECommerce.Application.Features.Products.Commands.UpdateProduct;

/// <summary>
/// Handler for UpdateProductCommand.
/// </summary>
public class UpdateProductCommandHandler : IRequestHandler<UpdateProductCommand, ProductDto>
{
    private readonly IProductService _productService;

    public UpdateProductCommandHandler(IProductService productService)
    {
        _productService = productService;
    }

    public async Task<ProductDto> Handle(UpdateProductCommand request, CancellationToken cancellationToken)
    {
        var dto = new UpdateProductDto
        {
            Id = request.Id,
            SKU = request.SKU,
            Slug = request.Slug,
            UnitPrice = request.UnitPrice,
            CostPrice = request.CostPrice,
            Weight = request.Weight,
            Length = request.Length,
            Width = request.Width,
            Height = request.Height,
            BrandId = request.BrandId,
            CategoryId = request.CategoryId,
            IsActive = request.IsActive,
            IsFeatured = request.IsFeatured,
            Translations = request.Translations,
            Images = request.Images
        };

        return await _productService.UpdateAsync(dto, cancellationToken);
    }
}
