using ECommerce.Application.DTOs.Catalog;

namespace ECommerce.Application.Interfaces.Services;

/// <summary>
/// Service interface for Brand management with multilingual support.
/// </summary>
public interface IBrandService
{
    // Queries
    Task<BrandDto?> GetByIdAsync(int id, CancellationToken cancellationToken = default);
    Task<LocalizedBrandDto?> GetByIdLocalizedAsync(int id, string languageCode, CancellationToken cancellationToken = default);
    Task<LocalizedBrandDto?> GetBySlugAsync(string slug, string languageCode, CancellationToken cancellationToken = default);
    Task<BrandListDto> GetPagedAsync(int pageNumber, int pageSize, string? searchTerm, bool? isActive, string languageCode, CancellationToken cancellationToken = default);
    Task<IReadOnlyList<LocalizedBrandDto>> GetAllActiveAsync(string languageCode, CancellationToken cancellationToken = default);
    
    // Commands
    Task<BrandDto> CreateAsync(CreateBrandDto dto, CancellationToken cancellationToken = default);
    Task<BrandDto> UpdateAsync(UpdateBrandDto dto, CancellationToken cancellationToken = default);
    Task DeleteAsync(int id, CancellationToken cancellationToken = default);
    Task SoftDeleteAsync(int id, string deletedBy, CancellationToken cancellationToken = default);
    Task RestoreAsync(int id, CancellationToken cancellationToken = default);
    
    // Translations
    Task<BrandTranslationDto> AddTranslationAsync(int brandId, BrandTranslationDto dto, CancellationToken cancellationToken = default);
    Task<BrandTranslationDto> UpdateTranslationAsync(int brandId, BrandTranslationDto dto, CancellationToken cancellationToken = default);
    Task DeleteTranslationAsync(int brandId, string languageCode, CancellationToken cancellationToken = default);
    
    // Validation
    Task<bool> ExistsAsync(int id, CancellationToken cancellationToken = default);
    Task<bool> SlugExistsAsync(string slug, int? excludeId = null, CancellationToken cancellationToken = default);
}
