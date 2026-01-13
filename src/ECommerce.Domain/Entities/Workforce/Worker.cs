using ECommerce.Domain.Common;
using ECommerce.Domain.Entities.Warehouses;

namespace ECommerce.Domain.Entities.Workforce;

/// <summary>
/// Warehouse worker linked to AspNetUsers.
/// </summary>
public class Worker : BaseEntity, ISoftDeletable
{
    public string UserId { get; set; } = string.Empty; // AspNetUsers.Id
    public int WarehouseId { get; set; }
    public string EmployeeCode { get; set; } = string.Empty;
    public string Position { get; set; } = string.Empty;
    public DateTime HireDate { get; set; }
    public decimal? HourlyRate { get; set; }
    public bool IsActive { get; set; } = true;
    public DateTime? DeletedAt { get; set; }
    public string? DeletedBy { get; set; }

    // Navigation
    public virtual Warehouse Warehouse { get; set; } = null!;
    public virtual ICollection<WorkTask> Tasks { get; set; } = new List<WorkTask>();
}
