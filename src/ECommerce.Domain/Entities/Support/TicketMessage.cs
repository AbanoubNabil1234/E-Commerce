using ECommerce.Domain.Common;

namespace ECommerce.Domain.Entities.Support;

/// <summary>
/// Message in a ticket conversation thread.
/// </summary>
public class TicketMessage : BaseEntity
{
    public int TicketId { get; set; }
    public string SenderId { get; set; } = string.Empty; // AspNetUsers.Id
    public string Message { get; set; } = string.Empty;
    public bool IsInternal { get; set; } // Internal notes not visible to customer
    public string? AttachmentUrl { get; set; }

    // Navigation
    public virtual Ticket Ticket { get; set; } = null!;
}
