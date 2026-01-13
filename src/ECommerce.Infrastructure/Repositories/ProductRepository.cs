using Microsoft.EntityFrameworkCore;
using ECommerce.Application.Interfaces.Repositories;
using ECommerce.Domain.Entities.Catalog;
using ECommerce.Domain.Entities.Localization;
using ECommerce.Infrastructure.Persistence;

namespace ECommerce.Infrastructure.Repositories;

/// <summary>
/// Repository implementation for Product entity with full CRUD, translations, and images.
/// </summary>
public class ProductRepository : IProductRepository
{
    private readonly ApplicationDbContext _context;

    public ProductRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    #region Basic CRUD

    public async Task<Product?> GetByIdAsync(int id, CancellationToken cancellationToken = default)
    {
        return await _context.Products
            .FirstOrDefaultAsync(p => p.Id == id && p.DeletedAt == null, cancellationToken);
    }

    public async Task<Product?> GetByIdWithDetailsAsync(int id, CancellationToken cancellationToken = default)
    {
        return await _context.Products
            .Include(p => p.Brand)
            .Include(p => p.Category)
            .Include(p => p.Translations)
            .Include(p => p.Images.OrderBy(i => i.DisplayOrder))
            .FirstOrDefaultAsync(p => p.Id == id && p.DeletedAt == null, cancellationToken);
    }

    public async Task<Product?> GetBySlugAsync(string slug, CancellationToken cancellationToken = default)
    {
        return await _context.Products
            .Include(p => p.Brand)
            .Include(p => p.Category)
            .Include(p => p.Translations)
            .Include(p => p.Images.OrderBy(i => i.DisplayOrder))
            .FirstOrDefaultAsync(p => p.Slug == slug && p.DeletedAt == null, cancellationToken);
    }

    public async Task<Product?> GetBySKUAsync(string sku, CancellationToken cancellationToken = default)
    {
        return await _context.Products
            .Include(p => p.Brand)
            .Include(p => p.Category)
            .Include(p => p.Translations)
            .Include(p => p.Images.OrderBy(i => i.DisplayOrder))
            .FirstOrDefaultAsync(p => p.SKU == sku && p.DeletedAt == null, cancellationToken);
    }

    public async Task<IReadOnlyList<Product>> GetAllAsync(CancellationToken cancellationToken = default)
    {
        return await _context.Products
            .Where(p => p.DeletedAt == null)
            .Include(p => p.Brand)
            .Include(p => p.Category)
            .Include(p => p.Translations)
            .Include(p => p.Images.OrderBy(i => i.DisplayOrder))
            .OrderBy(p => p.Name)
            .ToListAsync(cancellationToken);
    }

    public async Task<IReadOnlyList<Product>> GetActiveAsync(CancellationToken cancellationToken = default)
    {
        return await _context.Products
            .Where(p => p.DeletedAt == null && p.IsActive)
            .Include(p => p.Brand)
            .Include(p => p.Category)
            .Include(p => p.Translations)
            .Include(p => p.Images.OrderBy(i => i.DisplayOrder))
            .OrderBy(p => p.Name)
            .ToListAsync(cancellationToken);
    }

    public async Task<IReadOnlyList<Product>> GetFeaturedAsync(int count, CancellationToken cancellationToken = default)
    {
        return await _context.Products
            .Where(p => p.DeletedAt == null && p.IsActive && p.IsFeatured)
            .Include(p => p.Brand)
            .Include(p => p.Category)
            .Include(p => p.Translations)
            .Include(p => p.Images.OrderBy(i => i.DisplayOrder))
            .OrderByDescending(p => p.CreatedAt)
            .Take(count)
            .ToListAsync(cancellationToken);
    }

    #endregion

    #region Paginated Queries

    public async Task<(IReadOnlyList<Product> Items, int TotalCount)> GetPagedAsync(
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
        CancellationToken cancellationToken = default)
    {
        var query = _context.Products.AsQueryable();

        // Exclude soft-deleted
        query = query.Where(p => p.DeletedAt == null);

        // Search filter
        if (!string.IsNullOrWhiteSpace(searchTerm))
        {
            var term = searchTerm.ToLower();
            query = query.Where(p =>
                p.Name.ToLower().Contains(term) ||
                p.SKU.ToLower().Contains(term) ||
                (p.Description != null && p.Description.ToLower().Contains(term)) ||
                p.Translations.Any(t => t.Name.ToLower().Contains(term)));
        }

        // Brand filter
        if (brandId.HasValue)
        {
            query = query.Where(p => p.BrandId == brandId.Value);
        }

        // Category filter
        if (categoryId.HasValue)
        {
            query = query.Where(p => p.CategoryId == categoryId.Value);
        }

        // Price range filters
        if (minPrice.HasValue)
        {
            query = query.Where(p => p.UnitPrice >= minPrice.Value);
        }

        if (maxPrice.HasValue)
        {
            query = query.Where(p => p.UnitPrice <= maxPrice.Value);
        }

        // Active filter
        if (isActive.HasValue)
        {
            query = query.Where(p => p.IsActive == isActive.Value);
        }

        // Featured filter
        if (isFeatured.HasValue)
        {
            query = query.Where(p => p.IsFeatured == isFeatured.Value);
        }

        // Get total count before pagination
        var totalCount = await query.CountAsync(cancellationToken);

        // Sorting
        query = sortBy?.ToLower() switch
        {
            "name" => sortDescending ? query.OrderByDescending(p => p.Name) : query.OrderBy(p => p.Name),
            "price" => sortDescending ? query.OrderByDescending(p => p.UnitPrice) : query.OrderBy(p => p.UnitPrice),
            "sku" => sortDescending ? query.OrderByDescending(p => p.SKU) : query.OrderBy(p => p.SKU),
            "created" => sortDescending ? query.OrderByDescending(p => p.CreatedAt) : query.OrderBy(p => p.CreatedAt),
            _ => query.OrderByDescending(p => p.CreatedAt) // Default: newest first
        };

        // Pagination
        var items = await query
            .Skip((pageNumber - 1) * pageSize)
            .Take(pageSize)
            .Include(p => p.Brand)
            .Include(p => p.Category)
            .Include(p => p.Translations)
            .Include(p => p.Images.OrderBy(i => i.DisplayOrder))
            .ToListAsync(cancellationToken);

        return (items, totalCount);
    }

    public async Task<IReadOnlyList<Product>> GetByBrandAsync(int brandId, CancellationToken cancellationToken = default)
    {
        return await _context.Products
            .Where(p => p.BrandId == brandId && p.DeletedAt == null && p.IsActive)
            .Include(p => p.Brand)
            .Include(p => p.Category)
            .Include(p => p.Translations)
            .Include(p => p.Images.OrderBy(i => i.DisplayOrder))
            .OrderBy(p => p.Name)
            .ToListAsync(cancellationToken);
    }

    public async Task<IReadOnlyList<Product>> GetByCategoryAsync(int categoryId, CancellationToken cancellationToken = default)
    {
        return await _context.Products
            .Where(p => p.CategoryId == categoryId && p.DeletedAt == null && p.IsActive)
            .Include(p => p.Brand)
            .Include(p => p.Category)
            .Include(p => p.Translations)
            .Include(p => p.Images.OrderBy(i => i.DisplayOrder))
            .OrderBy(p => p.Name)
            .ToListAsync(cancellationToken);
    }

    #endregion

    #region Create/Update/Delete

    public async Task<Product> AddAsync(Product product, CancellationToken cancellationToken = default)
    {
        await _context.Products.AddAsync(product, cancellationToken);
        await _context.SaveChangesAsync(cancellationToken);
        return product;
    }

    public async Task UpdateAsync(Product product, CancellationToken cancellationToken = default)
    {
        _context.Products.Update(product);
        await _context.SaveChangesAsync(cancellationToken);
    }

    public async Task DeleteAsync(Product product, CancellationToken cancellationToken = default)
    {
        _context.Products.Remove(product);
        await _context.SaveChangesAsync(cancellationToken);
    }

    public async Task SoftDeleteAsync(int id, string deletedBy, CancellationToken cancellationToken = default)
    {
        var product = await GetByIdAsync(id, cancellationToken);
        if (product != null)
        {
            product.IsActive = false;
            product.DeletedAt = DateTime.UtcNow;
            product.DeletedBy = deletedBy;
            product.UpdatedAt = DateTime.UtcNow;
            await _context.SaveChangesAsync(cancellationToken);
        }
    }

    public async Task RestoreAsync(int id, CancellationToken cancellationToken = default)
    {
        var product = await _context.Products
            .FirstOrDefaultAsync(p => p.Id == id, cancellationToken);

        if (product != null)
        {
            product.IsActive = true;
            product.DeletedAt = null;
            product.DeletedBy = null;
            product.UpdatedAt = DateTime.UtcNow;
            await _context.SaveChangesAsync(cancellationToken);
        }
    }

    public async Task UpdateStatusAsync(int id, bool isActive, CancellationToken cancellationToken = default)
    {
        var product = await GetByIdAsync(id, cancellationToken);
        if (product != null)
        {
            product.IsActive = isActive;
            product.UpdatedAt = DateTime.UtcNow;
            await _context.SaveChangesAsync(cancellationToken);
        }
    }

    #endregion

    #region Translations

    public async Task<ProductTranslation?> GetTranslationAsync(int productId, string languageCode, CancellationToken cancellationToken = default)
    {
        return await _context.Set<ProductTranslation>()
            .FirstOrDefaultAsync(t => t.ProductId == productId && t.LanguageCode == languageCode, cancellationToken);
    }

    public async Task<IReadOnlyList<ProductTranslation>> GetTranslationsAsync(int productId, CancellationToken cancellationToken = default)
    {
        return await _context.Set<ProductTranslation>()
            .Where(t => t.ProductId == productId)
            .ToListAsync(cancellationToken);
    }

    public async Task<ProductTranslation> AddTranslationAsync(ProductTranslation translation, CancellationToken cancellationToken = default)
    {
        await _context.Set<ProductTranslation>().AddAsync(translation, cancellationToken);
        await _context.SaveChangesAsync(cancellationToken);
        return translation;
    }

    public async Task UpdateTranslationAsync(ProductTranslation translation, CancellationToken cancellationToken = default)
    {
        _context.Set<ProductTranslation>().Update(translation);
        await _context.SaveChangesAsync(cancellationToken);
    }

    public async Task DeleteTranslationAsync(int translationId, CancellationToken cancellationToken = default)
    {
        var translation = await _context.Set<ProductTranslation>()
            .FirstOrDefaultAsync(t => t.Id == translationId, cancellationToken);

        if (translation != null)
        {
            _context.Set<ProductTranslation>().Remove(translation);
            await _context.SaveChangesAsync(cancellationToken);
        }
    }

    #endregion

    #region Images

    public async Task<ProductImage?> GetImageByIdAsync(int imageId, CancellationToken cancellationToken = default)
    {
        return await _context.Set<ProductImage>()
            .FirstOrDefaultAsync(i => i.Id == imageId, cancellationToken);
    }

    public async Task<IReadOnlyList<ProductImage>> GetImagesAsync(int productId, CancellationToken cancellationToken = default)
    {
        return await _context.Set<ProductImage>()
            .Where(i => i.ProductId == productId)
            .OrderBy(i => i.DisplayOrder)
            .ToListAsync(cancellationToken);
    }

    public async Task<ProductImage> AddImageAsync(ProductImage image, CancellationToken cancellationToken = default)
    {
        await _context.Set<ProductImage>().AddAsync(image, cancellationToken);
        await _context.SaveChangesAsync(cancellationToken);
        return image;
    }

    public async Task UpdateImageAsync(ProductImage image, CancellationToken cancellationToken = default)
    {
        _context.Set<ProductImage>().Update(image);
        await _context.SaveChangesAsync(cancellationToken);
    }

    public async Task DeleteImageAsync(int imageId, CancellationToken cancellationToken = default)
    {
        var image = await GetImageByIdAsync(imageId, cancellationToken);
        if (image != null)
        {
            _context.Set<ProductImage>().Remove(image);
            await _context.SaveChangesAsync(cancellationToken);
        }
    }

    public async Task SetPrimaryImageAsync(int productId, int imageId, CancellationToken cancellationToken = default)
    {
        var images = await GetImagesAsync(productId, cancellationToken);

        foreach (var img in images)
        {
            img.IsPrimary = img.Id == imageId;
        }

        await _context.SaveChangesAsync(cancellationToken);
    }

    public async Task ReorderImagesAsync(int productId, IEnumerable<int> imageIds, CancellationToken cancellationToken = default)
    {
        var images = await GetImagesAsync(productId, cancellationToken);
        var orderList = imageIds.ToList();

        foreach (var img in images)
        {
            var index = orderList.IndexOf(img.Id);
            if (index >= 0)
            {
                img.DisplayOrder = index;
            }
        }

        await _context.SaveChangesAsync(cancellationToken);
    }

    #endregion

    #region Validation

    public async Task<bool> ExistsAsync(int id, CancellationToken cancellationToken = default)
    {
        return await _context.Products
            .AnyAsync(p => p.Id == id && p.DeletedAt == null, cancellationToken);
    }

    public async Task<bool> SKUExistsAsync(string sku, int? excludeId = null, CancellationToken cancellationToken = default)
    {
        var query = _context.Products.Where(p => p.SKU == sku && p.DeletedAt == null);

        if (excludeId.HasValue)
        {
            query = query.Where(p => p.Id != excludeId.Value);
        }

        return await query.AnyAsync(cancellationToken);
    }

    public async Task<bool> SlugExistsAsync(string slug, int? excludeId = null, CancellationToken cancellationToken = default)
    {
        var query = _context.Products.Where(p => p.Slug == slug && p.DeletedAt == null);

        if (excludeId.HasValue)
        {
            query = query.Where(p => p.Id != excludeId.Value);
        }

        return await query.AnyAsync(cancellationToken);
    }

    #endregion
}
