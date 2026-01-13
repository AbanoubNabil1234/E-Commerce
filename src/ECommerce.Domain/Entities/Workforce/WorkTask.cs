using ECommerce.Domain.Common;
using ECommerce.Domain.Entities.Orders;
using ECommerce.Domain.Enums;

namespace ECommerce.Domain.Entities.Workforce;

/// <summary>
/// Work task assignments for warehouse operations.
/// Named WorkTask to avoid conflict with System.Threading.Tasks.Task.
/// </summary>
public class WorkTask : BaseEntity
{
    public int SubOrderId { get; set; }
    public int? WorkerId { get; set; }
    public Enums.TaskType TaskType { get; set; }
    public Enums.TaskStatus Status { get; set; } = Enums.TaskStatus.Pending;
    public int Priority { get; set; } = 5;
    public DateTime? AssignedAt { get; set; }
    public DateTime? StartedAt { get; set; }
    public DateTime? CompletedAt { get; set; }
    public DateTime? DueAt { get; set; }
    public string? Notes { get; set; }

    // Navigation
    public virtual SubOrder SubOrder { get; set; } = null!;
    public virtual Worker? Worker { get; set; }
}
