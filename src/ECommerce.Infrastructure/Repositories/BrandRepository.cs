using Microsoft.EntityFrameworkCore;
using ECommerce.Application.Interfaces.Repositories;
using ECommerce.Domain.Entities.Catalog;
using ECommerce.Domain.Entities.Localization;
using ECommerce.Infrastructure.Persistence;

namespace ECommerce.Infrastructure.Repositories;

/// <summary>
/// Repository implementation for Brand entity.
/// </summary>
public class BrandRepository : IBrandRepository
{
    private readonly ApplicationDbContext _context;

    public BrandRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    #region Basic CRUD

    public async Task<Brand?> GetByIdAsync(int id, CancellationToken cancellationToken = default)
    {
        return await _context.Brands
            .FirstOrDefaultAsync(b => b.Id == id, cancellationToken);
    }

    public async Task<Brand?> GetByIdWithTranslationsAsync(int id, CancellationToken cancellationToken = default)
    {
        return await _context.Brands
            .Include(b => b.Translations)
            .FirstOrDefaultAsync(b => b.Id == id, cancellationToken);
    }

    public async Task<Brand?> GetBySlugAsync(string slug, string languageCode, CancellationToken cancellationToken = default)
    {
        // First try to find by translation slug
        var translation = await _context.Set<BrandTranslation>()
            .Include(t => t.Brand)
            .FirstOrDefaultAsync(t => t.Slug == slug && t.LanguageCode == languageCode, cancellationToken);

        if (translation != null)
            return translation.Brand;

        // Fallback to main brand slug
        return await _context.Brands
            .FirstOrDefaultAsync(b => b.Slug == slug, cancellationToken);
    }

    public async Task<IReadOnlyList<Brand>> GetAllAsync(CancellationToken cancellationToken = default)
    {
        return await _context.Brands
            .Where(b => b.DeletedAt == null)
            .OrderBy(b => b.Name)
            .ToListAsync(cancellationToken);
    }

    public async Task<IReadOnlyList<Brand>> GetAllWithTranslationsAsync(string languageCode, CancellationToken cancellationToken = default)
    {
        return await _context.Brands
            .Where(b => b.DeletedAt == null)
            .Include(b => b.Translations.Where(t => t.LanguageCode == languageCode))
            .OrderBy(b => b.Name)
            .ToListAsync(cancellationToken);
    }

    public async Task<IReadOnlyList<Brand>> GetActiveAsync(CancellationToken cancellationToken = default)
    {
        return await _context.Brands
            .Where(b => b.DeletedAt == null && b.IsActive)
            .OrderBy(b => b.Name)
            .ToListAsync(cancellationToken);
    }

    #endregion

    #region Paged

    public async Task<(IReadOnlyList<Brand> Items, int TotalCount)> GetPagedAsync(
        int pageNumber,
        int pageSize,
        string? searchTerm = null,
        bool? isActive = null,
        CancellationToken cancellationToken = default)
    {
        var query = _context.Brands.AsQueryable();

        // Exclude soft-deleted brands
        query = query.Where(b => b.DeletedAt == null);

        // Search filter
        if (!string.IsNullOrWhiteSpace(searchTerm))
        {
            query = query.Where(b => 
                b.Name.Contains(searchTerm) || 
                (b.Description != null && b.Description.Contains(searchTerm)));
        }

        // Active filter
        if (isActive.HasValue)
        {
            query = query.Where(b => b.IsActive == isActive.Value);
        }

        var totalCount = await query.CountAsync(cancellationToken);

        var items = await query
            .OrderBy(b => b.Name)
            .Skip((pageNumber - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync(cancellationToken);

        return (items, totalCount);
    }

    #endregion

    #region Create/Update/Delete

    public async Task<Brand> AddAsync(Brand brand, CancellationToken cancellationToken = default)
    {
        await _context.Brands.AddAsync(brand, cancellationToken);
        await _context.SaveChangesAsync(cancellationToken);
        return brand;
    }

    public async Task UpdateAsync(Brand brand, CancellationToken cancellationToken = default)
    {
        _context.Brands.Update(brand);
        await _context.SaveChangesAsync(cancellationToken);
    }

    public async Task DeleteAsync(Brand brand, CancellationToken cancellationToken = default)
    {
        _context.Brands.Remove(brand);
        await _context.SaveChangesAsync(cancellationToken);
    }

    public async Task SoftDeleteAsync(int id, string deletedBy, CancellationToken cancellationToken = default)
    {
        var brand = await GetByIdAsync(id, cancellationToken);
        if (brand != null)
        {
            brand.IsActive = false;
            brand.DeletedAt = DateTime.UtcNow;
            brand.DeletedBy = deletedBy;
            await _context.SaveChangesAsync(cancellationToken);
        }
    }

    #endregion

    #region Translations

    public async Task<BrandTranslation?> GetTranslationAsync(int brandId, string languageCode, CancellationToken cancellationToken = default)
    {
        return await _context.Set<BrandTranslation>()
            .FirstOrDefaultAsync(t => t.BrandId == brandId && t.LanguageCode == languageCode, cancellationToken);
    }

    public async Task<BrandTranslation> AddTranslationAsync(BrandTranslation translation, CancellationToken cancellationToken = default)
    {
        await _context.Set<BrandTranslation>().AddAsync(translation, cancellationToken);
        await _context.SaveChangesAsync(cancellationToken);
        return translation;
    }

    public async Task UpdateTranslationAsync(BrandTranslation translation, CancellationToken cancellationToken = default)
    {
        _context.Set<BrandTranslation>().Update(translation);
        await _context.SaveChangesAsync(cancellationToken);
    }

    public async Task DeleteTranslationAsync(int translationId, CancellationToken cancellationToken = default)
    {
        var translation = await _context.Set<BrandTranslation>()
            .FirstOrDefaultAsync(t => t.Id == translationId, cancellationToken);
        
        if (translation != null)
        {
            _context.Set<BrandTranslation>().Remove(translation);
            await _context.SaveChangesAsync(cancellationToken);
        }
    }

    #endregion

    #region Validation

    public async Task<bool> ExistsAsync(int id, CancellationToken cancellationToken = default)
    {
        return await _context.Brands.AnyAsync(b => b.Id == id, cancellationToken);
    }

    public async Task<bool> SlugExistsAsync(string slug, int? excludeId = null, CancellationToken cancellationToken = default)
    {
        var query = _context.Brands.Where(b => b.Slug == slug);
        
        if (excludeId.HasValue)
            query = query.Where(b => b.Id != excludeId.Value);

        return await query.AnyAsync(cancellationToken);
    }

    public async Task<bool> TranslationSlugExistsAsync(string slug, string languageCode, int? excludeBrandId = null, CancellationToken cancellationToken = default)
    {
        var query = _context.Set<BrandTranslation>()
            .Where(t => t.Slug == slug && t.LanguageCode == languageCode);

        if (excludeBrandId.HasValue)
            query = query.Where(t => t.BrandId != excludeBrandId.Value);

        return await query.AnyAsync(cancellationToken);
    }

    #endregion
}
