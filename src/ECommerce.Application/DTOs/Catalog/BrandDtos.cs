namespace ECommerce.Application.DTOs.Catalog;

/// <summary>
/// DTO for Brand entity.
/// </summary>
public class BrandDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? LogoUrl { get; set; }
    public string? Website { get; set; }
    public bool IsActive { get; set; }
}

/// <summary>
/// DTO for creating a new brand.
/// </summary>
public class CreateBrandDto
{
    public string Name { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? LogoUrl { get; set; }
    public string? Website { get; set; }
    public List<BrandTranslationDto> Translations { get; set; } = new();
}

/// <summary>
/// DTO for updating an existing brand.
/// </summary>
public class UpdateBrandDto
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

/// <summary>
/// DTO for brand translation.
/// </summary>
public class BrandTranslationDto
{
    public int? Id { get; set; }
    public string LanguageCode { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string Slug { get; set; } = string.Empty;
}

/// <summary>
/// DTO for localized brand (resolved for specific language).
/// </summary>
public class LocalizedBrandDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? LogoUrl { get; set; }
    public string? Website { get; set; }
    public string LanguageCode { get; set; } = string.Empty;
    public bool IsActive { get; set; }
}

/// <summary>
/// DTO for paged brand list.
/// </summary>
public class BrandListDto
{
    public List<LocalizedBrandDto> Items { get; set; } = new();
    public int TotalCount { get; set; }
    public int PageNumber { get; set; }
    public int PageSize { get; set; }
    public int TotalPages => (int)Math.Ceiling((double)TotalCount / PageSize);
    public bool HasPreviousPage => PageNumber > 1;
    public bool HasNextPage => PageNumber < TotalPages;
}
