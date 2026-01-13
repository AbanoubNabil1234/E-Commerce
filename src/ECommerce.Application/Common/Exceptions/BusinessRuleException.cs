namespace ECommerce.Application.Common.Exceptions;

/// <summary>
/// Exception thrown when business rule validation fails.
/// </summary>
public class BusinessRuleException : Exception
{
    public string ErrorKey { get; }

    public BusinessRuleException(string errorKey, string? message = null)
        : base(message ?? errorKey)
    {
        ErrorKey = errorKey;
    }
}
