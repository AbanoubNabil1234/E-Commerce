using ECommerce.Domain.Common;
using ECommerce.Domain.Entities.Shipping;
using ECommerce.Domain.Entities.Warehouses;
using ECommerce.Domain.Entities.Workforce;
using ECommerce.Domain.Enums;

namespace ECommerce.Domain.Entities.Orders;

/// <summary>
/// Warehouse-specific fulfillment unit (order splitting).
/// </summary>
public class SubOrder : BaseEntity
{
    public int OrderId { get; set; }
    public int WarehouseId { get; set; }
    public string SubOrderNumber { get; set; } = string.Empty;
    public SubOrderStatus Status { get; set; } = SubOrderStatus.Pending;
    public DateTime? AssignedAt { get; set; }
    public DateTime? PickedAt { get; set; }
    public DateTime? PackedAt { get; set; }
    public DateTime? ShippedAt { get; set; }

    // Navigation
    public virtual Order Order { get; set; } = null!;
    public virtual Warehouse Warehouse { get; set; } = null!;
    public virtual ICollection<SubOrderItem> Items { get; set; } = new List<SubOrderItem>();
    public virtual ICollection<WorkTask> Tasks { get; set; } = new List<WorkTask>();
    public virtual Shipment? Shipment { get; set; }
}
