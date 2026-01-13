using ECommerce.Application.DTOs.Catalog;

namespace ECommerce.Application.Interfaces.Services;

public interface ICategoryService
{
    // Queries
    Task<CategoryDto?> GetByIdAsync(int id, CancellationToken cancellationToken = default);
    Task<LocalizedCategoryDto?> GetByIdLocalizedAsync(int id, string languageCode, CancellationToken cancellationToken = default);
    Task<LocalizedCategoryDto?> GetBySlugAsync(string slug, string languageCode, CancellationToken cancellationToken = default);
    Task<CategoryListDto> GetPagedAsync(
        int pageNumber, 
        int pageSize, 
        string? searchTerm, 
        bool? isActive, 
        string languageCode,
        CancellationToken cancellationToken = default);
    
    Task<IReadOnlyList<LocalizedCategoryDto>> GetDropdownAsync(string languageCode, CancellationToken cancellationToken = default);

    // Commands
    Task<CategoryDto> CreateAsync(CreateCategoryDto dto, CancellationToken cancellationToken = default);
    Task<CategoryDto> UpdateAsync(UpdateCategoryDto dto, CancellationToken cancellationToken = default);
    Task DeleteAsync(int id, CancellationToken cancellationToken = default);
    Task SoftDeleteAsync(int id, string deletedBy, CancellationToken cancellationToken = default);
    
    // Translations
    Task<CategoryTranslationDto> AddTranslationAsync(int categoryId, CategoryTranslationDto dto, CancellationToken cancellationToken = default);
    Task<CategoryTranslationDto> UpdateTranslationAsync(int categoryId, CategoryTranslationDto dto, CancellationToken cancellationToken = default);
    Task DeleteTranslationAsync(int categoryId, string languageCode, CancellationToken cancellationToken = default);

    // Validation
    Task<bool> ExistsAsync(int id, CancellationToken cancellationToken = default);
    Task<bool> SlugExistsAsync(string slug, int? excludeId = null, CancellationToken cancellationToken = default);
}
