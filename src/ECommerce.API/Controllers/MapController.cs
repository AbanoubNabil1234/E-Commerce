using ECommerce.Application.Features.Map.DTOs;
using ECommerce.Domain.Enums;
using ECommerce.Infrastructure.Persistence;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ECommerce.API.Controllers;

/// <summary>
/// API controller for map-related data.
/// Provides location data for Google Maps integration.
/// </summary>
[ApiController]
[Route("api/[controller]")]
[Authorize]
public class MapController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<MapController> _logger;

    public MapController(ApplicationDbContext context, ILogger<MapController> logger)
    {
        _context = context;
        _logger = logger;
    }

    /// <summary>
    /// Get all warehouse locations for map display.
    /// </summary>
    [HttpGet("warehouses")]
    public async Task<IActionResult> GetWarehouses()
    {
        var warehouses = await _context.Warehouses
            .Where(w => w.IsActive && w.Latitude.HasValue && w.Longitude.HasValue)
            .Select(w => new WarehouseLocationDto
            {
                Id = w.Id,
                Name = w.Name,
                Code = w.Code,
                City = w.City,
                Country = w.Country,
                Latitude = w.Latitude!.Value,
                Longitude = w.Longitude!.Value,
                IsDefault = w.IsDefault
            })
            .ToListAsync();

        return Ok(warehouses);
    }

    /// <summary>
    /// Get shipment route data including origin, destination, and tracking path.
    /// </summary>
    [HttpGet("shipment/{id:int}/route")]
    public async Task<IActionResult> GetShipmentRoute(int id)
    {
        var shipment = await _context.Shipments
            .Include(s => s.Warehouse)
            .Include(s => s.TrackingHistory)
            .FirstOrDefaultAsync(s => s.Id == id);

        if (shipment == null)
            return NotFound(new { message = $"Shipment {id} not found" });

        // Get origin (warehouse) coordinates
        var origin = new LocationDto
        {
            Latitude = shipment.Warehouse.Latitude ?? 30.0444, // Default to Cairo
            Longitude = shipment.Warehouse.Longitude ?? 31.2357,
            Label = shipment.Warehouse.Name
        };

        // Get destination (customer) coordinates
        var destination = new LocationDto
        {
            Latitude = shipment.DeliveryLatitude ?? 30.0444,
            Longitude = shipment.DeliveryLongitude ?? 31.2357,
            Label = shipment.RecipientName ?? "Customer"
        };

        // Get tracking points with coordinates
        var trackingPoints = shipment.TrackingHistory
            .OrderBy(t => t.OccurredAt)
            .Select(t => new TrackingPointDto
            {
                Id = t.Id,
                Status = t.Status,
                StatusName = t.Status.ToString(),
                Location = t.Location,
                Description = t.Description,
                Latitude = t.Latitude,
                Longitude = t.Longitude,
                OccurredAt = t.OccurredAt
            })
            .ToList();

        // Current location - prefer CurrentLatitude/Longitude, fallback to latest tracking
        LocationDto? currentLocation = null;
        DateTime? locationUpdatedAt = null;

        if (shipment.CurrentLatitude.HasValue && shipment.CurrentLongitude.HasValue)
        {
            currentLocation = new LocationDto
            {
                Latitude = shipment.CurrentLatitude.Value,
                Longitude = shipment.CurrentLongitude.Value,
                Label = "Current Location"
            };
            locationUpdatedAt = shipment.LocationUpdatedAt;
        }
        else
        {
            var latestWithCoords = trackingPoints
                .Where(t => t.Latitude.HasValue && t.Longitude.HasValue)
                .LastOrDefault();

            if (latestWithCoords != null)
            {
                currentLocation = new LocationDto
                {
                    Latitude = latestWithCoords.Latitude!.Value,
                    Longitude = latestWithCoords.Longitude!.Value,
                    Label = latestWithCoords.Location ?? latestWithCoords.StatusName
                };
                locationUpdatedAt = latestWithCoords.OccurredAt;
            }
        }

        // Calculate route info (simple Haversine distance)
        var distanceKm = CalculateDistance(origin.Latitude, origin.Longitude, 
                                            destination.Latitude, destination.Longitude);
        var estimatedMinutes = (int)(distanceKm / 40 * 60); // Assume 40 km/h average speed

        var routeInfo = new RouteInfoDto
        {
            DistanceKm = Math.Round(distanceKm, 1),
            EstimatedMinutes = estimatedMinutes,
            DistanceText = $"{Math.Round(distanceKm, 1)} km",
            DurationText = estimatedMinutes > 60 
                ? $"{estimatedMinutes / 60}h {estimatedMinutes % 60}m"
                : $"{estimatedMinutes} min",
            RouteSummary = $"{shipment.Warehouse.City} → {shipment.DeliveryCity}"
        };

        var route = new ShipmentRouteDto
        {
            ShipmentId = shipment.Id,
            TrackingNumber = shipment.TrackingNumber,
            CurrentStatus = shipment.Status,
            Origin = origin,
            OriginName = shipment.Warehouse.Name,
            Destination = destination,
            DestinationAddress = $"{shipment.DeliveryAddress}, {shipment.DeliveryCity}",
            CurrentLocation = currentLocation,
            LocationUpdatedAt = locationUpdatedAt,
            RouteInfo = routeInfo,
            TrackingPoints = trackingPoints
        };

        return Ok(route);
    }

    /// <summary>
    /// Get current shipment location (latest tracking with coordinates).
    /// </summary>
    [HttpGet("shipment/{id:int}/location")]
    public async Task<IActionResult> GetShipmentLocation(int id)
    {
        var shipment = await _context.Shipments
            .Include(s => s.Warehouse)
            .FirstOrDefaultAsync(s => s.Id == id);

        if (shipment == null)
            return NotFound(new { message = $"Shipment {id} not found" });

        // Return current location if available
        if (shipment.CurrentLatitude.HasValue && shipment.CurrentLongitude.HasValue)
        {
            return Ok(new LocationDto
            {
                Latitude = shipment.CurrentLatitude.Value,
                Longitude = shipment.CurrentLongitude.Value,
                Label = "Current Location"
            });
        }

        // Fallback to latest tracking
        var latestTracking = await _context.Set<Domain.Entities.Shipping.ShipmentTracking>()
            .Where(t => t.ShipmentId == id && t.Latitude.HasValue && t.Longitude.HasValue)
            .OrderByDescending(t => t.OccurredAt)
            .FirstOrDefaultAsync();

        if (latestTracking != null)
        {
            return Ok(new LocationDto
            {
                Latitude = latestTracking.Latitude!.Value,
                Longitude = latestTracking.Longitude!.Value,
                Label = latestTracking.Location ?? latestTracking.Status.ToString()
            });
        }

        // Fallback to warehouse location
        return Ok(new LocationDto
        {
            Latitude = shipment.Warehouse.Latitude ?? 30.0444,
            Longitude = shipment.Warehouse.Longitude ?? 31.2357,
            Label = shipment.Warehouse.Name
        });
    }

    /// <summary>
    /// Update shipment's current location (for driver/courier app).
    /// </summary>
    [HttpPatch("shipment/{id:int}/location")]
    [Authorize(Roles = "Admin,Logistics")]
    public async Task<IActionResult> UpdateLocation(int id, [FromBody] UpdateLocationRequest request)
    {
        var shipment = await _context.Shipments.FindAsync(id);

        if (shipment == null)
            return NotFound(new { message = $"Shipment {id} not found" });

        // Update current location
        shipment.CurrentLatitude = request.Latitude;
        shipment.CurrentLongitude = request.Longitude;
        shipment.LocationUpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();

        _logger.LogInformation("Updated location for shipment {ShipmentId}: {Lat}, {Lng}", 
            id, request.Latitude, request.Longitude);

        return Ok(new LocationDto
        {
            Latitude = request.Latitude,
            Longitude = request.Longitude,
            Label = request.LocationName ?? "Current Location"
        });
    }

    /// <summary>
    /// Calculate distance between two points using Haversine formula.
    /// </summary>
    private static double CalculateDistance(double lat1, double lon1, double lat2, double lon2)
    {
        const double R = 6371; // Earth's radius in km
        var dLat = ToRadians(lat2 - lat1);
        var dLon = ToRadians(lon2 - lon1);
        var a = Math.Sin(dLat / 2) * Math.Sin(dLat / 2) +
                Math.Cos(ToRadians(lat1)) * Math.Cos(ToRadians(lat2)) *
                Math.Sin(dLon / 2) * Math.Sin(dLon / 2);
        var c = 2 * Math.Atan2(Math.Sqrt(a), Math.Sqrt(1 - a));
        return R * c;
    }

    private static double ToRadians(double degrees) => degrees * Math.PI / 180;
}

