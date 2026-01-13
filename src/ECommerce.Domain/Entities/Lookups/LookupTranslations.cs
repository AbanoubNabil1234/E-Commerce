using ECommerce.Domain.Entities.Localization;

namespace ECommerce.Domain.Entities.Lookups;

/// <summary>
/// Base class for all lookup translation entities.
/// </summary>
public abstract class LookupTranslationBase
{
    public int Id { get; set; }
    public string LanguageCode { get; set; } = string.Empty;
    public string DisplayName { get; set; } = string.Empty;
    public string? Description { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    // Navigation
    public Language Language { get; set; } = null!;
}

/// <summary>
/// Translation for OrderStatusLookup.
/// </summary>
public class OrderStatusTranslation : LookupTranslationBase
{
    public int OrderStatusId { get; set; }
    public OrderStatusLookup OrderStatus { get; set; } = null!;
}

/// <summary>
/// Translation for PaymentStatusLookup.
/// </summary>
public class PaymentStatusTranslation : LookupTranslationBase
{
    public int PaymentStatusId { get; set; }
    public PaymentStatusLookup PaymentStatus { get; set; } = null!;
}

/// <summary>
/// Translation for ShipmentStatusLookup.
/// </summary>
public class ShipmentStatusTranslation : LookupTranslationBase
{
    public int ShipmentStatusId { get; set; }
    public ShipmentStatusLookup ShipmentStatus { get; set; } = null!;
}

/// <summary>
/// Translation for TaskTypeLookup.
/// </summary>
public class TaskTypeTranslation : LookupTranslationBase
{
    public int TaskTypeId { get; set; }
    public TaskTypeLookup TaskType { get; set; } = null!;
}

/// <summary>
/// Translation for TaskStatusLookup.
/// </summary>
public class TaskStatusTranslation : LookupTranslationBase
{
    public int TaskStatusId { get; set; }
    public TaskStatusLookup TaskStatus { get; set; } = null!;
}

/// <summary>
/// Translation for TicketPriorityLookup.
/// </summary>
public class TicketPriorityTranslation : LookupTranslationBase
{
    public int TicketPriorityId { get; set; }
    public TicketPriorityLookup TicketPriority { get; set; } = null!;
}

/// <summary>
/// Translation for TicketStatusLookup.
/// </summary>
public class TicketStatusTranslation : LookupTranslationBase
{
    public int TicketStatusId { get; set; }
    public TicketStatusLookup TicketStatus { get; set; } = null!;
}

/// <summary>
/// Translation for TicketCategoryLookup.
/// </summary>
public class TicketCategoryTranslation : LookupTranslationBase
{
    public int TicketCategoryId { get; set; }
    public TicketCategoryLookup TicketCategory { get; set; } = null!;
}
