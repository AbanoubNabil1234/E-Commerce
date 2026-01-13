using ECommerce.Domain.Enums;

namespace ECommerce.Application.Features.Map.DTOs;

/// <summary>
/// Basic location coordinates.
/// </summary>
public record LocationDto
{
    public double Latitude { get; init; }
    public double Longitude { get; init; }
    public string? Label { get; init; }
}

/// <summary>
/// Warehouse location for map display.
/// </summary>
public record WarehouseLocationDto
{
    public int Id { get; init; }
    public string Name { get; init; } = string.Empty;
    public string Code { get; init; } = string.Empty;
    public string City { get; init; } = string.Empty;
    public string Country { get; init; } = string.Empty;
    public double Latitude { get; init; }
    public double Longitude { get; init; }
    public bool IsDefault { get; init; }
}

/// <summary>
/// Tracking point with coordinates for route visualization.
/// </summary>
public record TrackingPointDto
{
    public int Id { get; init; }
    public ShipmentStatus Status { get; init; }
    public string StatusName { get; init; } = string.Empty;
    public string? Location { get; init; }
    public string? Description { get; init; }
    public double? Latitude { get; init; }
    public double? Longitude { get; init; }
    public DateTime OccurredAt { get; init; }
}

/// <summary>
/// Route information from Google Directions API.
/// </summary>
public record RouteInfoDto
{
    public double DistanceKm { get; init; }
    public int EstimatedMinutes { get; init; }
    public string? RouteSummary { get; init; }
    public string? DistanceText { get; init; }
    public string? DurationText { get; init; }
}

/// <summary>
/// Request to update shipment's current location.
/// </summary>
public record UpdateLocationRequest
{
    public double Latitude { get; init; }
    public double Longitude { get; init; }
    public string? LocationName { get; init; }
}

/// <summary>
/// Complete shipment route data for map visualization.
/// </summary>
public record ShipmentRouteDto
{
    public int ShipmentId { get; init; }
    public string TrackingNumber { get; init; } = string.Empty;
    public ShipmentStatus CurrentStatus { get; init; }
    
    // Origin (Warehouse)
    public LocationDto Origin { get; init; } = null!;
    public string OriginName { get; init; } = string.Empty;
    
    // Destination (Customer)
    public LocationDto Destination { get; init; } = null!;
    public string DestinationAddress { get; init; } = string.Empty;
    
    // Current location (live tracking)
    public LocationDto? CurrentLocation { get; init; }
    public DateTime? LocationUpdatedAt { get; init; }
    
    // Route information
    public RouteInfoDto? RouteInfo { get; init; }
    
    // All tracking points for route path
    public List<TrackingPointDto> TrackingPoints { get; init; } = new();
}

