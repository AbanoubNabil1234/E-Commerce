// ==============================================
// Analytics DTOs - Chart-Ready Response Models
// ==============================================

namespace ECommerce.Application.Features.Analytics.DTOs;

#region Common Models

/// <summary>
/// Common date range filter for analytics queries.
/// </summary>
public record AnalyticsFilter(
    DateTime? StartDate = null,
    DateTime? EndDate = null,
    int? WarehouseId = null,
    int? CategoryId = null,
    int? BrandId = null
);

/// <summary>
/// Time series data point for charts.
/// </summary>
public record TimeSeriesDataPoint(
    DateTime Date,
    string Label,
    decimal Value
);

/// <summary>
/// Category breakdown for pie/bar charts.
/// </summary>
public record CategoryDataPoint(
    string Category,
    decimal Value,
    decimal Percentage
);

#endregion

#region Overview Analytics

/// <summary>
/// Dashboard overview with key metrics.
/// </summary>
public record OverviewAnalyticsDto
{
    public int TotalOrders { get; init; }
    public decimal TotalRevenue { get; init; }
    public int ActiveShipments { get; init; }
    public int LowStockProducts { get; init; }
    public int DeliveredOrders { get; init; }
    public int PendingOrders { get; init; }
    public int NewCustomers { get; init; }
    public decimal AverageOrderValue { get; init; }
    
    // Comparison with previous period
    public decimal RevenueGrowth { get; init; }
    public decimal OrdersGrowth { get; init; }
}

#endregion

#region Sales Analytics

/// <summary>
/// Comprehensive sales analytics.
/// </summary>
public record SalesAnalyticsDto
{
    public decimal TotalRevenue { get; init; }
    public int TotalOrders { get; init; }
    public decimal AverageOrderValue { get; init; }
    public List<TimeSeriesDataPoint> RevenueOverTime { get; init; } = new();
    public List<BestSellingProductDto> BestSellingProducts { get; init; } = new();
    public List<CategoryDataPoint> OrdersByCountry { get; init; } = new();
    public List<CategoryDataPoint> PaymentStatusSummary { get; init; } = new();
    public List<CategoryDataPoint> OrderStatusSummary { get; init; } = new();
}

public record BestSellingProductDto(
    int ProductId,
    string ProductName,
    string Sku,
    int QuantitySold,
    decimal Revenue,
    string? ImageUrl
);

public record RevenueByPeriodDto(
    string Period,
    decimal Revenue,
    int OrderCount,
    decimal AverageOrderValue
);

#endregion

#region Inventory Analytics

/// <summary>
/// Inventory status and stock analytics.
/// </summary>
public record InventoryAnalyticsDto
{
    public int TotalProducts { get; init; }
    public int LowStockCount { get; init; }
    public int OutOfStockCount { get; init; }
    public decimal TotalStockValue { get; init; }
    public List<LowStockProductDto> LowStockProducts { get; init; } = new();
    public List<LowStockProductDto> OutOfStockProducts { get; init; } = new();
    public List<WarehouseStockDto> StockByWarehouse { get; init; } = new();
    public List<FastMovingProductDto> FastMovingProducts { get; init; } = new();
}

public record LowStockProductDto(
    int ProductId,
    string ProductName,
    string Sku,
    decimal CurrentStock,
    decimal ReorderLevel,
    string WarehouseName,
    string? ImageUrl
);

public record WarehouseStockDto(
    int WarehouseId,
    string WarehouseName,
    int TotalProducts,
    decimal TotalQuantity,
    decimal StockValue,
    int LowStockItems
);

public record FastMovingProductDto(
    int ProductId,
    string ProductName,
    string Sku,
    int QuantitySold,
    decimal CurrentStock,
    decimal TurnoverRate
);

#endregion

#region Logistics Analytics

/// <summary>
/// Shipping and delivery analytics.
/// </summary>
public record LogisticsAnalyticsDto
{
    public double AverageDeliveryDays { get; init; }
    public int TotalShipments { get; init; }
    public int DeliveredShipments { get; init; }
    public int DelayedShipments { get; init; }
    public decimal DeliverySuccessRate { get; init; }
    public decimal OnTimeDeliveryRate { get; init; }
    public List<CourierPerformanceDto> CourierPerformance { get; init; } = new();
    public List<CategoryDataPoint> ShipmentsByStatus { get; init; } = new();
    public List<TimeSeriesDataPoint> DeliveriesOverTime { get; init; } = new();
}

public record CourierPerformanceDto(
    int CarrierId,
    string CarrierName,
    int TotalShipments,
    int DeliveredOnTime,
    int DelayedDeliveries,
    double AverageDeliveryDays,
    decimal SuccessRate
);

public record DelayedShipmentDto(
    int ShipmentId,
    string TrackingNumber,
    string OrderNumber,
    DateTime ExpectedDate,
    int DaysDelayed,
    string Status,
    string? CarrierName
);

#endregion

#region Customer Analytics

/// <summary>
/// Customer behavior and metrics.
/// </summary>
public record CustomerAnalyticsDto
{
    public int TotalCustomers { get; init; }
    public int NewCustomers { get; init; }
    public int ReturningCustomers { get; init; }
    public decimal CustomerRetentionRate { get; init; }
    public decimal AverageOrdersPerCustomer { get; init; }
    public decimal CustomerLifetimeValue { get; init; }
    public List<TimeSeriesDataPoint> NewCustomersOverTime { get; init; } = new();
    public List<TopCustomerDto> TopCustomers { get; init; } = new();
    public List<CategoryDataPoint> OrderFrequencyDistribution { get; init; } = new();
}

public record TopCustomerDto(
    string CustomerId,
    string CustomerName,
    string? Email,
    int TotalOrders,
    decimal TotalSpent,
    DateTime LastOrderDate
);

public record CustomerSegmentDto(
    string Segment,
    int CustomerCount,
    decimal AverageSpend,
    decimal TotalRevenue
);

#endregion
