using Microsoft.AspNetCore.Mvc;
using MediatR;
using ECommerce.Application.Features.Brands.Commands;
using ECommerce.Application.DTOs.Catalog;
using ECommerce.Application.Interfaces.Services;

namespace ECommerce.API.Controllers.Catalog;

/// <summary>
/// Brand management API endpoints.
/// </summary>
[ApiController]
[Route("api/[controller]")]
public class BrandsController : ControllerBase
{
    private readonly IMediator _mediator;
    private readonly IBrandService _brandService;

    public BrandsController(IMediator mediator, IBrandService brandService)
    {
        _mediator = mediator;
        _brandService = brandService;
    }

    /// <summary>
    /// Get all active brands with localized content.
    /// </summary>
    [HttpGet]
    [ResponseCache(VaryByHeader = "Accept-Language", Duration = 300)]
    [ProducesResponseType(typeof(IEnumerable<LocalizedBrandDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<LocalizedBrandDto>>> GetAll(
        [FromHeader(Name = "Accept-Language")] string language = "en",
        CancellationToken cancellationToken = default)
    {
        var brands = await _brandService.GetAllActiveAsync(language, cancellationToken);
        return Ok(brands);
    }

    /// <summary>
    /// Get paginated brands.
    /// </summary>
    [HttpGet("paged")]
    [ProducesResponseType(typeof(BrandListDto), StatusCodes.Status200OK)]
    public async Task<ActionResult<BrandListDto>> GetPaged(
        [FromQuery] int pageNumber = 1,
        [FromQuery] int pageSize = 10,
        [FromQuery] string? search = null,
        [FromQuery] bool? isActive = null,
        [FromHeader(Name = "Accept-Language")] string language = "en",
        CancellationToken cancellationToken = default)
    {
        var result = await _brandService.GetPagedAsync(
            pageNumber, pageSize, search, isActive, language, cancellationToken);
        return Ok(result);
    }

    /// <summary>
    /// Get brand by ID.
    /// </summary>
    [HttpGet("{id:int}")]
    [ProducesResponseType(typeof(LocalizedBrandDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<LocalizedBrandDto>> GetById(
        int id,
        [FromHeader(Name = "Accept-Language")] string language = "en",
        CancellationToken cancellationToken = default)
    {
        var brand = await _brandService.GetByIdLocalizedAsync(id, language, cancellationToken);
        if (brand == null) return NotFound();
        return Ok(brand);
    }

    /// <summary>
    /// Get brand by slug.
    /// </summary>
    [HttpGet("slug/{slug}")]
    [ProducesResponseType(typeof(LocalizedBrandDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<LocalizedBrandDto>> GetBySlug(
        string slug,
        [FromHeader(Name = "Accept-Language")] string language = "en",
        CancellationToken cancellationToken = default)
    {
        var brand = await _brandService.GetBySlugAsync(slug, language, cancellationToken);
        if (brand == null) return NotFound();
        return Ok(brand);
    }

    /// <summary>
    /// Create a new brand.
    /// No manual validation - FluentValidation handles it via MediatR pipeline.
    /// </summary>
    [HttpPost]
    [ProducesResponseType(typeof(BrandDto), StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<BrandDto>> Create(
        [FromBody] CreateBrandCommand command,
        CancellationToken cancellationToken = default)
    {
        // FluentValidation automatically validates before reaching handler
        var result = await _mediator.Send(command, cancellationToken);
        return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
    }

    /// <summary>
    /// Update an existing brand.
    /// No manual validation - FluentValidation handles it via MediatR pipeline.
    /// </summary>
    [HttpPut("{id:int}")]
    [ProducesResponseType(typeof(BrandDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<BrandDto>> Update(
        int id,
        [FromBody] UpdateBrandCommand command,
        CancellationToken cancellationToken = default)
    {
        if (id != command.Id)
            return BadRequest();

        // FluentValidation automatically validates before reaching handler
        var result = await _mediator.Send(command, cancellationToken);
        return Ok(result);
    }

    /// <summary>
    /// Delete a brand (soft delete by default).
    /// </summary>
    [HttpDelete("{id:int}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Delete(
        int id,
        [FromQuery] bool hardDelete = false,
        CancellationToken cancellationToken = default)
    {
        var command = new DeleteBrandCommand
        {
            Id = id,
            HardDelete = hardDelete,
            DeletedBy = User.Identity?.Name ?? "system"
        };

        await _mediator.Send(command, cancellationToken);
        return NoContent();
    }

    /// <summary>
    /// Add or update translation for a brand.
    /// </summary>
    [HttpPut("{id:int}/translations/{languageCode}")]
    [ProducesResponseType(typeof(BrandTranslationDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<BrandTranslationDto>> UpsertTranslation(
        int id,
        string languageCode,
        [FromBody] BrandTranslationDto dto,
        CancellationToken cancellationToken = default)
    {
        dto.LanguageCode = languageCode;

        try
        {
            var result = await _brandService.UpdateTranslationAsync(id, dto, cancellationToken);
            return Ok(result);
        }
        catch (InvalidOperationException)
        {
            // Translation doesn't exist, create it
            var result = await _brandService.AddTranslationAsync(id, dto, cancellationToken);
            return Ok(result);
        }
    }
}
