using MediatR;
using ECommerce.Application.DTOs.Catalog;
using ECommerce.Application.Interfaces.Services;
using FluentValidation;

namespace ECommerce.Application.Features.Categories.Commands.UpdateCategory;

public record UpdateCategoryCommand : IRequest<CategoryDto>
{
    public int Id { get; init; }
    public int? ParentId { get; init; }
    public string Name { get; init; } = string.Empty;
    public string Slug { get; init; } = string.Empty;
    public string? Description { get; init; }
    public string? ImageUrl { get; init; }
    public int DisplayOrder { get; init; }
    public bool IsActive { get; init; }
    public List<CategoryTranslationDto> Translations { get; init; } = new();
}

public class UpdateCategoryCommandHandler : IRequestHandler<UpdateCategoryCommand, CategoryDto>
{
    private readonly ICategoryService _categoryService;

    public UpdateCategoryCommandHandler(ICategoryService categoryService)
    {
        _categoryService = categoryService;
    }

    public async Task<CategoryDto> Handle(UpdateCategoryCommand request, CancellationToken cancellationToken)
    {
        var dto = new UpdateCategoryDto
        {
            Id = request.Id,
            ParentId = request.ParentId,
            Name = request.Name,
            Slug = request.Slug,
            Description = request.Description,
            ImageUrl = request.ImageUrl,
            DisplayOrder = request.DisplayOrder,
            IsActive = request.IsActive,
            Translations = request.Translations
        };

        return await _categoryService.UpdateAsync(dto, cancellationToken);
    }
}

public class UpdateCategoryCommandValidator : AbstractValidator<UpdateCategoryCommand>
{
    public UpdateCategoryCommandValidator()
    {
        RuleFor(v => v.Id).NotEmpty();
        RuleFor(v => v.Name).NotEmpty().MaximumLength(200);
        RuleFor(v => v.Slug).NotEmpty().Matches("^[a-z0-9-]+$");
    }
}
