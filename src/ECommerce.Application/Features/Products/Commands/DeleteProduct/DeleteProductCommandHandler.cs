using MediatR;
using ECommerce.Application.Interfaces.Services;

namespace ECommerce.Application.Features.Products.Commands.DeleteProduct;

/// <summary>
/// Handler for DeleteProductCommand.
/// </summary>
public class DeleteProductCommandHandler : IRequestHandler<DeleteProductCommand, Unit>
{
    private readonly IProductService _productService;

    public DeleteProductCommandHandler(IProductService productService)
    {
        _productService = productService;
    }

    public async Task<Unit> Handle(DeleteProductCommand request, CancellationToken cancellationToken)
    {
        if (request.HardDelete)
        {
            await _productService.DeleteAsync(request.Id, cancellationToken);
        }
        else
        {
            await _productService.SoftDeleteAsync(request.Id, request.DeletedBy, cancellationToken);
        }

        return Unit.Value;
    }
}
