using MediatR;
using ECommerce.Application.DTOs.Catalog;
using ECommerce.Application.Interfaces.Services;

namespace ECommerce.Application.Features.Categories.Queries.GetCategoryById;

public record GetCategoryByIdQuery(int Id, string LanguageCode) : IRequest<LocalizedCategoryDto?>;

public class GetCategoryByIdQueryHandler : IRequestHandler<GetCategoryByIdQuery, LocalizedCategoryDto?>
{
    private readonly ICategoryService _categoryService;

    public GetCategoryByIdQueryHandler(ICategoryService categoryService)
    {
        _categoryService = categoryService;
    }

    public async Task<LocalizedCategoryDto?> Handle(GetCategoryByIdQuery request, CancellationToken cancellationToken)
    {
        return await _categoryService.GetByIdLocalizedAsync(request.Id, request.LanguageCode, cancellationToken);
    }
}
