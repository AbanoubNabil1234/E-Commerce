namespace ECommerce.Domain.Common;

/// <summary>
/// Base entity class with common properties for all entities.
/// </summary>
public abstract class BaseEntity
{
    public int Id { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }
}

/// <summary>
/// Base entity for entities that track who created/updated them.
/// </summary>
public abstract class AuditableEntity : BaseEntity
{
    public string? CreatedBy { get; set; }
    public string? UpdatedBy { get; set; }
}
