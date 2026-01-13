using FluentValidation;
using ECommerce.Application.Common.Validation;
using ECommerce.Application.Features.Brands.Commands;

namespace ECommerce.Application.Features.Brands.Validators;

/// <summary>
/// Validator for DeleteBrandCommand.
/// </summary>
public class DeleteBrandCommandValidator : AbstractValidator<DeleteBrandCommand>
{
    public DeleteBrandCommandValidator()
    {
        RuleFor(x => x.Id)
            .GreaterThan(0)
            .WithMessage(ValidationMessages.BrandIdRequired);

        RuleFor(x => x.DeletedBy)
            .NotEmpty()
            .WithMessage(ValidationMessages.Required)
            .When(x => !x.HardDelete);
    }
}
