using MediatR;
using ECommerce.Application.DTOs.Catalog;

namespace ECommerce.Application.Features.Brands.Commands;

/// <summary>
/// Command to update an existing brand.
/// </summary>
public class UpdateBrandCommand : IRequest<BrandDto>
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? LogoUrl { get; set; }
    public string? Website { get; set; }
    public bool IsActive { get; set; }
    public List<BrandTranslationDto> Translations { get; set; } = new();
}
