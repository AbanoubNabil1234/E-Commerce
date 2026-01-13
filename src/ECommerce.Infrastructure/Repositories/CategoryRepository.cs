using Microsoft.EntityFrameworkCore;
using ECommerce.Application.Interfaces.Repositories;
using ECommerce.Domain.Entities.Catalog;
using ECommerce.Domain.Entities.Localization;
using ECommerce.Infrastructure.Persistence;

namespace ECommerce.Infrastructure.Repositories;

/// <summary>
/// Repository implementation for Category entity.
/// </summary>
public class CategoryRepository : ICategoryRepository
{
    private readonly ApplicationDbContext _context;

    public CategoryRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    #region Basic CRUD

    public async Task<Category?> GetByIdAsync(int id, CancellationToken cancellationToken = default)
    {
        return await _context.Categories
            .FirstOrDefaultAsync(c => c.Id == id, cancellationToken);
    }

    public async Task<Category?> GetByIdWithTranslationsAsync(int id, CancellationToken cancellationToken = default)
    {
        return await _context.Categories
            .Include(c => c.Translations)
            .Include(c => c.Parent) // Include Parent for info
            .FirstOrDefaultAsync(c => c.Id == id, cancellationToken);
    }

    public async Task<Category?> GetBySlugAsync(string slug, string languageCode, CancellationToken cancellationToken = default)
    {
        // First try to find by translation slug
        var translation = await _context.Set<CategoryTranslation>()
            .Include(t => t.Category)
            .FirstOrDefaultAsync(t => t.Slug == slug && t.LanguageCode == languageCode, cancellationToken);

        if (translation != null)
            return translation.Category;

        // Fallback to main category slug
        return await _context.Categories
            .FirstOrDefaultAsync(c => c.Slug == slug, cancellationToken);
    }

    public async Task<IReadOnlyList<Category>> GetAllAsync(CancellationToken cancellationToken = default)
    {
        return await _context.Categories
            .Where(c => c.DeletedAt == null)
            .OrderBy(c => c.DisplayOrder)
            .ThenBy(c => c.Name)
            .ToListAsync(cancellationToken);
    }

    public async Task<IReadOnlyList<Category>> GetAllWithTranslationsAsync(string languageCode, CancellationToken cancellationToken = default)
    {
        return await _context.Categories
            .Where(c => c.DeletedAt == null)
            .Include(c => c.Translations.Where(t => t.LanguageCode == languageCode))
            .OrderBy(c => c.DisplayOrder)
            .ThenBy(c => c.Name)
            .ToListAsync(cancellationToken);
    }

    #endregion

    #region Paged & Hierarchy

    public async Task<(IReadOnlyList<Category> Items, int TotalCount)> GetPagedAsync(
        int pageNumber,
        int pageSize,
        string? searchTerm = null,
        bool? isActive = null,
        int? parentId = null,
        CancellationToken cancellationToken = default)
    {
        var query = _context.Categories.AsQueryable();

        // Exclude soft-deleted
        query = query.Where(c => c.DeletedAt == null);

        // Search filter
        if (!string.IsNullOrWhiteSpace(searchTerm))
        {
            query = query.Where(c => 
                c.Name.Contains(searchTerm) || 
                (c.Description != null && c.Description.Contains(searchTerm)));
        }

        // Active filter
        if (isActive.HasValue)
        {
            query = query.Where(c => c.IsActive == isActive.Value);
        }

        // Parent filter (If provided)
        if (parentId.HasValue)
        {
            query = query.Where(c => c.ParentId == parentId.Value);
        }
        // Note: If filter is not provided, we return ALL categories (flat). 
        // Or we could return only Root categories if parentId is null? 
        // For "Paged List" usually we want flat list or specific filter. 
        // I will keep it as specific filter: if parentId is null (default), return all.

        var totalCount = await query.CountAsync(cancellationToken);

        var items = await query
            .Include(c => c.Parent) // Useful for grid
            .Include(c => c.Products) // For count
            .OrderBy(c => c.DisplayOrder)
            .ThenBy(c => c.Name)
            .Skip((pageNumber - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync(cancellationToken);

        return (items, totalCount);
    }

    public async Task<IReadOnlyList<Category>> GetRootCategoriesAsync(string languageCode, CancellationToken cancellationToken = default)
    {
        return await _context.Categories
            .Where(c => c.DeletedAt == null && c.ParentId == null)
            .Include(c => c.Translations.Where(t => t.LanguageCode == languageCode))
            .OrderBy(c => c.DisplayOrder)
            .ToListAsync(cancellationToken);
    }

    public async Task<IReadOnlyList<Category>> GetChildrenAsync(int parentId, string languageCode, CancellationToken cancellationToken = default)
    {
        return await _context.Categories
            .Where(c => c.DeletedAt == null && c.ParentId == parentId)
            .Include(c => c.Translations.Where(t => t.LanguageCode == languageCode))
            .OrderBy(c => c.DisplayOrder)
            .ToListAsync(cancellationToken);
    }

    #endregion

    #region Write

    public async Task<Category> AddAsync(Category category, CancellationToken cancellationToken = default)
    {
        await _context.Categories.AddAsync(category, cancellationToken);
        await _context.SaveChangesAsync(cancellationToken);
        return category;
    }

    public async Task UpdateAsync(Category category, CancellationToken cancellationToken = default)
    {
        _context.Categories.Update(category);
        await _context.SaveChangesAsync(cancellationToken);
    }

    public async Task DeleteAsync(Category category, CancellationToken cancellationToken = default)
    {
        _context.Categories.Remove(category);
        await _context.SaveChangesAsync(cancellationToken);
    }

    public async Task SoftDeleteAsync(int id, string deletedBy, CancellationToken cancellationToken = default)
    {
        var category = await GetByIdAsync(id, cancellationToken);
        if (category != null)
        {
            category.IsActive = false;
            category.DeletedAt = DateTime.UtcNow;
            category.DeletedBy = deletedBy;
            await _context.SaveChangesAsync(cancellationToken);
        }
    }

    #endregion

    #region Translations

    public async Task<CategoryTranslation?> GetTranslationAsync(int categoryId, string languageCode, CancellationToken cancellationToken = default)
    {
        return await _context.Set<CategoryTranslation>()
            .FirstOrDefaultAsync(t => t.CategoryId == categoryId && t.LanguageCode == languageCode, cancellationToken);
    }

    public async Task<CategoryTranslation> AddTranslationAsync(CategoryTranslation translation, CancellationToken cancellationToken = default)
    {
        await _context.Set<CategoryTranslation>().AddAsync(translation, cancellationToken);
        await _context.SaveChangesAsync(cancellationToken);
        return translation;
    }

    public async Task UpdateTranslationAsync(CategoryTranslation translation, CancellationToken cancellationToken = default)
    {
        _context.Set<CategoryTranslation>().Update(translation);
        await _context.SaveChangesAsync(cancellationToken);
    }

    public async Task DeleteTranslationAsync(int translationId, CancellationToken cancellationToken = default)
    {
        var translation = await _context.Set<CategoryTranslation>()
            .FirstOrDefaultAsync(t => t.Id == translationId, cancellationToken);
        
        if (translation != null)
        {
            _context.Set<CategoryTranslation>().Remove(translation);
            await _context.SaveChangesAsync(cancellationToken);
        }
    }

    #endregion

    #region Validation

    public async Task<bool> ExistsAsync(int id, CancellationToken cancellationToken = default)
    {
        return await _context.Categories.AnyAsync(c => c.Id == id, cancellationToken);
    }

    public async Task<bool> SlugExistsAsync(string slug, int? excludeId = null, CancellationToken cancellationToken = default)
    {
        var query = _context.Categories.Where(c => c.Slug == slug);
        
        if (excludeId.HasValue)
            query = query.Where(c => c.Id != excludeId.Value);

        return await query.AnyAsync(cancellationToken);
    }

    #endregion
}
