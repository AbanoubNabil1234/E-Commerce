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

// src/app/features/categories/services/category.service.ts
var CategoryService = class _CategoryService {
  http;
  languageService;
  baseUrl = `${environment.apiUrl}/categories`;
  toast = inject(NotificationService);
  constructor(http, languageService) {
    this.http = http;
    this.languageService = languageService;
  }
  /**
   * Get parent options for dropdown
   */
  getDropdown() {
    return this.http.get(`${this.baseUrl}/dropdown`);
  }
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
  getById(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  create(request) {
    return this.http.post(this.baseUrl, request).pipe(tap((cat) => this.toast.success(`Category "${cat.name}" created successfully`, { title: "\u{1F4C2} Category Created" })));
  }
  update(id, request) {
    return this.http.put(`${this.baseUrl}/${id}`, request).pipe(tap(() => this.toast.success("Category updated successfully", { title: "\u2705 Category Updated" })));
  }
  delete(id) {
    return this.http.delete(`${this.baseUrl}/${id}`).pipe(tap(() => this.toast.warning("Category deleted", { title: "\u{1F5D1}\uFE0F Category Deleted" })));
  }
  toggleStatus(category) {
    const request = {
      id: category.id,
      parentId: category.parentId,
      name: category.name,
      slug: category.slug,
      description: category.description,
      imageUrl: category.imageUrl,
      displayOrder: category.displayOrder,
      isActive: !category.isActive,
      // Toggle
      translations: []
      // Usually we fetch full category first or backend handles partial update? 
      // The backend UpdateCategoryCommand replaces translations if provided.
      // If we send empty list, loop in backend does nothing?
      // Review CategoryService.cs (Backend): "Update translations: foreach..."
      // If list is empty, it does nothing. Existing translations remain?
      // Ah, if I want to KEEP existing translations, I should send them?
      // Or `UpdateCategoryCommand` logic: "foreach (var translationDto in dto.Translations)"
      // It UPDATES existing ones. It does NOT delete missing ones. 
      // So sending empty list is SAFE for status toggle.
    };
    return this.update(category.id, request);
  }
  getPagedWithLanguageReload(pageNumber = 1, pageSize = 10, search, isActive) {
    return this.languageService.currentLanguage$.pipe(switchMap(() => this.getPaged(pageNumber, pageSize, search, isActive)));
  }
  static \u0275fac = function CategoryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoryService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(LanguageService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CategoryService, factory: _CategoryService.\u0275fac, providedIn: "root" });
};

export {
  CategoryService
};
//# sourceMappingURL=chunk-QGEU43LX.js.map
