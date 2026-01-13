using MediatR;
using ECommerce.Application.DTOs.Catalog;
using ECommerce.Application.Interfaces.Services;

namespace ECommerce.Application.Features.Products.Commands.CreateProduct;

/// <summary>
/// Handler for CreateProductCommand.
/// </summary>
public class CreateProductCommandHandler : IRequestHandler<CreateProductCommand, ProductDto>
{
    private readonly IProductService _productService;

    public CreateProductCommandHandler(IProductService productService)
    {
        _productService = productService;
    }

    public async Task<ProductDto> Handle(CreateProductCommand request, CancellationToken cancellationToken)
    {
        var dto = new CreateProductDto
        {
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
            IsFeatured = request.IsFeatured,
            Translations = request.Translations,
            Images = request.Images
        };

        return await _productService.CreateAsync(dto, cancellationToken);
    }
}
