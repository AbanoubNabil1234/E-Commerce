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

// src/app/features/products/services/product.service.ts
var ProductService = class _ProductService {
  http;
  languageService;
  baseUrl = `${environment.apiUrl}/products`;
  toast = inject(NotificationService);
  constructor(http, languageService) {
    this.http = http;
    this.languageService = languageService;
  }
  // ----------------------------------------
  // Query Operations
  // ----------------------------------------
  /**
   * Get paginated products with optional filters
   */
  getPaged(pageNumber = 1, pageSize = 10, search, brandId, categoryId, isActive, minPrice, maxPrice, sortBy, sortDescending) {
    let params = new HttpParams().set("pageNumber", pageNumber.toString()).set("pageSize", pageSize.toString());
    if (search) {
      params = params.set("search", search);
    }
    if (brandId) {
      params = params.set("brandId", brandId.toString());
    }
    if (categoryId) {
      params = params.set("categoryId", categoryId.toString());
    }
    if (isActive !== void 0 && isActive !== null) {
      params = params.set("isActive", isActive.toString());
    }
    if (minPrice !== void 0) {
      params = params.set("minPrice", minPrice.toString());
    }
    if (maxPrice !== void 0) {
      params = params.set("maxPrice", maxPrice.toString());
    }
    if (sortBy) {
      params = params.set("sortBy", sortBy);
    }
    if (sortDescending !== void 0) {
      params = params.set("sortDescending", sortDescending.toString());
    }
    return this.http.get(this.baseUrl, { params });
  }
  /**
   * Get product by ID
   */
  getById(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  /**
   * Get product by slug
   */
  getBySlug(slug) {
    return this.http.get(`${this.baseUrl}/slug/${slug}`);
  }
  /**
   * Get product by SKU
   */
  getBySku(sku) {
    return this.http.get(`${this.baseUrl}/sku/${sku}`);
  }
  /**
   * Get featured products
   */
  getFeatured(count = 10) {
    const params = new HttpParams().set("count", count.toString());
    return this.http.get(`${this.baseUrl}/featured`, { params });
  }
  /**
   * Get products by brand
   */
  getByBrand(brandId) {
    return this.http.get(`${this.baseUrl}/brand/${brandId}`);
  }
  /**
   * Get products by category
   */
  getByCategory(categoryId, includeSubcategories = false) {
    const params = new HttpParams().set("includeSubcategories", includeSubcategories.toString());
    return this.http.get(`${this.baseUrl}/category/${categoryId}`, { params });
  }
  // ----------------------------------------
  // Command Operations
  // ----------------------------------------
  /**
   * Create a new product
   */
  create(request) {
    return this.http.post(this.baseUrl, request).pipe(tap((product) => this.toast.success(`Product "${product.name}" created successfully`, { title: "\u{1F6CD}\uFE0F Product Created" })));
  }
  /**
   * Update an existing product
   */
  update(id, request) {
    return this.http.put(`${this.baseUrl}/${id}`, request).pipe(tap(() => this.toast.success("Product updated successfully", { title: "\u2705 Product Updated" })));
  }
  /**
   * Delete a product (soft delete by default)
   */
  delete(id, hardDelete = false) {
    const params = new HttpParams().set("hardDelete", hardDelete.toString());
    return this.http.delete(`${this.baseUrl}/${id}`, { params }).pipe(tap(() => this.toast.warning("Product deleted", { title: "\u{1F5D1}\uFE0F Product Deleted" })));
  }
  /**
   * Toggle product active status
   */
  toggleStatus(id, isActive) {
    return this.http.patch(`${this.baseUrl}/${id}/status`, { isActive });
  }
  // ----------------------------------------
  // Translation Operations
  // ----------------------------------------
  /**
   * Add or update a translation
   */
  upsertTranslation(productId, translation) {
    return this.http.put(`${this.baseUrl}/${productId}/translations/${translation.languageCode}`, translation);
  }
  // ----------------------------------------
  // Image Operations
  // ----------------------------------------
  /**
   * Add an image to a product
   */
  addImage(productId, image) {
    return this.http.post(`${this.baseUrl}/${productId}/images`, image);
  }
  /**
   * Update a product image
   */
  updateImage(productId, imageId, image) {
    return this.http.put(`${this.baseUrl}/${productId}/images/${imageId}`, image);
  }
  /**
   * Delete a product image
   */
  deleteImage(productId, imageId) {
    return this.http.delete(`${this.baseUrl}/${productId}/images/${imageId}`);
  }
  /**
   * Set primary image
   */
  setPrimaryImage(productId, imageId) {
    return this.http.patch(`${this.baseUrl}/${productId}/images/${imageId}/primary`, {});
  }
  // ----------------------------------------
  // Language Helper
  // ----------------------------------------
  /**
   * Reload products when language changes
   */
  getPagedWithLanguageReload(pageNumber = 1, pageSize = 10, search, brandId, categoryId, isActive) {
    return this.languageService.currentLanguage$.pipe(switchMap(() => this.getPaged(pageNumber, pageSize, search, brandId, categoryId, isActive)));
  }
  static \u0275fac = function ProductService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(LanguageService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductService, factory: _ProductService.\u0275fac, providedIn: "root" });
};

export {
  ProductService
};
//# sourceMappingURL=chunk-RSR6U7PL.js.map
