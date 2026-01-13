using ECommerce.Domain.Common;
using ECommerce.Domain.Entities.Localization;

namespace ECommerce.Domain.Entities.Shipping;

/// <summary>
/// Shipping carriers/providers (FedEx, UPS, DHL, etc.).
/// </summary>
public class Carrier : BaseEntity, ISoftDeletable
{
    public string Name { get; set; } = string.Empty;
    public string Code { get; set; } = string.Empty;
    public string? TrackingUrlTemplate { get; set; }
    public string? ContactPhone { get; set; }
    public string? ContactEmail { get; set; }
    public bool IsActive { get; set; } = true;
    public DateTime? DeletedAt { get; set; }
    public string? DeletedBy { get; set; }

    // Navigation
    public virtual ICollection<Shipment> Shipments { get; set; } = new List<Shipment>();
    public virtual ICollection<CarrierTranslation> Translations { get; set; } = new List<CarrierTranslation>();
}
