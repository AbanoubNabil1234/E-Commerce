using Microsoft.AspNetCore.Mvc;
using MediatR;
using ECommerce.Application.DTOs.Catalog;
using ECommerce.Application.Interfaces.Services;
using ECommerce.Application.Features.Products.Commands.CreateProduct;
using ECommerce.Application.Features.Products.Commands.UpdateProduct;
using ECommerce.Application.Features.Products.Commands.DeleteProduct;
using ECommerce.Application.Features.Products.Commands.UpdateProductStatus;

namespace ECommerce.API.Controllers.Catalog;

/// <summary>
/// Product management API endpoints.
/// </summary>
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IMediator _mediator;
    private readonly IProductService _productService;

    public ProductsController(IMediator mediator, IProductService productService)
    {
        _mediator = mediator;
        _productService = productService;
    }

    /// <summary>
    /// Get paginated products with optional filters.
    /// </summary>
    [HttpGet]
    [ProducesResponseType(typeof(ProductListDto), StatusCodes.Status200OK)]
    public async Task<ActionResult<ProductListDto>> GetPaged(
        [FromQuery] int pageNumber = 1,
        [FromQuery] int pageSize = 10,
        [FromQuery] string? search = null,
        [FromQuery] int? brandId = null,
        [FromQuery] int? categoryId = null,
        [FromQuery] decimal? minPrice = null,
        [FromQuery] decimal? maxPrice = null,
        [FromQuery] bool? isActive = null,
        [FromQuery] bool? isFeatured = null,
        [FromQuery] string? sortBy = null,
        [FromQuery] bool sortDescending = false,
        [FromHeader(Name = "Accept-Language")] string language = "en",
        CancellationToken cancellationToken = default)
    {
        var result = await _productService.GetPagedAsync(
            pageNumber, pageSize, search, brandId, categoryId,
            minPrice, maxPrice, isActive, isFeatured, sortBy, sortDescending,
            language, cancellationToken);

        return Ok(result);
    }

    /// <summary>
    /// Get featured products.
    /// </summary>
    [HttpGet("featured")]
    [ProducesResponseType(typeof(IEnumerable<LocalizedProductDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<LocalizedProductDto>>> GetFeatured(
        [FromQuery] int count = 8,
        [FromHeader(Name = "Accept-Language")] string language = "en",
        CancellationToken cancellationToken = default)
    {
        var products = await _productService.GetFeaturedAsync(count, language, cancellationToken);
        return Ok(products);
    }

    /// <summary>
    /// Get product by ID.
    /// </summary>
    [HttpGet("{id:int}")]
    [ProducesResponseType(typeof(LocalizedProductDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<LocalizedProductDto>> GetById(
        int id,
        [FromHeader(Name = "Accept-Language")] string language = "en",
        CancellationToken cancellationToken = default)
    {
        var product = await _productService.GetByIdLocalizedAsync(id, language, cancellationToken);
        if (product == null) return NotFound();
        return Ok(product);
    }

    /// <summary>
    /// Get product by slug.
    /// </summary>
    [HttpGet("slug/{slug}")]
    [ProducesResponseType(typeof(LocalizedProductDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<LocalizedProductDto>> GetBySlug(
        string slug,
        [FromHeader(Name = "Accept-Language")] string language = "en",
        CancellationToken cancellationToken = default)
    {
        var product = await _productService.GetBySlugAsync(slug, language, cancellationToken);
        if (product == null) return NotFound();
        return Ok(product);
    }

    /// <summary>
    /// Get product by SKU.
    /// </summary>
    [HttpGet("sku/{sku}")]
    [ProducesResponseType(typeof(LocalizedProductDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<LocalizedProductDto>> GetBySKU(
        string sku,
        [FromHeader(Name = "Accept-Language")] string language = "en",
        CancellationToken cancellationToken = default)
    {
        var product = await _productService.GetBySKUAsync(sku, language, cancellationToken);
        if (product == null) return NotFound();
        return Ok(product);
    }

    /// <summary>
    /// Get products by brand.
    /// </summary>
    [HttpGet("brand/{brandId:int}")]
    [ProducesResponseType(typeof(IEnumerable<LocalizedProductDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<LocalizedProductDto>>> GetByBrand(
        int brandId,
        [FromHeader(Name = "Accept-Language")] string language = "en",
        CancellationToken cancellationToken = default)
    {
        var products = await _productService.GetByBrandAsync(brandId, language, cancellationToken);
        return Ok(products);
    }

    /// <summary>
    /// Get products by category.
    /// </summary>
    [HttpGet("category/{categoryId:int}")]
    [ProducesResponseType(typeof(IEnumerable<LocalizedProductDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<LocalizedProductDto>>> GetByCategory(
        int categoryId,
        [FromHeader(Name = "Accept-Language")] string language = "en",
        CancellationToken cancellationToken = default)
    {
        var products = await _productService.GetByCategoryAsync(categoryId, language, cancellationToken);
        return Ok(products);
    }

    /// <summary>
    /// Create a new product with translations and images.
    /// </summary>
    [HttpPost]
    [ProducesResponseType(typeof(ProductDto), StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<ProductDto>> Create(
        [FromBody] CreateProductCommand command,
        CancellationToken cancellationToken = default)
    {
        var result = await _mediator.Send(command, cancellationToken);
        return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
    }

    /// <summary>
    /// Update an existing product.
    /// </summary>
    [HttpPut("{id:int}")]
    [ProducesResponseType(typeof(ProductDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<ProductDto>> Update(
        int id,
        [FromBody] UpdateProductCommand command,
        CancellationToken cancellationToken = default)
    {
        if (id != command.Id)
            return BadRequest("ID mismatch");

        var result = await _mediator.Send(command, cancellationToken);
        return Ok(result);
    }

    /// <summary>
    /// Delete a product (soft delete by default).
    /// </summary>
    [HttpDelete("{id:int}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Delete(
        int id,
        [FromQuery] bool hardDelete = false,
        CancellationToken cancellationToken = default)
    {
        var command = new DeleteProductCommand
        {
            Id = id,
            HardDelete = hardDelete,
            DeletedBy = User.Identity?.Name ?? "system"
        };

        await _mediator.Send(command, cancellationToken);
        return NoContent();
    }

    /// <summary>
    /// Update product status (active/inactive).
    /// </summary>
    [HttpPatch("{id:int}/status")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> UpdateStatus(
        int id,
        [FromBody] UpdateProductStatusRequest request,
        CancellationToken cancellationToken = default)
    {
        var command = new UpdateProductStatusCommand
        {
            Id = id,
            IsActive = request.IsActive
        };

        await _mediator.Send(command, cancellationToken);
        return NoContent();
    }

    /// <summary>
    /// Add or update translation for a product.
    /// </summary>
    [HttpPut("{id:int}/translations/{languageCode}")]
    [ProducesResponseType(typeof(ProductTranslationDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<ProductTranslationDto>> UpsertTranslation(
        int id,
        string languageCode,
        [FromBody] ProductTranslationDto dto,
        CancellationToken cancellationToken = default)
    {
        dto.LanguageCode = languageCode;

        try
        {
            var result = await _productService.UpdateTranslationAsync(id, dto, cancellationToken);
            return Ok(result);
        }
        catch (InvalidOperationException)
        {
            // Translation doesn't exist, create it
            var result = await _productService.AddTranslationAsync(id, dto, cancellationToken);
            return Ok(result);
        }
    }

    /// <summary>
    /// Add an image to a product.
    /// </summary>
    [HttpPost("{id:int}/images")]
    [ProducesResponseType(typeof(ProductImageDto), StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<ProductImageDto>> AddImage(
        int id,
        [FromBody] ProductImageDto dto,
        CancellationToken cancellationToken = default)
    {
        var result = await _productService.AddImageAsync(id, dto, cancellationToken);
        return CreatedAtAction(nameof(GetById), new { id }, result);
    }

    /// <summary>
    /// Update a product image.
    /// </summary>
    [HttpPut("{id:int}/images/{imageId:int}")]
    [ProducesResponseType(typeof(ProductImageDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<ProductImageDto>> UpdateImage(
        int id,
        int imageId,
        [FromBody] ProductImageDto dto,
        CancellationToken cancellationToken = default)
    {
        dto.Id = imageId;
        var result = await _productService.UpdateImageAsync(id, dto, cancellationToken);
        return Ok(result);
    }

    /// <summary>
    /// Delete a product image.
    /// </summary>
    [HttpDelete("{id:int}/images/{imageId:int}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> DeleteImage(
        int id,
        int imageId,
        CancellationToken cancellationToken = default)
    {
        await _productService.DeleteImageAsync(id, imageId, cancellationToken);
        return NoContent();
    }

    /// <summary>
    /// Set a product's primary image.
    /// </summary>
    [HttpPatch("{id:int}/images/{imageId:int}/primary")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> SetPrimaryImage(
        int id,
        int imageId,
        CancellationToken cancellationToken = default)
    {
        await _productService.SetPrimaryImageAsync(id, imageId, cancellationToken);
        return NoContent();
    }
}

/// <summary>
/// Request model for updating product status.
/// </summary>
public class UpdateProductStatusRequest
{
    public bool IsActive { get; set; }
}
