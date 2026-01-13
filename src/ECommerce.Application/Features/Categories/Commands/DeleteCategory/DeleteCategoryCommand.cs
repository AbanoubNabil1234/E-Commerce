using MediatR;
using ECommerce.Application.Interfaces.Services;

namespace ECommerce.Application.Features.Categories.Commands.DeleteCategory;

public record DeleteCategoryCommand(int Id) : IRequest;

public class DeleteCategoryCommandHandler : IRequestHandler<DeleteCategoryCommand>
{
    private readonly ICategoryService _categoryService;

    public DeleteCategoryCommandHandler(ICategoryService categoryService)
    {
        _categoryService = categoryService;
    }

    public async Task Handle(DeleteCategoryCommand request, CancellationToken cancellationToken)
    {
        await _categoryService.DeleteAsync(request.Id, cancellationToken);
    }
}
