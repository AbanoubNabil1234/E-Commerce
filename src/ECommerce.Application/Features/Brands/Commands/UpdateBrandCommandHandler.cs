using MediatR;
using ECommerce.Application.DTOs.Catalog;
using ECommerce.Application.Interfaces.Services;

namespace ECommerce.Application.Features.Brands.Commands;

public class UpdateBrandCommandHandler : IRequestHandler<UpdateBrandCommand, BrandDto>
{
    private readonly IBrandService _brandService;

    public UpdateBrandCommandHandler(IBrandService brandService)
    {
        _brandService = brandService;
    }

    public async Task<BrandDto> Handle(UpdateBrandCommand request, CancellationToken cancellationToken)
    {
        var dto = new UpdateBrandDto
        {
            Id = request.Id,
            Name = request.Name,
            Slug = request.Slug,
            Description = request.Description,
            LogoUrl = request.LogoUrl,
            Website = request.Website,
            IsActive = request.IsActive,
            Translations = request.Translations
        };

        return await _brandService.UpdateAsync(dto, cancellationToken);
    }
}
