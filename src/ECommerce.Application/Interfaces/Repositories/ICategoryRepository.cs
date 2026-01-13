using ECommerce.Domain.Entities.Catalog;
using ECommerce.Domain.Entities.Localization;

namespace ECommerce.Application.Interfaces.Repositories;

public interface ICategoryRepository
{
    // Basic CRUD
    Task<Category?> GetByIdAsync(int id, CancellationToken cancellationToken = default);
    Task<Category?> GetByIdWithTranslationsAsync(int id, CancellationToken cancellationToken = default);
    Task<Category?> GetBySlugAsync(string slug, string languageCode, CancellationToken cancellationToken = default);
    Task<IReadOnlyList<Category>> GetAllAsync(CancellationToken cancellationToken = default);
    Task<IReadOnlyList<Category>> GetAllWithTranslationsAsync(string languageCode, CancellationToken cancellationToken = default);
    
    // Paged
    Task<(IReadOnlyList<Category> Items, int TotalCount)> GetPagedAsync(
        int pageNumber, 
        int pageSize, 
        string? searchTerm = null, 
        bool? isActive = null,
        int? parentId = null,
        CancellationToken cancellationToken = default);

    // Hierarchy
    Task<IReadOnlyList<Category>> GetRootCategoriesAsync(string languageCode, CancellationToken cancellationToken = default);
    Task<IReadOnlyList<Category>> GetChildrenAsync(int parentId, string languageCode, CancellationToken cancellationToken = default);

    // Write
    Task<Category> AddAsync(Category category, CancellationToken cancellationToken = default);
    Task UpdateAsync(Category category, CancellationToken cancellationToken = default);
    Task DeleteAsync(Category category, CancellationToken cancellationToken = default);
    Task SoftDeleteAsync(int id, string deletedBy, CancellationToken cancellationToken = default);

    // Translations
    Task<CategoryTranslation?> GetTranslationAsync(int categoryId, string languageCode, CancellationToken cancellationToken = default);
    Task<CategoryTranslation> AddTranslationAsync(CategoryTranslation translation, CancellationToken cancellationToken = default);
    Task UpdateTranslationAsync(CategoryTranslation translation, CancellationToken cancellationToken = default);
    Task DeleteTranslationAsync(int translationId, CancellationToken cancellationToken = default);

    // Validation
    Task<bool> ExistsAsync(int id, CancellationToken cancellationToken = default);
    Task<bool> SlugExistsAsync(string slug, int? excludeId = null, CancellationToken cancellationToken = default);
}
