using FluentValidation;
using ECommerce.Application.Common.Validation;
using ECommerce.Application.DTOs.Catalog;

namespace ECommerce.Application.Features.Brands.Validators;

/// <summary>
/// Validator for BrandTranslationDto.
/// Reusable for both Create and Update commands.
/// </summary>
public class BrandTranslationValidator : AbstractValidator<BrandTranslationDto>
{
    private static readonly string[] ValidLanguageCodes = { "en", "ar" };

    public BrandTranslationValidator()
    {
        RuleFor(x => x.LanguageCode)
            .NotEmpty()
            .WithMessage(ValidationMessages.LanguageCodeRequired)
            .Must(code => ValidLanguageCodes.Contains(code))
            .WithMessage(ValidationMessages.LanguageCodeInvalid);

        RuleFor(x => x.Name)
            .NotEmpty()
            .WithMessage(ValidationMessages.TranslationNameRequired)
            .MaximumLength(100)
            .WithMessage(ValidationMessages.BrandNameMaxLength);

        RuleFor(x => x.Slug)
            .NotEmpty()
            .WithMessage(ValidationMessages.BrandSlugRequired)
            .MaximumLength(100)
            .WithMessage(ValidationMessages.BrandSlugMaxLength)
            .Matches(@"^[a-z0-9\u0600-\u06FF]+(?:-[a-z0-9\u0600-\u06FF]+)*$")  // Supports Arabic characters in slug
            .WithMessage(ValidationMessages.InvalidSlug);

        RuleFor(x => x.Description)
            .MaximumLength(500)
            .WithMessage(ValidationMessages.BrandDescriptionMaxLength)
            .When(x => !string.IsNullOrEmpty(x.Description));
    }
}
