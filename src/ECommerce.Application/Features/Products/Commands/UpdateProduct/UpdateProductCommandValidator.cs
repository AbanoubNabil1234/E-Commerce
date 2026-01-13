using FluentValidation;
using ECommerce.Application.Interfaces.Repositories;

namespace ECommerce.Application.Features.Products.Commands.UpdateProduct;

/// <summary>
/// Validator for UpdateProductCommand.
/// </summary>
public class UpdateProductCommandValidator : AbstractValidator<UpdateProductCommand>
{
    private readonly IProductRepository _productRepository;
    private readonly IBrandRepository _brandRepository;
    private readonly ICategoryRepository _categoryRepository;

    public UpdateProductCommandValidator(
        IProductRepository productRepository,
        IBrandRepository brandRepository,
        ICategoryRepository categoryRepository)
    {
        _productRepository = productRepository;
        _brandRepository = brandRepository;
        _categoryRepository = categoryRepository;

        RuleFor(x => x.Id)
            .GreaterThan(0).WithMessage("Product ID is required.")
            .MustAsync(ProductExists).WithMessage("Product not found.");

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
    }

    private async Task<bool> ProductExists(int id, CancellationToken cancellationToken)
    {
        return await _productRepository.ExistsAsync(id, cancellationToken);
    }

    private async Task<bool> BeUniqueSKU(UpdateProductCommand command, string sku, CancellationToken cancellationToken)
    {
        return !await _productRepository.SKUExistsAsync(sku, command.Id, cancellationToken);
    }

    private async Task<bool> BeUniqueSlug(UpdateProductCommand command, string slug, CancellationToken cancellationToken)
    {
        return !await _productRepository.SlugExistsAsync(slug, command.Id, cancellationToken);
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
