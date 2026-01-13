using ECommerce.Application.Features.Shipping.DTOs;

namespace ECommerce.Application.Interfaces;

/// <summary>
/// Service interface for shipment management.
/// </summary>
public interface IShipmentService
{
    // ==============================================
    // Query Operations
    // ==============================================
    
    /// <summary>
    /// Get shipment by ID with full details.
    /// </summary>
    Task<ShipmentDto?> GetByIdAsync(int id);
    
    /// <summary>
    /// Get shipments list with filtering and pagination.
    /// </summary>
    Task<(List<ShipmentListDto> Items, int TotalCount)> GetListAsync(ShipmentFilterDto filter);
    
    /// <summary>
    /// Get tracking history for a shipment.
    /// </summary>
    Task<List<ShipmentTrackingDto>> GetTrackingHistoryAsync(int shipmentId);
    
    /// <summary>
    /// Get shipments by order ID.
    /// </summary>
    Task<List<ShipmentListDto>> GetByOrderIdAsync(int orderId);
    
    /// <summary>
    /// Get all active carriers.
    /// </summary>
    Task<List<CarrierDto>> GetCarriersAsync();
    
    // ==============================================
    // Command Operations
    // ==============================================
    
    /// <summary>
    /// Create a new shipment from an order.
    /// Commits reserved inventory.
    /// </summary>
    Task<ShipmentDto> CreateAsync(CreateShipmentRequest request, string userId);
    
    /// <summary>
    /// Assign a carrier/courier to a shipment.
    /// </summary>
    Task<ShipmentDto> AssignCarrierAsync(int shipmentId, AssignCarrierRequest request, string userId);
    
    /// <summary>
    /// Update shipment status with tracking info.
    /// </summary>
    Task<ShipmentDto> UpdateStatusAsync(int shipmentId, UpdateShipmentStatusRequest request, string userId);
    
    /// <summary>
    /// Mark shipment as shipped (in transit).
    /// </summary>
    Task<ShipmentDto> MarkAsShippedAsync(int shipmentId, string userId);
    
    /// <summary>
    /// Mark shipment as delivered.
    /// Updates order status to Delivered.
    /// </summary>
    Task<ShipmentDto> MarkAsDeliveredAsync(int shipmentId, string userId);
    
    /// <summary>
    /// Cancel a shipment.
    /// Releases committed stock if not yet delivered.
    /// </summary>
    Task<ShipmentDto> CancelAsync(int shipmentId, string reason, string userId);
    
    /// <summary>
    /// Add a tracking event to a shipment.
    /// Auto-updates shipment status to the event status.
    /// </summary>
    Task<ShipmentTrackingDto> AddTrackingEventAsync(int shipmentId, AddTrackingEventRequest request, string userId);
}
