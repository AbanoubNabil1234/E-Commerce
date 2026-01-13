using ECommerce.Domain.Common;
using ECommerce.Domain.Entities.Inventory;
using ECommerce.Domain.Entities.Localization;
using ECommerce.Domain.Entities.Orders;
using ECommerce.Domain.Entities.Workforce;

namespace ECommerce.Domain.Entities.Warehouses;

/// <summary>
/// Physical warehouse location.
/// </summary>
public class Warehouse : BaseEntity, ISoftDeletable
{
    public string Code { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string Address { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
    public string? State { get; set; }
    public string Country { get; set; } = string.Empty;
    public string? PostalCode { get; set; }
    public string? Phone { get; set; }
    public string? Email { get; set; }
    public double? Latitude { get; set; }
    public double? Longitude { get; set; }
    public bool IsActive { get; set; } = true;
    public bool IsDefault { get; set; } = false;
    public DateTime? DeletedAt { get; set; }
    public string? DeletedBy { get; set; }

    // Navigation
    public virtual ICollection<Zone> Zones { get; set; } = new List<Zone>();
    public virtual ICollection<ProductStock> Stocks { get; set; } = new List<ProductStock>();
    public virtual ICollection<SubOrder> SubOrders { get; set; } = new List<SubOrder>();
    public virtual ICollection<Worker> Workers { get; set; } = new List<Worker>();
    public virtual ICollection<WarehouseTranslation> Translations { get; set; } = new List<WarehouseTranslation>();
}
