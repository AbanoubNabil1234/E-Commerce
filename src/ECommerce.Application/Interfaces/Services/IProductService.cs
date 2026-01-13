using ECommerce.Application.DTOs.Catalog;

namespace ECommerce.Application.Interfaces.Services;

/// <summary>
/// Service interface for Product management with multilingual support.
/// </summary>
public interface IProductService
{
    #region Queries

    Task<ProductDto?> GetByIdAsync(int id, CancellationToken cancellationToken = default);
    Task<LocalizedProductDto?> GetByIdLocalizedAsync(int id, string languageCode, CancellationToken cancellationToken = default);
    Task<LocalizedProductDto?> GetBySlugAsync(string slug, string languageCode, CancellationToken cancellationToken = default);
    Task<LocalizedProductDto?> GetBySKUAsync(string sku, string languageCode, CancellationToken cancellationToken = default);
    
    Task<ProductListDto> GetPagedAsync(
        int pageNumber,
        int pageSize,
        string? searchTerm,
        int? brandId,
        int? categoryId,
        decimal? minPrice,
        decimal? maxPrice,
        bool? isActive,
        bool? isFeatured,
        string? sortBy,
        bool sortDescending,
        string languageCode,
        CancellationToken cancellationToken = default);

    Task<IReadOnlyList<LocalizedProductDto>> GetFeaturedAsync(int count, string languageCode, CancellationToken cancellationToken = default);
    Task<IReadOnlyList<LocalizedProductDto>> GetByBrandAsync(int brandId, string languageCode, CancellationToken cancellationToken = default);
    Task<IReadOnlyList<LocalizedProductDto>> GetByCategoryAsync(int categoryId, string languageCode, CancellationToken cancellationToken = default);

    #endregion

    #region Commands

    Task<ProductDto> CreateAsync(CreateProductDto dto, CancellationToken cancellationToken = default);
    Task<ProductDto> UpdateAsync(UpdateProductDto dto, CancellationToken cancellationToken = default);
    Task DeleteAsync(int id, CancellationToken cancellationToken = default);
    Task SoftDeleteAsync(int id, string deletedBy, CancellationToken cancellationToken = default);
    Task RestoreAsync(int id, CancellationToken cancellationToken = default);
    Task UpdateStatusAsync(int id, bool isActive, CancellationToken cancellationToken = default);

    #endregion

    #region Translations

    Task<ProductTranslationDto> AddTranslationAsync(int productId, ProductTranslationDto dto, CancellationToken cancellationToken = default);
    Task<ProductTranslationDto> UpdateTranslationAsync(int productId, ProductTranslationDto dto, CancellationToken cancellationToken = default);
    Task DeleteTranslationAsync(int productId, string languageCode, CancellationToken cancellationToken = default);

    #endregion

    #region Images

    Task<ProductImageDto> AddImageAsync(int productId, ProductImageDto dto, CancellationToken cancellationToken = default);
    Task<ProductImageDto> UpdateImageAsync(int productId, ProductImageDto dto, CancellationToken cancellationToken = default);
    Task DeleteImageAsync(int productId, int imageId, CancellationToken cancellationToken = default);
    Task SetPrimaryImageAsync(int productId, int imageId, CancellationToken cancellationToken = default);

    #endregion

    #region Validation

    Task<bool> ExistsAsync(int id, CancellationToken cancellationToken = default);
    Task<bool> SKUExistsAsync(string sku, int? excludeId = null, CancellationToken cancellationToken = default);
    Task<bool> SlugExistsAsync(string slug, int? excludeId = null, CancellationToken cancellationToken = default);

    #endregion
}
