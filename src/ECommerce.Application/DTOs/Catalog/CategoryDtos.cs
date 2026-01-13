namespace ECommerce.Application.DTOs.Catalog;

/// <summary>
/// DTO for Category entity.
/// </summary>
public class CategoryDto
{
    public int Id { get; set; }
    public int? ParentId { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? ImageUrl { get; set; }
    public int DisplayOrder { get; set; }
    public bool IsActive { get; set; }
}

/// <summary>
/// DTO for creating a new category.
/// </summary>
public class CreateCategoryDto
{
    public int? ParentId { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? ImageUrl { get; set; }
    public int DisplayOrder { get; set; }
    public List<CategoryTranslationDto> Translations { get; set; } = new();
}

/// <summary>
/// DTO for updating an existing category.
/// </summary>
public class UpdateCategoryDto
{
    public int Id { get; set; }
    public int? ParentId { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? ImageUrl { get; set; }
    public int DisplayOrder { get; set; }
    public bool IsActive { get; set; }
    public List<CategoryTranslationDto> Translations { get; set; } = new();
}

/// <summary>
/// DTO for category translation.
/// </summary>
public class CategoryTranslationDto
{
    public int? Id { get; set; }
    public string LanguageCode { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string Slug { get; set; } = string.Empty;
}

/// <summary>
/// DTO for localized category (resolved for specific language).
/// </summary>
public class LocalizedCategoryDto
{
    public int Id { get; set; }
    public int? ParentId { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? ImageUrl { get; set; }
    public int DisplayOrder { get; set; }
    public int Level { get; set; } // Hierarchy Level
    public string LanguageCode { get; set; } = string.Empty;
    public bool IsActive { get; set; }
    public int ProductsCount { get; set; } // Optional
    public string? ParentName { get; set; } // Optional
}

/// <summary>
/// DTO for paged category list.
/// </summary>
public class CategoryListDto
{
    public List<LocalizedCategoryDto> Items { get; set; } = new();
    public int TotalCount { get; set; }
    public int PageNumber { get; set; }
    public int PageSize { get; set; }
    public int TotalPages => (int)Math.Ceiling((double)TotalCount / PageSize);
    public bool HasPreviousPage => PageNumber > 1;
    public bool HasNextPage => PageNumber < TotalPages;
}
