using FluentValidation;
using ECommerce.Application.Common.Validation;
using ECommerce.Application.Features.Brands.Commands;

namespace ECommerce.Application.Features.Brands.Validators;

/// <summary>
/// Validator for UpdateBrandCommand.
/// Uses message keys for frontend translation.
/// </summary>
public class UpdateBrandCommandValidator : AbstractValidator<UpdateBrandCommand>
{
    public UpdateBrandCommandValidator()
    {
        RuleFor(x => x.Id)
            .GreaterThan(0)
            .WithMessage(ValidationMessages.BrandIdRequired);

        RuleFor(x => x.Name)
            .NotEmpty()
            .WithMessage(ValidationMessages.BrandNameRequired)
            .MaximumLength(100)
            .WithMessage(ValidationMessages.BrandNameMaxLength);

        RuleFor(x => x.Slug)
            .NotEmpty()
            .WithMessage(ValidationMessages.BrandSlugRequired)
            .MaximumLength(100)
            .WithMessage(ValidationMessages.BrandSlugMaxLength)
            .Matches(@"^[a-z0-9]+(?:-[a-z0-9]+)*$")
            .WithMessage(ValidationMessages.InvalidSlug);

        RuleFor(x => x.Description)
            .MaximumLength(500)
            .WithMessage(ValidationMessages.BrandDescriptionMaxLength)
            .When(x => !string.IsNullOrEmpty(x.Description));

        RuleFor(x => x.Website)
            .Must(BeAValidUrl)
            .WithMessage(ValidationMessages.InvalidUrl)
            .When(x => !string.IsNullOrEmpty(x.Website));

        RuleFor(x => x.LogoUrl)
            .Must(BeAValidUrl)
            .WithMessage(ValidationMessages.InvalidUrl)
            .When(x => !string.IsNullOrEmpty(x.LogoUrl));

        // Validate translations
        RuleForEach(x => x.Translations)
            .SetValidator(new BrandTranslationValidator());
    }

    private static bool BeAValidUrl(string? url)
    {
        if (string.IsNullOrEmpty(url)) return true;
        
        // Allow relative paths (e.g. /assets/images/...)
        if (url.StartsWith("/")) return true;

        return Uri.TryCreate(url, UriKind.Absolute, out var uriResult)
               && (uriResult.Scheme == Uri.UriSchemeHttp || uriResult.Scheme == Uri.UriSchemeHttps);
    }
}
