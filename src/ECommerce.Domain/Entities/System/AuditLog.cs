namespace ECommerce.Domain.Entities.System;

/// <summary>
/// Comprehensive audit trail for all entity changes.
/// Uses BIGINT Id for high volume.
/// </summary>
public class AuditLog
{
    public long Id { get; set; }
    public string? UserId { get; set; } // AspNetUsers.Id (NULL for system actions)
    public string Action { get; set; } = string.Empty;
    public string EntityType { get; set; } = string.Empty;
    public string? EntityId { get; set; }
    public string? OldValues { get; set; } // JSON
    public string? NewValues { get; set; } // JSON
    public string? IpAddress { get; set; }
    public string? UserAgent { get; set; }
    public DateTime Timestamp { get; set; } = DateTime.UtcNow;
}
