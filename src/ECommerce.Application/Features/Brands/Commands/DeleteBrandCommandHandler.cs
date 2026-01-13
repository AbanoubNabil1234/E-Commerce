using MediatR;
using ECommerce.Application.Interfaces.Services;

namespace ECommerce.Application.Features.Brands.Commands;

public class DeleteBrandCommandHandler : IRequestHandler<DeleteBrandCommand, bool>
{
    private readonly IBrandService _brandService;

    public DeleteBrandCommandHandler(IBrandService brandService)
    {
        _brandService = brandService;
    }

    public async Task<bool> Handle(DeleteBrandCommand request, CancellationToken cancellationToken)
    {
        if (request.HardDelete)
        {
            await _brandService.DeleteAsync(request.Id, cancellationToken);
        }
        else
        {
            await _brandService.SoftDeleteAsync(request.Id, request.DeletedBy ?? "System", cancellationToken);
        }

        return true;
    }
}
