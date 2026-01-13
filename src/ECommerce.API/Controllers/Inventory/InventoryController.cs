// ==============================================
// InventoryController.cs - Inventory API Endpoints
// ==============================================

using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ECommerce.Application.Features.Inventory.DTOs;
using ECommerce.Application.Interfaces;
using ECommerce.Domain.Constants;

namespace ECommerce.API.Controllers.Inventory;

/// <summary>
/// API endpoints for inventory/stock management.
/// </summary>
[ApiController]
[Route("api/[controller]")]
[Authorize]
public class InventoryController : ControllerBase
{
    private readonly IInventoryService _inventoryService;

    public InventoryController(IInventoryService inventoryService)
    {
        _inventoryService = inventoryService;
    }

    private string CurrentUserId => User.FindFirstValue(ClaimTypes.NameIdentifier) ?? "";

    #region Query Endpoints

    /// <summary>
    /// Get all stock levels, optionally filtered by warehouse.
    /// </summary>
    [HttpGet]
    [Authorize(Policy = Permissions.InventoryView)]
    [ProducesResponseType(typeof(List<ProductStockDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<List<ProductStockDto>>> GetAllStock(
        [FromQuery] int? warehouseId = null,
        [FromQuery] bool? lowStockOnly = null,
        CancellationToken cancellationToken = default)
    {
        var stocks = await _inventoryService.GetAllStockAsync(warehouseId, lowStockOnly, cancellationToken);
        return Ok(stocks);
    }

    /// <summary>
    /// Get stock for a specific product at a warehouse.
    /// </summary>
    [HttpGet("product/{productId:int}")]
    [Authorize(Policy = Permissions.InventoryView)]
    [ProducesResponseType(typeof(ProductStockDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<ProductStockDto>> GetStockByProduct(
        int productId,
        [FromQuery] int warehouseId,
        CancellationToken cancellationToken = default)
    {
        var stock = await _inventoryService.GetStockByProductAsync(productId, warehouseId, cancellationToken);
        
        if (stock == null)
        {
            return NotFound(new ProblemDetails
            {
                Title = "Stock Not Found",
                Detail = $"No stock found for product {productId} at warehouse {warehouseId}"
            });
        }

        return Ok(stock);
    }

    /// <summary>
    /// Get stock summary for a product across all warehouses.
    /// </summary>
    [HttpGet("product/{productId:int}/summary")]
    [Authorize(Policy = Permissions.InventoryView)]
    [ProducesResponseType(typeof(ProductStockSummaryDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<ProductStockSummaryDto>> GetStockSummary(
        int productId,
        CancellationToken cancellationToken = default)
    {
        var summary = await _inventoryService.GetStockSummaryAsync(productId, cancellationToken);
        
        if (summary == null)
        {
            return NotFound(new ProblemDetails
            {
                Title = "No Stock Found",
                Detail = $"No stock records found for product {productId}"
            });
        }

        return Ok(summary);
    }

    /// <summary>
    /// Get product details with stock breakdown per warehouse.
    /// Combines product info with inventory data for Product Details page.
    /// </summary>
    [HttpGet("product/{productId:int}/with-stock")]
    [Authorize(Policy = Permissions.InventoryView)]
    [ProducesResponseType(typeof(ProductWithStockDetailsDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<ProductWithStockDetailsDto>> GetProductWithStockDetails(
        int productId,
        CancellationToken cancellationToken = default)
    {
        var details = await _inventoryService.GetProductWithStockDetailsAsync(productId, cancellationToken);
        
        if (details == null)
        {
            return NotFound(new ProblemDetails
            {
                Title = "Product Not Found",
                Detail = $"Product {productId} not found"
            });
        }

        return Ok(details);
    }

    /// <summary>
    /// Get stock movement history for a product.
    /// </summary>
    [HttpGet("movements/{productId:int}")]
    [Authorize(Policy = Permissions.InventoryView)]
    [ProducesResponseType(typeof(List<StockMovementDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<List<StockMovementDto>>> GetMovementHistory(
        int productId,
        [FromQuery] int? warehouseId = null,
        [FromQuery] int pageNumber = 1,
        [FromQuery] int pageSize = 20,
        CancellationToken cancellationToken = default)
    {
        var movements = await _inventoryService.GetMovementHistoryAsync(
            productId, warehouseId, pageNumber, pageSize, cancellationToken);
        return Ok(movements);
    }

    /// <summary>
    /// Get products with low stock levels.
    /// </summary>
    [HttpGet("low-stock")]
    [Authorize(Policy = Permissions.InventoryView)]
    [ProducesResponseType(typeof(List<ProductStockDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<List<ProductStockDto>>> GetLowStockProducts(
        [FromQuery] int? warehouseId = null,
        CancellationToken cancellationToken = default)
    {
        var stocks = await _inventoryService.GetLowStockProductsAsync(warehouseId, cancellationToken);
        return Ok(stocks);
    }

    #endregion

    #region Command Endpoints

    /// <summary>
    /// Initialize stock for a product at a warehouse.
    /// </summary>
    [HttpPost("initialize")]
    [Authorize(Policy = Permissions.InventoryAdjust)]
    [ProducesResponseType(typeof(ProductStockDto), StatusCodes.Status201Created)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<ProductStockDto>> InitializeStock(
        [FromBody] InitializeStockRequest request,
        CancellationToken cancellationToken = default)
    {
        try
        {
            var stock = await _inventoryService.InitializeStockAsync(request, CurrentUserId, cancellationToken);
            return CreatedAtAction(
                nameof(GetStockByProduct), 
                new { productId = stock.ProductId, warehouseId = stock.WarehouseId }, 
                stock);
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new ProblemDetails
            {
                Title = "Stock Initialization Failed",
                Detail = ex.Message
            });
        }
    }

    /// <summary>
    /// Increase stock quantity (receive goods).
    /// </summary>
    [HttpPost("increase")]
    [Authorize(Policy = Permissions.InventoryAdjust)]
    [ProducesResponseType(typeof(ProductStockDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<ProductStockDto>> IncreaseStock(
        [FromBody] AdjustStockRequest request,
        CancellationToken cancellationToken = default)
    {
        try
        {
            var stock = await _inventoryService.IncreaseStockAsync(
                request.ProductId,
                request.WarehouseId,
                request.Quantity,
                request.Reason,
                "Manual",
                null,
                CurrentUserId,
                cancellationToken);
            return Ok(stock);
        }
        catch (Exception ex) when (ex is InvalidOperationException or ArgumentException)
        {
            return BadRequest(new ProblemDetails
            {
                Title = "Stock Increase Failed",
                Detail = ex.Message
            });
        }
    }

    /// <summary>
    /// Decrease stock quantity (remove goods).
    /// </summary>
    [HttpPost("decrease")]
    [Authorize(Policy = Permissions.InventoryAdjust)]
    [ProducesResponseType(typeof(ProductStockDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<ProductStockDto>> DecreaseStock(
        [FromBody] AdjustStockRequest request,
        CancellationToken cancellationToken = default)
    {
        try
        {
            var stock = await _inventoryService.DecreaseStockAsync(
                request.ProductId,
                request.WarehouseId,
                request.Quantity,
                request.Reason,
                "Manual",
                null,
                CurrentUserId,
                cancellationToken);
            return Ok(stock);
        }
        catch (Exception ex) when (ex is InvalidOperationException or ArgumentException)
        {
            return BadRequest(new ProblemDetails
            {
                Title = "Stock Decrease Failed",
                Detail = ex.Message
            });
        }
    }

    /// <summary>
    /// Adjust stock to an absolute quantity.
    /// </summary>
    [HttpPost("adjust")]
    [Authorize(Policy = Permissions.InventoryAdjust)]
    [ProducesResponseType(typeof(ProductStockDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<ProductStockDto>> AdjustStock(
        [FromBody] AdjustStockRequest request,
        CancellationToken cancellationToken = default)
    {
        try
        {
            var stock = await _inventoryService.AdjustStockAsync(request, CurrentUserId, cancellationToken);
            return Ok(stock);
        }
        catch (Exception ex) when (ex is InvalidOperationException or ArgumentException)
        {
            return BadRequest(new ProblemDetails
            {
                Title = "Stock Adjustment Failed",
                Detail = ex.Message
            });
        }
    }

    /// <summary>
    /// Transfer stock between warehouse locations.
    /// </summary>
    [HttpPost("transfer")]
    [Authorize(Policy = Permissions.InventoryTransfer)]
    [ProducesResponseType(typeof(object), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult> TransferStock(
        [FromBody] TransferStockRequest request,
        CancellationToken cancellationToken = default)
    {
        try
        {
            var (source, destination) = await _inventoryService.TransferStockAsync(
                request, CurrentUserId, cancellationToken);
            return Ok(new { Source = source, Destination = destination });
        }
        catch (Exception ex) when (ex is InvalidOperationException or ArgumentException)
        {
            return BadRequest(new ProblemDetails
            {
                Title = "Stock Transfer Failed",
                Detail = ex.Message
            });
        }
    }

    /// <summary>
    /// Check if stock is available for a product.
    /// </summary>
    [HttpGet("check-availability")]
    [Authorize(Policy = Permissions.InventoryView)]
    [ProducesResponseType(typeof(object), StatusCodes.Status200OK)]
    public async Task<ActionResult> CheckStockAvailability(
        [FromQuery] int productId,
        [FromQuery] int warehouseId,
        [FromQuery] decimal quantity,
        CancellationToken cancellationToken = default)
    {
        var isAvailable = await _inventoryService.IsStockAvailableAsync(
            productId, warehouseId, quantity, cancellationToken);
        
        return Ok(new 
        { 
            ProductId = productId,
            WarehouseId = warehouseId,
            RequestedQuantity = quantity,
            IsAvailable = isAvailable
        });
    }

    #endregion
}
