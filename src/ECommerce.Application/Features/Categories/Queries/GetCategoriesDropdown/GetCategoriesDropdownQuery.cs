using MediatR;
using ECommerce.Application.DTOs.Catalog;
using ECommerce.Application.Interfaces.Services;

namespace ECommerce.Application.Features.Categories.Queries.GetCategoriesDropdown;

public record GetCategoriesDropdownQuery(string LanguageCode) : IRequest<IReadOnlyList<LocalizedCategoryDto>>;

public class GetCategoriesDropdownQueryHandler : IRequestHandler<GetCategoriesDropdownQuery, IReadOnlyList<LocalizedCategoryDto>>
{
    private readonly ICategoryService _categoryService;

    public GetCategoriesDropdownQueryHandler(ICategoryService categoryService)
    {
        _categoryService = categoryService;
    }

    public async Task<IReadOnlyList<LocalizedCategoryDto>> Handle(GetCategoriesDropdownQuery request, CancellationToken cancellationToken)
    {
        return await _categoryService.GetDropdownAsync(request.LanguageCode, cancellationToken);
    }
}
