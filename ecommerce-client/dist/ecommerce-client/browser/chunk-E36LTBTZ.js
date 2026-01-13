import {
  ShipmentStatus
} from "./chunk-QYDMYAB3.js";
import {
  ShipmentsService
} from "./chunk-Y5DYWHUJ.js";
import "./chunk-ZICMI5CI.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-XIYZMPFO.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService,
  environment
} from "./chunk-BOQBRULU.js";
import {
  CommonModule,
  DecimalPipe,
  EventEmitter,
  HttpClient,
  NgForOf,
  NgIf,
  Subject,
  catchError,
  computed,
  inject,
  interval,
  of,
  signal,
  switchMap,
  takeUntil,
  tap,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-IGAGZNZV.js";
import {
  __async
} from "./chunk-N7TOP6ZD.js";

// src/app/features/shipments/services/tracking.service.ts
var TrackingService = class _TrackingService {
  http = inject(HttpClient);
  stopTracking$ = new Subject();
  // Tracking state
  isTracking = signal(false);
  lastUpdate = signal(null);
  currentRoute = signal(null);
  error = signal(null);
  // Configuration
  refreshIntervalMs = 3e4;
  // 30 seconds
  /**
   * Get shipment route with all tracking data.
   */
  getRoute(shipmentId) {
    return this.http.get(`${environment.apiUrl}/map/shipment/${shipmentId}/route`).pipe(tap((route) => {
      this.currentRoute.set(route);
      this.lastUpdate.set(/* @__PURE__ */ new Date());
      this.error.set(null);
    }), catchError((err) => {
      this.error.set("Failed to load tracking data");
      console.error("Route load error:", err);
      return of(null);
    }));
  }
  /**
   * Get current location only.
   */
  getCurrentLocation(shipmentId) {
    return this.http.get(`${environment.apiUrl}/map/shipment/${shipmentId}/location`);
  }
  /**
   * Update shipment location (for driver/courier).
   */
  updateLocation(shipmentId, location) {
    return this.http.patch(`${environment.apiUrl}/map/shipment/${shipmentId}/location`, location);
  }
  /**
   * Start live tracking with auto-refresh.
   */
  startLiveTracking(shipmentId) {
    this.isTracking.set(true);
    this.stopTracking$.next();
    return interval(this.refreshIntervalMs).pipe(takeUntil(this.stopTracking$), switchMap(() => this.getRoute(shipmentId)), tap(() => {
      console.log("[TrackingService] Auto-refresh at", (/* @__PURE__ */ new Date()).toISOString());
    }));
  }
  /**
   * Stop live tracking.
   */
  stopLiveTracking() {
    this.stopTracking$.next();
    this.isTracking.set(false);
    console.log("[TrackingService] Live tracking stopped");
  }
  /**
   * Set custom refresh interval.
   */
  setRefreshInterval(ms) {
    this.refreshIntervalMs = ms;
  }
  /**
   * Get all warehouse locations.
   */
  getWarehouses() {
    return this.http.get(`${environment.apiUrl}/map/warehouses`);
  }
  /**
   * Format status to human-readable string.
   */
  getStatusLabel(status) {
    const statusMap = {
      0: "Pending",
      1: "Assigned",
      2: "Picked Up",
      3: "In Transit",
      4: "Out for Delivery",
      5: "Delivered",
      6: "Cancelled",
      7: "Returned"
    };
    return statusMap[status] || "Unknown";
  }
  /**
   * Get status icon.
   */
  getStatusIcon(status) {
    const iconMap = {
      0: "\u{1F4E6}",
      1: "\u{1F464}",
      2: "\u2713",
      3: "\u{1F69A}",
      4: "\u{1F3C3}",
      5: "\u2705",
      6: "\u274C",
      7: "\u21A9\uFE0F"
    };
    return iconMap[status] || "\u{1F4E6}";
  }
  static \u0275fac = function TrackingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TrackingService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TrackingService, factory: _TrackingService.\u0275fac, providedIn: "root" });
};

// src/app/features/shipments/components/shipment-map/shipment-map.component.ts
var _c0 = ["mapEl"];
function ShipmentMapComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 5);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading map...");
    \u0275\u0275elementEnd()();
  }
}
function ShipmentMapComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 6);
    \u0275\u0275element(2, "path", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 8);
    \u0275\u0275listener("click", function ShipmentMapComponent_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadRoute());
    });
    \u0275\u0275text(6, "Retry");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function ShipmentMapComponent_Conditional_5_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "span", 21);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Live Location");
    \u0275\u0275elementEnd()();
  }
}
function ShipmentMapComponent_Conditional_5_Conditional_27_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Updated ", ctx_r1.formatLastUpdate(), " ");
  }
}
function ShipmentMapComponent_Conditional_5_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "span", 22);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Live Tracking");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ShipmentMapComponent_Conditional_5_Conditional_27_span_4_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.lastUpdate());
  }
}
function ShipmentMapComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "span", 11);
    \u0275\u0275text(3, "\u{1F5FA}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13)(7, "div", 14)(8, "span", 15);
    \u0275\u0275text(9, "\u{1F4CF}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 14)(13, "span", 15);
    \u0275\u0275text(14, "\u23F1\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 16)(18, "div", 17);
    \u0275\u0275element(19, "span", 18);
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 17);
    \u0275\u0275element(23, "span", 19);
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "Destination");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, ShipmentMapComponent_Conditional_5_Conditional_26_Template, 4, 0, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, ShipmentMapComponent_Conditional_5_Conditional_27_Template, 5, 1, "div", 20);
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.routeData()) == null ? null : tmp_2_0.routeInfo == null ? null : tmp_2_0.routeInfo.routeSummary);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r1.routeData()) == null ? null : tmp_3_0.routeInfo == null ? null : tmp_3_0.routeInfo.distanceText);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r1.routeData()) == null ? null : tmp_4_0.routeInfo == null ? null : tmp_4_0.routeInfo.durationText);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_5_0 = ctx_r1.routeData()) == null ? null : tmp_5_0.originName);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(((tmp_6_0 = ctx_r1.routeData()) == null ? null : tmp_6_0.currentLocation) ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLiveTracking() ? 27 : -1);
  }
}
var ShipmentMapComponent = class _ShipmentMapComponent {
  shipmentId;
  height = "400px";
  enableLiveTracking = true;
  mapElement;
  trackingService = inject(TrackingService);
  destroy$ = new Subject();
  map = null;
  markers = [];
  routeLine = null;
  currentLocationMarker = null;
  loading = signal(true);
  error = signal(null);
  routeData = signal(null);
  isLiveTracking = signal(false);
  lastUpdate = signal(null);
  ngOnInit() {
    this.loadRoute();
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.trackingService.stopLiveTracking();
  }
  loadRoute() {
    this.loading.set(true);
    this.error.set(null);
    this.trackingService.getRoute(this.shipmentId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => {
        if (data) {
          this.routeData.set(data);
          this.loading.set(false);
          this.lastUpdate.set(/* @__PURE__ */ new Date());
          setTimeout(() => this.initMap(), 100);
          if (this.enableLiveTracking && this.shouldTrackLive(data.currentStatus)) {
            this.startLiveTracking();
          }
        }
      },
      error: (err) => {
        console.error("Failed to load route:", err);
        this.error.set("Failed to load tracking data");
        this.loading.set(false);
      }
    });
  }
  shouldTrackLive(status) {
    return status >= 1 && status <= 4;
  }
  startLiveTracking() {
    this.isLiveTracking.set(true);
    this.trackingService.startLiveTracking(this.shipmentId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => {
        if (data) {
          this.routeData.set(data);
          this.lastUpdate.set(/* @__PURE__ */ new Date());
          this.updateCurrentLocationMarker(data.currentLocation);
        }
      },
      error: (err) => {
        console.error("Live tracking error:", err);
      }
    });
  }
  initMap() {
    const data = this.routeData();
    if (!data)
      return;
    if (typeof google === "undefined" || !google.maps) {
      console.warn("Google Maps not loaded yet, retrying...");
      setTimeout(() => this.initMap(), 500);
      return;
    }
    const mapEl = document.getElementById(`shipment-map-${this.shipmentId}`);
    if (!mapEl)
      return;
    const center = {
      lat: (data.origin.latitude + data.destination.latitude) / 2,
      lng: (data.origin.longitude + data.destination.longitude) / 2
    };
    this.map = new google.maps.Map(mapEl, {
      center,
      zoom: 11,
      mapTypeId: "roadmap",
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: true,
      styles: [
        { featureType: "poi", stylers: [{ visibility: "off" }] },
        { featureType: "transit", stylers: [{ visibility: "off" }] }
      ]
    });
    this.addMarkers(data);
    this.drawRoute(data);
    this.fitBounds(data);
  }
  addMarkers(data) {
    this.markers.forEach((m) => m.setMap(null));
    this.markers = [];
    const originMarker = new google.maps.Marker({
      position: { lat: data.origin.latitude, lng: data.origin.longitude },
      map: this.map,
      title: data.originName,
      icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        scaledSize: new google.maps.Size(40, 40)
      },
      animation: google.maps.Animation.DROP
    });
    this.markers.push(originMarker);
    const originInfo = new google.maps.InfoWindow({
      content: `<div style="padding:8px;"><b>${data.originName}</b><br/>Warehouse</div>`
    });
    originMarker.addListener("click", () => originInfo.open(this.map, originMarker));
    const destMarker = new google.maps.Marker({
      position: { lat: data.destination.latitude, lng: data.destination.longitude },
      map: this.map,
      title: data.destinationAddress,
      icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
        scaledSize: new google.maps.Size(40, 40)
      },
      animation: google.maps.Animation.DROP
    });
    this.markers.push(destMarker);
    const destInfo = new google.maps.InfoWindow({
      content: `<div style="padding:8px;"><b>Destination</b><br/>${data.destinationAddress}</div>`
    });
    destMarker.addListener("click", () => destInfo.open(this.map, destMarker));
    if (data.currentLocation) {
      this.updateCurrentLocationMarker(data.currentLocation);
    }
  }
  updateCurrentLocationMarker(location) {
    if (!location || !this.map)
      return;
    if (this.currentLocationMarker) {
      this.currentLocationMarker.setPosition({
        lat: location.latitude,
        lng: location.longitude
      });
    } else {
      this.currentLocationMarker = new google.maps.Marker({
        position: { lat: location.latitude, lng: location.longitude },
        map: this.map,
        title: "Current Location",
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
          scaledSize: new google.maps.Size(36, 36)
        },
        zIndex: 100
      });
      const circle = new google.maps.Circle({
        strokeColor: "#22c55e",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#22c55e",
        fillOpacity: 0.2,
        map: this.map,
        center: { lat: location.latitude, lng: location.longitude },
        radius: 500
      });
      const info = new google.maps.InfoWindow({
        content: `<div style="padding:8px;"><b>\u{1F4CD} Live Location</b><br/>${location.label || "In Transit"}</div>`
      });
      this.currentLocationMarker.addListener("click", () => info.open(this.map, this.currentLocationMarker));
    }
  }
  drawRoute(data) {
    if (this.routeLine) {
      this.routeLine.setMap(null);
    }
    this.routeLine = new google.maps.Polyline({
      path: [
        { lat: data.origin.latitude, lng: data.origin.longitude },
        { lat: data.destination.latitude, lng: data.destination.longitude }
      ],
      geodesic: true,
      strokeColor: "#6366f1",
      strokeOpacity: 0.8,
      strokeWeight: 4,
      icons: [{
        icon: {
          path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
          scale: 3,
          strokeColor: "#6366f1"
        },
        offset: "50%"
      }]
    });
    this.routeLine.setMap(this.map);
    const trackingPath = data.trackingPoints.filter((t) => t.latitude && t.longitude).map((t) => ({ lat: t.latitude, lng: t.longitude }));
    if (trackingPath.length > 1) {
      const actualPath = new google.maps.Polyline({
        path: trackingPath,
        geodesic: true,
        strokeColor: "#22c55e",
        strokeOpacity: 1,
        strokeWeight: 3
      });
      actualPath.setMap(this.map);
    }
  }
  fitBounds(data) {
    const bounds = new google.maps.LatLngBounds();
    bounds.extend({ lat: data.origin.latitude, lng: data.origin.longitude });
    bounds.extend({ lat: data.destination.latitude, lng: data.destination.longitude });
    if (data.currentLocation) {
      bounds.extend({ lat: data.currentLocation.latitude, lng: data.currentLocation.longitude });
    }
    this.map.fitBounds(bounds, { padding: 100 });
  }
  formatLastUpdate() {
    const date = this.lastUpdate();
    if (!date)
      return "";
    const seconds = Math.floor((Date.now() - date.getTime()) / 1e3);
    if (seconds < 60)
      return "just now";
    if (seconds < 3600)
      return `${Math.floor(seconds / 60)}m ago`;
    return `${Math.floor(seconds / 3600)}h ago`;
  }
  static \u0275fac = function ShipmentMapComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShipmentMapComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShipmentMapComponent, selectors: [["app-shipment-map"]], viewQuery: function ShipmentMapComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mapElement = _t.first);
    }
  }, inputs: { shipmentId: "shipmentId", height: "height", enableLiveTracking: "enableLiveTracking" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 9, consts: [["mapEl", ""], [1, "map-wrapper"], [1, "map-loading"], [1, "map-error"], [1, "map-container", 3, "id"], [1, "spinner"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "error-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "retry-btn", 3, "click"], [1, "route-info"], [1, "route-summary"], [1, "route-icon"], [1, "route-text"], [1, "route-details"], [1, "detail"], [1, "detail-icon"], [1, "map-legend"], [1, "legend-item"], [1, "legend-dot", "origin"], [1, "legend-dot", "destination"], [1, "live-indicator"], [1, "legend-dot", "current"], [1, "live-dot"], ["class", "last-update", 4, "ngIf"], [1, "last-update"]], template: function ShipmentMapComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, ShipmentMapComponent_Conditional_1_Template, 4, 0, "div", 2)(2, ShipmentMapComponent_Conditional_2_Template, 7, 1, "div", 3);
      \u0275\u0275element(3, "div", 4, 0);
      \u0275\u0275template(5, ShipmentMapComponent_Conditional_5_Template, 28, 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("height", ctx.height);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("hidden", ctx.loading() || ctx.error());
      \u0275\u0275propertyInterpolate1("id", "shipment-map-", ctx.shipmentId, "");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.routeData() && !ctx.loading() ? 5 : -1);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n.map-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 320px;\n  background:\n    linear-gradient(\n      135deg,\n      #f0f4ff 0%,\n      #e8f0fe 100%);\n  border-radius: 0 0 12px 12px;\n  overflow: hidden;\n}\n.map-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.map-container.hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.map-loading[_ngcontent-%COMP%], \n.map-error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  gap: 12px;\n  color: #64748b;\n}\n.map-error[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.error-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n.retry-btn[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 8px 16px;\n  background: #6366f1;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #6366f1;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.route-info[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  right: 16px;\n  background: white;\n  padding: 12px 16px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 10;\n}\n.route-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.route-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.route-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1e293b;\n}\n.route-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.detail[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: #64748b;\n  font-size: 14px;\n}\n.detail-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.map-legend[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 16px;\n  left: 16px;\n  background: white;\n  padding: 12px 16px;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  display: flex;\n  gap: 16px;\n  font-size: 12px;\n  z-index: 10;\n}\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.legend-dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n}\n.legend-dot.origin[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.legend-dot.destination[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.legend-dot.current[_ngcontent-%COMP%] {\n  background: #22c55e;\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.2);\n    opacity: 0.7;\n  }\n}\n.live-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background: #22c55e;\n  color: white;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  z-index: 10;\n}\n.live-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_blink 1s infinite;\n}\n@keyframes _ngcontent-%COMP%_blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n.last-update[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  margin-left: 4px;\n}\n@media (max-width: 768px) {\n  .route-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n    top: 8px;\n    left: 8px;\n    right: 8px;\n  }\n  .route-details[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-around;\n  }\n  .map-legend[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 6px;\n    bottom: 8px;\n    left: 8px;\n  }\n  .live-indicator[_ngcontent-%COMP%] {\n    top: auto;\n    bottom: 8px;\n    right: 8px;\n  }\n}\n/*# sourceMappingURL=shipment-map.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShipmentMapComponent, { className: "ShipmentMapComponent", filePath: "src\\app\\features\\shipments\\components\\shipment-map\\shipment-map.component.ts", lineNumber: 299 });
})();

// src/app/features/shipments/components/tracking-timeline/tracking-timeline.component.ts
var _forTrack0 = ($index, $item) => $item.status;
function TrackingTimelineComponent_For_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 18);
  }
  if (rf & 2) {
    const step_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("completed", ctx_r2.isCompleted(step_r2.status));
  }
}
function TrackingTimelineComponent_For_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 10);
    \u0275\u0275element(1, "path", 19);
    \u0275\u0275elementEnd();
  }
}
function TrackingTimelineComponent_For_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
}
function TrackingTimelineComponent_For_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(step_r2.emoji);
  }
}
function TrackingTimelineComponent_For_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatTime(ctx_r2.getTrackingData(step_r2.status).occurredAt));
  }
}
function TrackingTimelineComponent_For_8_Conditional_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getTrackingData(step_r2.status).description);
  }
}
function TrackingTimelineComponent_For_8_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21)(1, "span", 22);
    \u0275\u0275text(2, "\u{1F4CD}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getTrackingData(step_r2.status).location, " ");
  }
}
function TrackingTimelineComponent_For_8_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TrackingTimelineComponent_For_8_Conditional_11_Conditional_0_Template, 2, 1, "p", 20)(1, TrackingTimelineComponent_For_8_Conditional_11_Conditional_1_Template, 4, 1, "p", 21);
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_13_0;
    const step_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_12_0 = ctx_r2.getTrackingData(step_r2.status)) == null ? null : tmp_12_0.description) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_13_0 = ctx_r2.getTrackingData(step_r2.status)) == null ? null : tmp_13_0.location) ? 1 : -1);
  }
}
function TrackingTimelineComponent_For_8_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "SHIPMENT_DETAILS.PENDING"));
  }
}
function TrackingTimelineComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275listener("click", function TrackingTimelineComponent_For_8_Template_div_click_0_listener() {
      const step_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectStep(step_r2));
    });
    \u0275\u0275template(1, TrackingTimelineComponent_For_8_Conditional_1_Template, 1, 2, "div", 8);
    \u0275\u0275elementStart(2, "div", 9);
    \u0275\u0275template(3, TrackingTimelineComponent_For_8_Conditional_3_Template, 2, 0, ":svg:svg", 10)(4, TrackingTimelineComponent_For_8_Conditional_4_Template, 1, 0, "div", 11)(5, TrackingTimelineComponent_For_8_Conditional_5_Template, 2, 1, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 13)(7, "div", 14)(8, "span", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, TrackingTimelineComponent_For_8_Conditional_10_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, TrackingTimelineComponent_For_8_Conditional_11_Template, 2, 2)(12, TrackingTimelineComponent_For_8_Conditional_12_Template, 3, 3, "p", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_18_0;
    const step_r2 = ctx.$implicit;
    const \u0275$index_13_r4 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("completed", ctx_r2.isCompleted(step_r2.status))("current", ctx_r2.isCurrent(step_r2.status))("pending", ctx_r2.isPending(step_r2.status))("active", (ctx_r2.selectedStep == null ? null : ctx_r2.selectedStep.status) === step_r2.status);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_13_r4 < ctx_r2.allSteps.length - 1 ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isCompleted(step_r2.status) ? 3 : ctx_r2.isCurrent(step_r2.status) ? 4 : 5);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(step_r2.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_18_0 = ctx_r2.getTrackingData(step_r2.status)) == null ? null : tmp_18_0.occurredAt) ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getTrackingData(step_r2.status) ? 11 : ctx_r2.isPending(step_r2.status) ? 12 : -1);
  }
}
function TrackingTimelineComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "p", 23);
    \u0275\u0275text(2, "\u{1F4CD} Location on map highlighted");
    \u0275\u0275elementEnd()();
  }
}
var TrackingTimelineComponent = class _TrackingTimelineComponent {
  currentStatus = 0;
  trackingPoints = [];
  stepSelected = new EventEmitter();
  trackingService = inject(TrackingService);
  selectedStep = null;
  // All possible steps in order
  allSteps = [
    { status: 0, label: "Order Confirmed", emoji: "\u{1F4E6}" },
    { status: 1, label: "Courier Assigned", emoji: "\u{1F464}" },
    { status: 2, label: "Picked Up", emoji: "\u{1F4EC}" },
    { status: 3, label: "In Transit", emoji: "\u{1F69A}" },
    { status: 4, label: "Out for Delivery", emoji: "\u{1F3C3}" },
    { status: 5, label: "Delivered", emoji: "\u2705" }
  ];
  isCompleted(status) {
    return status < this.currentStatus;
  }
  isCurrent(status) {
    return status === this.currentStatus;
  }
  isPending(status) {
    return status > this.currentStatus;
  }
  getTrackingData(status) {
    return this.trackingPoints.find((t) => t.status === status);
  }
  selectStep(step) {
    if (this.selectedStep?.status === step.status) {
      this.selectedStep = null;
      this.stepSelected.emit(null);
    } else {
      this.selectedStep = step;
      const tracking = this.getTrackingData(step.status);
      this.stepSelected.emit(tracking || null);
    }
  }
  formatTime(dateStr) {
    const date = new Date(dateStr);
    const now = /* @__PURE__ */ new Date();
    const isToday = date.toDateString() === now.toDateString();
    const time = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    if (isToday) {
      return time;
    }
    const dateFormatted = date.toLocaleDateString([], { month: "short", day: "numeric" });
    return `${dateFormatted} ${time}`;
  }
  static \u0275fac = function TrackingTimelineComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TrackingTimelineComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrackingTimelineComponent, selectors: [["app-tracking-timeline"]], inputs: { currentStatus: "currentStatus", trackingPoints: "trackingPoints" }, outputs: { stepSelected: "stepSelected" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 4, consts: [[1, "timeline-container"], [1, "timeline-title"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "title-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"], [1, "timeline"], [1, "timeline-step", 3, "completed", "current", "pending", "active"], [1, "selected-info"], [1, "timeline-step", 3, "click"], [1, "timeline-line", 3, "completed"], [1, "step-icon"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "icon-check"], [1, "icon-current"], [1, "step-emoji"], [1, "step-content"], [1, "step-header"], [1, "step-label"], [1, "step-time"], [1, "step-pending"], [1, "timeline-line"], ["fill-rule", "evenodd", "d", "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", "clip-rule", "evenodd"], [1, "step-description"], [1, "step-location"], [1, "location-icon"], [1, "selected-label"]], template: function TrackingTimelineComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "path", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275repeaterCreate(7, TrackingTimelineComponent_For_8_Template, 13, 13, "div", 5, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, TrackingTimelineComponent_Conditional_9_Template, 3, 0, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "SHIPMENT_DETAILS.TRACKING_HISTORY"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.allSteps);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.selectedStep && ((tmp_2_0 = ctx.getTrackingData(ctx.selectedStep.status)) == null ? null : tmp_2_0.latitude) ? 9 : -1);
    }
  }, dependencies: [CommonModule, TranslateModule, TranslatePipe], styles: ["\n\n.timeline-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n}\n.timeline-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 20px;\n}\n.title-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: #6366f1;\n}\n.timeline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.timeline-step[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 12px;\n  margin-left: 12px;\n  position: relative;\n  cursor: pointer;\n  border-radius: 8px;\n  transition: all 0.2s;\n}\n.timeline-step[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.timeline-step.active[_ngcontent-%COMP%] {\n  background: #eef2ff;\n}\n.timeline-line[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 23px;\n  top: 44px;\n  width: 2px;\n  height: calc(100% - 24px);\n  background: #e2e8f0;\n}\n.timeline-line.completed[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.step-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n}\n.timeline-step.completed[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%] {\n  background: #22c55e;\n  color: white;\n}\n.timeline-step.current[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%] {\n  background: #6366f1;\n  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);\n}\n.timeline-step.pending[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n}\n.icon-check[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.icon-current[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background: white;\n  border-radius: 50%;\n}\n.step-emoji[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.step-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.step-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 8px;\n}\n.step-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1e293b;\n}\n.timeline-step.pending[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.step-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  white-space: nowrap;\n}\n.step-description[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin-top: 4px;\n}\n.step-location[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6366f1;\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.location-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.step-pending[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  font-style: italic;\n  margin-top: 4px;\n}\n.selected-info[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 12px;\n  background: #eef2ff;\n  border-radius: 8px;\n  text-align: center;\n}\n.selected-label[_ngcontent-%COMP%] {\n  color: #6366f1;\n  font-size: 13px;\n  margin: 0;\n}\n@media (max-width: 640px) {\n  .step-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 2px;\n  }\n  .step-time[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n/*# sourceMappingURL=tracking-timeline.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrackingTimelineComponent, { className: "TrackingTimelineComponent", filePath: "src\\app\\features\\shipments\\components\\tracking-timeline\\tracking-timeline.component.ts", lineNumber: 262 });
})();

// src/app/features/shipments/pages/shipment-detail/shipment-detail.component.ts
var _c02 = (a0) => ["/orders", a0];
function ShipmentDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 5);
    \u0275\u0275elementEnd();
  }
}
function ShipmentDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 7);
    \u0275\u0275element(2, "path", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 10);
    \u0275\u0275text(6, "Back to Shipments");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function ShipmentDetailComponent_div_2_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 90);
    \u0275\u0275listener("click", function ShipmentDetailComponent_div_2_button_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markAsShipped());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 25);
    \u0275\u0275element(2, "path", 72)(3, "path", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.actionLoading());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "SHIPMENT_DETAILS.MARK_SHIPPED"), " ");
  }
}
function ShipmentDetailComponent_div_2_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function ShipmentDetailComponent_div_2_button_38_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markAsDelivered());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 25);
    \u0275\u0275element(2, "path", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.actionLoading());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "SHIPMENT_DETAILS.CONFIRM_DELIVERY"), " ");
  }
}
function ShipmentDetailComponent_div_2_tr_132_img_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 100);
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", item_r4.productImageUrl, \u0275\u0275sanitizeUrl);
  }
}
function ShipmentDetailComponent_div_2_tr_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 93)(1, "td", 94);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 95)(4, "div", 96);
    \u0275\u0275template(5, ShipmentDetailComponent_div_2_tr_132_img_5_Template, 1, 1, "img", 97);
    \u0275\u0275elementStart(6, "span", 98);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td", 99);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.productSku);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", item_r4.productImageUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.quantity);
  }
}
function ShipmentDetailComponent_div_2_tr_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 101);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "SHIPMENT_DETAILS.NO_ITEMS"));
  }
}
function ShipmentDetailComponent_div_2_div_182_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const step_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap("absolute left-3 top-6 w-0.5 h-full " + (step_r5.isCompleted ? "bg-green-500" : "bg-slate-200"));
  }
}
function ShipmentDetailComponent_div_2_div_182__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 109);
    \u0275\u0275element(1, "path", 110);
    \u0275\u0275elementEnd();
  }
}
function ShipmentDetailComponent_div_2_div_182_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 111);
  }
}
function ShipmentDetailComponent_div_2_div_182_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 112);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", step_r5.description, " ");
  }
}
function ShipmentDetailComponent_div_2_div_182_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4CD} ", step_r5.location, " ");
  }
}
function ShipmentDetailComponent_div_2_div_182_div_10_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 116);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2022 ", step_r5.performedBy, "");
  }
}
function ShipmentDetailComponent_div_2_div_182_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "span", 114);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ShipmentDetailComponent_div_2_div_182_div_10_span_3_Template, 2, 1, "span", 115);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r5.time);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", step_r5.performedBy);
  }
}
function ShipmentDetailComponent_div_2_div_182_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 117);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "SHIPMENT_DETAILS.PENDING"));
  }
}
function ShipmentDetailComponent_div_2_div_182_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275template(1, ShipmentDetailComponent_div_2_div_182_div_1_Template, 1, 2, "div", 3);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275template(3, ShipmentDetailComponent_div_2_div_182__svg_svg_3_Template, 2, 0, "svg", 103)(4, ShipmentDetailComponent_div_2_div_182_div_4_Template, 1, 0, "div", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ShipmentDetailComponent_div_2_div_182_p_8_Template, 2, 1, "p", 105)(9, ShipmentDetailComponent_div_2_div_182_p_9_Template, 2, 1, "p", 106)(10, ShipmentDetailComponent_div_2_div_182_div_10_Template, 4, 2, "div", 107)(11, ShipmentDetailComponent_div_2_div_182_p_11_Template, 3, 3, "p", 108);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r5 = ctx.$implicit;
    const last_r6 = ctx.last;
    \u0275\u0275classProp("pb-0", last_r6);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r6);
    \u0275\u0275advance();
    \u0275\u0275classMap("absolute left-0 top-0 w-6 h-6 rounded-full flex items-center justify-center " + (step_r5.isCompleted ? "bg-green-500" : step_r5.isCurrent ? "bg-indigo-600 ring-4 ring-indigo-100" : "bg-slate-200"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", step_r5.isCompleted);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", step_r5.isCurrent);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("font-medium " + (step_r5.isPending ? "text-slate-400" : "text-slate-800"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r5.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", step_r5.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", step_r5.location);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", step_r5.time);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", step_r5.isPending);
  }
}
function ShipmentDetailComponent_div_2_p_194_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 118);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 25);
    \u0275\u0275element(2, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.shipment().recipientPhone, " ");
  }
}
function ShipmentDetailComponent_div_2_button_196_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 119);
    \u0275\u0275listener("click", function ShipmentDetailComponent_div_2_button_196_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markAsShipped());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.actionLoading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "SHIPMENT_DETAILS.MARK_SHIPPED"), " ");
  }
}
function ShipmentDetailComponent_div_2_button_197_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 120);
    \u0275\u0275listener("click", function ShipmentDetailComponent_div_2_button_197_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markAsDelivered());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.actionLoading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "SHIPMENT_DETAILS.CONFIRM_DELIVERY"), " ");
  }
}
function ShipmentDetailComponent_div_2_button_198_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 121);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SHIPMENT_DETAILS.REPORT_ISSUE"), " ");
  }
}
function ShipmentDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "nav", 14)(4, "a", 15);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 16);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 17);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 18)(17, "div")(18, "div", 19)(19, "h1", 20);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "p", 21);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementStart(27, "span", 22);
    \u0275\u0275text(28, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 23)(32, "button", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 25);
    \u0275\u0275element(34, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, ShipmentDetailComponent_div_2_button_37_Template, 6, 4, "button", 27)(38, ShipmentDetailComponent_div_2_button_38_Template, 5, 4, "button", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "div", 29)(40, "div", 30)(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 31);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 32);
    \u0275\u0275element(47, "div");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "div", 33)(49, "div", 34)(50, "div", 35)(51, "div", 36)(52, "div", 37)(53, "div", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(54, "svg", 39);
    \u0275\u0275element(55, "path", 40)(56, "path", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(57, "h3", 42);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 43);
    \u0275\u0275element(61, "span", 44);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(64, "app-shipment-map", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 46)(66, "div", 47)(67, "p", 48);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "p", 42);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "p", 49);
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 47)(76, "p", 50);
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "p", 42);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "p", 49);
    \u0275\u0275text(82);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(83, "div", 47)(84, "h3", 51);
    \u0275\u0275text(85);
    \u0275\u0275pipe(86, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 52)(88, "div")(89, "p", 53);
    \u0275\u0275text(90);
    \u0275\u0275pipe(91, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "p", 54);
    \u0275\u0275text(93);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div")(95, "p", 53);
    \u0275\u0275text(96);
    \u0275\u0275pipe(97, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "p", 54);
    \u0275\u0275text(99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "div")(101, "p", 53);
    \u0275\u0275text(102);
    \u0275\u0275pipe(103, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "p", 54);
    \u0275\u0275text(105);
    \u0275\u0275pipe(106, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "div")(108, "p", 53);
    \u0275\u0275text(109);
    \u0275\u0275pipe(110, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "p", 54);
    \u0275\u0275text(112);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(113, "div", 36)(114, "div", 55)(115, "h3", 42);
    \u0275\u0275text(116);
    \u0275\u0275pipe(117, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "div", 56)(119, "table", 57)(120, "thead", 58)(121, "tr")(122, "th", 59);
    \u0275\u0275text(123);
    \u0275\u0275pipe(124, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "th", 59);
    \u0275\u0275text(126);
    \u0275\u0275pipe(127, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "th", 60);
    \u0275\u0275text(129);
    \u0275\u0275pipe(130, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(131, "tbody", 61);
    \u0275\u0275template(132, ShipmentDetailComponent_div_2_tr_132_Template, 10, 4, "tr", 62)(133, ShipmentDetailComponent_div_2_tr_133_Template, 4, 3, "tr", 63);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(134, "div", 47)(135, "h3", 51);
    \u0275\u0275text(136);
    \u0275\u0275pipe(137, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "div", 64)(139, "div")(140, "p", 53);
    \u0275\u0275text(141);
    \u0275\u0275pipe(142, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "a", 65);
    \u0275\u0275text(144);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(145, "div")(146, "p", 53);
    \u0275\u0275text(147);
    \u0275\u0275pipe(148, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "p", 66);
    \u0275\u0275text(150);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(151, "div")(152, "p", 53);
    \u0275\u0275text(153);
    \u0275\u0275pipe(154, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "p", 66);
    \u0275\u0275text(156);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(157, "div", 67)(158, "div", 47)(159, "p", 68);
    \u0275\u0275text(160);
    \u0275\u0275pipe(161, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "div", 69)(163, "div", 70);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(164, "svg", 71);
    \u0275\u0275element(165, "path", 72)(166, "path", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(167, "div")(168, "p", 42);
    \u0275\u0275text(169);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "p", 74);
    \u0275\u0275text(171);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(172, "button", 75);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(173, "svg", 25);
    \u0275\u0275element(174, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275text(175);
    \u0275\u0275pipe(176, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(177, "div", 47)(178, "h3", 77);
    \u0275\u0275text(179);
    \u0275\u0275pipe(180, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(181, "div", 78);
    \u0275\u0275template(182, ShipmentDetailComponent_div_2_div_182_Template, 12, 14, "div", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(183, "div", 47)(184, "div", 80);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(185, "svg", 81);
    \u0275\u0275element(186, "path", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(187, "h3", 42);
    \u0275\u0275text(188);
    \u0275\u0275pipe(189, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(190, "p", 83);
    \u0275\u0275text(191);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(192, "p", 84);
    \u0275\u0275text(193);
    \u0275\u0275elementEnd();
    \u0275\u0275template(194, ShipmentDetailComponent_div_2_p_194_Template, 4, 1, "p", 85);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(195, "div", 86);
    \u0275\u0275template(196, ShipmentDetailComponent_div_2_button_196_Template, 3, 4, "button", 87)(197, ShipmentDetailComponent_div_2_button_197_Template, 3, 4, "button", 88)(198, ShipmentDetailComponent_div_2_button_198_Template, 3, 3, "button", 89);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_40_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 69, "COMMON.HOME"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 71, "SHIPMENTS.TITLE"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("#", ctx_r0.shipment().trackingNumber, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(21, 73, "SHIPMENT_DETAILS.TITLE"), " #", ctx_r0.shipment().trackingNumber, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("px-3 py-1 rounded-full text-sm font-medium " + ctx_r0.getStatusClass(ctx_r0.shipment().status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.shipment().status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(26, 75, "SHIPMENT_DETAILS.CURRENT_LOCATION"), ": ", ctx_r0.shipment().deliveryCity || "N/A", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(30, 77, "SHIPMENT_DETAILS.EXPECTED_DELIVERY"), ": ", ctx_r0.formatDate(ctx_r0.shipment().estimatedDeliveryDate), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 79, "SHIPMENT_DETAILS.PRINT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.canMarkAsShipped());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.canMarkAsDelivered());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 81, "SHIPMENT_DETAILS.SHIPPING_PROGRESS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.progressPercent(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getProgressClass(ctx_r0.shipment().status) + " h-full rounded-full transition-all duration-500");
    \u0275\u0275styleProp("width", ctx_r0.progressPercent(), "%");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(59, 83, "SHIPMENT_DETAILS.CURRENT_ROUTE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(63, 85, "SHIPMENT_DETAILS.LIVE_UPDATING"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("shipmentId", ctx_r0.shipment().id)("height", "320px");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 87, "SHIPMENT_DETAILS.SENDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.shipment().warehouseName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(74, 89, "SHIPMENT_DETAILS.WAREHOUSE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(78, 91, "SHIPMENT_DETAILS.RECEIVER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.shipment().recipientName || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.shipment().deliveryAddress, ", ", ctx_r0.shipment().deliveryCity, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(86, 93, "SHIPMENT_DETAILS.SPECIFICATIONS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(91, 95, "SHIPMENT_DETAILS.TOTAL_WEIGHT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.shipment().weight || 0, " kg");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(97, 97, "SHIPMENT_DETAILS.SHIPPING_METHOD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.shipment().shippingMethod);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(103, 99, "SHIPMENT_DETAILS.SHIPPING_COST"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(106, 101, ctx_r0.shipment().shippingCost || 0, "1.2-2"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(110, 104, "SHIPMENT_DETAILS.ITEMS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.shipment().items.length || 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(117, 106, "SHIPMENT_DETAILS.PACKAGE_CONTENTS"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(124, 108, "SHIPMENT_DETAILS.SKU"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(127, 110, "SHIPMENT_DETAILS.ITEM_NAME"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(130, 112, "SHIPMENT_DETAILS.QTY"), "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.shipment().items);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((tmp_40_0 = ctx_r0.shipment().items) == null ? null : tmp_40_0.length));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(137, 114, "SHIPMENT_DETAILS.ORDER_INFO"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(142, 116, "SHIPMENT_DETAILS.ORDER_ID"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(130, _c02, ctx_r0.shipment().orderId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.shipment().orderNumber, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(148, 118, "SHIPMENT_DETAILS.CREATED"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.shipment().createdAt));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(154, 120, "SHIPMENT_DETAILS.CREATED_BY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.shipment().createdBy || "System");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(161, 122, "SHIPMENT_DETAILS.ASSIGNED_CARRIER"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.shipment().carrierName || "Not Assigned");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.shipment().shippingMethod);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(176, 124, "SHIPMENT_DETAILS.CONTACT_DRIVER"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(180, 126, "SHIPMENT_DETAILS.TRACKING_HISTORY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.timeline());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(189, 128, "SHIPMENT_DETAILS.DELIVERY_ADDRESS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.shipment().deliveryAddress);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.shipment().deliveryCity, ", ", ctx_r0.shipment().deliveryCountry, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.shipment().recipientPhone);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.canMarkAsShipped());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.canMarkAsDelivered());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.canMarkAsShipped() && !ctx_r0.canMarkAsDelivered());
  }
}
function ShipmentDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap("fixed bottom-6 right-6 px-4 py-3 rounded-lg shadow-lg text-white z-50 " + (ctx_r0.toastType === "success" ? "bg-green-600" : "bg-red-600"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.toastMessage, "\n");
  }
}
var ShipmentDetailComponent = class _ShipmentDetailComponent {
  route = inject(ActivatedRoute);
  shipmentService = inject(ShipmentsService);
  translateService = inject(TranslateService);
  destroy$ = new Subject();
  // Data
  shipment = signal(null);
  loading = signal(true);
  error = signal(null);
  actionLoading = signal(false);
  // Enums
  ShipmentStatus = ShipmentStatus;
  // Toast
  showToast = false;
  toastMessage = "";
  toastType = "success";
  // Timeline
  timeline = computed(() => {
    const shipment = this.shipment();
    if (!shipment)
      return [];
    return this.generateTimeline(shipment);
  });
  // Progress
  progressPercent = computed(() => {
    const shipment = this.shipment();
    if (!shipment)
      return 0;
    return this.getProgressPercent(shipment.status);
  });
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.loadShipment(+id);
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadShipment(id) {
    this.loading.set(true);
    this.error.set(null);
    this.shipmentService.getById(id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (shipment) => {
        this.shipment.set(shipment);
        this.loading.set(false);
      },
      error: (err) => {
        console.error("Failed to load shipment:", err);
        this.error.set("Failed to load shipment details");
        this.loading.set(false);
      }
    });
  }
  // Actions
  markAsShipped() {
    return __async(this, null, function* () {
      const shipment = this.shipment();
      if (!shipment)
        return;
      this.actionLoading.set(true);
      try {
        const updated = yield this.shipmentService.markAsShipped(shipment.id).toPromise();
        this.shipment.set(updated);
        this.showNotification("success", "SHIPMENT_DETAILS.SHIPPED_SUCCESS");
      } catch {
        this.showNotification("error", "SHIPMENT_DETAILS.SHIPPED_ERROR");
      } finally {
        this.actionLoading.set(false);
      }
    });
  }
  markAsDelivered() {
    return __async(this, null, function* () {
      const shipment = this.shipment();
      if (!shipment)
        return;
      this.actionLoading.set(true);
      try {
        const updated = yield this.shipmentService.markAsDelivered(shipment.id).toPromise();
        this.shipment.set(updated);
        this.showNotification("success", "SHIPMENT_DETAILS.DELIVERED_SUCCESS");
      } catch {
        this.showNotification("error", "SHIPMENT_DETAILS.DELIVERED_ERROR");
      } finally {
        this.actionLoading.set(false);
      }
    });
  }
  updateStatus(status, location, notes) {
    return __async(this, null, function* () {
      const shipment = this.shipment();
      if (!shipment)
        return;
      this.actionLoading.set(true);
      try {
        const updated = yield this.shipmentService.updateStatus(shipment.id, {
          status,
          location,
          notes
        }).toPromise();
        this.shipment.set(updated);
        this.showNotification("success", "SHIPMENT_DETAILS.STATUS_UPDATED");
      } catch {
        this.showNotification("error", "SHIPMENT_DETAILS.STATUS_ERROR");
      } finally {
        this.actionLoading.set(false);
      }
    });
  }
  // Helpers
  getStatusClass(status) {
    const classes = {
      [ShipmentStatus.Pending]: "bg-amber-100 text-amber-800",
      [ShipmentStatus.Assigned]: "bg-blue-100 text-blue-800",
      [ShipmentStatus.LabelCreated]: "bg-purple-100 text-purple-800",
      [ShipmentStatus.PickedUp]: "bg-indigo-100 text-indigo-800",
      [ShipmentStatus.InTransit]: "bg-blue-100 text-blue-800",
      [ShipmentStatus.OutForDelivery]: "bg-cyan-100 text-cyan-800",
      [ShipmentStatus.Delivered]: "bg-green-100 text-green-800",
      [ShipmentStatus.Delayed]: "bg-red-100 text-red-800",
      [ShipmentStatus.Failed]: "bg-red-100 text-red-800",
      [ShipmentStatus.Returned]: "bg-slate-100 text-slate-800",
      [ShipmentStatus.Cancelled]: "bg-slate-100 text-slate-800"
    };
    return classes[status] || "bg-slate-100 text-slate-800";
  }
  getProgressPercent(status) {
    const progress = {
      [ShipmentStatus.Pending]: 10,
      [ShipmentStatus.Assigned]: 20,
      [ShipmentStatus.LabelCreated]: 30,
      [ShipmentStatus.PickedUp]: 45,
      [ShipmentStatus.InTransit]: 65,
      [ShipmentStatus.OutForDelivery]: 85,
      [ShipmentStatus.Delivered]: 100,
      [ShipmentStatus.Delayed]: 65,
      [ShipmentStatus.Failed]: 65,
      [ShipmentStatus.Returned]: 100,
      [ShipmentStatus.Cancelled]: 0
    };
    return progress[status] || 0;
  }
  getProgressClass(status) {
    if (status === ShipmentStatus.Delivered)
      return "bg-green-500";
    if (status === ShipmentStatus.Delayed || status === ShipmentStatus.Failed)
      return "bg-red-500";
    return "bg-indigo-500";
  }
  formatDate(date) {
    if (!date)
      return "N/A";
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }
  formatTime(date) {
    if (!date)
      return "";
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  formatDateTime(date) {
    if (!date)
      return "N/A";
    return new Date(date).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  generateTimeline(shipment) {
    const statusOrder = [
      ShipmentStatus.Pending,
      ShipmentStatus.Assigned,
      ShipmentStatus.PickedUp,
      ShipmentStatus.InTransit,
      ShipmentStatus.OutForDelivery,
      ShipmentStatus.Delivered
    ];
    const currentStatus = this.normalizeStatus(shipment.status);
    const currentIndex = statusOrder.indexOf(currentStatus);
    const trackingMap = /* @__PURE__ */ new Map();
    shipment.trackingHistory?.forEach((t) => {
      const normalizedStatus = this.normalizeStatus(t.status);
      if (!trackingMap.has(normalizedStatus) || new Date(t.occurredAt) > new Date(trackingMap.get(normalizedStatus).occurredAt)) {
        trackingMap.set(normalizedStatus, t);
      }
    });
    return statusOrder.map((status, index) => {
      const tracking = trackingMap.get(status);
      return {
        status,
        label: this.getStatusLabel(status),
        description: tracking?.description,
        // Use API description
        location: tracking?.location,
        notes: tracking?.notes,
        performedBy: tracking?.performedByName,
        // Show who performed the action
        time: tracking ? this.formatDateTime(tracking.occurredAt) : void 0,
        isCompleted: index < currentIndex,
        isCurrent: index === currentIndex,
        isPending: index > currentIndex
      };
    });
  }
  // Convert numeric status to string enum value
  normalizeStatus(status) {
    const statusMap = {
      0: ShipmentStatus.Pending,
      1: ShipmentStatus.Assigned,
      2: ShipmentStatus.LabelCreated,
      3: ShipmentStatus.PickedUp,
      4: ShipmentStatus.InTransit,
      5: ShipmentStatus.OutForDelivery,
      6: ShipmentStatus.Delivered,
      7: ShipmentStatus.Delayed,
      8: ShipmentStatus.Failed,
      9: ShipmentStatus.Returned,
      10: ShipmentStatus.Cancelled,
      "Pending": ShipmentStatus.Pending,
      "Assigned": ShipmentStatus.Assigned,
      "LabelCreated": ShipmentStatus.LabelCreated,
      "PickedUp": ShipmentStatus.PickedUp,
      "InTransit": ShipmentStatus.InTransit,
      "OutForDelivery": ShipmentStatus.OutForDelivery,
      "Delivered": ShipmentStatus.Delivered,
      "Delayed": ShipmentStatus.Delayed,
      "Failed": ShipmentStatus.Failed,
      "Returned": ShipmentStatus.Returned,
      "Cancelled": ShipmentStatus.Cancelled
    };
    return statusMap[status] || status;
  }
  getStatusLabel(status) {
    const labels = {
      [ShipmentStatus.Pending]: "Order Confirmed",
      [ShipmentStatus.Assigned]: "Courier Assigned",
      [ShipmentStatus.LabelCreated]: "Label Created",
      [ShipmentStatus.PickedUp]: "Picked Up",
      [ShipmentStatus.InTransit]: "In Transit",
      [ShipmentStatus.OutForDelivery]: "Out for Delivery",
      [ShipmentStatus.Delivered]: "Delivered",
      [ShipmentStatus.Delayed]: "Delayed",
      [ShipmentStatus.Failed]: "Failed",
      [ShipmentStatus.Returned]: "Returned",
      [ShipmentStatus.Cancelled]: "Cancelled"
    };
    return labels[status] || status;
  }
  canMarkAsShipped() {
    const status = this.shipment()?.status;
    return status === ShipmentStatus.Pending || status === ShipmentStatus.Assigned || status === ShipmentStatus.PickedUp;
  }
  canMarkAsDelivered() {
    const status = this.shipment()?.status;
    return status === ShipmentStatus.InTransit || status === ShipmentStatus.OutForDelivery;
  }
  showNotification(type, key) {
    this.toastType = type;
    this.toastMessage = this.translateService.instant(key);
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3e3);
  }
  static \u0275fac = function ShipmentDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShipmentDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShipmentDetailComponent, selectors: [["app-shipment-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 4, consts: [["class", "flex items-center justify-center min-h-screen", 4, "ngIf"], ["class", "flex flex-col items-center justify-center min-h-screen", 4, "ngIf"], ["class", "min-h-screen bg-slate-50", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "min-h-screen"], [1, "animate-spin", "rounded-full", "h-12", "w-12", "border-4", "border-indigo-600", "border-t-transparent"], [1, "flex", "flex-col", "items-center", "justify-center", "min-h-screen"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-red-400", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "text-slate-600", "mb-4"], ["routerLink", "/shipments", 1, "px-4", "py-2", "bg-indigo-600", "text-white", "rounded-lg"], [1, "min-h-screen", "bg-slate-50"], [1, "bg-white", "border-b", "border-slate-200"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-6"], [1, "flex", "items-center", "gap-2", "text-sm", "text-slate-500", "mb-4"], ["routerLink", "/", 1, "hover:text-indigo-600"], ["routerLink", "/shipments", 1, "hover:text-indigo-600"], [1, "text-slate-800", "font-medium"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-center", "lg:justify-between", "gap-4"], [1, "flex", "items-center", "gap-3", "flex-wrap"], [1, "text-2xl", "lg:text-3xl", "font-bold", "text-slate-800"], [1, "text-slate-500", "mt-1"], [1, "mx-2"], [1, "flex", "flex-wrap", "gap-3"], [1, "px-4", "py-2", "border", "border-slate-200", "rounded-lg", "text-slate-700", "hover:bg-slate-50", "flex", "items-center", "gap-2"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"], ["class", "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2", 3, "disabled", "click", 4, "ngIf"], ["class", "px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 flex items-center gap-2", 3, "disabled", "click", 4, "ngIf"], [1, "mt-6"], [1, "flex", "items-center", "justify-between", "text-sm", "text-slate-500", "mb-2"], [1, "font-medium", "text-slate-700"], [1, "h-2", "bg-slate-100", "rounded-full", "overflow-hidden"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-8"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "space-y-6"], [1, "bg-white", "rounded-xl", "shadow-sm", "border", "border-slate-100", "overflow-hidden"], [1, "p-4", "border-b", "border-slate-100", "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-2"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-indigo-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "font-semibold", "text-slate-800"], [1, "flex", "items-center", "gap-2", "text-xs", "text-green-600"], [1, "w-2", "h-2", "bg-green-500", "rounded-full", "animate-pulse"], [3, "shipmentId", "height"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "bg-white", "rounded-xl", "shadow-sm", "border", "border-slate-100", "p-5"], [1, "text-xs", "font-medium", "text-indigo-600", "uppercase", "tracking-wide", "mb-3"], [1, "text-sm", "text-slate-500", "mt-1"], [1, "text-xs", "font-medium", "text-green-600", "uppercase", "tracking-wide", "mb-3"], [1, "font-semibold", "text-slate-800", "mb-4"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-4"], [1, "text-xs", "text-slate-500"], [1, "text-lg", "font-semibold", "text-slate-800"], [1, "p-5", "border-b", "border-slate-100"], [1, "overflow-x-auto"], [1, "w-full"], [1, "bg-slate-50"], [1, "text-left", "px-5", "py-3", "text-xs", "font-semibold", "text-slate-500", "uppercase"], [1, "text-right", "px-5", "py-3", "text-xs", "font-semibold", "text-slate-500", "uppercase"], [1, "divide-y", "divide-slate-100"], ["class", "hover:bg-slate-50", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "grid", "grid-cols-2", "md:grid-cols-3", "gap-4"], [1, "text-indigo-600", "hover:underline", "font-medium", 3, "routerLink"], [1, "font-medium", "text-slate-800"], [1, "space-y-6"], [1, "text-xs", "font-medium", "text-slate-500", "uppercase", "tracking-wide", "mb-4"], [1, "flex", "items-center", "gap-4", "mb-4"], [1, "w-12", "h-12", "bg-indigo-100", "rounded-full", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-indigo-600"], ["d", "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"], [1, "text-sm", "text-slate-500"], [1, "w-full", "py-2.5", "border", "border-indigo-600", "text-indigo-600", "rounded-lg", "font-medium", "hover:bg-indigo-50", "flex", "items-center", "justify-center", "gap-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"], [1, "font-semibold", "text-slate-800", "mb-5"], [1, "space-y-1"], ["class", "relative pl-8 pb-6", 3, "pb-0", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-2", "mb-4"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-5", "h-5", "text-red-500"], ["fill-rule", "evenodd", "d", "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z", "clip-rule", "evenodd"], [1, "text-slate-700"], [1, "text-slate-600"], ["class", "text-sm text-slate-500 mt-2 flex items-center gap-2", 4, "ngIf"], [1, "lg:hidden", "fixed", "bottom-0", "left-0", "right-0", "bg-white", "border-t", "border-slate-200", "p-4", "flex", "gap-3", "z-40"], ["class", "flex-1 py-3 bg-blue-600 text-white rounded-lg font-medium disabled:opacity-50", 3, "disabled", "click", 4, "ngIf"], ["class", "flex-1 py-3 bg-green-600 text-white rounded-lg font-medium disabled:opacity-50", 3, "disabled", "click", 4, "ngIf"], ["class", "flex-1 py-3 border border-slate-200 text-slate-700 rounded-lg font-medium", 4, "ngIf"], [1, "px-4", "py-2", "bg-blue-600", "text-white", "rounded-lg", "hover:bg-blue-700", "disabled:opacity-50", "flex", "items-center", "gap-2", 3, "click", "disabled"], [1, "px-4", "py-2", "bg-green-600", "text-white", "rounded-lg", "hover:bg-green-700", "disabled:opacity-50", "flex", "items-center", "gap-2", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "hover:bg-slate-50"], [1, "px-5", "py-4", "text-sm", "font-medium", "text-indigo-600"], [1, "px-5", "py-4"], [1, "flex", "items-center", "gap-3"], ["class", "w-10 h-10 rounded-lg object-cover", 3, "src", 4, "ngIf"], [1, "text-sm", "text-slate-700"], [1, "px-5", "py-4", "text-right", "text-sm", "font-medium", "text-slate-800"], [1, "w-10", "h-10", "rounded-lg", "object-cover", 3, "src"], ["colspan", "3", 1, "px-5", "py-8", "text-center", "text-slate-500"], [1, "relative", "pl-8", "pb-6"], ["class", "w-3 h-3 text-white", "fill", "currentColor", "viewBox", "0 0 20 20", 4, "ngIf"], ["class", "w-2 h-2 bg-white rounded-full", 4, "ngIf"], ["class", "text-sm text-slate-600 mt-0.5", 4, "ngIf"], ["class", "text-sm text-slate-500", 4, "ngIf"], ["class", "flex items-center gap-2 mt-1", 4, "ngIf"], ["class", "text-xs text-slate-400 mt-1", 4, "ngIf"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-3", "h-3", "text-white"], ["fill-rule", "evenodd", "d", "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", "clip-rule", "evenodd"], [1, "w-2", "h-2", "bg-white", "rounded-full"], [1, "text-sm", "text-slate-600", "mt-0.5"], [1, "flex", "items-center", "gap-2", "mt-1"], [1, "text-xs", "text-slate-400"], ["class", "text-xs text-indigo-500", 4, "ngIf"], [1, "text-xs", "text-indigo-500"], [1, "text-xs", "text-slate-400", "mt-1"], [1, "text-sm", "text-slate-500", "mt-2", "flex", "items-center", "gap-2"], [1, "flex-1", "py-3", "bg-blue-600", "text-white", "rounded-lg", "font-medium", "disabled:opacity-50", 3, "click", "disabled"], [1, "flex-1", "py-3", "bg-green-600", "text-white", "rounded-lg", "font-medium", "disabled:opacity-50", 3, "click", "disabled"], [1, "flex-1", "py-3", "border", "border-slate-200", "text-slate-700", "rounded-lg", "font-medium"]], template: function ShipmentDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ShipmentDetailComponent_div_0_Template, 2, 0, "div", 0)(1, ShipmentDetailComponent_div_1_Template, 7, 1, "div", 1)(2, ShipmentDetailComponent_div_2_Template, 199, 132, "div", 2)(3, ShipmentDetailComponent_div_3_Template, 2, 3, "div", 3);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error() && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.shipment() && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showToast);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, RouterModule, RouterLink, TranslateModule, TranslatePipe, ShipmentMapComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShipmentDetailComponent, { className: "ShipmentDetailComponent", filePath: "src\\app\\features\\shipments\\pages\\shipment-detail\\shipment-detail.component.ts", lineNumber: 31 });
})();
export {
  ShipmentDetailComponent
};
//# sourceMappingURL=chunk-E36LTBTZ.js.map
