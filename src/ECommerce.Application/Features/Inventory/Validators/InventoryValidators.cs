// ==============================================
// InventoryValidators.cs - FluentValidation Validators
// ==============================================

using FluentValidation;
using ECommerce.Application.Features.Inventory.DTOs;

namespace ECommerce.Application.Features.Inventory.Validators;

/// <summary>
/// Validator for InitializeStockRequest.
/// </summary>
public class InitializeStockRequestValidator : AbstractValidator<InitializeStockRequest>
{
    public InitializeStockRequestValidator()
    {
        RuleFor(x => x.ProductId)
            .GreaterThan(0)
            .WithMessage("ProductId must be a positive integer");

        RuleFor(x => x.WarehouseId)
            .GreaterThan(0)
            .WithMessage("WarehouseId must be a positive integer");

        RuleFor(x => x.InitialQuantity)
            .GreaterThanOrEqualTo(0)
            .WithMessage("InitialQuantity cannot be negative");

        RuleFor(x => x.ReorderLevel)
            .GreaterThanOrEqualTo(0)
            .When(x => x.ReorderLevel.HasValue)
            .WithMessage("ReorderLevel cannot be negative");

        RuleFor(x => x.Notes)
            .MaximumLength(500)
            .When(x => !string.IsNullOrEmpty(x.Notes))
            .WithMessage("Notes cannot exceed 500 characters");
    }
}

/// <summary>
/// Validator for AdjustStockRequest.
/// </summary>
public class AdjustStockRequestValidator : AbstractValidator<AdjustStockRequest>
{
    public AdjustStockRequestValidator()
    {
        RuleFor(x => x.ProductId)
            .GreaterThan(0)
            .WithMessage("ProductId must be a positive integer");

        RuleFor(x => x.WarehouseId)
            .GreaterThan(0)
            .WithMessage("WarehouseId must be a positive integer");

        RuleFor(x => x.Quantity)
            .GreaterThan(0)
            .When(x => x.AdjustmentType != AdjustmentType.SetAbsolute)
            .WithMessage("Quantity must be positive for increase/decrease operations");

        RuleFor(x => x.Quantity)
            .GreaterThanOrEqualTo(0)
            .When(x => x.AdjustmentType == AdjustmentType.SetAbsolute)
            .WithMessage("Quantity cannot be negative for absolute adjustment");

        RuleFor(x => x.AdjustmentType)
            .IsInEnum()
            .WithMessage("Invalid adjustment type");

        RuleFor(x => x.Reason)
            .NotEmpty()
            .WithMessage("Reason is required")
            .MaximumLength(200)
            .WithMessage("Reason cannot exceed 200 characters");

        RuleFor(x => x.Notes)
            .MaximumLength(500)
            .When(x => !string.IsNullOrEmpty(x.Notes))
            .WithMessage("Notes cannot exceed 500 characters");
    }
}

/// <summary>
/// Validator for TransferStockRequest.
/// </summary>
public class TransferStockRequestValidator : AbstractValidator<TransferStockRequest>
{
    public TransferStockRequestValidator()
    {
        RuleFor(x => x.ProductId)
            .GreaterThan(0)
            .WithMessage("ProductId must be a positive integer");

        RuleFor(x => x.SourceWarehouseId)
            .GreaterThan(0)
            .WithMessage("SourceWarehouseId must be a positive integer");

        RuleFor(x => x.DestinationWarehouseId)
            .GreaterThan(0)
            .WithMessage("DestinationWarehouseId must be a positive integer");

        RuleFor(x => x)
            .Must(x => x.SourceWarehouseId != x.DestinationWarehouseId)
            .WithMessage("Source and destination warehouses must be different");

        RuleFor(x => x.Quantity)
            .GreaterThan(0)
            .WithMessage("Quantity must be positive");

        RuleFor(x => x.Reason)
            .MaximumLength(200)
            .When(x => !string.IsNullOrEmpty(x.Reason))
            .WithMessage("Reason cannot exceed 200 characters");

        RuleFor(x => x.Notes)
            .MaximumLength(500)
            .When(x => !string.IsNullOrEmpty(x.Notes))
            .WithMessage("Notes cannot exceed 500 characters");
    }
}

/// <summary>
/// Validator for ReserveStockRequest.
/// </summary>
public class ReserveStockRequestValidator : AbstractValidator<ReserveStockRequest>
{
    public ReserveStockRequestValidator()
    {
        RuleFor(x => x.ProductId)
            .GreaterThan(0)
            .WithMessage("ProductId must be a positive integer");

        RuleFor(x => x.WarehouseId)
            .GreaterThan(0)
            .WithMessage("WarehouseId must be a positive integer");

        RuleFor(x => x.Quantity)
            .GreaterThan(0)
            .WithMessage("Quantity must be positive");

        RuleFor(x => x.OrderId)
            .GreaterThan(0)
            .WithMessage("OrderId must be a positive integer");
    }
}

/// <summary>
/// Validator for ReleaseStockRequest.
/// </summary>
public class ReleaseStockRequestValidator : AbstractValidator<ReleaseStockRequest>
{
    public ReleaseStockRequestValidator()
    {
        RuleFor(x => x.ProductId)
            .GreaterThan(0)
            .WithMessage("ProductId must be a positive integer");

        RuleFor(x => x.WarehouseId)
            .GreaterThan(0)
            .WithMessage("WarehouseId must be a positive integer");

        RuleFor(x => x.Quantity)
            .GreaterThan(0)
            .WithMessage("Quantity must be positive");

        RuleFor(x => x.OrderId)
            .GreaterThan(0)
            .WithMessage("OrderId must be a positive integer");

        RuleFor(x => x.Reason)
            .MaximumLength(200)
            .When(x => !string.IsNullOrEmpty(x.Reason))
            .WithMessage("Reason cannot exceed 200 characters");
    }
}
