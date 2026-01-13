// ==============================================
// WarehouseValidators.cs - FluentValidation Validators
// ==============================================

using FluentValidation;
using ECommerce.Application.DTOs;

namespace ECommerce.Application.Features.Warehouses.Validators;

/// <summary>
/// Validator for CreateWarehouseRequest.
/// </summary>
public class CreateWarehouseRequestValidator : AbstractValidator<CreateWarehouseRequest>
{
    public CreateWarehouseRequestValidator()
    {
        RuleFor(x => x.Name)
            .NotEmpty()
            .WithMessage("Warehouse name is required")
            .MaximumLength(100)
            .WithMessage("Warehouse name cannot exceed 100 characters");

        RuleFor(x => x.Code)
            .NotEmpty()
            .WithMessage("Warehouse code is required")
            .MaximumLength(20)
            .WithMessage("Warehouse code cannot exceed 20 characters")
            .Matches(@"^[A-Z0-9\-_]+$")
            .WithMessage("Warehouse code must contain only uppercase letters, numbers, hyphens, or underscores");

        RuleFor(x => x.Address)
            .NotEmpty()
            .WithMessage("Address is required")
            .MaximumLength(200)
            .WithMessage("Address cannot exceed 200 characters");

        RuleFor(x => x.City)
            .NotEmpty()
            .WithMessage("City is required")
            .MaximumLength(100)
            .WithMessage("City cannot exceed 100 characters");

        RuleFor(x => x.State)
            .MaximumLength(100)
            .WithMessage("State cannot exceed 100 characters");

        RuleFor(x => x.Country)
            .NotEmpty()
            .WithMessage("Country is required")
            .MaximumLength(100)
            .WithMessage("Country cannot exceed 100 characters");

        RuleFor(x => x.PostalCode)
            .MaximumLength(20)
            .WithMessage("Postal code cannot exceed 20 characters");

        RuleFor(x => x.Phone)
            .MaximumLength(30)
            .WithMessage("Phone cannot exceed 30 characters");

        RuleFor(x => x.Email)
            .MaximumLength(100)
            .WithMessage("Email cannot exceed 100 characters")
            .EmailAddress()
            .When(x => !string.IsNullOrEmpty(x.Email))
            .WithMessage("Invalid email format");
    }
}

/// <summary>
/// Validator for UpdateWarehouseRequest.
/// </summary>
public class UpdateWarehouseRequestValidator : AbstractValidator<UpdateWarehouseRequest>
{
    public UpdateWarehouseRequestValidator()
    {
        RuleFor(x => x.Name)
            .NotEmpty()
            .WithMessage("Warehouse name is required")
            .MaximumLength(100)
            .WithMessage("Warehouse name cannot exceed 100 characters");

        RuleFor(x => x.Code)
            .NotEmpty()
            .WithMessage("Warehouse code is required")
            .MaximumLength(20)
            .WithMessage("Warehouse code cannot exceed 20 characters")
            .Matches(@"^[A-Z0-9\-_]+$")
            .WithMessage("Warehouse code must contain only uppercase letters, numbers, hyphens, or underscores");

        RuleFor(x => x.Address)
            .NotEmpty()
            .WithMessage("Address is required")
            .MaximumLength(200)
            .WithMessage("Address cannot exceed 200 characters");

        RuleFor(x => x.City)
            .NotEmpty()
            .WithMessage("City is required")
            .MaximumLength(100)
            .WithMessage("City cannot exceed 100 characters");

        RuleFor(x => x.State)
            .MaximumLength(100)
            .WithMessage("State cannot exceed 100 characters");

        RuleFor(x => x.Country)
            .NotEmpty()
            .WithMessage("Country is required")
            .MaximumLength(100)
            .WithMessage("Country cannot exceed 100 characters");

        RuleFor(x => x.PostalCode)
            .MaximumLength(20)
            .WithMessage("Postal code cannot exceed 20 characters");

        RuleFor(x => x.Phone)
            .MaximumLength(30)
            .WithMessage("Phone cannot exceed 30 characters");

        RuleFor(x => x.Email)
            .MaximumLength(100)
            .WithMessage("Email cannot exceed 100 characters")
            .EmailAddress()
            .When(x => !string.IsNullOrEmpty(x.Email))
            .WithMessage("Invalid email format");
    }
}
