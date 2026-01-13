using MediatR;
using ECommerce.Application.Interfaces.Services;

namespace ECommerce.Application.Features.Products.Commands.UpdateProductStatus;

/// <summary>
/// Handler for UpdateProductStatusCommand.
/// </summary>
public class UpdateProductStatusCommandHandler : IRequestHandler<UpdateProductStatusCommand, Unit>
{
    private readonly IProductService _productService;

    public UpdateProductStatusCommandHandler(IProductService productService)
    {
        _productService = productService;
    }

    public async Task<Unit> Handle(UpdateProductStatusCommand request, CancellationToken cancellationToken)
    {
        await _productService.UpdateStatusAsync(request.Id, request.IsActive, cancellationToken);
        return Unit.Value;
    }
}
