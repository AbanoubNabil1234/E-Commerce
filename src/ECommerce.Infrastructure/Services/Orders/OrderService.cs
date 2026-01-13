// ==============================================
// OrderService.cs - Order Service Implementation
// ERP-grade Orders with Inventory Integration
// ==============================================

using Microsoft.EntityFrameworkCore;
using ECommerce.Application.Features.Inventory.DTOs;
using ECommerce.Application.Features.Orders.DTOs;
using ECommerce.Application.Interfaces;
using ECommerce.Domain.Entities.Orders;
using ECommerce.Domain.Enums;
using ECommerce.Infrastructure.Persistence;

namespace ECommerce.Infrastructure.Services.Orders;

/// <summary>
/// Order service with transactional inventory integration.
/// Implements Reserve/Release/Commit pattern for stock management.
/// </summary>
public class OrderService : IOrderService
{
    private readonly ApplicationDbContext _context;
    private readonly IInventoryService _inventoryService;
    private readonly INotificationService _notificationService;

    public OrderService(ApplicationDbContext context, IInventoryService inventoryService, INotificationService notificationService)
    {
        _context = context;
        _inventoryService = inventoryService;
        _notificationService = notificationService;
    }

    #region Query Operations

    public async Task<OrderDto?> GetByIdAsync(int orderId, CancellationToken cancellationToken = default)
    {
        var order = await _context.Orders
            .Include(o => o.Items)
                .ThenInclude(i => i.Product)
                    .ThenInclude(p => p.Images)
            .Include(o => o.Warehouse)
            .AsNoTracking()
            .FirstOrDefaultAsync(o => o.Id == orderId, cancellationToken);

        return order == null ? null : MapToDto(order);
    }

    public async Task<OrderDto?> GetByOrderNumberAsync(string orderNumber, CancellationToken cancellationToken = default)
    {
        var order = await _context.Orders
            .Include(o => o.Items)
                .ThenInclude(i => i.Product)
            .Include(o => o.Warehouse)
            .AsNoTracking()
            .FirstOrDefaultAsync(o => o.OrderNumber == orderNumber, cancellationToken);

        return order == null ? null : MapToDto(order);
    }

    public async Task<List<OrderListDto>> GetAllAsync(OrderFilterDto? filter = null, CancellationToken cancellationToken = default)
    {
        var query = _context.Orders
            .Include(o => o.Items)
            .Include(o => o.Warehouse)
            .AsNoTracking()
            .AsQueryable();

        if (filter != null)
        {
            if (filter.Status.HasValue)
                query = query.Where(o => o.OrderStatus == filter.Status.Value);

            if (filter.PaymentStatus.HasValue)
                query = query.Where(o => o.PaymentStatus == filter.PaymentStatus.Value);

            if (filter.WarehouseId.HasValue)
                query = query.Where(o => o.WarehouseId == filter.WarehouseId.Value);

            if (!string.IsNullOrEmpty(filter.CustomerId))
                query = query.Where(o => o.CustomerId == filter.CustomerId);

            if (filter.FromDate.HasValue)
                query = query.Where(o => o.CreatedAt >= filter.FromDate.Value);

            if (filter.ToDate.HasValue)
                query = query.Where(o => o.CreatedAt <= filter.ToDate.Value);

            if (!string.IsNullOrEmpty(filter.SearchTerm))
            {
                var term = filter.SearchTerm.ToLower();
                query = query.Where(o =>
                    o.OrderNumber.ToLower().Contains(term) ||
                    o.ShippingName.ToLower().Contains(term));
            }
        }

        // Order BEFORE pagination
        query = query.OrderByDescending(o => o.CreatedAt);

        if (filter != null)
        {
            query = query
                .Skip((filter.PageNumber - 1) * filter.PageSize)
                .Take(filter.PageSize);
        }

        return await query.Select(o => new OrderListDto(
            o.Id,
            o.OrderNumber,
            o.CustomerId,
            o.ShippingName, // Use ShippingName as CustomerName
            o.Warehouse != null ? o.Warehouse.Name : null,
            o.OrderStatus,
            o.PaymentStatus,
            o.Items.Count,
            o.TotalAmount,
            o.Currency,
            o.CreatedAt
        )).ToListAsync(cancellationToken);
    }

    public async Task<List<OrderListDto>> GetByCustomerAsync(string customerId, CancellationToken cancellationToken = default)
    {
        return await GetAllAsync(new OrderFilterDto(CustomerId: customerId), cancellationToken);
    }

    #endregion

    #region Order Lifecycle Commands

    public async Task<OrderDto> CreateOrderAsync(CreateOrderRequest request, string userId, CancellationToken cancellationToken = default)
    {
        // Validate warehouse exists
        var warehouse = await _context.Warehouses.FindAsync(new object[] { request.WarehouseId }, cancellationToken);
        if (warehouse == null)
            throw new InvalidOperationException($"Warehouse {request.WarehouseId} not found.");

        var orderNumber = await GenerateOrderNumberAsync(cancellationToken);

        var order = new Order
        {
            OrderNumber = orderNumber,
            CustomerId = request.CustomerId,
            WarehouseId = request.WarehouseId,
            OrderStatus = OrderStatus.Draft,
            PaymentStatus = PaymentStatus.Pending,
            Currency = request.Currency,
            ShippingName = request.ShippingName ?? string.Empty,
            ShippingAddress = request.ShippingAddress ?? string.Empty,
            ShippingCity = request.ShippingCity ?? string.Empty,
            ShippingState = request.ShippingState,
            ShippingCountry = request.ShippingCountry ?? string.Empty,
            ShippingPostalCode = request.ShippingPostalCode,
            ShippingPhone = request.ShippingPhone,
            Notes = request.Notes,
            CreatedBy = userId
        };

        _context.Orders.Add(order);
        await _context.SaveChangesAsync(cancellationToken);

        return (await GetByIdAsync(order.Id, cancellationToken))!;
    }

    public async Task<OrderDto> AddItemAsync(int orderId, AddOrderItemRequest request, string userId, CancellationToken cancellationToken = default)
    {
        var order = await _context.Orders
            .Include(o => o.Items)
            .FirstOrDefaultAsync(o => o.Id == orderId, cancellationToken);

        if (order == null)
            throw new InvalidOperationException($"Order {orderId} not found.");

        if (order.OrderStatus != OrderStatus.Draft)
            throw new InvalidOperationException("Can only add items to Draft orders.");

        // Get product
        var product = await _context.Products
            .Include(p => p.Images)
            .FirstOrDefaultAsync(p => p.Id == request.ProductId, cancellationToken);

        if (product == null)
            throw new InvalidOperationException($"Product {request.ProductId} not found.");

        // Check if item already exists
        var existingItem = order.Items.FirstOrDefault(i => i.ProductId == request.ProductId);
        if (existingItem != null)
        {
            existingItem.Quantity += request.Quantity;
            existingItem.TotalPrice = existingItem.Quantity * existingItem.UnitPrice - existingItem.DiscountAmount;
        }
        else
        {
            var unitPrice = request.OverrideUnitPrice ?? product.UnitPrice;
            var discount = request.DiscountAmount ?? 0;
            var totalPrice = (request.Quantity * unitPrice) - discount;

            var item = new OrderItem
            {
                OrderId = orderId,
                ProductId = product.Id,
                SKU = product.SKU,
                ProductName = product.Name,
                UnitPrice = unitPrice,
                Quantity = request.Quantity,
                DiscountAmount = discount,
                TotalPrice = totalPrice
            };
            order.Items.Add(item);
        }

        RecalculateOrderTotals(order);
        await _context.SaveChangesAsync(cancellationToken);

        return (await GetByIdAsync(orderId, cancellationToken))!;
    }

    public async Task<OrderDto> UpdateItemAsync(int orderId, int itemId, UpdateOrderItemRequest request, string userId, CancellationToken cancellationToken = default)
    {
        var order = await _context.Orders
            .Include(o => o.Items)
            .FirstOrDefaultAsync(o => o.Id == orderId, cancellationToken);

        if (order == null)
            throw new InvalidOperationException($"Order {orderId} not found.");

        if (order.OrderStatus != OrderStatus.Draft)
            throw new InvalidOperationException("Can only update items in Draft orders.");

        var item = order.Items.FirstOrDefault(i => i.Id == itemId);
        if (item == null)
            throw new InvalidOperationException($"Item {itemId} not found in order.");

        item.Quantity = request.Quantity;
        if (request.DiscountAmount.HasValue)
            item.DiscountAmount = request.DiscountAmount.Value;

        item.TotalPrice = (item.Quantity * item.UnitPrice) - item.DiscountAmount;

        RecalculateOrderTotals(order);
        await _context.SaveChangesAsync(cancellationToken);

        return (await GetByIdAsync(orderId, cancellationToken))!;
    }

    public async Task<OrderDto> RemoveItemAsync(int orderId, int itemId, string userId, CancellationToken cancellationToken = default)
    {
        var order = await _context.Orders
            .Include(o => o.Items)
            .FirstOrDefaultAsync(o => o.Id == orderId, cancellationToken);

        if (order == null)
            throw new InvalidOperationException($"Order {orderId} not found.");

        if (order.OrderStatus != OrderStatus.Draft)
            throw new InvalidOperationException("Can only remove items from Draft orders.");

        var item = order.Items.FirstOrDefault(i => i.Id == itemId);
        if (item != null)
        {
            order.Items.Remove(item);
            _context.Set<OrderItem>().Remove(item);
        }

        RecalculateOrderTotals(order);
        await _context.SaveChangesAsync(cancellationToken);

        return (await GetByIdAsync(orderId, cancellationToken))!;
    }

    /// <summary>
    /// CONFIRM ORDER - Reserves stock for ALL items.
    /// Transactional: If ANY reservation fails, everything rolls back.
    /// </summary>
    public async Task<OrderDto> ConfirmOrderAsync(int orderId, string userId, CancellationToken cancellationToken = default)
    {
        await using var transaction = await _context.Database.BeginTransactionAsync(cancellationToken);

        try
        {
            var order = await _context.Orders
                .Include(o => o.Items)
                .FirstOrDefaultAsync(o => o.Id == orderId, cancellationToken);

            if (order == null)
                throw new InvalidOperationException($"Order {orderId} not found.");

            if (order.OrderStatus != OrderStatus.Draft && order.OrderStatus != OrderStatus.Pending)
                throw new InvalidOperationException($"Cannot confirm order in {order.OrderStatus} status.");

            if (!order.WarehouseId.HasValue)
                throw new InvalidOperationException("Order must have a warehouse assigned before confirmation.");

            if (!order.Items.Any())
                throw new InvalidOperationException("Cannot confirm order with no items.");

            // Reserve stock for each item
            foreach (var item in order.Items)
            {
                var reserveRequest = new ReserveStockRequest(
                    item.ProductId,
                    order.WarehouseId.Value,
                    item.Quantity,
                    order.Id
                );

                await _inventoryService.ReserveStockAsync(reserveRequest, userId, cancellationToken);
            }

            // Update order status
            order.OrderStatus = OrderStatus.Confirmed;
            order.ConfirmedAt = DateTime.UtcNow;
            order.UpdatedBy = userId;

            await _context.SaveChangesAsync(cancellationToken);
            await transaction.CommitAsync(cancellationToken);

            // Send real-time notification to customer
            if (!string.IsNullOrEmpty(order.CustomerId))
            {
                await _notificationService.NotifyOrderStatusChangedAsync(order.Id, order.CustomerId, order.OrderStatus);
            }

            return (await GetByIdAsync(orderId, cancellationToken))!;
        }
        catch
        {
            await transaction.RollbackAsync(cancellationToken);
            throw;
        }
    }

    /// <summary>
    /// CANCEL ORDER - Releases reserved stock if order was confirmed.
    /// </summary>
    public async Task<OrderDto> CancelOrderAsync(int orderId, string reason, string userId, CancellationToken cancellationToken = default)
    {
        await using var transaction = await _context.Database.BeginTransactionAsync(cancellationToken);

        try
        {
            var order = await _context.Orders
                .Include(o => o.Items)
                .FirstOrDefaultAsync(o => o.Id == orderId, cancellationToken);

            if (order == null)
                throw new InvalidOperationException($"Order {orderId} not found.");

            if (order.OrderStatus == OrderStatus.Shipped || 
                order.OrderStatus == OrderStatus.Delivered ||
                order.OrderStatus == OrderStatus.Cancelled)
                throw new InvalidOperationException($"Cannot cancel order in {order.OrderStatus} status.");

            // If order was confirmed, release reserved stock
            if (order.OrderStatus == OrderStatus.Confirmed && order.WarehouseId.HasValue)
            {
                foreach (var item in order.Items)
                {
                    var releaseRequest = new ReleaseStockRequest(
                        item.ProductId,
                        order.WarehouseId.Value,
                        item.Quantity,
                        order.Id,
                        $"Released: Order #{order.OrderNumber} cancelled - {reason}"
                    );

                    await _inventoryService.ReleaseStockAsync(releaseRequest, userId, cancellationToken);
                }
            }

            order.OrderStatus = OrderStatus.Cancelled;
            order.CancelledAt = DateTime.UtcNow;
            order.CancellationReason = reason;
            order.UpdatedBy = userId;

            await _context.SaveChangesAsync(cancellationToken);
            await transaction.CommitAsync(cancellationToken);

            return (await GetByIdAsync(orderId, cancellationToken))!;
        }
        catch
        {
            await transaction.RollbackAsync(cancellationToken);
            throw;
        }
    }

    /// <summary>
    /// SHIP ORDER - Commits reserved stock (decreases QuantityOnHand).
    /// </summary>
    public async Task<OrderDto> ShipOrderAsync(int orderId, string userId, CancellationToken cancellationToken = default)
    {
        await using var transaction = await _context.Database.BeginTransactionAsync(cancellationToken);

        try
        {
            var order = await _context.Orders
                .Include(o => o.Items)
                .FirstOrDefaultAsync(o => o.Id == orderId, cancellationToken);

            if (order == null)
                throw new InvalidOperationException($"Order {orderId} not found.");

            if (order.OrderStatus != OrderStatus.Confirmed && order.OrderStatus != OrderStatus.Processing)
                throw new InvalidOperationException($"Cannot ship order in {order.OrderStatus} status. Order must be Confirmed first.");

            if (!order.WarehouseId.HasValue)
                throw new InvalidOperationException("Order must have a warehouse assigned.");

            // Commit reserved stock for each item
            foreach (var item in order.Items)
            {
                await _inventoryService.CommitReservedStockAsync(
                    item.ProductId,
                    order.WarehouseId.Value,
                    item.Quantity,
                    order.Id,
                    userId,
                    cancellationToken);
            }

            order.OrderStatus = OrderStatus.Shipped;
            order.ShippedAt = DateTime.UtcNow;
            order.UpdatedBy = userId;

            await _context.SaveChangesAsync(cancellationToken);
            await transaction.CommitAsync(cancellationToken);

            // Send real-time notification to customer
            if (!string.IsNullOrEmpty(order.CustomerId))
            {
                await _notificationService.NotifyOrderStatusChangedAsync(order.Id, order.CustomerId, order.OrderStatus);
            }

            return (await GetByIdAsync(orderId, cancellationToken))!;
        }
        catch
        {
            await transaction.RollbackAsync(cancellationToken);
            throw;
        }
    }

    public async Task<OrderDto> DeliverOrderAsync(int orderId, string userId, CancellationToken cancellationToken = default)
    {
        var order = await _context.Orders.FindAsync(new object[] { orderId }, cancellationToken);

        if (order == null)
            throw new InvalidOperationException($"Order {orderId} not found.");

        if (order.OrderStatus != OrderStatus.Shipped)
            throw new InvalidOperationException($"Cannot deliver order in {order.OrderStatus} status.");

        order.OrderStatus = OrderStatus.Delivered;
        order.DeliveredAt = DateTime.UtcNow;
        order.UpdatedBy = userId;

        await _context.SaveChangesAsync(cancellationToken);

        // Send real-time notification to customer
        if (!string.IsNullOrEmpty(order.CustomerId))
        {
            await _notificationService.NotifyOrderStatusChangedAsync(order.Id, order.CustomerId, order.OrderStatus);
        }

        return (await GetByIdAsync(orderId, cancellationToken))!;
    }

    #endregion

    #region Utility Operations

    public async Task<string> GenerateOrderNumberAsync(CancellationToken cancellationToken = default)
    {
        var date = DateTime.UtcNow;
        var prefix = $"ORD-{date:yyyyMMdd}";
        
        var todayCount = await _context.Orders
            .CountAsync(o => o.OrderNumber.StartsWith(prefix), cancellationToken);

        return $"{prefix}-{(todayCount + 1):D4}";
    }

    public async Task<OrderAvailabilityResult> CheckAvailabilityAsync(int orderId, CancellationToken cancellationToken = default)
    {
        var order = await _context.Orders
            .Include(o => o.Items)
                .ThenInclude(i => i.Product)
            .FirstOrDefaultAsync(o => o.Id == orderId, cancellationToken);

        if (order == null)
            throw new InvalidOperationException($"Order {orderId} not found.");

        if (!order.WarehouseId.HasValue)
            throw new InvalidOperationException("Order must have a warehouse assigned.");

        var items = new List<ItemAvailability>();
        bool allAvailable = true;

        foreach (var item in order.Items)
        {
            var stock = await _inventoryService.GetStockByProductAsync(
                item.ProductId, 
                order.WarehouseId.Value, 
                cancellationToken);

            var available = stock?.QuantityAvailable ?? 0;
            var isAvailable = available >= item.Quantity;

            if (!isAvailable) allAvailable = false;

            items.Add(new ItemAvailability(
                item.ProductId,
                item.ProductName,
                item.Quantity,
                available,
                isAvailable
            ));
        }

        return new OrderAvailabilityResult(allAvailable, items);
    }

    #endregion

    #region Private Helpers

    private void RecalculateOrderTotals(Order order)
    {
        order.SubTotal = order.Items.Sum(i => i.Quantity * i.UnitPrice);
        order.DiscountAmount = order.Items.Sum(i => i.DiscountAmount);
        order.TotalAmount = order.SubTotal - order.DiscountAmount + order.TaxAmount + order.ShippingAmount;
    }

    private OrderDto MapToDto(Order order)
    {
        return new OrderDto(
            order.Id,
            order.OrderNumber,
            order.CustomerId,
            null, // CustomerName
            order.WarehouseId,
            order.Warehouse?.Name,
            order.OrderStatus,
            order.PaymentStatus,
            order.SubTotal,
            order.TaxAmount,
            order.ShippingAmount,
            order.DiscountAmount,
            order.TotalAmount,
            order.Currency,
            order.ShippingName,
            order.ShippingAddress,
            order.ShippingCity,
            order.ShippingState,
            order.ShippingCountry,
            order.ShippingPostalCode,
            order.ShippingPhone,
            order.Notes,
            order.CreatedAt,
            order.ConfirmedAt,
            order.ShippedAt,
            order.DeliveredAt,
            order.CancelledAt,
            order.CancellationReason,
            order.Items.Select(i => new OrderItemDto(
                i.Id,
                i.ProductId,
                i.SKU,
                i.ProductName,
                i.Product?.Images?.FirstOrDefault()?.ImageUrl,
                i.UnitPrice,
                i.Quantity,
                i.DiscountAmount,
                i.TotalPrice
            )).ToList()
        );
    }

    #endregion
}
