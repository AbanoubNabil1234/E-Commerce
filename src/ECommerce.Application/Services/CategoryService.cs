using ECommerce.Application.DTOs.Catalog;
using ECommerce.Application.Interfaces.Repositories;
using ECommerce.Application.Interfaces.Services;
using ECommerce.Domain.Entities.Catalog;
using ECommerce.Domain.Entities.Localization;

namespace ECommerce.Application.Services;

public class CategoryService : ICategoryService
{
    private readonly ICategoryRepository _categoryRepository;

    public CategoryService(ICategoryRepository categoryRepository)
    {
        _categoryRepository = categoryRepository;
    }

    #region Queries

    public async Task<CategoryDto?> GetByIdAsync(int id, CancellationToken cancellationToken = default)
    {
        var category = await _categoryRepository.GetByIdAsync(id, cancellationToken);
        return category == null ? null : MapToDto(category);
    }

    public async Task<LocalizedCategoryDto?> GetByIdLocalizedAsync(int id, string languageCode, CancellationToken cancellationToken = default)
    {
        var category = await _categoryRepository.GetByIdWithTranslationsAsync(id, cancellationToken);
        return category == null ? null : MapToLocalizedDto(category, languageCode);
    }

    public async Task<LocalizedCategoryDto?> GetBySlugAsync(string slug, string languageCode, CancellationToken cancellationToken = default)
    {
        var category = await _categoryRepository.GetBySlugAsync(slug, languageCode, cancellationToken);
        if (category == null) return null;

        var fullCategory = await _categoryRepository.GetByIdWithTranslationsAsync(category.Id, cancellationToken);
        return fullCategory == null ? null : MapToLocalizedDto(fullCategory, languageCode);
    }

    public async Task<CategoryListDto> GetPagedAsync(
        int pageNumber,
        int pageSize,
        string? searchTerm,
        bool? isActive,
        string languageCode,
        CancellationToken cancellationToken = default)
    {
        var (items, totalCount) = await _categoryRepository.GetPagedAsync(
            pageNumber, pageSize, searchTerm, isActive, null, cancellationToken);

        var localizedItems = items.Select(c => MapToLocalizedDto(c, languageCode)).ToList();

        return new CategoryListDto
        {
            Items = localizedItems,
            TotalCount = totalCount,
            PageNumber = pageNumber,
            PageSize = pageSize
        };
    }

    public async Task<IReadOnlyList<LocalizedCategoryDto>> GetDropdownAsync(string languageCode, CancellationToken cancellationToken = default)
    {
        var items = await _categoryRepository.GetAllWithTranslationsAsync(languageCode, cancellationToken);
        return items.Select(c => MapToLocalizedDto(c, languageCode)).ToList();
    }

    #endregion

    #region Commands

    public async Task<CategoryDto> CreateAsync(CreateCategoryDto dto, CancellationToken cancellationToken = default)
    {
        if (await _categoryRepository.SlugExistsAsync(dto.Slug, null, cancellationToken))
        {
            throw new InvalidOperationException($"A category with slug '{dto.Slug}' already exists.");
        }

        if (dto.ParentId.HasValue)
        {
            var parent = await _categoryRepository.GetByIdAsync(dto.ParentId.Value, cancellationToken)
                ?? throw new InvalidOperationException($"Parent category with ID {dto.ParentId} not found.");
        }

        var category = new Category
        {
            ParentId = dto.ParentId,
            Name = dto.Name,
            Slug = dto.Slug,
            Description = dto.Description,
            ImageUrl = dto.ImageUrl,
            DisplayOrder = dto.DisplayOrder,
            IsActive = true
            // Level is calculated? Or we can set it.
        };

        var created = await _categoryRepository.AddAsync(category, cancellationToken);

        foreach (var t in dto.Translations)
        {
            await _categoryRepository.AddTranslationAsync(new CategoryTranslation
            {
                CategoryId = created.Id,
                LanguageCode = t.LanguageCode,
                Name = t.Name,
                Description = t.Description,
                Slug = t.Slug
            }, cancellationToken);
        }

        return MapToDto(created);
    }

    public async Task<CategoryDto> UpdateAsync(UpdateCategoryDto dto, CancellationToken cancellationToken = default)
    {
        var category = await _categoryRepository.GetByIdAsync(dto.Id, cancellationToken)
            ?? throw new InvalidOperationException($"Category with ID {dto.Id} not found.");

        if (await _categoryRepository.SlugExistsAsync(dto.Slug, dto.Id, cancellationToken))
        {
            throw new InvalidOperationException($"A category with slug '{dto.Slug}' already exists.");
        }

        // Circular dependency check
        if (dto.ParentId.HasValue && dto.ParentId == dto.Id)
        {
            throw new InvalidOperationException("A category cannot be its own parent.");
        }

        category.ParentId = dto.ParentId;
        category.Name = dto.Name;
        category.Slug = dto.Slug;
        category.Description = dto.Description;
        category.ImageUrl = dto.ImageUrl;
        category.DisplayOrder = dto.DisplayOrder;
        category.IsActive = dto.IsActive;

        await _categoryRepository.UpdateAsync(category, cancellationToken);

        // Update Translations
        foreach (var t in dto.Translations)
        {
            var existing = await _categoryRepository.GetTranslationAsync(category.Id, t.LanguageCode, cancellationToken);
            if (existing != null)
            {
                existing.Name = t.Name;
                existing.Description = t.Description;
                existing.Slug = t.Slug;
                await _categoryRepository.UpdateTranslationAsync(existing, cancellationToken);
            }
            else
            {
                await _categoryRepository.AddTranslationAsync(new CategoryTranslation
                {
                    CategoryId = category.Id,
                    LanguageCode = t.LanguageCode,
                    Name = t.Name,
                    Description = t.Description,
                    Slug = t.Slug
                }, cancellationToken);
            }
        }

        return MapToDto(category);
    }

    public async Task DeleteAsync(int id, CancellationToken cancellationToken = default)
    {
        var category = await _categoryRepository.GetByIdAsync(id, cancellationToken)
            ?? throw new InvalidOperationException($"Category with ID {id} not found.");

        await _categoryRepository.DeleteAsync(category, cancellationToken);
    }

    public async Task SoftDeleteAsync(int id, string deletedBy, CancellationToken cancellationToken = default)
    {
        await _categoryRepository.SoftDeleteAsync(id, deletedBy, cancellationToken);
    }

    #endregion

    #region Translations

    public async Task<CategoryTranslationDto> AddTranslationAsync(int categoryId, CategoryTranslationDto dto, CancellationToken cancellationToken = default)
    {
        var created = await _categoryRepository.AddTranslationAsync(new CategoryTranslation
        {
            CategoryId = categoryId,
            LanguageCode = dto.LanguageCode,
            Name = dto.Name,
            Description = dto.Description,
            Slug = dto.Slug
        }, cancellationToken);

        return new CategoryTranslationDto
        {
            Id = created.Id,
            LanguageCode = created.LanguageCode,
            Name = created.Name,
            Description = created.Description,
            Slug = created.Slug
        };
    }

    public async Task<CategoryTranslationDto> UpdateTranslationAsync(int categoryId, CategoryTranslationDto dto, CancellationToken cancellationToken = default)
    {
        var translation = await _categoryRepository.GetTranslationAsync(categoryId, dto.LanguageCode, cancellationToken)
            ?? throw new InvalidOperationException("Translation not found");

        translation.Name = dto.Name;
        translation.Description = dto.Description;
        translation.Slug = dto.Slug;
        
        await _categoryRepository.UpdateTranslationAsync(translation, cancellationToken);

        return new CategoryTranslationDto
        {
            Id = translation.Id,
            LanguageCode = translation.LanguageCode,
            Name = translation.Name,
            Description = translation.Description,
            Slug = translation.Slug
        };
    }

    public async Task DeleteTranslationAsync(int categoryId, string languageCode, CancellationToken cancellationToken = default)
    {
        var translation = await _categoryRepository.GetTranslationAsync(categoryId, languageCode, cancellationToken);
        if (translation != null)
        {
            await _categoryRepository.DeleteTranslationAsync(translation.Id, cancellationToken);
        }
    }

    #endregion

    #region Validation
    public async Task<bool> ExistsAsync(int id, CancellationToken cancellationToken = default) => await _categoryRepository.ExistsAsync(id, cancellationToken);
    public async Task<bool> SlugExistsAsync(string slug, int? excludeId = null, CancellationToken cancellationToken = default) => await _categoryRepository.SlugExistsAsync(slug, excludeId, cancellationToken);
    #endregion


    #region Helpers

    private static CategoryDto MapToDto(Category category)
    {
        return new CategoryDto
        {
            Id = category.Id,
            ParentId = category.ParentId,
            Name = category.Name,
            Slug = category.Slug,
            Description = category.Description,
            ImageUrl = category.ImageUrl,
            DisplayOrder = category.DisplayOrder,
            IsActive = category.IsActive
        };
    }

    private static LocalizedCategoryDto MapToLocalizedDto(Category category, string languageCode)
    {
        var translation = category.Translations?.FirstOrDefault(t => t.LanguageCode == languageCode);

        // Get parent name if available (assuming it's loaded)
        string? parentName = null;
        if (category.Parent != null)
        {
             // For parent name, strictly we might need its translation too. 
             // But category.Parent usually won't have translations loaded unless we used ThenInclude.
             // For MVP, we use category.Parent.Name (fallback).
             // If we want localized parent name, repository needs to fetch it.
             // Given Repository included Parent, but checking if Translations of Parent are included.
             // In GetAllWithTranslations, we included (c => c.Translations).
             // We did NOT include (c => c.Parent.Translations).
             // So Parent Name will be default. This is acceptable for MVP.
             parentName = category.Parent.Name;
        }

        return new LocalizedCategoryDto
        {
            Id = category.Id,
            ParentId = category.ParentId,
            Name = translation?.Name ?? category.Name,
            Slug = translation?.Slug ?? category.Slug,
            Description = translation?.Description ?? category.Description,
            ImageUrl = category.ImageUrl,
            DisplayOrder = category.DisplayOrder,
            Level = category.Level,
            LanguageCode = languageCode,
            IsActive = category.IsActive,
            ProductsCount = category.Products?.Count ?? 0,
            ParentName = parentName
        };
    }

    #endregion
}
