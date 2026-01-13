// ==============================================
// ValidationBehaviour.cs
// MediatR pipeline validation behaviour
// ==============================================
// Responsibilities:
// - Validates requests before handler execution
// - Uses FluentValidation validators
// - Throws ValidationException on failure
// ==============================================

namespace ECommerce.Application.Common.Behaviours;

public class ValidationBehaviour<TRequest, TResponse>
{
    // TODO: Implement IPipelineBehavior
    // TODO: Inject IEnumerable<IValidator<TRequest>>
    // TODO: Run validators and collect errors
}
