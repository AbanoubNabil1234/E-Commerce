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

// src/app/features/orders/services/orders.service.ts
var OrderService = class _OrderService {
  http = inject(HttpClient);
  toast = inject(NotificationService);
  apiUrl = `${environment.apiUrl}/order`;
  // Query Operations
  getAll(filter) {
    let params = new HttpParams();
    if (filter) {
      if (filter.status)
        params = params.set("Status", filter.status);
      if (filter.paymentStatus)
        params = params.set("PaymentStatus", filter.paymentStatus);
      if (filter.warehouseId)
        params = params.set("WarehouseId", filter.warehouseId);
      if (filter.customerId)
        params = params.set("CustomerId", filter.customerId);
      if (filter.fromDate)
        params = params.set("FromDate", filter.fromDate);
      if (filter.toDate)
        params = params.set("ToDate", filter.toDate);
      if (filter.searchTerm)
        params = params.set("SearchTerm", filter.searchTerm);
      if (filter.pageNumber)
        params = params.set("PageNumber", filter.pageNumber);
      if (filter.pageSize)
        params = params.set("PageSize", filter.pageSize);
    }
    return this.http.get(this.apiUrl, { params });
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getByOrderNumber(orderNumber) {
    return this.http.get(`${this.apiUrl}/by-number/${orderNumber}`);
  }
  checkAvailability(orderId) {
    return this.http.get(`${this.apiUrl}/${orderId}/availability`);
  }
  // Order Lifecycle
  create(request) {
    return this.http.post(this.apiUrl, request).pipe(tap((order) => this.toast.success(`Order #${order.orderNumber} created successfully`, { title: "\u{1F4E6} Order Created" })));
  }
  addItem(orderId, request) {
    return this.http.post(`${this.apiUrl}/${orderId}/items`, request).pipe(tap(() => this.toast.success("Item added to order", { title: "\u2705 Item Added" })));
  }
  updateItem(orderId, itemId, request) {
    return this.http.put(`${this.apiUrl}/${orderId}/items/${itemId}`, request).pipe(tap(() => this.toast.success("Order item updated", { title: "\u2705 Updated" })));
  }
  removeItem(orderId, itemId) {
    return this.http.delete(`${this.apiUrl}/${orderId}/items/${itemId}`).pipe(tap(() => this.toast.info("Item removed from order", { title: "\u{1F5D1}\uFE0F Item Removed" })));
  }
  confirm(orderId) {
    return this.http.post(`${this.apiUrl}/${orderId}/confirm`, {}).pipe(tap((order) => this.toast.success(`Order #${order.orderNumber} confirmed`, { title: "\u2705 Order Confirmed" })));
  }
  cancel(orderId, reason) {
    return this.http.post(`${this.apiUrl}/${orderId}/cancel`, { reason }).pipe(tap((order) => this.toast.warning(`Order #${order.orderNumber} cancelled`, { title: "\u274C Order Cancelled" })));
  }
  ship(orderId) {
    return this.http.post(`${this.apiUrl}/${orderId}/ship`, {}).pipe(tap((order) => this.toast.success(`Order #${order.orderNumber} shipped`, { title: "\u{1F69A} Order Shipped" })));
  }
  deliver(orderId) {
    return this.http.post(`${this.apiUrl}/${orderId}/deliver`, {}).pipe(tap((order) => this.toast.success(`Order #${order.orderNumber} delivered`, { title: "\u2705 Order Delivered" })));
  }
  static \u0275fac = function OrderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderService, factory: _OrderService.\u0275fac, providedIn: "root" });
};

export {
  OrderService
};
//# sourceMappingURL=chunk-INGYDYDZ.js.map
