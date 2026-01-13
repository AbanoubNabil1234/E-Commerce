using ECommerce.Domain.Common;
using ECommerce.Domain.Entities.Localization;

namespace ECommerce.Domain.Entities.Shipping;

/// <summary>
/// Geographic shipping zones with rates.
/// </summary>
public class ShippingZone : BaseEntity, ISoftDeletable
{
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? Countries { get; set; }
    public string? States { get; set; }
    public string? PostalCodePattern { get; set; }
    public decimal BaseRate { get; set; }
    public decimal PerKgRate { get; set; }
    public int EstimatedDays { get; set; }
    public bool IsActive { get; set; } = true;
    public DateTime? DeletedAt { get; set; }
    public string? DeletedBy { get; set; }

    // Navigation
    public virtual ICollection<Shipment> Shipments { get; set; } = new List<Shipment>();
    public virtual ICollection<ShippingZoneTranslation> Translations { get; set; } = new List<ShippingZoneTranslation>();
}
