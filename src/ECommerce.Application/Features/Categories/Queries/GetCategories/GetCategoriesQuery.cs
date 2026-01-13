using MediatR;
using ECommerce.Application.DTOs.Catalog;
using ECommerce.Application.Interfaces.Services;

namespace ECommerce.Application.Features.Categories.Queries.GetCategories;

public record GetCategoriesQuery : IRequest<CategoryListDto>
{
    public int PageNumber { get; init; } = 1;
    public int PageSize { get; init; } = 10;
    public string? SearchTerm { get; init; }
    public bool? IsActive { get; init; }
    public string LanguageCode { get; init; } = "en";
}

public class GetCategoriesQueryHandler : IRequestHandler<GetCategoriesQuery, CategoryListDto>
{
    private readonly ICategoryService _categoryService;

    public GetCategoriesQueryHandler(ICategoryService categoryService)
    {
        _categoryService = categoryService;
    }

    public async Task<CategoryListDto> Handle(GetCategoriesQuery request, CancellationToken cancellationToken)
    {
        return await _categoryService.GetPagedAsync(
            request.PageNumber,
            request.PageSize,
            request.SearchTerm,
            request.IsActive,
            request.LanguageCode,
            cancellationToken);
    }
}
