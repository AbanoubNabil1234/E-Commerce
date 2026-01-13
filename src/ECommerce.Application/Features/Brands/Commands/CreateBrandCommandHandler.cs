using MediatR;
using ECommerce.Application.DTOs.Catalog;
using ECommerce.Application.Interfaces.Services;

namespace ECommerce.Application.Features.Brands.Commands;

public class CreateBrandCommandHandler : IRequestHandler<CreateBrandCommand, BrandDto>
{
    private readonly IBrandService _brandService;

    public CreateBrandCommandHandler(IBrandService brandService)
    {
        _brandService = brandService;
    }

    public async Task<BrandDto> Handle(CreateBrandCommand request, CancellationToken cancellationToken)
    {
        var dto = new CreateBrandDto
        {
            Name = request.Name,
            Slug = request.Slug,
            Description = request.Description,
            LogoUrl = request.LogoUrl,
            Website = request.Website,
            Translations = request.Translations
        };

        return await _brandService.CreateAsync(dto, cancellationToken);
    }
}
