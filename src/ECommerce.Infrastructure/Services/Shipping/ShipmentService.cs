using ECommerce.Application.Features.Shipping.DTOs;
using ECommerce.Application.Interfaces;
using ECommerce.Domain.Entities.Shipping;
using ECommerce.Domain.Enums;
using ECommerce.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace ECommerce.Infrastructure.Services.Shipping;

/// <summary>
/// Service implementation for shipment management.
/// Integrates with inventory for stock commitment.
/// </summary>
public class ShipmentService : IShipmentService
{
    private readonly ApplicationDbContext _context;
    private readonly IInventoryService _inventoryService;
    private readonly INotificationService _notificationService;
    private readonly ILogger<ShipmentService> _logger;

    public ShipmentService(
        ApplicationDbContext context,
        IInventoryService inventoryService,
        INotificationService notificationService,
        ILogger<ShipmentService> logger)
    {
        _context = context;
        _inventoryService = inventoryService;
        _notificationService = notificationService;
        _logger = logger;
    }

    // ==============================================
    // Query Operations
    // ==============================================

    public async Task<ShipmentDto?> GetByIdAsync(int id)
    {
        var shipment = await _context.Shipments
            .Include(s => s.Order)
            .Include(s => s.Warehouse)
            .Include(s => s.Carrier)
            .Include(s => s.Items)
                .ThenInclude(i => i.Product)
                    .ThenInclude(p => p.Images)
            .Include(s => s.TrackingHistory)
            .FirstOrDefaultAsync(s => s.Id == id);

        if (shipment == null) return null;

        return MapToDto(shipment);
    }

    public async Task<(List<ShipmentListDto> Items, int TotalCount)> GetListAsync(ShipmentFilterDto filter)
    {
        var query = _context.Shipments
            .Include(s => s.Order)
            .Include(s => s.Warehouse)
            .Include(s => s.Carrier)
            .Include(s => s.Items)
            .AsQueryable();

        // Apply filters
        if (filter.Status.HasValue)
            query = query.Where(s => s.Status == filter.Status.Value);

        if (filter.WarehouseId.HasValue)
            query = query.Where(s => s.WarehouseId == filter.WarehouseId.Value);

        if (filter.CarrierId.HasValue)
            query = query.Where(s => s.CarrierId == filter.CarrierId.Value);

        if (filter.OrderId.HasValue)
            query = query.Where(s => s.OrderId == filter.OrderId.Value);

        if (!string.IsNullOrWhiteSpace(filter.Search))
        {
            var search = filter.Search.ToLower();
            query = query.Where(s =>
                s.TrackingNumber.ToLower().Contains(search) ||
                s.Order.OrderNumber.ToLower().Contains(search) ||
                (s.RecipientName != null && s.RecipientName.ToLower().Contains(search)));
        }

        if (filter.FromDate.HasValue)
            query = query.Where(s => s.CreatedAt >= filter.FromDate.Value);

        if (filter.ToDate.HasValue)
            query = query.Where(s => s.CreatedAt <= filter.ToDate.Value);

        var totalCount = await query.CountAsync();

        var items = await query
            .OrderByDescending(s => s.CreatedAt)
            .Skip((filter.PageNumber - 1) * filter.PageSize)
            .Take(filter.PageSize)
            .Select(s => new ShipmentListDto
            {
                Id = s.Id,
                TrackingNumber = s.TrackingNumber,
                OrderNumber = s.Order.OrderNumber,
                WarehouseName = s.Warehouse.Name,
                CarrierName = s.Carrier != null ? s.Carrier.Name : null,
                Status = s.Status,
                ShippingMethod = s.ShippingMethod,
                RecipientName = s.RecipientName,
                DeliveryCity = s.DeliveryCity,
                EstimatedDeliveryDate = s.EstimatedDeliveryDate,
                CreatedAt = s.CreatedAt,
                ItemCount = s.Items.Count
            })
            .ToListAsync();

        return (items, totalCount);
    }

    public async Task<List<ShipmentTrackingDto>> GetTrackingHistoryAsync(int shipmentId)
    {
        return await _context.Set<ShipmentTracking>()
            .Where(t => t.ShipmentId == shipmentId)
            .OrderByDescending(t => t.OccurredAt)
            .Select(t => new ShipmentTrackingDto
            {
                Id = t.Id,
                Status = t.Status,
                Location = t.Location,
                Description = t.Description,
                Notes = t.Notes,
                PerformedBy = t.PerformedBy,
                PerformedByName = t.PerformedByName,
                OccurredAt = t.OccurredAt
            })
            .ToListAsync();
    }

    public async Task<List<ShipmentListDto>> GetByOrderIdAsync(int orderId)
    {
        return await _context.Shipments
            .Include(s => s.Order)
            .Include(s => s.Warehouse)
            .Include(s => s.Carrier)
            .Include(s => s.Items)
            .Where(s => s.OrderId == orderId)
            .OrderByDescending(s => s.CreatedAt)
            .Select(s => new ShipmentListDto
            {
                Id = s.Id,
                TrackingNumber = s.TrackingNumber,
                OrderNumber = s.Order.OrderNumber,
                WarehouseName = s.Warehouse.Name,
                CarrierName = s.Carrier != null ? s.Carrier.Name : null,
                Status = s.Status,
                ShippingMethod = s.ShippingMethod,
                RecipientName = s.RecipientName,
                DeliveryCity = s.DeliveryCity,
                EstimatedDeliveryDate = s.EstimatedDeliveryDate,
                CreatedAt = s.CreatedAt,
                ItemCount = s.Items.Count
            })
            .ToListAsync();
    }

    public async Task<List<CarrierDto>> GetCarriersAsync()
    {
        return await _context.Carriers
            .Where(c => c.IsActive && c.DeletedAt == null)
            .Select(c => new CarrierDto
            {
                Id = c.Id,
                Name = c.Name,
                Code = c.Code,
                TrackingUrlTemplate = c.TrackingUrlTemplate,
                ContactPhone = c.ContactPhone,
                ContactEmail = c.ContactEmail,
                IsActive = c.IsActive
            })
            .ToListAsync();
    }

    // ==============================================
    // Command Operations
    // ==============================================

    public async Task<ShipmentDto> CreateAsync(CreateShipmentRequest request, string userId)
    {
        // Validate order exists and is confirmed
        var order = await _context.Orders
            .Include(o => o.Items)
            .FirstOrDefaultAsync(o => o.Id == request.OrderId);

        if (order == null)
            throw new InvalidOperationException($"Order {request.OrderId} not found");

        if (order.OrderStatus != OrderStatus.Confirmed && order.OrderStatus != OrderStatus.Processing)
            throw new InvalidOperationException($"Order must be Confirmed or Processing to create shipment. Current: {order.OrderStatus}");

        // Validate warehouse
        var warehouse = await _context.Warehouses.FindAsync(request.WarehouseId);
        if (warehouse == null)
            throw new InvalidOperationException($"Warehouse {request.WarehouseId} not found");

        // Use execution strategy for SQL Server retry support with transactions
        var strategy = _context.Database.CreateExecutionStrategy();
        
        var shipmentId = await strategy.ExecuteAsync(async () =>
        {
            await using var transaction = await _context.Database.BeginTransactionAsync();
            try
            {
                // Generate tracking number
                var trackingNumber = GenerateTrackingNumber();

                // Create shipment
                var shipment = new Shipment
                {
                    OrderId = request.OrderId,
                    WarehouseId = request.WarehouseId,
                    CarrierId = request.CarrierId,
                    TrackingNumber = trackingNumber,
                    ShippingMethod = request.ShippingMethod,
                    Status = ShipmentStatus.Pending,
                    EstimatedDeliveryDate = request.EstimatedDeliveryDate,
                    RecipientName = request.RecipientName ?? order.ShippingName,
                    RecipientPhone = request.RecipientPhone ?? order.ShippingPhone,
                    DeliveryAddress = request.DeliveryAddress ?? order.ShippingAddress,
                    DeliveryCity = request.DeliveryCity ?? order.ShippingCity,
                    DeliveryCountry = request.DeliveryCountry ?? order.ShippingCountry,
                    DeliveryPostalCode = request.DeliveryPostalCode ?? order.ShippingPostalCode,
                    Notes = request.Notes,
                    CreatedBy = userId
                };

                _context.Shipments.Add(shipment);
                await _context.SaveChangesAsync();

                // Add shipment items (skip inventory commit if no items specified)
                if (request.Items != null && request.Items.Any())
                {
                    foreach (var item in request.Items)
                    {
                        var shipmentItem = new ShipmentItem
                        {
                            ShipmentId = shipment.Id,
                            ProductId = item.ProductId,
                            Quantity = item.Quantity,
                            OrderItemId = item.OrderItemId
                        };
                        _context.Set<ShipmentItem>().Add(shipmentItem);

                        // Commit reserved stock (convert reserved to committed/out)
                        await _inventoryService.CommitReservedStockAsync(
                            item.ProductId,
                            request.WarehouseId,
                            item.Quantity,
                            request.OrderId,
                            userId);
                    }
                }
                else
                {
                    // Auto-populate from order items if no items specified
                    foreach (var orderItem in order.Items)
                    {
                        var shipmentItem = new ShipmentItem
                        {
                            ShipmentId = shipment.Id,
                            ProductId = orderItem.ProductId,
                            Quantity = orderItem.Quantity,
                            OrderItemId = orderItem.Id
                        };
                        _context.Set<ShipmentItem>().Add(shipmentItem);
                    }
                }

                // Add initial tracking entry
                var tracking = new ShipmentTracking
                {
                    ShipmentId = shipment.Id,
                    Status = ShipmentStatus.Pending,
                    Notes = "Shipment created",
                    OccurredAt = DateTime.UtcNow
                };
                _context.Set<ShipmentTracking>().Add(tracking);

                // Update order status
                order.OrderStatus = OrderStatus.Processing;
                order.UpdatedAt = DateTime.UtcNow;
                order.UpdatedBy = userId;

                await _context.SaveChangesAsync();
                await transaction.CommitAsync();

                _logger.LogInformation("Created shipment {TrackingNumber} for order {OrderId}", trackingNumber, request.OrderId);

                return shipment.Id;
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                _logger.LogError(ex, "Failed to create shipment for order {OrderId}", request.OrderId);
                throw;
            }
        });

        return (await GetByIdAsync(shipmentId))!;
    }

    public async Task<ShipmentDto> AssignCarrierAsync(int shipmentId, AssignCarrierRequest request, string userId)
    {
        var shipment = await _context.Shipments
            .Include(s => s.TrackingHistory)
            .FirstOrDefaultAsync(s => s.Id == shipmentId);

        if (shipment == null)
            throw new InvalidOperationException($"Shipment {shipmentId} not found");

        // Validate carrier
        var carrier = await _context.Carriers.FindAsync(request.CarrierId);
        if (carrier == null || !carrier.IsActive)
            throw new InvalidOperationException($"Carrier {request.CarrierId} not found or inactive");

        shipment.CarrierId = request.CarrierId;
        shipment.Status = ShipmentStatus.Assigned;
        
        if (!string.IsNullOrEmpty(request.TrackingNumber))
            shipment.TrackingNumber = request.TrackingNumber;
        
        if (request.EstimatedDeliveryDate.HasValue)
            shipment.EstimatedDeliveryDate = request.EstimatedDeliveryDate;

        shipment.UpdatedAt = DateTime.UtcNow;
        shipment.UpdatedBy = userId;

        // Add tracking entry
        var tracking = new ShipmentTracking
        {
            ShipmentId = shipmentId,
            Status = ShipmentStatus.Assigned,
            Notes = $"Assigned to carrier: {carrier.Name}",
            OccurredAt = DateTime.UtcNow
        };
        _context.Set<ShipmentTracking>().Add(tracking);

        await _context.SaveChangesAsync();

        _logger.LogInformation("Assigned carrier {CarrierId} to shipment {ShipmentId}", request.CarrierId, shipmentId);

        return (await GetByIdAsync(shipmentId))!;
    }

    public async Task<ShipmentDto> UpdateStatusAsync(int shipmentId, UpdateShipmentStatusRequest request, string userId)
    {
        var shipment = await _context.Shipments
            .Include(s => s.Order)
            .FirstOrDefaultAsync(s => s.Id == shipmentId);

        if (shipment == null)
            throw new InvalidOperationException($"Shipment {shipmentId} not found");

        shipment.Status = request.Status;
        shipment.UpdatedAt = DateTime.UtcNow;
        shipment.UpdatedBy = userId;

        // Handle special statuses
        if (request.Status == ShipmentStatus.InTransit)
        {
            shipment.ShippedAt = DateTime.UtcNow;
            shipment.Order.OrderStatus = OrderStatus.Shipped;
        }
        else if (request.Status == ShipmentStatus.Delivered)
        {
            shipment.DeliveredAt = DateTime.UtcNow;
            shipment.ActualDeliveryDate = DateTime.UtcNow;
            shipment.Order.OrderStatus = OrderStatus.Delivered;
        }

        // Add tracking entry
        var tracking = new ShipmentTracking
        {
            ShipmentId = shipmentId,
            Status = request.Status,
            Location = request.Location,
            Notes = request.Notes,
            OccurredAt = DateTime.UtcNow
        };
        _context.Set<ShipmentTracking>().Add(tracking);

        await _context.SaveChangesAsync();

        _logger.LogInformation("Updated shipment {ShipmentId} status to {Status}", shipmentId, request.Status);

        // Send real-time notification to customer
        if (!string.IsNullOrEmpty(shipment.Order?.CustomerId))
        {
            await _notificationService.NotifyShipmentStatusChangedAsync(shipment.Id, shipment.Order.CustomerId, shipment.Status);
        }

        return (await GetByIdAsync(shipmentId))!;
    }

    public async Task<ShipmentDto> MarkAsShippedAsync(int shipmentId, string userId)
    {
        return await UpdateStatusAsync(shipmentId, new UpdateShipmentStatusRequest
        {
            Status = ShipmentStatus.InTransit,
            Notes = "Shipment picked up and in transit"
        }, userId);
    }

    public async Task<ShipmentDto> MarkAsDeliveredAsync(int shipmentId, string userId)
    {
        return await UpdateStatusAsync(shipmentId, new UpdateShipmentStatusRequest
        {
            Status = ShipmentStatus.Delivered,
            Notes = "Shipment delivered successfully"
        }, userId);
    }

    public async Task<ShipmentDto> CancelAsync(int shipmentId, string reason, string userId)
    {
        var shipment = await _context.Shipments
            .Include(s => s.Items)
            .Include(s => s.Order)
            .FirstOrDefaultAsync(s => s.Id == shipmentId);

        if (shipment == null)
            throw new InvalidOperationException($"Shipment {shipmentId} not found");

        if (shipment.Status == ShipmentStatus.Delivered)
            throw new InvalidOperationException("Cannot cancel a delivered shipment");

        shipment.Status = ShipmentStatus.Cancelled;
        shipment.UpdatedAt = DateTime.UtcNow;
        shipment.UpdatedBy = userId;

        // Add tracking entry
        var tracking = new ShipmentTracking
        {
            ShipmentId = shipmentId,
            Status = ShipmentStatus.Cancelled,
            Notes = $"Cancelled: {reason}",
            OccurredAt = DateTime.UtcNow
        };
        _context.Set<ShipmentTracking>().Add(tracking);

        // Note: In a real system, you might need to handle inventory reversal
        // depending on whether the stock was already committed

        await _context.SaveChangesAsync();

        _logger.LogInformation("Cancelled shipment {ShipmentId}: {Reason}", shipmentId, reason);

        return (await GetByIdAsync(shipmentId))!;
    }

    public async Task<ShipmentTrackingDto> AddTrackingEventAsync(int shipmentId, AddTrackingEventRequest request, string userId)
    {
        var shipment = await _context.Shipments
            .FirstOrDefaultAsync(s => s.Id == shipmentId);

        if (shipment == null)
            throw new InvalidOperationException($"Shipment {shipmentId} not found");

        // Get user name for display
        var user = await _context.Users.FindAsync(userId);
        var performerName = user?.FullName ?? user?.Email ?? "System";

        // Auto-generate description if not provided
        var description = request.Description ?? GetDefaultDescription(request.Status, request.Location);

        // Create tracking event
        var tracking = new ShipmentTracking
        {
            ShipmentId = shipmentId,
            Status = request.Status,
            Location = request.Location,
            Description = description,
            Notes = request.Notes,
            PerformedBy = userId,
            PerformedByName = performerName,
            OccurredAt = DateTime.UtcNow
        };

        _context.Set<ShipmentTracking>().Add(tracking);

        // Update shipment status to match event
        shipment.Status = request.Status;
        shipment.UpdatedAt = DateTime.UtcNow;
        shipment.UpdatedBy = userId;

        // Update delivery timestamps if applicable
        if (request.Status == ShipmentStatus.InTransit && shipment.ShippedAt == null)
        {
            shipment.ShippedAt = DateTime.UtcNow;
        }
        else if (request.Status == ShipmentStatus.Delivered && shipment.DeliveredAt == null)
        {
            shipment.DeliveredAt = DateTime.UtcNow;
            shipment.ActualDeliveryDate = DateTime.UtcNow;
        }

        await _context.SaveChangesAsync();

        _logger.LogInformation("Added tracking event {Status} for shipment {ShipmentId} by {User}",
            request.Status, shipmentId, performerName);

        return new ShipmentTrackingDto
        {
            Id = tracking.Id,
            Status = tracking.Status,
            Location = tracking.Location,
            Description = tracking.Description,
            Notes = tracking.Notes,
            PerformedBy = tracking.PerformedBy,
            PerformedByName = tracking.PerformedByName,
            OccurredAt = tracking.OccurredAt
        };
    }

    private string GetDefaultDescription(ShipmentStatus status, string? location)
    {
        return status switch
        {
            ShipmentStatus.Pending => "Shipment created",
            ShipmentStatus.Assigned => "Courier assigned to shipment",
            ShipmentStatus.LabelCreated => "Shipping label generated",
            ShipmentStatus.PickedUp => $"Package picked up{(location != null ? $" from {location}" : "")}",
            ShipmentStatus.InTransit => $"Package in transit{(location != null ? $" - {location}" : "")}",
            ShipmentStatus.OutForDelivery => "Package out for delivery",
            ShipmentStatus.Delivered => "Package delivered successfully",
            ShipmentStatus.Delayed => $"Shipment delayed{(location != null ? $" at {location}" : "")}",
            ShipmentStatus.Failed => "Delivery attempt failed",
            ShipmentStatus.Returned => "Package returned to sender",
            ShipmentStatus.Cancelled => "Shipment cancelled",
            _ => $"Status updated to {status}"
        };
    }

    // ==============================================
    // Helper Methods
    // ==============================================

    private string GenerateTrackingNumber()
    {
        var timestamp = DateTime.UtcNow.ToString("yyyyMMddHHmmss");
        var random = Random.Shared.Next(1000, 9999);
        return $"SHP-{timestamp}-{random}";
    }

    private ShipmentDto MapToDto(Shipment shipment)
    {
        return new ShipmentDto
        {
            Id = shipment.Id,
            OrderId = shipment.OrderId,
            OrderNumber = shipment.Order.OrderNumber,
            WarehouseId = shipment.WarehouseId,
            WarehouseName = shipment.Warehouse.Name,
            CarrierId = shipment.CarrierId,
            CarrierName = shipment.Carrier?.Name,
            TrackingNumber = shipment.TrackingNumber,
            ShippingMethod = shipment.ShippingMethod,
            Status = shipment.Status,
            EstimatedDeliveryDate = shipment.EstimatedDeliveryDate,
            ActualDeliveryDate = shipment.ActualDeliveryDate,
            ShippedAt = shipment.ShippedAt,
            DeliveredAt = shipment.DeliveredAt,
            Weight = shipment.Weight,
            ShippingCost = shipment.ShippingCost,
            RecipientName = shipment.RecipientName,
            RecipientPhone = shipment.RecipientPhone,
            DeliveryAddress = shipment.DeliveryAddress,
            DeliveryCity = shipment.DeliveryCity,
            DeliveryCountry = shipment.DeliveryCountry,
            Notes = shipment.Notes,
            CreatedAt = shipment.CreatedAt,
            CreatedBy = shipment.CreatedBy,
            Items = shipment.Items.Select(i => new ShipmentItemDto
            {
                Id = i.Id,
                ProductId = i.ProductId,
                ProductName = i.Product.Name,
                ProductSku = i.Product.SKU,
                ProductImageUrl = i.Product.Images.FirstOrDefault(img => img.IsPrimary)?.ImageUrl 
                                  ?? i.Product.Images.FirstOrDefault()?.ImageUrl,
                Quantity = i.Quantity
            }).ToList(),
            TrackingHistory = shipment.TrackingHistory
                .OrderByDescending(t => t.OccurredAt)
                .Select(t => new ShipmentTrackingDto
                {
                    Id = t.Id,
                    Status = t.Status,
                    Location = t.Location,
                    Description = t.Description,
                    Notes = t.Notes,
                    PerformedBy = t.PerformedBy,
                    PerformedByName = t.PerformedByName,
                    OccurredAt = t.OccurredAt
                }).ToList()
        };
    }
}
