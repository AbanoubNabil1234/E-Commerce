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

// src/app/features/inventory/services/inventory.service.ts
var InventoryService = class _InventoryService {
  http = inject(HttpClient);
  toast = inject(NotificationService);
  apiUrl = `${environment.apiUrl}/inventory`;
  getAllStock(warehouseId, lowStockOnly) {
    let params = new HttpParams();
    if (warehouseId)
      params = params.set("warehouseId", warehouseId);
    if (lowStockOnly)
      params = params.set("lowStockOnly", true);
    return this.http.get(this.apiUrl, { params });
  }
  getStockByProduct(productId, warehouseId) {
    return this.http.get(`${this.apiUrl}/product/${productId}`, { params: new HttpParams().set("warehouseId", warehouseId) });
  }
  getStockSummary(productId) {
    return this.http.get(`${this.apiUrl}/product/${productId}/summary`);
  }
  getMovementHistory(productId, warehouseId, pageNumber = 1, pageSize = 20) {
    let params = new HttpParams().set("pageNumber", pageNumber).set("pageSize", pageSize);
    if (warehouseId)
      params = params.set("warehouseId", warehouseId);
    return this.http.get(`${this.apiUrl}/movements/${productId}`, { params });
  }
  getLowStockProducts(warehouseId) {
    let params = new HttpParams();
    if (warehouseId)
      params = params.set("warehouseId", warehouseId);
    return this.http.get(`${this.apiUrl}/low-stock`, { params });
  }
  initializeStock(request) {
    return this.http.post(`${this.apiUrl}/initialize`, request).pipe(tap(() => this.toast.success("Stock initialized successfully", { title: "\u{1F4E6} Stock Initialized" })));
  }
  estimateStock(request) {
    return this.adjustStock(request);
  }
  increaseStock(request) {
    return this.http.post(`${this.apiUrl}/increase`, request).pipe(tap(() => this.toast.success(`Stock increased by ${request.quantity}`, { title: "\u{1F4C8} Stock Increased" })));
  }
  decreaseStock(request) {
    return this.http.post(`${this.apiUrl}/decrease`, request).pipe(tap(() => this.toast.warning(`Stock decreased by ${request.quantity}`, { title: "\u{1F4C9} Stock Decreased" })));
  }
  adjustStock(request) {
    const endpoints = {
      0: "increase",
      1: "decrease",
      2: "adjust"
    };
    const endpoint = endpoints[request.adjustmentType];
    return this.http.post(`${this.apiUrl}/${endpoint}`, request).pipe(tap(() => this.toast.success("Stock adjusted successfully", { title: "\u{1F4CA} Stock Adjusted" })));
  }
  transferStock(request) {
    return this.http.post(`${this.apiUrl}/transfer`, request).pipe(tap(() => this.toast.success(`${request.quantity} units transferred successfully`, { title: "\u{1F504} Stock Transferred" })));
  }
  checkAvailability(productId, warehouseId, quantity) {
    const params = new HttpParams().set("productId", productId).set("warehouseId", warehouseId).set("quantity", quantity);
    return this.http.get(`${this.apiUrl}/check-availability`, { params });
  }
  static \u0275fac = function InventoryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InventoryService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InventoryService, factory: _InventoryService.\u0275fac, providedIn: "root" });
};

export {
  InventoryService
};
//# sourceMappingURL=chunk-52QYXEQ7.js.map
