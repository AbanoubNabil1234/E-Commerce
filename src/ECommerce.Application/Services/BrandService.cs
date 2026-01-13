using ECommerce.Application.DTOs.Catalog;
using ECommerce.Application.Interfaces.Repositories;
using ECommerce.Application.Interfaces.Services;
using ECommerce.Domain.Entities.Catalog;
using ECommerce.Domain.Entities.Localization;

namespace ECommerce.Application.Services;

/// <summary>
/// Service implementation for Brand management with multilingual support.
/// </summary>
public class BrandService : IBrandService
{
    private readonly IBrandRepository _brandRepository;

    public BrandService(IBrandRepository brandRepository)
    {
        _brandRepository = brandRepository;
    }

    #region Queries

    public async Task<BrandDto?> GetByIdAsync(int id, CancellationToken cancellationToken = default)
    {
        var brand = await _brandRepository.GetByIdAsync(id, cancellationToken);
        return brand == null ? null : MapToDto(brand);
    }

    public async Task<LocalizedBrandDto?> GetByIdLocalizedAsync(int id, string languageCode, CancellationToken cancellationToken = default)
    {
        var brand = await _brandRepository.GetByIdWithTranslationsAsync(id, cancellationToken);
        return brand == null ? null : MapToLocalizedDto(brand, languageCode);
    }

    public async Task<LocalizedBrandDto?> GetBySlugAsync(string slug, string languageCode, CancellationToken cancellationToken = default)
    {
        var brand = await _brandRepository.GetBySlugAsync(slug, languageCode, cancellationToken);
        if (brand == null) return null;

        // Get with translations
        var brandWithTranslations = await _brandRepository.GetByIdWithTranslationsAsync(brand.Id, cancellationToken);
        return brandWithTranslations == null ? null : MapToLocalizedDto(brandWithTranslations, languageCode);
    }

    public async Task<BrandListDto> GetPagedAsync(
        int pageNumber, 
        int pageSize, 
        string? searchTerm, 
        bool? isActive, 
        string languageCode,
        CancellationToken cancellationToken = default)
    {
        var (items, totalCount) = await _brandRepository.GetPagedAsync(
            pageNumber, pageSize, searchTerm, isActive, cancellationToken);

        // TODO: Optimize this to load translations in batch
        var localizedItems = new List<LocalizedBrandDto>();
        foreach (var brand in items)
        {
            var brandWithTranslations = await _brandRepository.GetByIdWithTranslationsAsync(brand.Id, cancellationToken);
            if (brandWithTranslations != null)
            {
                localizedItems.Add(MapToLocalizedDto(brandWithTranslations, languageCode));
            }
        }

        return new BrandListDto
        {
            Items = localizedItems,
            TotalCount = totalCount,
            PageNumber = pageNumber,
            PageSize = pageSize
        };
    }

    public async Task<IReadOnlyList<LocalizedBrandDto>> GetAllActiveAsync(string languageCode, CancellationToken cancellationToken = default)
    {
        var brands = await _brandRepository.GetAllWithTranslationsAsync(languageCode, cancellationToken);
        return brands
            .Where(b => b.IsActive)
            .Select(b => MapToLocalizedDto(b, languageCode))
            .ToList();
    }

    #endregion

    #region Commands

    public async Task<BrandDto> CreateAsync(CreateBrandDto dto, CancellationToken cancellationToken = default)
    {
        // Validate slug uniqueness
        if (await _brandRepository.SlugExistsAsync(dto.Slug, null, cancellationToken))
        {
            throw new InvalidOperationException($"A brand with slug '{dto.Slug}' already exists.");
        }

        var brand = new Brand
        {
            Name = dto.Name,
            Slug = dto.Slug,
            Description = dto.Description,
            LogoUrl = dto.LogoUrl,
            Website = dto.Website,
            IsActive = true
        };

        var created = await _brandRepository.AddAsync(brand, cancellationToken);

        // Add translations
        foreach (var translationDto in dto.Translations)
        {
            var translation = new BrandTranslation
            {
                BrandId = created.Id,
                LanguageCode = translationDto.LanguageCode,
                Name = translationDto.Name,
                Description = translationDto.Description,
                Slug = translationDto.Slug
            };
            await _brandRepository.AddTranslationAsync(translation, cancellationToken);
        }

        return MapToDto(created);
    }

    public async Task<BrandDto> UpdateAsync(UpdateBrandDto dto, CancellationToken cancellationToken = default)
    {
        var brand = await _brandRepository.GetByIdAsync(dto.Id, cancellationToken)
            ?? throw new InvalidOperationException($"Brand with ID {dto.Id} not found.");

        // Validate slug uniqueness
        if (await _brandRepository.SlugExistsAsync(dto.Slug, dto.Id, cancellationToken))
        {
            throw new InvalidOperationException($"A brand with slug '{dto.Slug}' already exists.");
        }

        brand.Name = dto.Name;
        brand.Slug = dto.Slug;
        brand.Description = dto.Description;
        brand.LogoUrl = dto.LogoUrl;
        brand.Website = dto.Website;
        brand.IsActive = dto.IsActive;
        brand.UpdatedAt = DateTime.UtcNow;

        await _brandRepository.UpdateAsync(brand, cancellationToken);

        // Update translations
        foreach (var translationDto in dto.Translations)
        {
            var existing = await _brandRepository.GetTranslationAsync(brand.Id, translationDto.LanguageCode, cancellationToken);
            
            if (existing != null)
            {
                existing.Name = translationDto.Name;
                existing.Description = translationDto.Description;
                existing.Slug = translationDto.Slug;
                await _brandRepository.UpdateTranslationAsync(existing, cancellationToken);
            }
            else
            {
                var newTranslation = new BrandTranslation
                {
                    BrandId = brand.Id,
                    LanguageCode = translationDto.LanguageCode,
                    Name = translationDto.Name,
                    Description = translationDto.Description,
                    Slug = translationDto.Slug
                };
                await _brandRepository.AddTranslationAsync(newTranslation, cancellationToken);
            }
        }

        return MapToDto(brand);
    }

    public async Task DeleteAsync(int id, CancellationToken cancellationToken = default)
    {
        var brand = await _brandRepository.GetByIdAsync(id, cancellationToken)
            ?? throw new InvalidOperationException($"Brand with ID {id} not found.");

        await _brandRepository.DeleteAsync(brand, cancellationToken);
    }

    public async Task SoftDeleteAsync(int id, string deletedBy, CancellationToken cancellationToken = default)
    {
        await _brandRepository.SoftDeleteAsync(id, deletedBy, cancellationToken);
    }

    public async Task RestoreAsync(int id, CancellationToken cancellationToken = default)
    {
        var brand = await _brandRepository.GetByIdAsync(id, cancellationToken)
            ?? throw new InvalidOperationException($"Brand with ID {id} not found.");

        brand.IsActive = true;
        brand.DeletedAt = null;
        brand.DeletedBy = null;
        brand.UpdatedAt = DateTime.UtcNow;

        await _brandRepository.UpdateAsync(brand, cancellationToken);
    }

    #endregion

    #region Translations

    public async Task<BrandTranslationDto> AddTranslationAsync(int brandId, BrandTranslationDto dto, CancellationToken cancellationToken = default)
    {
        if (!await _brandRepository.ExistsAsync(brandId, cancellationToken))
        {
            throw new InvalidOperationException($"Brand with ID {brandId} not found.");
        }

        var existing = await _brandRepository.GetTranslationAsync(brandId, dto.LanguageCode, cancellationToken);
        if (existing != null)
        {
            throw new InvalidOperationException($"Translation for language '{dto.LanguageCode}' already exists.");
        }

        var translation = new BrandTranslation
        {
            BrandId = brandId,
            LanguageCode = dto.LanguageCode,
            Name = dto.Name,
            Description = dto.Description,
            Slug = dto.Slug
        };

        var created = await _brandRepository.AddTranslationAsync(translation, cancellationToken);

        return new BrandTranslationDto
        {
            Id = created.Id,
            LanguageCode = created.LanguageCode,
            Name = created.Name,
            Description = created.Description,
            Slug = created.Slug
        };
    }

    public async Task<BrandTranslationDto> UpdateTranslationAsync(int brandId, BrandTranslationDto dto, CancellationToken cancellationToken = default)
    {
        var translation = await _brandRepository.GetTranslationAsync(brandId, dto.LanguageCode, cancellationToken)
            ?? throw new InvalidOperationException($"Translation for language '{dto.LanguageCode}' not found.");

        translation.Name = dto.Name;
        translation.Description = dto.Description;
        translation.Slug = dto.Slug;

        await _brandRepository.UpdateTranslationAsync(translation, cancellationToken);

        return new BrandTranslationDto
        {
            Id = translation.Id,
            LanguageCode = translation.LanguageCode,
            Name = translation.Name,
            Description = translation.Description,
            Slug = translation.Slug
        };
    }

    public async Task DeleteTranslationAsync(int brandId, string languageCode, CancellationToken cancellationToken = default)
    {
        var translation = await _brandRepository.GetTranslationAsync(brandId, languageCode, cancellationToken)
            ?? throw new InvalidOperationException($"Translation for language '{languageCode}' not found.");

        await _brandRepository.DeleteTranslationAsync(translation.Id, cancellationToken);
    }

    #endregion

    #region Validation

    public async Task<bool> ExistsAsync(int id, CancellationToken cancellationToken = default)
    {
        return await _brandRepository.ExistsAsync(id, cancellationToken);
    }

    public async Task<bool> SlugExistsAsync(string slug, int? excludeId = null, CancellationToken cancellationToken = default)
    {
        return await _brandRepository.SlugExistsAsync(slug, excludeId, cancellationToken);
    }

    #endregion

    #region Mapping

    private static BrandDto MapToDto(Brand brand)
    {
        return new BrandDto
        {
            Id = brand.Id,
            Name = brand.Name,
            Slug = brand.Slug,
            Description = brand.Description,
            LogoUrl = brand.LogoUrl,
            Website = brand.Website,
            IsActive = brand.IsActive
        };
    }

    private static LocalizedBrandDto MapToLocalizedDto(Brand brand, string languageCode)
    {
        var translation = brand.Translations?.FirstOrDefault(t => t.LanguageCode == languageCode);

        return new LocalizedBrandDto
        {
            Id = brand.Id,
            Name = translation?.Name ?? brand.Name,
            Slug = translation?.Slug ?? brand.Slug,
            Description = translation?.Description ?? brand.Description,
            LogoUrl = brand.LogoUrl,
            Website = brand.Website,
            LanguageCode = languageCode,
            IsActive = brand.IsActive
        };
    }

    #endregion
}
