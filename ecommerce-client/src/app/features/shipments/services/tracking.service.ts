import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, interval, switchMap, takeUntil, tap, catchError, of } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface LocationDto {
    latitude: number;
    longitude: number;
    label?: string;
}

export interface RouteInfoDto {
    distanceKm: number;
    estimatedMinutes: number;
    routeSummary?: string;
    distanceText?: string;
    durationText?: string;
}

export interface TrackingPointDto {
    id: number;
    status: number;
    statusName: string;
    location?: string;
    description?: string;
    latitude?: number;
    longitude?: number;
    occurredAt: string;
}

export interface ShipmentRouteDto {
    shipmentId: number;
    trackingNumber: string;
    currentStatus: number;
    origin: LocationDto;
    originName: string;
    destination: LocationDto;
    destinationAddress: string;
    currentLocation?: LocationDto;
    locationUpdatedAt?: string;
    routeInfo?: RouteInfoDto;
    trackingPoints: TrackingPointDto[];
}

export interface UpdateLocationRequest {
    latitude: number;
    longitude: number;
    locationName?: string;
}

@Injectable({
    providedIn: 'root'
})
export class TrackingService {
    private http = inject(HttpClient);
    private stopTracking$ = new Subject<void>();

    // Tracking state
    isTracking = signal(false);
    lastUpdate = signal<Date | null>(null);
    currentRoute = signal<ShipmentRouteDto | null>(null);
    error = signal<string | null>(null);

    // Configuration
    private refreshIntervalMs = 30000; // 30 seconds

    /**
     * Get shipment route with all tracking data.
     */
    getRoute(shipmentId: number): Observable<ShipmentRouteDto> {
        return this.http.get<ShipmentRouteDto>(
            `${environment.apiUrl}/map/shipment/${shipmentId}/route`
        ).pipe(
            tap(route => {
                this.currentRoute.set(route);
                this.lastUpdate.set(new Date());
                this.error.set(null);
            }),
            catchError(err => {
                this.error.set('Failed to load tracking data');
                console.error('Route load error:', err);
                return of(null as any);
            })
        );
    }

    /**
     * Get current location only.
     */
    getCurrentLocation(shipmentId: number): Observable<LocationDto> {
        return this.http.get<LocationDto>(
            `${environment.apiUrl}/map/shipment/${shipmentId}/location`
        );
    }

    /**
     * Update shipment location (for driver/courier).
     */
    updateLocation(shipmentId: number, location: UpdateLocationRequest): Observable<LocationDto> {
        return this.http.patch<LocationDto>(
            `${environment.apiUrl}/map/shipment/${shipmentId}/location`,
            location
        );
    }

    /**
     * Start live tracking with auto-refresh.
     */
    startLiveTracking(shipmentId: number): Observable<ShipmentRouteDto> {
        this.isTracking.set(true);
        this.stopTracking$.next(); // Stop any existing tracking

        return interval(this.refreshIntervalMs).pipe(
            takeUntil(this.stopTracking$),
            switchMap(() => this.getRoute(shipmentId)),
            tap(() => {
                console.log('[TrackingService] Auto-refresh at', new Date().toISOString());
            })
        );
    }

    /**
     * Stop live tracking.
     */
    stopLiveTracking(): void {
        this.stopTracking$.next();
        this.isTracking.set(false);
        console.log('[TrackingService] Live tracking stopped');
    }

    /**
     * Set custom refresh interval.
     */
    setRefreshInterval(ms: number): void {
        this.refreshIntervalMs = ms;
    }

    /**
     * Get all warehouse locations.
     */
    getWarehouses(): Observable<any[]> {
        return this.http.get<any[]>(`${environment.apiUrl}/map/warehouses`);
    }

    /**
     * Format status to human-readable string.
     */
    getStatusLabel(status: number): string {
        const statusMap: Record<number, string> = {
            0: 'Pending',
            1: 'Assigned',
            2: 'Picked Up',
            3: 'In Transit',
            4: 'Out for Delivery',
            5: 'Delivered',
            6: 'Cancelled',
            7: 'Returned'
        };
        return statusMap[status] || 'Unknown';
    }

    /**
     * Get status icon.
     */
    getStatusIcon(status: number): string {
        const iconMap: Record<number, string> = {
            0: '📦',
            1: '👤',
            2: '✓',
            3: '🚚',
            4: '🏃',
            5: '✅',
            6: '❌',
            7: '↩️'
        };
        return iconMap[status] || '📦';
    }
}
