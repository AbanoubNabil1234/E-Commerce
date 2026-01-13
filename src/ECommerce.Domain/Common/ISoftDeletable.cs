namespace ECommerce.Domain.Common;

/// <summary>
/// Interface for entities that support soft delete.
/// </summary>
public interface ISoftDeletable
{
    bool IsActive { get; set; }
    DateTime? DeletedAt { get; set; }
    string? DeletedBy { get; set; }
}
