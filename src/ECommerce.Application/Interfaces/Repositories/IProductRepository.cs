using ECommerce.Domain.Entities.Catalog;
using ECommerce.Domain.Entities.Localization;

namespace ECommerce.Application.Interfaces.Repositories;

/// <summary>
/// Repository interface for Product entity with multilingual and image support.
/// </summary>
public interface IProductRepository
{
    #region Basic CRUD

    Task<Product?> GetByIdAsync(int id, CancellationToken cancellationToken = default);
    Task<Product?> GetByIdWithDetailsAsync(int id, CancellationToken cancellationToken = default);
    Task<Product?> GetBySlugAsync(string slug, CancellationToken cancellationToken = default);
    Task<Product?> GetBySKUAsync(string sku, CancellationToken cancellationToken = default);
    Task<IReadOnlyList<Product>> GetAllAsync(CancellationToken cancellationToken = default);
    Task<IReadOnlyList<Product>> GetActiveAsync(CancellationToken cancellationToken = default);
    Task<IReadOnlyList<Product>> GetFeaturedAsync(int count, CancellationToken cancellationToken = default);

    #endregion

    #region Paginated Queries

    Task<(IReadOnlyList<Product> Items, int TotalCount)> GetPagedAsync(
        int pageNumber,
        int pageSize,
        string? searchTerm = null,
        int? brandId = null,
        int? categoryId = null,
        decimal? minPrice = null,
        decimal? maxPrice = null,
        bool? isActive = null,
        bool? isFeatured = null,
        string? sortBy = null,
        bool sortDescending = false,
        CancellationToken cancellationToken = default);

    Task<IReadOnlyList<Product>> GetByBrandAsync(int brandId, CancellationToken cancellationToken = default);
    Task<IReadOnlyList<Product>> GetByCategoryAsync(int categoryId, CancellationToken cancellationToken = default);

    #endregion

    #region Create/Update/Delete

    Task<Product> AddAsync(Product product, CancellationToken cancellationToken = default);
    Task UpdateAsync(Product product, CancellationToken cancellationToken = default);
    Task DeleteAsync(Product product, CancellationToken cancellationToken = default);
    Task SoftDeleteAsync(int id, string deletedBy, CancellationToken cancellationToken = default);
    Task RestoreAsync(int id, CancellationToken cancellationToken = default);
    Task UpdateStatusAsync(int id, bool isActive, CancellationToken cancellationToken = default);

    #endregion

    #region Translations

    Task<ProductTranslation?> GetTranslationAsync(int productId, string languageCode, CancellationToken cancellationToken = default);
    Task<IReadOnlyList<ProductTranslation>> GetTranslationsAsync(int productId, CancellationToken cancellationToken = default);
    Task<ProductTranslation> AddTranslationAsync(ProductTranslation translation, CancellationToken cancellationToken = default);
    Task UpdateTranslationAsync(ProductTranslation translation, CancellationToken cancellationToken = default);
    Task DeleteTranslationAsync(int translationId, CancellationToken cancellationToken = default);

    #endregion

    #region Images

    Task<ProductImage?> GetImageByIdAsync(int imageId, CancellationToken cancellationToken = default);
    Task<IReadOnlyList<ProductImage>> GetImagesAsync(int productId, CancellationToken cancellationToken = default);
    Task<ProductImage> AddImageAsync(ProductImage image, CancellationToken cancellationToken = default);
    Task UpdateImageAsync(ProductImage image, CancellationToken cancellationToken = default);
    Task DeleteImageAsync(int imageId, CancellationToken cancellationToken = default);
    Task SetPrimaryImageAsync(int productId, int imageId, CancellationToken cancellationToken = default);
    Task ReorderImagesAsync(int productId, IEnumerable<int> imageIds, CancellationToken cancellationToken = default);

    #endregion

    #region Validation

    Task<bool> ExistsAsync(int id, CancellationToken cancellationToken = default);
    Task<bool> SKUExistsAsync(string sku, int? excludeId = null, CancellationToken cancellationToken = default);
    Task<bool> SlugExistsAsync(string slug, int? excludeId = null, CancellationToken cancellationToken = default);

    #endregion
}
