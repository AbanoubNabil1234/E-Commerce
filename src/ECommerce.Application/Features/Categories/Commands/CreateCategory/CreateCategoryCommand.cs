using MediatR;
using ECommerce.Application.DTOs.Catalog;
using ECommerce.Application.Interfaces.Services;
using FluentValidation;

namespace ECommerce.Application.Features.Categories.Commands.CreateCategory;

public record CreateCategoryCommand : IRequest<CategoryDto>
{
    public int? ParentId { get; init; }
    public string Name { get; init; } = string.Empty;
    public string Slug { get; init; } = string.Empty;
    public string? Description { get; init; }
    public string? ImageUrl { get; init; }
    public int DisplayOrder { get; init; }
    public List<CategoryTranslationDto> Translations { get; init; } = new();
}

public class CreateCategoryCommandHandler : IRequestHandler<CreateCategoryCommand, CategoryDto>
{
    private readonly ICategoryService _categoryService;

    public CreateCategoryCommandHandler(ICategoryService categoryService)
    {
        _categoryService = categoryService;
    }

    public async Task<CategoryDto> Handle(CreateCategoryCommand request, CancellationToken cancellationToken)
    {
        var dto = new CreateCategoryDto
        {
            ParentId = request.ParentId,
            Name = request.Name,
            Slug = request.Slug,
            Description = request.Description,
            ImageUrl = request.ImageUrl,
            DisplayOrder = request.DisplayOrder,
            Translations = request.Translations
        };

        return await _categoryService.CreateAsync(dto, cancellationToken);
    }
}

public class CreateCategoryCommandValidator : AbstractValidator<CreateCategoryCommand>
{
    public CreateCategoryCommandValidator()
    {
        RuleFor(v => v.Name)
            .NotEmpty().WithMessage("Name is required.")
            .MaximumLength(200).WithMessage("Name must not exceed 200 characters.");

        RuleFor(v => v.Slug)
            .NotEmpty().WithMessage("Slug is required.")
            .Matches("^[a-z0-9-]+$").WithMessage("Slug must contain only lowercase letters, numbers, and hyphens.");

        RuleFor(v => v.Translations)
            .Must(t => t != null && t.Any()).WithMessage("At least one translation is required if logic dictates (Optional).");
            // If translations are optional in this architecture, remove the above.
            // Following BrandService logic, we populate the main fields AND translations.
    }
}
