// ==============================================
// IAnalyticsService - Analytics Service Interface
// ==============================================

using ECommerce.Application.Features.Analytics.DTOs;

namespace ECommerce.Application.Interfaces;

/// <summary>
/// Service for analytics and reporting.
/// </summary>
public interface IAnalyticsService
{
    /// <summary>
    /// Get dashboard overview metrics.
    /// </summary>
    Task<OverviewAnalyticsDto> GetOverviewAsync(AnalyticsFilter filter, CancellationToken cancellationToken = default);
    
    /// <summary>
    /// Get sales analytics with revenue trends and best sellers.
    /// </summary>
    Task<SalesAnalyticsDto> GetSalesAnalyticsAsync(AnalyticsFilter filter, CancellationToken cancellationToken = default);
    
    /// <summary>
    /// Get inventory analytics with stock levels and movements.
    /// </summary>
    Task<InventoryAnalyticsDto> GetInventoryAnalyticsAsync(AnalyticsFilter filter, CancellationToken cancellationToken = default);
    
    /// <summary>
    /// Get logistics analytics with delivery performance.
    /// </summary>
    Task<LogisticsAnalyticsDto> GetLogisticsAnalyticsAsync(AnalyticsFilter filter, CancellationToken cancellationToken = default);
    
    /// <summary>
    /// Get customer analytics with behavior patterns.
    /// </summary>
    Task<CustomerAnalyticsDto> GetCustomerAnalyticsAsync(AnalyticsFilter filter, CancellationToken cancellationToken = default);
}
