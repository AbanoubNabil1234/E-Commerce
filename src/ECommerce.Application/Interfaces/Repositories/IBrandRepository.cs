using ECommerce.Domain.Entities.Catalog;
using ECommerce.Domain.Entities.Localization;

namespace ECommerce.Application.Interfaces.Repositories;

/// <summary>
/// Repository interface for Brand entity with multilingual support.
/// </summary>
public interface IBrandRepository
{
    // Basic CRUD
    Task<Brand?> GetByIdAsync(int id, CancellationToken cancellationToken = default);
    Task<Brand?> GetByIdWithTranslationsAsync(int id, CancellationToken cancellationToken = default);
    Task<Brand?> GetBySlugAsync(string slug, string languageCode, CancellationToken cancellationToken = default);
    Task<IReadOnlyList<Brand>> GetAllAsync(CancellationToken cancellationToken = default);
    Task<IReadOnlyList<Brand>> GetAllWithTranslationsAsync(string languageCode, CancellationToken cancellationToken = default);
    Task<IReadOnlyList<Brand>> GetActiveAsync(CancellationToken cancellationToken = default);
    
    // Paged
    Task<(IReadOnlyList<Brand> Items, int TotalCount)> GetPagedAsync(
        int pageNumber, 
        int pageSize, 
        string? searchTerm = null,
        bool? isActive = null,
        CancellationToken cancellationToken = default);
    
    // Create/Update/Delete
    Task<Brand> AddAsync(Brand brand, CancellationToken cancellationToken = default);
    Task UpdateAsync(Brand brand, CancellationToken cancellationToken = default);
    Task DeleteAsync(Brand brand, CancellationToken cancellationToken = default);
    Task SoftDeleteAsync(int id, string deletedBy, CancellationToken cancellationToken = default);
    
    // Translations
    Task<BrandTranslation?> GetTranslationAsync(int brandId, string languageCode, CancellationToken cancellationToken = default);
    Task<BrandTranslation> AddTranslationAsync(BrandTranslation translation, CancellationToken cancellationToken = default);
    Task UpdateTranslationAsync(BrandTranslation translation, CancellationToken cancellationToken = default);
    Task DeleteTranslationAsync(int translationId, CancellationToken cancellationToken = default);
    
    // Validation
    Task<bool> ExistsAsync(int id, CancellationToken cancellationToken = default);
    Task<bool> SlugExistsAsync(string slug, int? excludeId = null, CancellationToken cancellationToken = default);
    Task<bool> TranslationSlugExistsAsync(string slug, string languageCode, int? excludeBrandId = null, CancellationToken cancellationToken = default);
}
