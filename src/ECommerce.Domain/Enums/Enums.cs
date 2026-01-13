namespace ECommerce.Domain.Enums;

public enum OrderStatus
{
    Draft,           // Order created, items being added
    Pending,         // Waiting for payment/confirmation
    Confirmed,       // Stock reserved, awaiting processing
    Processing,      // Being picked/packed
    PartiallyShipped,
    Shipped,         // Stock committed, in transit
    Delivered,
    Cancelled,       // Stock released if was confirmed
    Refunded
}

public enum PaymentStatus
{
    Pending,
    Paid,
    PartiallyPaid,
    Refunded,
    Failed
}

public enum SubOrderStatus
{
    Pending,
    Assigned,
    Picking,
    Picked,
    Packing,
    Packed,
    ReadyToShip,
    Shipped,
    Cancelled
}

public enum ShipmentStatus
{
    Pending,
    Assigned,        // Courier assigned
    LabelCreated,
    PickedUp,
    InTransit,
    OutForDelivery,
    Delivered,
    Delayed,
    Failed,
    Returned,
    Cancelled
}

public enum MovementType
{
    In,
    Out,
    Adjustment,
    Reserve,
    Release,
    Commit
}

public enum TaskType
{
    Pick,
    Pack,
    Deliver,
    Return,
    Inspect
}

public enum TaskStatus
{
    Pending,
    Assigned,
    InProgress,
    Completed,
    Cancelled,
    OnHold
}

public enum TicketPriority
{
    Low,
    Normal,
    High,
    Urgent
}

public enum TicketStatus
{
    Open,
    InProgress,
    AwaitingCustomer,
    Resolved,
    Closed
}

public enum ZoneType
{
    Storage,
    Receiving,
    Shipping,
    Returns,
    Staging
}

public enum NotificationType
{
    Order,
    Shipment,
    Inventory,
    System,
    Delivery,
    Alert,
    Promotion
}
