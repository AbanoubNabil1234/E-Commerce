namespace ECommerce.Domain.Entities.Lookups;

/// <summary>
/// Base class for all lookup entities.
/// </summary>
public abstract class LookupBase
{
    public int Id { get; set; }
    public string Code { get; set; } = string.Empty;
    public int DisplayOrder { get; set; }
    public bool IsActive { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}

/// <summary>
/// Order status lookup.
/// </summary>
public class OrderStatusLookup : LookupBase
{
    public ICollection<OrderStatusTranslation> Translations { get; set; } = new List<OrderStatusTranslation>();
}

/// <summary>
/// Payment status lookup.
/// </summary>
public class PaymentStatusLookup : LookupBase
{
    public ICollection<PaymentStatusTranslation> Translations { get; set; } = new List<PaymentStatusTranslation>();
}

/// <summary>
/// Shipment status lookup.
/// </summary>
public class ShipmentStatusLookup : LookupBase
{
    public ICollection<ShipmentStatusTranslation> Translations { get; set; } = new List<ShipmentStatusTranslation>();
}

/// <summary>
/// Task type lookup.
/// </summary>
public class TaskTypeLookup : LookupBase
{
    public ICollection<TaskTypeTranslation> Translations { get; set; } = new List<TaskTypeTranslation>();
}

/// <summary>
/// Task status lookup.
/// </summary>
public class TaskStatusLookup : LookupBase
{
    public ICollection<TaskStatusTranslation> Translations { get; set; } = new List<TaskStatusTranslation>();
}

/// <summary>
/// Ticket priority lookup.
/// </summary>
public class TicketPriorityLookup : LookupBase
{
    public ICollection<TicketPriorityTranslation> Translations { get; set; } = new List<TicketPriorityTranslation>();
}

/// <summary>
/// Ticket status lookup.
/// </summary>
public class TicketStatusLookup : LookupBase
{
    public ICollection<TicketStatusTranslation> Translations { get; set; } = new List<TicketStatusTranslation>();
}

/// <summary>
/// Ticket category lookup.
/// </summary>
public class TicketCategoryLookup : LookupBase
{
    public ICollection<TicketCategoryTranslation> Translations { get; set; } = new List<TicketCategoryTranslation>();
}
