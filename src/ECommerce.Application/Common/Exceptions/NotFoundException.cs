namespace ECommerce.Application.Common.Exceptions;

/// <summary>
/// Exception thrown when a requested entity is not found.
/// </summary>
public class NotFoundException : Exception
{
    public string EntityType { get; }
    public object Key { get; }

    public NotFoundException(string entityType, object key)
        : base($"{entityType} with key '{key}' was not found.")
    {
        EntityType = entityType;
        Key = key;
    }

    public NotFoundException(string message) : base(message)
    {
        EntityType = string.Empty;
        Key = string.Empty;
    }
}
