import { Component, Input, OnInit, OnDestroy, AfterViewInit, inject, signal, computed, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackingService, ShipmentRouteDto, LocationDto } from '../../services/tracking.service';
import { Subject, takeUntil } from 'rxjs';

declare var google: any;

@Component({
    selector: 'app-shipment-map',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="map-wrapper" [style.height]="height">
            <!-- Loading State -->
            @if (loading()) {
                <div class="map-loading">
                    <div class="spinner"></div>
                    <span>Loading map...</span>
                </div>
            }
            
            <!-- Error State -->
            @if (error()) {
                <div class="map-error">
                    <svg class="error-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                    </svg>
                    <span>{{ error() }}</span>
                    <button (click)="loadRoute()" class="retry-btn">Retry</button>
                </div>
            }
            
            <!-- Map Container -->
            <div #mapEl id="shipment-map-{{shipmentId}}" 
                 class="map-container"
                 [class.hidden]="loading() || error()">
            </div>
            
            <!-- Route Info Overlay -->
            @if (routeData() && !loading()) {
                <div class="route-info">
                    <div class="route-summary">
                        <span class="route-icon">🗺️</span>
                        <span class="route-text">{{ routeData()?.routeInfo?.routeSummary }}</span>
                    </div>
                    <div class="route-details">
                        <div class="detail">
                            <span class="detail-icon">📏</span>
                            <span>{{ routeData()?.routeInfo?.distanceText }}</span>
                        </div>
                        <div class="detail">
                            <span class="detail-icon">⏱️</span>
                            <span>{{ routeData()?.routeInfo?.durationText }}</span>
                        </div>
                    </div>
                </div>
                
                <!-- Legend -->
                <div class="map-legend">
                    <div class="legend-item">
                        <span class="legend-dot origin"></span>
                        <span>{{ routeData()?.originName }}</span>
                    </div>
                    <div class="legend-item">
                        <span class="legend-dot destination"></span>
                        <span>Destination</span>
                    </div>
                    @if (routeData()?.currentLocation) {
                        <div class="legend-item">
                            <span class="legend-dot current"></span>
                            <span>Live Location</span>
                        </div>
                    }
                </div>
                
                <!-- Live Update Indicator -->
                @if (isLiveTracking()) {
                    <div class="live-indicator">
                        <span class="live-dot"></span>
                        <span>Live Tracking</span>
                        <span class="last-update" *ngIf="lastUpdate()">
                            Updated {{ formatLastUpdate() }}
                        </span>
                    </div>
                }
            }
        </div>
    `,
    styles: [`
        .map-wrapper {
            position: relative;
            width: 100%;
            min-height: 320px;
            background: linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 100%);
            border-radius: 0 0 12px 12px;
            overflow: hidden;
        }
        
        .map-container {
            width: 100%;
            height: 100%;
        }
        
        .map-container.hidden {
            visibility: hidden;
        }
        
        .map-loading, .map-error {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            gap: 12px;
            color: #64748b;
        }
        
        .map-error {
            color: #ef4444;
        }
        
        .error-icon {
            width: 48px;
            height: 48px;
        }
        
        .retry-btn {
            margin-top: 8px;
            padding: 8px 16px;
            background: #6366f1;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
        }
        
        .spinner {
            width: 32px;
            height: 32px;
            border: 3px solid #e2e8f0;
            border-top-color: #6366f1;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        .route-info {
            position: absolute;
            top: 16px;
            left: 16px;
            right: 16px;
            background: white;
            padding: 12px 16px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 10;
        }
        
        .route-summary {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .route-icon {
            font-size: 20px;
        }
        
        .route-text {
            font-weight: 600;
            color: #1e293b;
        }
        
        .route-details {
            display: flex;
            gap: 16px;
        }
        
        .detail {
            display: flex;
            align-items: center;
            gap: 4px;
            color: #64748b;
            font-size: 14px;
        }
        
        .detail-icon {
            font-size: 16px;
        }
        
        .map-legend {
            position: absolute;
            bottom: 16px;
            left: 16px;
            background: white;
            padding: 12px 16px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15);
            display: flex;
            gap: 16px;
            font-size: 12px;
            z-index: 10;
        }
        
        .legend-item {
            display: flex;
            align-items: center;
            gap: 6px;
        }
        
        .legend-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
        }
        
        .legend-dot.origin { background: #3b82f6; }
        .legend-dot.destination { background: #ef4444; }
        .legend-dot.current { 
            background: #22c55e;
            animation: pulse 1.5s infinite;
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.7; }
        }
        
        .live-indicator {
            position: absolute;
            top: 16px;
            right: 16px;
            background: #22c55e;
            color: white;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 6px;
            z-index: 10;
        }
        
        .live-dot {
            width: 8px;
            height: 8px;
            background: white;
            border-radius: 50%;
            animation: blink 1s infinite;
        }
        
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
        }
        
        .last-update {
            opacity: 0.8;
            margin-left: 4px;
        }
        
        @media (max-width: 768px) {
            .route-info {
                flex-direction: column;
                gap: 8px;
                top: 8px;
                left: 8px;
                right: 8px;
            }
            
            .route-details {
                width: 100%;
                justify-content: space-around;
            }
            
            .map-legend {
                flex-direction: column;
                gap: 6px;
                bottom: 8px;
                left: 8px;
            }
            
            .live-indicator {
                top: auto;
                bottom: 8px;
                right: 8px;
            }
        }
    `]
})
export class ShipmentMapComponent implements OnInit, OnDestroy, AfterViewInit {
    @Input() shipmentId!: number;
    @Input() height = '400px';
    @Input() enableLiveTracking = true;

    @ViewChild('mapEl') mapElement!: ElementRef;

    private trackingService = inject(TrackingService);
    private destroy$ = new Subject<void>();
    private map: any = null;
    private markers: any[] = [];
    private routeLine: any = null;
    private currentLocationMarker: any = null;

    loading = signal(true);
    error = signal<string | null>(null);
    routeData = signal<ShipmentRouteDto | null>(null);
    isLiveTracking = signal(false);
    lastUpdate = signal<Date | null>(null);

    ngOnInit(): void {
        this.loadRoute();
    }

    ngAfterViewInit(): void {
        // Map will be initialized after route data is loaded
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
        this.trackingService.stopLiveTracking();
    }

    loadRoute(): void {
        this.loading.set(true);
        this.error.set(null);

        this.trackingService.getRoute(this.shipmentId)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: (data) => {
                    if (data) {
                        this.routeData.set(data);
                        this.loading.set(false);
                        this.lastUpdate.set(new Date());
                        setTimeout(() => this.initMap(), 100);

                        // Start live tracking if enabled
                        if (this.enableLiveTracking && this.shouldTrackLive(data.currentStatus)) {
                            this.startLiveTracking();
                        }
                    }
                },
                error: (err) => {
                    console.error('Failed to load route:', err);
                    this.error.set('Failed to load tracking data');
                    this.loading.set(false);
                }
            });
    }

    private shouldTrackLive(status: number): boolean {
        // Only track live for active shipments (not delivered/cancelled)
        return status >= 1 && status <= 4;
    }

    private startLiveTracking(): void {
        this.isLiveTracking.set(true);

        this.trackingService.startLiveTracking(this.shipmentId)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: (data) => {
                    if (data) {
                        this.routeData.set(data);
                        this.lastUpdate.set(new Date());
                        this.updateCurrentLocationMarker(data.currentLocation);
                    }
                },
                error: (err) => {
                    console.error('Live tracking error:', err);
                }
            });
    }

    private initMap(): void {
        const data = this.routeData();
        if (!data) return;

        // Check if Google Maps is available
        if (typeof google === 'undefined' || !google.maps) {
            console.warn('Google Maps not loaded yet, retrying...');
            setTimeout(() => this.initMap(), 500);
            return;
        }

        const mapEl = document.getElementById(`shipment-map-${this.shipmentId}`);
        if (!mapEl) return;

        // Calculate center
        const center = {
            lat: (data.origin.latitude + data.destination.latitude) / 2,
            lng: (data.origin.longitude + data.destination.longitude) / 2
        };

        // Create map
        this.map = new google.maps.Map(mapEl, {
            center: center,
            zoom: 11,
            mapTypeId: 'roadmap',
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: true,
            styles: [
                { featureType: 'poi', stylers: [{ visibility: 'off' }] },
                { featureType: 'transit', stylers: [{ visibility: 'off' }] }
            ]
        });

        // Add markers
        this.addMarkers(data);

        // Draw route
        this.drawRoute(data);

        // Fit bounds
        this.fitBounds(data);
    }

    private addMarkers(data: ShipmentRouteDto): void {
        // Clear existing markers
        this.markers.forEach(m => m.setMap(null));
        this.markers = [];

        // Origin marker (blue)
        const originMarker = new google.maps.Marker({
            position: { lat: data.origin.latitude, lng: data.origin.longitude },
            map: this.map,
            title: data.originName,
            icon: {
                url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                scaledSize: new google.maps.Size(40, 40)
            },
            animation: google.maps.Animation.DROP
        });
        this.markers.push(originMarker);

        // Add info window for origin
        const originInfo = new google.maps.InfoWindow({
            content: `<div style="padding:8px;"><b>${data.originName}</b><br/>Warehouse</div>`
        });
        originMarker.addListener('click', () => originInfo.open(this.map, originMarker));

        // Destination marker (red)
        const destMarker = new google.maps.Marker({
            position: { lat: data.destination.latitude, lng: data.destination.longitude },
            map: this.map,
            title: data.destinationAddress,
            icon: {
                url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                scaledSize: new google.maps.Size(40, 40)
            },
            animation: google.maps.Animation.DROP
        });
        this.markers.push(destMarker);

        // Add info window for destination
        const destInfo = new google.maps.InfoWindow({
            content: `<div style="padding:8px;"><b>Destination</b><br/>${data.destinationAddress}</div>`
        });
        destMarker.addListener('click', () => destInfo.open(this.map, destMarker));

        // Current location marker (green, animated)
        if (data.currentLocation) {
            this.updateCurrentLocationMarker(data.currentLocation);
        }
    }

    private updateCurrentLocationMarker(location?: LocationDto): void {
        if (!location || !this.map) return;

        if (this.currentLocationMarker) {
            // Update existing marker
            this.currentLocationMarker.setPosition({
                lat: location.latitude,
                lng: location.longitude
            });
        } else {
            // Create new marker
            this.currentLocationMarker = new google.maps.Marker({
                position: { lat: location.latitude, lng: location.longitude },
                map: this.map,
                title: 'Current Location',
                icon: {
                    url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
                    scaledSize: new google.maps.Size(36, 36)
                },
                zIndex: 100
            });

            // Add pulsing animation with a circle
            const circle = new google.maps.Circle({
                strokeColor: '#22c55e',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#22c55e',
                fillOpacity: 0.2,
                map: this.map,
                center: { lat: location.latitude, lng: location.longitude },
                radius: 500
            });

            // Add info window
            const info = new google.maps.InfoWindow({
                content: `<div style="padding:8px;"><b>📍 Live Location</b><br/>${location.label || 'In Transit'}</div>`
            });
            this.currentLocationMarker.addListener('click', () => info.open(this.map, this.currentLocationMarker));
        }
    }

    private drawRoute(data: ShipmentRouteDto): void {
        // Remove existing route
        if (this.routeLine) {
            this.routeLine.setMap(null);
        }

        // Draw simple polyline
        this.routeLine = new google.maps.Polyline({
            path: [
                { lat: data.origin.latitude, lng: data.origin.longitude },
                { lat: data.destination.latitude, lng: data.destination.longitude }
            ],
            geodesic: true,
            strokeColor: '#6366f1',
            strokeOpacity: 0.8,
            strokeWeight: 4,
            icons: [{
                icon: {
                    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                    scale: 3,
                    strokeColor: '#6366f1'
                },
                offset: '50%'
            }]
        });
        this.routeLine.setMap(this.map);

        // If we have tracking points, draw the actual path
        const trackingPath = data.trackingPoints
            .filter(t => t.latitude && t.longitude)
            .map(t => ({ lat: t.latitude!, lng: t.longitude! }));

        if (trackingPath.length > 1) {
            const actualPath = new google.maps.Polyline({
                path: trackingPath,
                geodesic: true,
                strokeColor: '#22c55e',
                strokeOpacity: 1,
                strokeWeight: 3
            });
            actualPath.setMap(this.map);
        }
    }

    private fitBounds(data: ShipmentRouteDto): void {
        const bounds = new google.maps.LatLngBounds();
        bounds.extend({ lat: data.origin.latitude, lng: data.origin.longitude });
        bounds.extend({ lat: data.destination.latitude, lng: data.destination.longitude });

        if (data.currentLocation) {
            bounds.extend({ lat: data.currentLocation.latitude, lng: data.currentLocation.longitude });
        }

        this.map.fitBounds(bounds, { padding: 100 });
    }

    formatLastUpdate(): string {
        const date = this.lastUpdate();
        if (!date) return '';

        const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
        if (seconds < 60) return 'just now';
        if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
        return `${Math.floor(seconds / 3600)}h ago`;
    }
}
