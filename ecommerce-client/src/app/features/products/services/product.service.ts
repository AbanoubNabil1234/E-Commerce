import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, switchMap, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { LanguageService } from '../../../core/services/language.service';
import { NotificationService } from '../../../core/services/notification.service';

// ============================================
// DTOs matching backend Product DTOs
// ============================================

export interface Product {
    id: number;
    sku: string;
    slug: string;
    name: string;
    shortDescription?: string;
    description?: string;
    unitPrice: number;
    costPrice?: number;
    brandId: number;
    brandName: string;
    categoryId: number;
    categoryName: string;
    languageCode: string;
    isActive: boolean;
    isFeatured: boolean;
    primaryImageUrl?: string;
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string;
    // Additional fields for product details page
    images?: ProductImage[];
    createdAt?: string;
    // Convenience alias for unitPrice (used in templates)
    price?: number;
}

export interface ProductListItem {
    id: number;
    sku: string;
    slug: string;
    name: string;
    shortDescription?: string;
    unitPrice: number;
    brandId: number;
    brandName: string;
    categoryId: number;
    categoryName: string;
    isActive: boolean;
    isFeatured: boolean;
    primaryImageUrl?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface ProductListResponse {
    items: ProductListItem[];
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
}

export interface ProductTranslation {
    id?: number;
    languageCode: string;
    name: string;
    shortDescription?: string;
    description?: string;
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string;
}

export interface ProductImage {
    id?: number;
    imageUrl: string;
    altText?: string;
    displayOrder: number;
    isPrimary: boolean;
}

export interface CreateProductRequest {
    sku: string;
    slug: string;
    unitPrice: number;
    costPrice?: number;
    brandId: number;
    categoryId: number;
    isFeatured: boolean;
    isActive: boolean;
    translations: ProductTranslation[];
    images: ProductImage[];
}

export interface UpdateProductRequest {
    id: number;
    sku: string;
    slug: string;
    unitPrice: number;
    costPrice?: number;
    brandId: number;
    categoryId: number;
    isFeatured: boolean;
    isActive: boolean;
    translations: ProductTranslation[];
    images: ProductImage[];
}

// ============================================
// Product Service
// ============================================

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private readonly baseUrl = `${environment.apiUrl}/products`;
    private toast = inject(NotificationService);

    constructor(
        private http: HttpClient,
        private languageService: LanguageService
    ) { }

    // ----------------------------------------
    // Query Operations
    // ----------------------------------------

    /**
     * Get paginated products with optional filters
     */
    getPaged(
        pageNumber: number = 1,
        pageSize: number = 10,
        search?: string,
        brandId?: number,
        categoryId?: number,
        isActive?: boolean,
        minPrice?: number,
        maxPrice?: number,
        sortBy?: string,
        sortDescending?: boolean
    ): Observable<ProductListResponse> {
        let params = new HttpParams()
            .set('pageNumber', pageNumber.toString())
            .set('pageSize', pageSize.toString());

        if (search) {
            params = params.set('search', search);
        }
        if (brandId) {
            params = params.set('brandId', brandId.toString());
        }
        if (categoryId) {
            params = params.set('categoryId', categoryId.toString());
        }
        if (isActive !== undefined && isActive !== null) {
            params = params.set('isActive', isActive.toString());
        }
        if (minPrice !== undefined) {
            params = params.set('minPrice', minPrice.toString());
        }
        if (maxPrice !== undefined) {
            params = params.set('maxPrice', maxPrice.toString());
        }
        if (sortBy) {
            params = params.set('sortBy', sortBy);
        }
        if (sortDescending !== undefined) {
            params = params.set('sortDescending', sortDescending.toString());
        }

        return this.http.get<ProductListResponse>(this.baseUrl, { params });
    }

    /**
     * Get product by ID
     */
    getById(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.baseUrl}/${id}`);
    }

    /**
     * Get product by slug
     */
    getBySlug(slug: string): Observable<Product> {
        return this.http.get<Product>(`${this.baseUrl}/slug/${slug}`);
    }

    /**
     * Get product by SKU
     */
    getBySku(sku: string): Observable<Product> {
        return this.http.get<Product>(`${this.baseUrl}/sku/${sku}`);
    }

    /**
     * Get featured products
     */
    getFeatured(count: number = 10): Observable<ProductListItem[]> {
        const params = new HttpParams().set('count', count.toString());
        return this.http.get<ProductListItem[]>(`${this.baseUrl}/featured`, { params });
    }

    /**
     * Get products by brand
     */
    getByBrand(brandId: number): Observable<ProductListItem[]> {
        return this.http.get<ProductListItem[]>(`${this.baseUrl}/brand/${brandId}`);
    }

    /**
     * Get products by category
     */
    getByCategory(categoryId: number, includeSubcategories: boolean = false): Observable<ProductListItem[]> {
        const params = new HttpParams()
            .set('includeSubcategories', includeSubcategories.toString());
        return this.http.get<ProductListItem[]>(`${this.baseUrl}/category/${categoryId}`, { params });
    }

    // ----------------------------------------
    // Command Operations
    // ----------------------------------------

    /**
     * Create a new product
     */
    create(request: CreateProductRequest): Observable<Product> {
        return this.http.post<Product>(this.baseUrl, request).pipe(
            tap(product => this.toast.success(`Product "${product.name}" created successfully`, { title: '🛍️ Product Created' }))
        );
    }

    /**
     * Update an existing product
     */
    update(id: number, request: UpdateProductRequest): Observable<Product> {
        return this.http.put<Product>(`${this.baseUrl}/${id}`, request).pipe(
            tap(() => this.toast.success('Product updated successfully', { title: '✅ Product Updated' }))
        );
    }

    /**
     * Delete a product (soft delete by default)
     */
    delete(id: number, hardDelete: boolean = false): Observable<void> {
        const params = new HttpParams().set('hardDelete', hardDelete.toString());
        return this.http.delete<void>(`${this.baseUrl}/${id}`, { params }).pipe(
            tap(() => this.toast.warning('Product deleted', { title: '🗑️ Product Deleted' }))
        );
    }

    /**
     * Toggle product active status
     */
    toggleStatus(id: number, isActive: boolean): Observable<void> {
        return this.http.patch<void>(`${this.baseUrl}/${id}/status`, { isActive });
    }

    // ----------------------------------------
    // Translation Operations
    // ----------------------------------------

    /**
     * Add or update a translation
     */
    upsertTranslation(productId: number, translation: ProductTranslation): Observable<ProductTranslation> {
        return this.http.put<ProductTranslation>(
            `${this.baseUrl}/${productId}/translations/${translation.languageCode}`,
            translation
        );
    }

    // ----------------------------------------
    // Image Operations
    // ----------------------------------------

    /**
     * Add an image to a product
     */
    addImage(productId: number, image: ProductImage): Observable<ProductImage> {
        return this.http.post<ProductImage>(`${this.baseUrl}/${productId}/images`, image);
    }

    /**
     * Update a product image
     */
    updateImage(productId: number, imageId: number, image: ProductImage): Observable<ProductImage> {
        return this.http.put<ProductImage>(`${this.baseUrl}/${productId}/images/${imageId}`, image);
    }

    /**
     * Delete a product image
     */
    deleteImage(productId: number, imageId: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${productId}/images/${imageId}`);
    }

    /**
     * Set primary image
     */
    setPrimaryImage(productId: number, imageId: number): Observable<void> {
        return this.http.patch<void>(`${this.baseUrl}/${productId}/images/${imageId}/primary`, {});
    }

    // ----------------------------------------
    // Language Helper
    // ----------------------------------------

    /**
     * Reload products when language changes
     */
    getPagedWithLanguageReload(
        pageNumber: number = 1,
        pageSize: number = 10,
        search?: string,
        brandId?: number,
        categoryId?: number,
        isActive?: boolean
    ): Observable<ProductListResponse> {
        return this.languageService.currentLanguage$.pipe(
            switchMap(() => this.getPaged(pageNumber, pageSize, search, brandId, categoryId, isActive))
        );
    }
}
