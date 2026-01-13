using FluentValidation;
using ECommerce.Application.Interfaces.Repositories;

namespace ECommerce.Application.Features.Products.Commands.CreateProduct;

/// <summary>
/// Validator for CreateProductCommand with business rules.
/// </summary>
public class CreateProductCommandValidator : AbstractValidator<CreateProductCommand>
{
    private readonly IProductRepository _productRepository;
    private readonly IBrandRepository _brandRepository;
    private readonly ICategoryRepository _categoryRepository;

    public CreateProductCommandValidator(
        IProductRepository productRepository,
        IBrandRepository brandRepository,
        ICategoryRepository categoryRepository)
    {
        _productRepository = productRepository;
        _brandRepository = brandRepository;
        _categoryRepository = categoryRepository;

        RuleFor(x => x.SKU)
            .NotEmpty().WithMessage("SKU is required.")
            .MaximumLength(50).WithMessage("SKU cannot exceed 50 characters.")
            .MustAsync(BeUniqueSKU).WithMessage("A product with this SKU already exists.");

        RuleFor(x => x.Slug)
            .NotEmpty().WithMessage("Slug is required.")
            .MaximumLength(200).WithMessage("Slug cannot exceed 200 characters.")
            .Matches(@"^[a-z0-9]+(?:-[a-z0-9]+)*$").WithMessage("Slug can only contain lowercase letters, numbers, and hyphens.")
            .MustAsync(BeUniqueSlug).WithMessage("A product with this slug already exists.");

        RuleFor(x => x.UnitPrice)
            .GreaterThan(0).WithMessage("Unit price must be greater than zero.");

        RuleFor(x => x.CostPrice)
            .GreaterThanOrEqualTo(0).When(x => x.CostPrice.HasValue)
            .WithMessage("Cost price cannot be negative.");

        RuleFor(x => x.BrandId)
            .GreaterThan(0).WithMessage("Brand is required.")
            .MustAsync(BrandExists).WithMessage("Brand does not exist.");

        RuleFor(x => x.CategoryId)
            .GreaterThan(0).WithMessage("Category is required.")
            .MustAsync(CategoryExists).WithMessage("Category does not exist.");

        RuleFor(x => x.Translations)
            .NotEmpty().WithMessage("At least one translation is required.")
            .Must(HaveEnglishTranslation).WithMessage("English translation is required.");

        RuleForEach(x => x.Translations).ChildRules(translation =>
        {
            translation.RuleFor(t => t.LanguageCode)
                .NotEmpty().WithMessage("Language code is required.")
                .Length(2).WithMessage("Language code must be 2 characters.");

            translation.RuleFor(t => t.Name)
                .NotEmpty().WithMessage("Product name is required.")
                .MinimumLength(2).WithMessage("Product name must be at least 2 characters.")
                .MaximumLength(200).WithMessage("Product name cannot exceed 200 characters.");
        });

        RuleForEach(x => x.Images).ChildRules(image =>
        {
            image.RuleFor(i => i.ImageUrl)
                .NotEmpty().WithMessage("Image URL is required.")
                .MaximumLength(500).WithMessage("Image URL cannot exceed 500 characters.");
        });
    }

    private async Task<bool> BeUniqueSKU(string sku, CancellationToken cancellationToken)
    {
        return !await _productRepository.SKUExistsAsync(sku, null, cancellationToken);
    }

    private async Task<bool> BeUniqueSlug(string slug, CancellationToken cancellationToken)
    {
        return !await _productRepository.SlugExistsAsync(slug, null, cancellationToken);
    }

    private async Task<bool> BrandExists(int brandId, CancellationToken cancellationToken)
    {
        return await _brandRepository.ExistsAsync(brandId, cancellationToken);
    }

    private async Task<bool> CategoryExists(int categoryId, CancellationToken cancellationToken)
    {
        return await _categoryRepository.ExistsAsync(categoryId, cancellationToken);
    }

    private bool HaveEnglishTranslation(List<Application.DTOs.Catalog.ProductTranslationDto> translations)
    {
        return translations.Any(t => t.LanguageCode == "en" && !string.IsNullOrWhiteSpace(t.Name));
    }
}
