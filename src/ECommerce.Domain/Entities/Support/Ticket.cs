using ECommerce.Domain.Common;
using ECommerce.Domain.Entities.Orders;
using ECommerce.Domain.Enums;

namespace ECommerce.Domain.Entities.Support;

/// <summary>
/// Customer support ticket.
/// </summary>
public class Ticket : BaseEntity
{
    public string TicketNumber { get; set; } = string.Empty;
    public string CustomerId { get; set; } = string.Empty; // AspNetUsers.Id
    public int? OrderId { get; set; }
    public string Category { get; set; } = string.Empty;
    public string Subject { get; set; } = string.Empty;
    public TicketPriority Priority { get; set; } = TicketPriority.Normal;
    public TicketStatus Status { get; set; } = TicketStatus.Open;
    public string? AssignedTo { get; set; } // AspNetUsers.Id (support agent)
    public DateTime? ResolvedAt { get; set; }

    // Navigation
    public virtual Order? Order { get; set; }
    public virtual ICollection<TicketMessage> Messages { get; set; } = new List<TicketMessage>();
}
