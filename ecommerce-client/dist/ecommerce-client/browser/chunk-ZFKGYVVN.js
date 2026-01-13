import {
  environment
} from "./chunk-BOQBRULU.js";
import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-IGAGZNZV.js";

// src/app/features/warehouses/services/warehouses.service.ts
var WarehousesService = class _WarehousesService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/warehouses`;
  /**
   * Get all warehouses (active and inactive)
   */
  getAll() {
    return this.http.get(this.apiUrl);
  }
  /**
   * Get only active warehouses
   */
  getActive() {
    return this.http.get(`${this.apiUrl}/active`);
  }
  /**
   * Get warehouse by ID
   */
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  /**
   * Get the default warehouse
   */
  getDefault() {
    return this.http.get(`${this.apiUrl}/default`);
  }
  /**
   * Create a new warehouse
   */
  create(request) {
    return this.http.post(this.apiUrl, request);
  }
  /**
   * Update an existing warehouse
   */
  update(id, request) {
    return this.http.put(`${this.apiUrl}/${id}`, request);
  }
  /**
   * Activate a deactivated warehouse
   */
  activate(id) {
    return this.http.post(`${this.apiUrl}/${id}/activate`, {});
  }
  /**
   * Deactivate a warehouse
   */
  deactivate(id) {
    return this.http.post(`${this.apiUrl}/${id}/deactivate`, {});
  }
  /**
   * Set a warehouse as default
   */
  setDefault(id) {
    return this.http.post(`${this.apiUrl}/${id}/set-default`, {});
  }
  static \u0275fac = function WarehousesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WarehousesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WarehousesService, factory: _WarehousesService.\u0275fac, providedIn: "root" });
};

export {
  WarehousesService
};
//# sourceMappingURL=chunk-ZFKGYVVN.js.map
