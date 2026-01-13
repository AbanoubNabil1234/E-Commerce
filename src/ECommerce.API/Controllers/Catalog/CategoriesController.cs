using Microsoft.AspNetCore.Mvc;
using MediatR;
using ECommerce.Application.Features.Categories.Commands.CreateCategory;
using ECommerce.Application.Features.Categories.Commands.UpdateCategory;
using ECommerce.Application.Features.Categories.Commands.DeleteCategory;
using ECommerce.Application.DTOs.Catalog;
using ECommerce.Application.Interfaces.Services;

namespace ECommerce.API.Controllers.Catalog;

/// <summary>
/// Category management API endpoints.
/// </summary>
[ApiController]
[Route("api/[controller]")]
public class CategoriesController : ControllerBase
{
    private readonly IMediator _mediator;
    private readonly ICategoryService _categoryService;

    public CategoriesController(IMediator mediator, ICategoryService categoryService)
    {
        _mediator = mediator;
        _categoryService = categoryService;
    }

    /// <summary>
    /// Get all parent categories for dropdown (active only).
    /// </summary>
    [HttpGet("dropdown")]
    [ResponseCache(VaryByHeader = "Accept-Language", Duration = 300)]
    [ProducesResponseType(typeof(IEnumerable<LocalizedCategoryDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<LocalizedCategoryDto>>> GetDropdown(
        [FromHeader(Name = "Accept-Language")] string language = "en",
        CancellationToken cancellationToken = default)
    {
        var categories = await _categoryService.GetDropdownAsync(language, cancellationToken);
        return Ok(categories);
    }

    /// <summary>
    /// Get paginated categories.
    /// </summary>
    [HttpGet("paged")]
    [ProducesResponseType(typeof(CategoryListDto), StatusCodes.Status200OK)]
    public async Task<ActionResult<CategoryListDto>> GetPaged(
        [FromQuery] int pageNumber = 1,
        [FromQuery] int pageSize = 10,
        [FromQuery] string? search = null,
        [FromQuery] bool? isActive = null,
        [FromHeader(Name = "Accept-Language")] string language = "en",
        CancellationToken cancellationToken = default)
    {
        var result = await _categoryService.GetPagedAsync(
            pageNumber, pageSize, search, isActive, language, cancellationToken);
        return Ok(result);
    }

    /// <summary>
    /// Get category by ID.
    /// </summary>
    [HttpGet("{id:int}")]
    [ProducesResponseType(typeof(LocalizedCategoryDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<LocalizedCategoryDto>> GetById(
        int id,
        [FromHeader(Name = "Accept-Language")] string language = "en",
        CancellationToken cancellationToken = default)
    {
        var category = await _categoryService.GetByIdLocalizedAsync(id, language, cancellationToken);
        if (category == null) return NotFound();
        return Ok(category);
    }

    /// <summary>
    /// Create a new category.
    /// </summary>
    [HttpPost]
    [ProducesResponseType(typeof(CategoryDto), StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<CategoryDto>> Create(
        [FromBody] CreateCategoryCommand command,
        CancellationToken cancellationToken = default)
    {
        var result = await _mediator.Send(command, cancellationToken);
        return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
    }

    /// <summary>
    /// Update an existing category.
    /// </summary>
    [HttpPut("{id:int}")]
    [ProducesResponseType(typeof(CategoryDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<CategoryDto>> Update(
        int id,
        [FromBody] UpdateCategoryCommand command,
        CancellationToken cancellationToken = default)
    {
        if (id != command.Id)
            return BadRequest();

        var result = await _mediator.Send(command, cancellationToken);
        return Ok(result);
    }

    /// <summary>
    /// Delete a category.
    /// </summary>
    [HttpDelete("{id:int}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Delete(
        int id,
        CancellationToken cancellationToken = default)
    {
        await _mediator.Send(new DeleteCategoryCommand(id), cancellationToken);
        return NoContent();
    }
}
