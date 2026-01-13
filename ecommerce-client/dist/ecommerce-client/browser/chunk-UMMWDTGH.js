import {
  LanguageService
} from "./chunk-SBRLR34M.js";
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
  switchMap,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IGAGZNZV.js";

// src/app/features/brands/services/brand.service.ts
var BrandService = class _BrandService {
  http;
  languageService;
  baseUrl = `${environment.apiUrl}/brands`;
  toast = inject(NotificationService);
  constructor(http, languageService) {
    this.http = http;
    this.languageService = languageService;
  }
  /**
   * Get all active brands (localized)
   */
  getAll() {
    return this.http.get(this.baseUrl);
  }
  /**
   * Get paginated brands with optional filters
   */
  getPaged(pageNumber = 1, pageSize = 10, search, isActive) {
    let params = new HttpParams().set("pageNumber", pageNumber.toString()).set("pageSize", pageSize.toString());
    if (search) {
      params = params.set("search", search);
    }
    if (isActive !== void 0 && isActive !== null) {
      params = params.set("isActive", isActive.toString());
    }
    return this.http.get(`${this.baseUrl}/paged`, { params });
  }
  /**
   * Get brand by ID
   */
  getById(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  /**
   * Get brand by slug
   */
  getBySlug(slug) {
    return this.http.get(`${this.baseUrl}/slug/${slug}`);
  }
  /**
   * Create a new brand
   */
  create(request) {
    return this.http.post(this.baseUrl, request).pipe(tap((brand) => this.toast.success(`Brand "${brand.name}" created successfully`, { title: "\u{1F31F} Brand Created" })));
  }
  /**
   * Update an existing brand
   */
  update(id, request) {
    return this.http.put(`${this.baseUrl}/${id}`, request).pipe(tap(() => this.toast.success("Brand updated successfully", { title: "\u2705 Brand Updated" })));
  }
  /**
   * Delete a brand (soft delete by default)
   */
  delete(id, hardDelete = false) {
    const params = new HttpParams().set("hardDelete", hardDelete.toString());
    return this.http.delete(`${this.baseUrl}/${id}`, { params }).pipe(tap(() => this.toast.warning("Brand deleted", { title: "\u{1F5D1}\uFE0F Brand Deleted" })));
  }
  /**
   * Toggle brand active status
   */
  toggleStatus(brand) {
    const request = {
      id: brand.id,
      name: brand.name,
      slug: brand.slug,
      description: brand.description,
      logoUrl: brand.logoUrl,
      website: brand.website,
      isActive: !brand.isActive,
      translations: []
    };
    return this.update(brand.id, request);
  }
  /**
   * Reload data when language changes
   * Returns an observable that emits new data on language switch
   */
  getPagedWithLanguageReload(pageNumber = 1, pageSize = 10, search, isActive) {
    return this.languageService.currentLanguage$.pipe(switchMap(() => this.getPaged(pageNumber, pageSize, search, isActive)));
  }
  static \u0275fac = function BrandService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrandService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(LanguageService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BrandService, factory: _BrandService.\u0275fac, providedIn: "root" });
};

export {
  BrandService
};
//# sourceMappingURL=chunk-UMMWDTGH.js.map
