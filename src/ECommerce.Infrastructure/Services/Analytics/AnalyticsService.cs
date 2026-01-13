// ==============================================
// AnalyticsService - Simplified Analytics Queries
// ==============================================

using ECommerce.Application.Features.Analytics.DTOs;
using ECommerce.Application.Interfaces;
using ECommerce.Domain.Enums;
using ECommerce.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;

namespace ECommerce.Infrastructure.Services.Analytics;

/// <summary>
/// Analytics service with simplified EF Core queries.
/// Uses server-side aggregation with client-side projection.
/// </summary>
public class AnalyticsService : IAnalyticsService
{
    private readonly ApplicationDbContext _context;
    private readonly IMemoryCache _cache;

    public AnalyticsService(ApplicationDbContext context, IMemoryCache cache)
    {
        _context = context;
        _cache = cache;
    }

    #region Overview Analytics

    public async Task<OverviewAnalyticsDto> GetOverviewAsync(AnalyticsFilter filter, CancellationToken cancellationToken = default)
    {
        var startDate = filter.StartDate ?? DateTime.UtcNow.AddDays(-30);
        var endDate = filter.EndDate ?? DateTime.UtcNow;
        var previousStart = startDate.AddDays(-(endDate - startDate).TotalDays);

        // Current period orders
        var ordersQuery = _context.Orders
            .Where(o => o.CreatedAt >= startDate && o.CreatedAt <= endDate);

        if (filter.WarehouseId.HasValue)
            ordersQuery = ordersQuery.Where(o => o.WarehouseId == filter.WarehouseId);

        var totalOrders = await ordersQuery.CountAsync(cancellationToken);
        
        // Handle empty result for Sum
        var totalRevenue = await ordersQuery.AnyAsync(cancellationToken) 
            ? await ordersQuery.SumAsync(o => o.TotalAmount, cancellationToken) 
            : 0m;
            
        var deliveredOrders = await ordersQuery.CountAsync(o => o.OrderStatus == OrderStatus.Delivered, cancellationToken);
        var pendingOrders = await ordersQuery.CountAsync(o => o.OrderStatus == OrderStatus.Pending || o.OrderStatus == OrderStatus.Draft, cancellationToken);

        // Previous period for comparison
        var previousOrdersQuery = _context.Orders
            .Where(o => o.CreatedAt >= previousStart && o.CreatedAt < startDate);
        var previousOrders = await previousOrdersQuery.CountAsync(cancellationToken);
        var previousRevenue = await previousOrdersQuery.AnyAsync(cancellationToken)
            ? await previousOrdersQuery.SumAsync(o => o.TotalAmount, cancellationToken)
            : 0m;

        // Active shipments
        var activeShipments = await _context.Shipments
            .CountAsync(s => s.Status != ShipmentStatus.Delivered && s.Status != ShipmentStatus.Cancelled, cancellationToken);

        // Low stock products
        var lowStockProducts = await _context.ProductStocks
            .CountAsync(ps => ps.QuantityOnHand <= (ps.ReorderLevel ?? 0) && ps.QuantityOnHand > 0, cancellationToken);

        // New customers
        var newCustomers = await _context.Users
            .CountAsync(u => u.CreatedAt >= startDate && u.CreatedAt <= endDate, cancellationToken);

        // Calculate growth percentages
        var revenueGrowth = previousRevenue > 0 ? ((totalRevenue - previousRevenue) / previousRevenue) * 100 : 0;
        var ordersGrowth = previousOrders > 0 ? ((decimal)(totalOrders - previousOrders) / previousOrders) * 100 : 0;

        return new OverviewAnalyticsDto
        {
            TotalOrders = totalOrders,
            TotalRevenue = totalRevenue,
            ActiveShipments = activeShipments,
            LowStockProducts = lowStockProducts,
            DeliveredOrders = deliveredOrders,
            PendingOrders = pendingOrders,
            NewCustomers = newCustomers,
            AverageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0,
            RevenueGrowth = revenueGrowth,
            OrdersGrowth = ordersGrowth
        };
    }

    #endregion

    #region Sales Analytics

    public async Task<SalesAnalyticsDto> GetSalesAnalyticsAsync(AnalyticsFilter filter, CancellationToken cancellationToken = default)
    {
        var startDate = filter.StartDate ?? DateTime.UtcNow.AddDays(-30);
        var endDate = filter.EndDate ?? DateTime.UtcNow;

        var ordersQuery = _context.Orders
            .Where(o => o.CreatedAt >= startDate && o.CreatedAt <= endDate);

        if (filter.WarehouseId.HasValue)
            ordersQuery = ordersQuery.Where(o => o.WarehouseId == filter.WarehouseId);

        // Basic metrics
        var totalOrders = await ordersQuery.CountAsync(cancellationToken);
        var totalRevenue = await ordersQuery.AnyAsync(cancellationToken)
            ? await ordersQuery.SumAsync(o => o.TotalAmount, cancellationToken)
            : 0m;

        // Revenue over time (daily) - simplified
        var ordersData = await ordersQuery
            .Select(o => new { o.CreatedAt, o.TotalAmount })
            .ToListAsync(cancellationToken);

        var revenueOverTime = ordersData
            .GroupBy(o => o.CreatedAt.Date)
            .Select(g => new TimeSeriesDataPoint(
                g.Key,
                g.Key.ToString("MMM dd"),
                g.Sum(o => o.TotalAmount)
            ))
            .OrderBy(x => x.Date)
            .ToList();

        // Best selling products - simplified
        var orderItemsData = await _context.OrderItems
            .Where(oi => oi.Order.CreatedAt >= startDate && oi.Order.CreatedAt <= endDate)
            .Select(oi => new { oi.ProductId, oi.ProductName, oi.SKU, oi.Quantity, oi.TotalPrice })
            .ToListAsync(cancellationToken);

        var bestSellers = orderItemsData
            .GroupBy(oi => new { oi.ProductId, oi.SKU, oi.ProductName })
            .Select(g => new BestSellingProductDto(
                g.Key.ProductId,
                g.Key.ProductName,
                g.Key.SKU,
                g.Sum(oi => oi.Quantity),
                g.Sum(oi => oi.TotalPrice),
                null
            ))
            .OrderByDescending(x => x.QuantitySold)
            .Take(10)
            .ToList();

        // Orders by country - simplified
        var countryData = await ordersQuery
            .Where(o => !string.IsNullOrEmpty(o.ShippingCountry))
            .Select(o => o.ShippingCountry)
            .ToListAsync(cancellationToken);

        var ordersByCountry = countryData
            .GroupBy(c => c)
            .Select(g => new { Country = g.Key, Count = g.Count() })
            .OrderByDescending(x => x.Count)
            .Take(10)
            .ToList();

        var totalCountryOrders = ordersByCountry.Sum(x => x.Count);
        var countryPoints = ordersByCountry.Select(x => new CategoryDataPoint(
            x.Country ?? "Unknown",
            x.Count,
            totalCountryOrders > 0 ? (decimal)x.Count / totalCountryOrders * 100 : 0
        )).ToList();

        // Payment status summary - simplified
        var paymentData = await ordersQuery
            .Select(o => o.PaymentStatus)
            .ToListAsync(cancellationToken);

        var paymentGroups = paymentData
            .GroupBy(p => p)
            .Select(g => new { Status = g.Key.ToString(), Count = g.Count() })
            .ToList();

        var totalPayments = paymentGroups.Sum(x => x.Count);
        var paymentPoints = paymentGroups.Select(x => new CategoryDataPoint(
            x.Status,
            x.Count,
            totalPayments > 0 ? (decimal)x.Count / totalPayments * 100 : 0
        )).ToList();

        // Order status summary - simplified
        var statusData = await ordersQuery
            .Select(o => o.OrderStatus)
            .ToListAsync(cancellationToken);

        var statusGroups = statusData
            .GroupBy(s => s)
            .Select(g => new { Status = g.Key.ToString(), Count = g.Count() })
            .ToList();

        var orderStatusPoints = statusGroups.Select(x => new CategoryDataPoint(
            x.Status,
            x.Count,
            totalOrders > 0 ? (decimal)x.Count / totalOrders * 100 : 0
        )).ToList();

        return new SalesAnalyticsDto
        {
            TotalRevenue = totalRevenue,
            TotalOrders = totalOrders,
            AverageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0,
            RevenueOverTime = revenueOverTime,
            BestSellingProducts = bestSellers,
            OrdersByCountry = countryPoints,
            PaymentStatusSummary = paymentPoints,
            OrderStatusSummary = orderStatusPoints
        };
    }

    #endregion

    #region Inventory Analytics

    public async Task<InventoryAnalyticsDto> GetInventoryAnalyticsAsync(AnalyticsFilter filter, CancellationToken cancellationToken = default)
    {
        var stockQuery = _context.ProductStocks.AsQueryable();

        if (filter.WarehouseId.HasValue)
            stockQuery = stockQuery.Where(ps => ps.WarehouseId == filter.WarehouseId);

        // Total products with stock
        var totalProducts = await stockQuery.Select(ps => ps.ProductId).Distinct().CountAsync(cancellationToken);

        // Low stock products
        var lowStockCount = await stockQuery.CountAsync(ps => ps.QuantityOnHand <= (ps.ReorderLevel ?? 0) && ps.QuantityOnHand > 0, cancellationToken);

        var lowStockData = await stockQuery
            .Where(ps => ps.QuantityOnHand <= (ps.ReorderLevel ?? 0) && ps.QuantityOnHand > 0)
            .OrderBy(ps => ps.QuantityOnHand)
            .Take(20)
            .Select(ps => new {
                ps.ProductId,
                ProductName = ps.Product.Name,
                ps.Product.SKU,
                ps.QuantityOnHand,
                ReorderLevel = ps.ReorderLevel ?? 0,
                WarehouseName = ps.Warehouse.Name,
                ps.Product.ImageUrl
            })
            .ToListAsync(cancellationToken);

        var lowStockProducts = lowStockData.Select(ps => new LowStockProductDto(
            ps.ProductId,
            ps.ProductName,
            ps.SKU,
            ps.QuantityOnHand,
            ps.ReorderLevel,
            ps.WarehouseName,
            ps.ImageUrl
        )).ToList();

        // Out of stock products
        var outOfStockCount = await stockQuery.CountAsync(ps => ps.QuantityOnHand == 0, cancellationToken);

        var outOfStockData = await stockQuery
            .Where(ps => ps.QuantityOnHand == 0)
            .Take(20)
            .Select(ps => new {
                ps.ProductId,
                ProductName = ps.Product.Name,
                ps.Product.SKU,
                ReorderLevel = ps.ReorderLevel ?? 0,
                WarehouseName = ps.Warehouse.Name,
                ps.Product.ImageUrl
            })
            .ToListAsync(cancellationToken);

        var outOfStockProducts = outOfStockData.Select(ps => new LowStockProductDto(
            ps.ProductId,
            ps.ProductName,
            ps.SKU,
            0,
            ps.ReorderLevel,
            ps.WarehouseName,
            ps.ImageUrl
        )).ToList();

        // Stock by warehouse - simplified
        var warehouseData = await _context.ProductStocks
            .Include(ps => ps.Warehouse)
            .Include(ps => ps.Product)
            .ToListAsync(cancellationToken);

        var stockByWarehouse = warehouseData
            .GroupBy(ps => new { ps.WarehouseId, ps.Warehouse.Name })
            .Select(g => new WarehouseStockDto(
                g.Key.WarehouseId,
                g.Key.Name,
                g.Count(),
                g.Sum(ps => ps.QuantityOnHand),
                g.Sum(ps => ps.QuantityOnHand * ps.Product.UnitPrice),
                g.Count(ps => ps.QuantityOnHand <= (ps.ReorderLevel ?? 0) && ps.QuantityOnHand > 0)
            ))
            .ToList();

        // Total stock value
        var totalStockValue = warehouseData.Sum(ps => ps.QuantityOnHand * ps.Product.UnitPrice);

        return new InventoryAnalyticsDto
        {
            TotalProducts = totalProducts,
            LowStockCount = lowStockCount,
            OutOfStockCount = outOfStockCount,
            TotalStockValue = totalStockValue,
            LowStockProducts = lowStockProducts,
            OutOfStockProducts = outOfStockProducts,
            StockByWarehouse = stockByWarehouse,
            FastMovingProducts = new List<FastMovingProductDto>() // Simplified
        };
    }

    #endregion

    #region Logistics Analytics

    public async Task<LogisticsAnalyticsDto> GetLogisticsAnalyticsAsync(AnalyticsFilter filter, CancellationToken cancellationToken = default)
    {
        var startDate = filter.StartDate ?? DateTime.UtcNow.AddDays(-30);
        var endDate = filter.EndDate ?? DateTime.UtcNow;

        var shipmentsQuery = _context.Shipments
            .Where(s => s.CreatedAt >= startDate && s.CreatedAt <= endDate);

        if (filter.WarehouseId.HasValue)
            shipmentsQuery = shipmentsQuery.Where(s => s.WarehouseId == filter.WarehouseId);

        var totalShipments = await shipmentsQuery.CountAsync(cancellationToken);
        var deliveredShipments = await shipmentsQuery.CountAsync(s => s.Status == ShipmentStatus.Delivered, cancellationToken);

        // Average delivery days - simplified
        var deliveryData = await shipmentsQuery
            .Where(s => s.Status == ShipmentStatus.Delivered && s.ShippedAt.HasValue && s.DeliveredAt.HasValue)
            .Select(s => new { s.ShippedAt, s.DeliveredAt })
            .ToListAsync(cancellationToken);

        var avgDeliveryDays = deliveryData.Count > 0
            ? deliveryData.Average(s => (s.DeliveredAt!.Value - s.ShippedAt!.Value).TotalDays)
            : 0;

        // Delayed shipments
        var delayedShipments = await shipmentsQuery
            .CountAsync(s => s.Status != ShipmentStatus.Delivered && 
                            s.Status != ShipmentStatus.Cancelled && 
                            s.EstimatedDeliveryDate < DateTime.UtcNow, cancellationToken);

        // Success rate
        var successRate = totalShipments > 0 ? (decimal)deliveredShipments / totalShipments * 100 : 0;

        // Shipments by status - simplified
        var statusData = await shipmentsQuery
            .Select(s => s.Status)
            .ToListAsync(cancellationToken);

        var statusGroups = statusData
            .GroupBy(s => s)
            .Select(g => new CategoryDataPoint(
                g.Key.ToString(),
                g.Count(),
                totalShipments > 0 ? (decimal)g.Count() / totalShipments * 100 : 0
            ))
            .ToList();

        // Deliveries over time - simplified
        var deliveryTimeData = await shipmentsQuery
            .Where(s => s.Status == ShipmentStatus.Delivered && s.DeliveredAt.HasValue)
            .Select(s => s.DeliveredAt!.Value)
            .ToListAsync(cancellationToken);

        var deliveriesOverTime = deliveryTimeData
            .GroupBy(d => d.Date)
            .Select(g => new TimeSeriesDataPoint(
                g.Key,
                g.Key.ToString("MMM dd"),
                g.Count()
            ))
            .OrderBy(x => x.Date)
            .ToList();

        return new LogisticsAnalyticsDto
        {
            AverageDeliveryDays = avgDeliveryDays,
            TotalShipments = totalShipments,
            DeliveredShipments = deliveredShipments,
            DelayedShipments = delayedShipments,
            DeliverySuccessRate = successRate,
            OnTimeDeliveryRate = successRate, // Simplified
            CourierPerformance = new List<CourierPerformanceDto>(), // Simplified
            ShipmentsByStatus = statusGroups,
            DeliveriesOverTime = deliveriesOverTime
        };
    }

    #endregion

    #region Customer Analytics

    public async Task<CustomerAnalyticsDto> GetCustomerAnalyticsAsync(AnalyticsFilter filter, CancellationToken cancellationToken = default)
    {
        var startDate = filter.StartDate ?? DateTime.UtcNow.AddDays(-30);
        var endDate = filter.EndDate ?? DateTime.UtcNow;

        // Total and new customers
        var totalCustomers = await _context.Users.CountAsync(cancellationToken);
        var newCustomers = await _context.Users
            .CountAsync(u => u.CreatedAt >= startDate && u.CreatedAt <= endDate, cancellationToken);

        // Returning customers
        var customerOrderCounts = await _context.Orders
            .Where(o => !string.IsNullOrEmpty(o.CustomerId))
            .GroupBy(o => o.CustomerId)
            .Select(g => new { CustomerId = g.Key, Count = g.Count() })
            .ToListAsync(cancellationToken);

        var returningCustomers = customerOrderCounts.Count(c => c.Count > 1);
        var avgOrdersPerCustomer = customerOrderCounts.Count > 0 
            ? (decimal)customerOrderCounts.Average(c => c.Count) 
            : 0;

        // Customer lifetime value
        var customerValues = await _context.Orders
            .Where(o => !string.IsNullOrEmpty(o.CustomerId))
            .GroupBy(o => o.CustomerId)
            .Select(g => g.Sum(o => o.TotalAmount))
            .ToListAsync(cancellationToken);

        var avgLifetimeValue = customerValues.Count > 0 ? customerValues.Average() : 0;

        // Retention rate
        var retentionRate = totalCustomers > 0 ? (decimal)returningCustomers / totalCustomers * 100 : 0;

        // New customers over time - simplified
        var newCustomerData = await _context.Users
            .Where(u => u.CreatedAt >= startDate && u.CreatedAt <= endDate)
            .Select(u => u.CreatedAt)
            .ToListAsync(cancellationToken);

        var newCustomersOverTime = newCustomerData
            .GroupBy(d => d.Date)
            .Select(g => new TimeSeriesDataPoint(
                g.Key,
                g.Key.ToString("MMM dd"),
                g.Count()
            ))
            .OrderBy(x => x.Date)
            .ToList();

        // Top customers - simplified
        var topCustomerData = await _context.Orders
            .Where(o => !string.IsNullOrEmpty(o.CustomerId))
            .GroupBy(o => o.CustomerId)
            .Select(g => new {
                CustomerId = g.Key!,
                TotalOrders = g.Count(),
                TotalSpent = g.Sum(o => o.TotalAmount),
                LastOrderDate = g.Max(o => o.CreatedAt)
            })
            .OrderByDescending(x => x.TotalSpent)
            .Take(10)
            .ToListAsync(cancellationToken);

        var topCustomers = topCustomerData.Select(c => new TopCustomerDto(
            c.CustomerId,
            c.CustomerId,
            null,
            c.TotalOrders,
            c.TotalSpent,
            c.LastOrderDate
        )).ToList();

        return new CustomerAnalyticsDto
        {
            TotalCustomers = totalCustomers,
            NewCustomers = newCustomers,
            ReturningCustomers = returningCustomers,
            CustomerRetentionRate = retentionRate,
            AverageOrdersPerCustomer = avgOrdersPerCustomer,
            CustomerLifetimeValue = avgLifetimeValue,
            NewCustomersOverTime = newCustomersOverTime,
            TopCustomers = topCustomers,
            OrderFrequencyDistribution = new List<CategoryDataPoint>() // Simplified
        };
    }

    #endregion
}
