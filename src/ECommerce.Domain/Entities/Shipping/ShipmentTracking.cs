using ECommerce.Domain.Common;
using ECommerce.Domain.Enums;

namespace ECommerce.Domain.Entities.Shipping;

/// <summary>
/// Tracking history for a shipment - records status changes and locations.
/// </summary>
public class ShipmentTracking : BaseEntity
{
    public int ShipmentId { get; set; }
    public ShipmentStatus Status { get; set; }
    public string? Location { get; set; }
    public string? Description { get; set; }
    public string? Notes { get; set; }
    public string? PerformedBy { get; set; }
    public string? PerformedByName { get; set; }
    public double? Latitude { get; set; }
    public double? Longitude { get; set; }
    public DateTime OccurredAt { get; set; } = DateTime.UtcNow;

    // Navigation
    public virtual Shipment Shipment { get; set; } = null!;
}
