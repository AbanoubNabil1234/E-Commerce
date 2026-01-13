using MediatR;
using ECommerce.Application.DTOs.Catalog;

namespace ECommerce.Application.Features.Brands.Commands;

/// <summary>
/// Command to create a new brand.
/// </summary>
public class CreateBrandCommand : IRequest<BrandDto>
{
    public string Name { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? LogoUrl { get; set; }
    public string? Website { get; set; }
    public List<BrandTranslationDto> Translations { get; set; } = new();
}
