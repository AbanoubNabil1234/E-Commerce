import {
  NotificationService
} from "./chunk-ZICMI5CI.js";
import {
  environment
} from "./chunk-BOQBRULU.js";
import {
  HttpClient,
  HttpParams,
  inject,
  tap,
  ɵɵdefineInjectable
} from "./chunk-IGAGZNZV.js";

// src/app/features/shipments/services/shipments.service.ts
var ShipmentsService = class _ShipmentsService {
  http = inject(HttpClient);
  toast = inject(NotificationService);
  baseUrl = `${environment.apiUrl}/shipments`;
  // Query operations
  getList(filter) {
    let params = new HttpParams().set("pageNumber", filter.pageNumber).set("pageSize", filter.pageSize);
    if (filter.status)
      params = params.set("status", filter.status);
    if (filter.warehouseId)
      params = params.set("warehouseId", filter.warehouseId);
    if (filter.carrierId)
      params = params.set("carrierId", filter.carrierId);
    if (filter.orderId)
      params = params.set("orderId", filter.orderId);
    if (filter.search)
      params = params.set("search", filter.search);
    if (filter.fromDate)
      params = params.set("fromDate", filter.fromDate);
    if (filter.toDate)
      params = params.set("toDate", filter.toDate);
    return this.http.get(this.baseUrl, { params });
  }
  getById(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getTracking(id) {
    return this.http.get(`${this.baseUrl}/${id}/tracking`);
  }
  getByOrderId(orderId) {
    return this.http.get(`${this.baseUrl}/by-order/${orderId}`);
  }
  getCarriers() {
    return this.http.get(`${this.baseUrl}/carriers`);
  }
  // Command operations
  create(request) {
    return this.http.post(this.baseUrl, request).pipe(tap((shipment) => this.toast.success(`Shipment #${shipment.trackingNumber} created`, { title: "\u{1F69A} Shipment Created" })));
  }
  assignCarrier(id, request) {
    return this.http.put(`${this.baseUrl}/${id}/assign-carrier`, request).pipe(tap(() => this.toast.success("Carrier assigned to shipment", { title: "\u2705 Carrier Assigned" })));
  }
  updateStatus(id, request) {
    return this.http.put(`${this.baseUrl}/${id}/status`, request).pipe(tap(() => this.toast.info("Shipment status updated", { title: "\u{1F4E6} Status Updated" })));
  }
  markAsShipped(id) {
    return this.http.post(`${this.baseUrl}/${id}/ship`, {}).pipe(tap((shipment) => this.toast.success(`Shipment #${shipment.trackingNumber} shipped`, { title: "\u{1F69A} Shipped" })));
  }
  markAsDelivered(id) {
    return this.http.post(`${this.baseUrl}/${id}/deliver`, {}).pipe(tap((shipment) => this.toast.success(`Shipment #${shipment.trackingNumber} delivered`, { title: "\u2705 Delivered" })));
  }
  cancel(id, reason) {
    return this.http.post(`${this.baseUrl}/${id}/cancel`, { reason }).pipe(tap(() => this.toast.warning("Shipment cancelled", { title: "\u274C Cancelled" })));
  }
  // Add tracking event
  addTrackingEvent(id, request) {
    return this.http.post(`${this.baseUrl}/${id}/track`, request).pipe(tap(() => this.toast.info("Tracking event added", { title: "\u{1F4CD} Tracking Updated" })));
  }
  static \u0275fac = function ShipmentsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShipmentsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ShipmentsService, factory: _ShipmentsService.\u0275fac, providedIn: "root" });
};

export {
  ShipmentsService
};
//# sourceMappingURL=chunk-Y5DYWHUJ.js.map
