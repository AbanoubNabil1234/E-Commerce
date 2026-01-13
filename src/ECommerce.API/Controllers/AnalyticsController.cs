// ==============================================
// AnalyticsController - Analytics REST API
// ==============================================

using ECommerce.Application.Features.Analytics.DTOs;
using ECommerce.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ECommerce.API.Controllers;

/// <summary>
/// Analytics and reporting endpoints.
/// </summary>
[ApiController]
[Route("api/[controller]")]
[Authorize]
public class AnalyticsController : ControllerBase
{
    private readonly IAnalyticsService _analyticsService;

    public AnalyticsController(IAnalyticsService analyticsService)
    {
        _analyticsService = analyticsService;
    }

    /// <summary>
    /// Get dashboard overview metrics.
    /// </summary>
    /// <param name="startDate">Start date for the period (default: 30 days ago)</param>
    /// <param name="endDate">End date for the period (default: now)</param>
    /// <param name="warehouseId">Optional warehouse filter</param>
    [HttpGet("overview")]
    [ProducesResponseType(typeof(OverviewAnalyticsDto), 200)]
    public async Task<ActionResult<OverviewAnalyticsDto>> GetOverview(
        [FromQuery] DateTime? startDate,
        [FromQuery] DateTime? endDate,
        [FromQuery] int? warehouseId,
        CancellationToken cancellationToken)
    {
        var filter = new AnalyticsFilter(startDate, endDate, warehouseId);
        var result = await _analyticsService.GetOverviewAsync(filter, cancellationToken);
        return Ok(result);
    }

    /// <summary>
    /// Get sales analytics with revenue trends and best sellers.
    /// </summary>
    /// <param name="startDate">Start date for the period</param>
    /// <param name="endDate">End date for the period</param>
    /// <param name="warehouseId">Optional warehouse filter</param>
    /// <param name="categoryId">Optional category filter</param>
    [HttpGet("sales")]
    [ProducesResponseType(typeof(SalesAnalyticsDto), 200)]
    public async Task<ActionResult<SalesAnalyticsDto>> GetSalesAnalytics(
        [FromQuery] DateTime? startDate,
        [FromQuery] DateTime? endDate,
        [FromQuery] int? warehouseId,
        [FromQuery] int? categoryId,
        CancellationToken cancellationToken)
    {
        var filter = new AnalyticsFilter(startDate, endDate, warehouseId, categoryId);
        var result = await _analyticsService.GetSalesAnalyticsAsync(filter, cancellationToken);
        return Ok(result);
    }

    /// <summary>
    /// Get inventory analytics with stock levels and movements.
    /// </summary>
    /// <param name="warehouseId">Optional warehouse filter</param>
    /// <param name="categoryId">Optional category filter</param>
    [HttpGet("inventory")]
    [ProducesResponseType(typeof(InventoryAnalyticsDto), 200)]
    public async Task<ActionResult<InventoryAnalyticsDto>> GetInventoryAnalytics(
        [FromQuery] int? warehouseId,
        [FromQuery] int? categoryId,
        CancellationToken cancellationToken)
    {
        var filter = new AnalyticsFilter(WarehouseId: warehouseId, CategoryId: categoryId);
        var result = await _analyticsService.GetInventoryAnalyticsAsync(filter, cancellationToken);
        return Ok(result);
    }

    /// <summary>
    /// Get logistics analytics with delivery performance.
    /// </summary>
    /// <param name="startDate">Start date for the period</param>
    /// <param name="endDate">End date for the period</param>
    /// <param name="warehouseId">Optional warehouse filter</param>
    [HttpGet("logistics")]
    [ProducesResponseType(typeof(LogisticsAnalyticsDto), 200)]
    public async Task<ActionResult<LogisticsAnalyticsDto>> GetLogisticsAnalytics(
        [FromQuery] DateTime? startDate,
        [FromQuery] DateTime? endDate,
        [FromQuery] int? warehouseId,
        CancellationToken cancellationToken)
    {
        var filter = new AnalyticsFilter(startDate, endDate, warehouseId);
        var result = await _analyticsService.GetLogisticsAnalyticsAsync(filter, cancellationToken);
        return Ok(result);
    }

    /// <summary>
    /// Get customer analytics with behavior patterns.
    /// </summary>
    /// <param name="startDate">Start date for the period</param>
    /// <param name="endDate">End date for the period</param>
    [HttpGet("customers")]
    [ProducesResponseType(typeof(CustomerAnalyticsDto), 200)]
    public async Task<ActionResult<CustomerAnalyticsDto>> GetCustomerAnalytics(
        [FromQuery] DateTime? startDate,
        [FromQuery] DateTime? endDate,
        CancellationToken cancellationToken)
    {
        var filter = new AnalyticsFilter(startDate, endDate);
        var result = await _analyticsService.GetCustomerAnalyticsAsync(filter, cancellationToken);
        return Ok(result);
    }
}
