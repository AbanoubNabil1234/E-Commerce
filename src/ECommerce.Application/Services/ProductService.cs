using ECommerce.Application.DTOs.Catalog;
using ECommerce.Application.Interfaces.Repositories;
using ECommerce.Application.Interfaces.Services;
using ECommerce.Domain.Entities.Catalog;
using ECommerce.Domain.Entities.Localization;

namespace ECommerce.Application.Services;

/// <summary>
/// Service implementation for Product management with multilingual support.
/// </summary>
public class ProductService : IProductService
{
    private readonly IProductRepository _productRepository;
    private readonly IBrandRepository _brandRepository;
    private readonly ICategoryRepository _categoryRepository;

    public ProductService(
        IProductRepository productRepository,
        IBrandRepository brandRepository,
        ICategoryRepository categoryRepository)
    {
        _productRepository = productRepository;
        _brandRepository = brandRepository;
        _categoryRepository = categoryRepository;
    }

    #region Queries

    public async Task<ProductDto?> GetByIdAsync(int id, CancellationToken cancellationToken = default)
    {
        var product = await _productRepository.GetByIdWithDetailsAsync(id, cancellationToken);
        return product == null ? null : MapToDto(product);
    }

    public async Task<LocalizedProductDto?> GetByIdLocalizedAsync(int id, string languageCode, CancellationToken cancellationToken = default)
    {
        var product = await _productRepository.GetByIdWithDetailsAsync(id, cancellationToken);
        return product == null ? null : MapToLocalizedDto(product, languageCode);
    }

    public async Task<LocalizedProductDto?> GetBySlugAsync(string slug, string languageCode, CancellationToken cancellationToken = default)
    {
        var product = await _productRepository.GetBySlugAsync(slug, cancellationToken);
        if (product == null) return null;

        var productWithDetails = await _productRepository.GetByIdWithDetailsAsync(product.Id, cancellationToken);
        return productWithDetails == null ? null : MapToLocalizedDto(productWithDetails, languageCode);
    }

    public async Task<LocalizedProductDto?> GetBySKUAsync(string sku, string languageCode, CancellationToken cancellationToken = default)
    {
        var product = await _productRepository.GetBySKUAsync(sku, cancellationToken);
        if (product == null) return null;

        var productWithDetails = await _productRepository.GetByIdWithDetailsAsync(product.Id, cancellationToken);
        return productWithDetails == null ? null : MapToLocalizedDto(productWithDetails, languageCode);
    }

    public async Task<ProductListDto> GetPagedAsync(
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
        CancellationToken cancellationToken = default)
    {
        var (items, totalCount) = await _productRepository.GetPagedAsync(
            pageNumber, pageSize, searchTerm, brandId, categoryId,
            minPrice, maxPrice, isActive, isFeatured, sortBy, sortDescending,
            cancellationToken);

        var localizedItems = items.Select(p => MapToLocalizedDto(p, languageCode)).ToList();

        return new ProductListDto
        {
            Items = localizedItems,
            TotalCount = totalCount,
            PageNumber = pageNumber,
            PageSize = pageSize
        };
    }

    public async Task<IReadOnlyList<LocalizedProductDto>> GetFeaturedAsync(int count, string languageCode, CancellationToken cancellationToken = default)
    {
        var products = await _productRepository.GetFeaturedAsync(count, cancellationToken);
        return products.Select(p => MapToLocalizedDto(p, languageCode)).ToList();
    }

    public async Task<IReadOnlyList<LocalizedProductDto>> GetByBrandAsync(int brandId, string languageCode, CancellationToken cancellationToken = default)
    {
        var products = await _productRepository.GetByBrandAsync(brandId, cancellationToken);
        return products.Select(p => MapToLocalizedDto(p, languageCode)).ToList();
    }

    public async Task<IReadOnlyList<LocalizedProductDto>> GetByCategoryAsync(int categoryId, string languageCode, CancellationToken cancellationToken = default)
    {
        var products = await _productRepository.GetByCategoryAsync(categoryId, cancellationToken);
        return products.Select(p => MapToLocalizedDto(p, languageCode)).ToList();
    }

    #endregion

    #region Commands

    public async Task<ProductDto> CreateAsync(CreateProductDto dto, CancellationToken cancellationToken = default)
    {
        // Validate SKU uniqueness
        if (await _productRepository.SKUExistsAsync(dto.SKU, null, cancellationToken))
        {
            throw new InvalidOperationException($"A product with SKU '{dto.SKU}' already exists.");
        }

        // Validate slug uniqueness
        if (await _productRepository.SlugExistsAsync(dto.Slug, null, cancellationToken))
        {
            throw new InvalidOperationException($"A product with slug '{dto.Slug}' already exists.");
        }

        // Get default name from English translation
        var englishTranslation = dto.Translations.FirstOrDefault(t => t.LanguageCode == "en");
        var defaultName = englishTranslation?.Name ?? dto.Translations.FirstOrDefault()?.Name ?? "Unnamed Product";

        var product = new Product
        {
            SKU = dto.SKU,
            Slug = dto.Slug,
            Name = defaultName,
            Description = englishTranslation?.Description,
            ShortDescription = englishTranslation?.ShortDescription,
            UnitPrice = dto.UnitPrice,
            CostPrice = dto.CostPrice,
            Weight = dto.Weight,
            Length = dto.Length,
            Width = dto.Width,
            Height = dto.Height,
            BrandId = dto.BrandId,
            CategoryId = dto.CategoryId,
            IsFeatured = dto.IsFeatured,
            IsActive = true,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };

        var created = await _productRepository.AddAsync(product, cancellationToken);

        // Add translations
        foreach (var translationDto in dto.Translations)
        {
            var translation = new ProductTranslation
            {
                ProductId = created.Id,
                LanguageCode = translationDto.LanguageCode,
                Name = translationDto.Name,
                ShortDescription = translationDto.ShortDescription,
                Description = translationDto.Description,
                MetaTitle = translationDto.MetaTitle,
                MetaDescription = translationDto.MetaDescription,
                MetaKeywords = translationDto.MetaKeywords,
                CreatedAt = DateTime.UtcNow
            };
            await _productRepository.AddTranslationAsync(translation, cancellationToken);
        }

        // Add images
        var displayOrder = 0;
        foreach (var imageDto in dto.Images)
        {
            var image = new ProductImage
            {
                ProductId = created.Id,
                ImageUrl = imageDto.ImageUrl,
                AltText = imageDto.AltText,
                DisplayOrder = imageDto.DisplayOrder > 0 ? imageDto.DisplayOrder : displayOrder++,
                IsPrimary = imageDto.IsPrimary,
                CreatedAt = DateTime.UtcNow
            };
            await _productRepository.AddImageAsync(image, cancellationToken);
        }

        // Set primary image if none specified
        if (dto.Images.Any() && !dto.Images.Any(i => i.IsPrimary))
        {
            var images = await _productRepository.GetImagesAsync(created.Id, cancellationToken);
            if (images.Any())
            {
                await _productRepository.SetPrimaryImageAsync(created.Id, images.First().Id, cancellationToken);
            }
        }

        // Get full product with all details
        var fullProduct = await _productRepository.GetByIdWithDetailsAsync(created.Id, cancellationToken);
        return MapToDto(fullProduct!);
    }

    public async Task<ProductDto> UpdateAsync(UpdateProductDto dto, CancellationToken cancellationToken = default)
    {
        var product = await _productRepository.GetByIdAsync(dto.Id, cancellationToken)
            ?? throw new InvalidOperationException($"Product with ID {dto.Id} not found.");

        // Validate SKU uniqueness
        if (await _productRepository.SKUExistsAsync(dto.SKU, dto.Id, cancellationToken))
        {
            throw new InvalidOperationException($"A product with SKU '{dto.SKU}' already exists.");
        }

        // Validate slug uniqueness
        if (await _productRepository.SlugExistsAsync(dto.Slug, dto.Id, cancellationToken))
        {
            throw new InvalidOperationException($"A product with slug '{dto.Slug}' already exists.");
        }

        // Get default name from English translation
        var englishTranslation = dto.Translations.FirstOrDefault(t => t.LanguageCode == "en");
        
        product.SKU = dto.SKU;
        product.Slug = dto.Slug;
        product.Name = englishTranslation?.Name ?? product.Name;
        product.Description = englishTranslation?.Description;
        product.ShortDescription = englishTranslation?.ShortDescription;
        product.UnitPrice = dto.UnitPrice;
        product.CostPrice = dto.CostPrice;
        product.Weight = dto.Weight;
        product.Length = dto.Length;
        product.Width = dto.Width;
        product.Height = dto.Height;
        product.BrandId = dto.BrandId;
        product.CategoryId = dto.CategoryId;
        product.IsActive = dto.IsActive;
        product.IsFeatured = dto.IsFeatured;
        product.UpdatedAt = DateTime.UtcNow;

        await _productRepository.UpdateAsync(product, cancellationToken);

        // Update translations
        foreach (var translationDto in dto.Translations)
        {
            var existing = await _productRepository.GetTranslationAsync(product.Id, translationDto.LanguageCode, cancellationToken);

            if (existing != null)
            {
                existing.Name = translationDto.Name;
                existing.ShortDescription = translationDto.ShortDescription;
                existing.Description = translationDto.Description;
                existing.MetaTitle = translationDto.MetaTitle;
                existing.MetaDescription = translationDto.MetaDescription;
                existing.MetaKeywords = translationDto.MetaKeywords;
                await _productRepository.UpdateTranslationAsync(existing, cancellationToken);
            }
            else
            {
                var newTranslation = new ProductTranslation
                {
                    ProductId = product.Id,
                    LanguageCode = translationDto.LanguageCode,
                    Name = translationDto.Name,
                    ShortDescription = translationDto.ShortDescription,
                    Description = translationDto.Description,
                    MetaTitle = translationDto.MetaTitle,
                    MetaDescription = translationDto.MetaDescription,
                    MetaKeywords = translationDto.MetaKeywords,
                    CreatedAt = DateTime.UtcNow
                };
                await _productRepository.AddTranslationAsync(newTranslation, cancellationToken);
            }
        }

        // Get full product with all details
        var fullProduct = await _productRepository.GetByIdWithDetailsAsync(product.Id, cancellationToken);
        return MapToDto(fullProduct!);
    }

    public async Task DeleteAsync(int id, CancellationToken cancellationToken = default)
    {
        var product = await _productRepository.GetByIdAsync(id, cancellationToken)
            ?? throw new InvalidOperationException($"Product with ID {id} not found.");

        await _productRepository.DeleteAsync(product, cancellationToken);
    }

    public async Task SoftDeleteAsync(int id, string deletedBy, CancellationToken cancellationToken = default)
    {
        await _productRepository.SoftDeleteAsync(id, deletedBy, cancellationToken);
    }

    public async Task RestoreAsync(int id, CancellationToken cancellationToken = default)
    {
        await _productRepository.RestoreAsync(id, cancellationToken);
    }

    public async Task UpdateStatusAsync(int id, bool isActive, CancellationToken cancellationToken = default)
    {
        await _productRepository.UpdateStatusAsync(id, isActive, cancellationToken);
    }

    #endregion

    #region Translations

    public async Task<ProductTranslationDto> AddTranslationAsync(int productId, ProductTranslationDto dto, CancellationToken cancellationToken = default)
    {
        if (!await _productRepository.ExistsAsync(productId, cancellationToken))
        {
            throw new InvalidOperationException($"Product with ID {productId} not found.");
        }

        var existing = await _productRepository.GetTranslationAsync(productId, dto.LanguageCode, cancellationToken);
        if (existing != null)
        {
            throw new InvalidOperationException($"Translation for language '{dto.LanguageCode}' already exists.");
        }

        var translation = new ProductTranslation
        {
            ProductId = productId,
            LanguageCode = dto.LanguageCode,
            Name = dto.Name,
            ShortDescription = dto.ShortDescription,
            Description = dto.Description,
            MetaTitle = dto.MetaTitle,
            MetaDescription = dto.MetaDescription,
            MetaKeywords = dto.MetaKeywords,
            CreatedAt = DateTime.UtcNow
        };

        var created = await _productRepository.AddTranslationAsync(translation, cancellationToken);

        return new ProductTranslationDto
        {
            Id = created.Id,
            LanguageCode = created.LanguageCode,
            Name = created.Name,
            ShortDescription = created.ShortDescription,
            Description = created.Description,
            MetaTitle = created.MetaTitle,
            MetaDescription = created.MetaDescription,
            MetaKeywords = created.MetaKeywords
        };
    }

    public async Task<ProductTranslationDto> UpdateTranslationAsync(int productId, ProductTranslationDto dto, CancellationToken cancellationToken = default)
    {
        var translation = await _productRepository.GetTranslationAsync(productId, dto.LanguageCode, cancellationToken)
            ?? throw new InvalidOperationException($"Translation for language '{dto.LanguageCode}' not found.");

        translation.Name = dto.Name;
        translation.ShortDescription = dto.ShortDescription;
        translation.Description = dto.Description;
        translation.MetaTitle = dto.MetaTitle;
        translation.MetaDescription = dto.MetaDescription;
        translation.MetaKeywords = dto.MetaKeywords;

        await _productRepository.UpdateTranslationAsync(translation, cancellationToken);

        return new ProductTranslationDto
        {
            Id = translation.Id,
            LanguageCode = translation.LanguageCode,
            Name = translation.Name,
            ShortDescription = translation.ShortDescription,
            Description = translation.Description,
            MetaTitle = translation.MetaTitle,
            MetaDescription = translation.MetaDescription,
            MetaKeywords = translation.MetaKeywords
        };
    }

    public async Task DeleteTranslationAsync(int productId, string languageCode, CancellationToken cancellationToken = default)
    {
        var translation = await _productRepository.GetTranslationAsync(productId, languageCode, cancellationToken)
            ?? throw new InvalidOperationException($"Translation for language '{languageCode}' not found.");

        await _productRepository.DeleteTranslationAsync(translation.Id, cancellationToken);
    }

    #endregion

    #region Images

    public async Task<ProductImageDto> AddImageAsync(int productId, ProductImageDto dto, CancellationToken cancellationToken = default)
    {
        if (!await _productRepository.ExistsAsync(productId, cancellationToken))
        {
            throw new InvalidOperationException($"Product with ID {productId} not found.");
        }

        var image = new ProductImage
        {
            ProductId = productId,
            ImageUrl = dto.ImageUrl,
            AltText = dto.AltText,
            DisplayOrder = dto.DisplayOrder,
            IsPrimary = dto.IsPrimary,
            CreatedAt = DateTime.UtcNow
        };

        var created = await _productRepository.AddImageAsync(image, cancellationToken);

        if (dto.IsPrimary)
        {
            await _productRepository.SetPrimaryImageAsync(productId, created.Id, cancellationToken);
        }

        return new ProductImageDto
        {
            Id = created.Id,
            ImageUrl = created.ImageUrl,
            AltText = created.AltText,
            DisplayOrder = created.DisplayOrder,
            IsPrimary = created.IsPrimary
        };
    }

    public async Task<ProductImageDto> UpdateImageAsync(int productId, ProductImageDto dto, CancellationToken cancellationToken = default)
    {
        var image = await _productRepository.GetImageByIdAsync(dto.Id ?? 0, cancellationToken)
            ?? throw new InvalidOperationException($"Image with ID {dto.Id} not found.");

        if (image.ProductId != productId)
        {
            throw new InvalidOperationException("Image does not belong to this product.");
        }

        image.ImageUrl = dto.ImageUrl;
        image.AltText = dto.AltText;
        image.DisplayOrder = dto.DisplayOrder;
        image.UpdatedAt = DateTime.UtcNow;

        await _productRepository.UpdateImageAsync(image, cancellationToken);

        if (dto.IsPrimary)
        {
            await _productRepository.SetPrimaryImageAsync(productId, image.Id, cancellationToken);
        }

        return new ProductImageDto
        {
            Id = image.Id,
            ImageUrl = image.ImageUrl,
            AltText = image.AltText,
            DisplayOrder = image.DisplayOrder,
            IsPrimary = dto.IsPrimary
        };
    }

    public async Task DeleteImageAsync(int productId, int imageId, CancellationToken cancellationToken = default)
    {
        var image = await _productRepository.GetImageByIdAsync(imageId, cancellationToken)
            ?? throw new InvalidOperationException($"Image with ID {imageId} not found.");

        if (image.ProductId != productId)
        {
            throw new InvalidOperationException("Image does not belong to this product.");
        }

        await _productRepository.DeleteImageAsync(imageId, cancellationToken);
    }

    public async Task SetPrimaryImageAsync(int productId, int imageId, CancellationToken cancellationToken = default)
    {
        await _productRepository.SetPrimaryImageAsync(productId, imageId, cancellationToken);
    }

    #endregion

    #region Validation

    public async Task<bool> ExistsAsync(int id, CancellationToken cancellationToken = default)
    {
        return await _productRepository.ExistsAsync(id, cancellationToken);
    }

    public async Task<bool> SKUExistsAsync(string sku, int? excludeId = null, CancellationToken cancellationToken = default)
    {
        return await _productRepository.SKUExistsAsync(sku, excludeId, cancellationToken);
    }

    public async Task<bool> SlugExistsAsync(string slug, int? excludeId = null, CancellationToken cancellationToken = default)
    {
        return await _productRepository.SlugExistsAsync(slug, excludeId, cancellationToken);
    }

    #endregion

    #region Mapping

    private static ProductDto MapToDto(Product product)
    {
        var primaryImage = product.Images?.FirstOrDefault(i => i.IsPrimary) ?? product.Images?.FirstOrDefault();

        return new ProductDto
        {
            Id = product.Id,
            SKU = product.SKU,
            Slug = product.Slug,
            Name = product.Name,
            ShortDescription = product.ShortDescription,
            Description = product.Description,
            UnitPrice = product.UnitPrice,
            CostPrice = product.CostPrice,
            Weight = product.Weight,
            Length = product.Length,
            Width = product.Width,
            Height = product.Height,
            IsActive = product.IsActive,
            IsFeatured = product.IsFeatured,
            BrandId = product.BrandId,
            BrandName = product.Brand?.Name ?? string.Empty,
            CategoryId = product.CategoryId,
            CategoryName = product.Category?.Name ?? string.Empty,
            PrimaryImageUrl = primaryImage?.ImageUrl,
            CreatedAt = product.CreatedAt,
            UpdatedAt = product.UpdatedAt,
            Images = product.Images?.Select(i => new ProductImageDto
            {
                Id = i.Id,
                ImageUrl = i.ImageUrl,
                AltText = i.AltText,
                DisplayOrder = i.DisplayOrder,
                IsPrimary = i.IsPrimary
            }).ToList() ?? new List<ProductImageDto>(),
            Translations = product.Translations?.Select(t => new ProductTranslationDto
            {
                Id = t.Id,
                LanguageCode = t.LanguageCode,
                Name = t.Name,
                ShortDescription = t.ShortDescription,
                Description = t.Description,
                MetaTitle = t.MetaTitle,
                MetaDescription = t.MetaDescription,
                MetaKeywords = t.MetaKeywords
            }).ToList() ?? new List<ProductTranslationDto>()
        };
    }

    private static LocalizedProductDto MapToLocalizedDto(Product product, string languageCode)
    {
        var translation = product.Translations?.FirstOrDefault(t => t.LanguageCode == languageCode)
            ?? product.Translations?.FirstOrDefault(t => t.LanguageCode == "en");

        var primaryImage = product.Images?.FirstOrDefault(i => i.IsPrimary) ?? product.Images?.FirstOrDefault();

        return new LocalizedProductDto
        {
            Id = product.Id,
            SKU = product.SKU,
            Slug = product.Slug,
            Name = translation?.Name ?? product.Name,
            ShortDescription = translation?.ShortDescription ?? product.ShortDescription,
            Description = translation?.Description ?? product.Description,
            UnitPrice = product.UnitPrice,
            IsActive = product.IsActive,
            IsFeatured = product.IsFeatured,
            BrandId = product.BrandId,
            BrandName = product.Brand?.Name ?? string.Empty,
            CategoryId = product.CategoryId,
            CategoryName = product.Category?.Name ?? string.Empty,
            PrimaryImageUrl = primaryImage?.ImageUrl,
            LanguageCode = languageCode,
            Images = product.Images?.OrderBy(i => i.DisplayOrder).Select(i => new ProductImageDto
            {
                Id = i.Id,
                ImageUrl = i.ImageUrl,
                AltText = i.AltText,
                DisplayOrder = i.DisplayOrder,
                IsPrimary = i.IsPrimary
            }).ToList() ?? new List<ProductImageDto>()
        };
    }

    #endregion
}
