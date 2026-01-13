import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, switchMap, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { LanguageService } from '../../../core/services/language.service';
import { NotificationService } from '../../../core/services/notification.service';

/**
 * DTOs matching backend LocalizedBrandDto and BrandListDto
 */
export interface Brand {
    id: number;
    name: string;
    slug: string;
    description?: string;
    logoUrl?: string;
    website?: string;
    languageCode: string;
    isActive: boolean;
    // Optional UI fields (not from backend API)
    productsCount?: number;
    createdAt?: Date;
    updatedAt?: Date;
    category?: string;
}

export interface BrandListResponse {
    items: Brand[];
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
}

export interface CreateBrandRequest {
    name: string;
    slug: string;
    description?: string;
    logoUrl?: string;
    website?: string;
    translations: BrandTranslation[];
}

export interface UpdateBrandRequest {
    id: number;
    name: string;
    slug: string;
    description?: string;
    logoUrl?: string;
    website?: string;
    isActive: boolean;
    translations: BrandTranslation[];
}

export interface BrandTranslation {
    id?: number;
    languageCode: string;
    name: string;
    description?: string;
    slug: string;
}

@Injectable({
    providedIn: 'root'
})
export class BrandService {
    private readonly baseUrl = `${environment.apiUrl}/brands`;
    private toast = inject(NotificationService);

    constructor(
        private http: HttpClient,
        private languageService: LanguageService
    ) { }

    /**
     * Get all active brands (localized)
     */
    getAll(): Observable<Brand[]> {
        return this.http.get<Brand[]>(this.baseUrl);
    }

    /**
     * Get paginated brands with optional filters
     */
    getPaged(
        pageNumber: number = 1,
        pageSize: number = 10,
        search?: string,
        isActive?: boolean
    ): Observable<BrandListResponse> {
        let params = new HttpParams()
            .set('pageNumber', pageNumber.toString())
            .set('pageSize', pageSize.toString());

        if (search) {
            params = params.set('search', search);
        }

        if (isActive !== undefined && isActive !== null) {
            params = params.set('isActive', isActive.toString());
        }

        return this.http.get<BrandListResponse>(`${this.baseUrl}/paged`, { params });
    }

    /**
     * Get brand by ID
     */
    getById(id: number): Observable<Brand> {
        return this.http.get<Brand>(`${this.baseUrl}/${id}`);
    }

    /**
     * Get brand by slug
     */
    getBySlug(slug: string): Observable<Brand> {
        return this.http.get<Brand>(`${this.baseUrl}/slug/${slug}`);
    }

    /**
     * Create a new brand
     */
    create(request: CreateBrandRequest): Observable<Brand> {
        return this.http.post<Brand>(this.baseUrl, request).pipe(
            tap(brand => this.toast.success(`Brand "${brand.name}" created successfully`, { title: '🌟 Brand Created' }))
        );
    }

    /**
     * Update an existing brand
     */
    update(id: number, request: UpdateBrandRequest): Observable<Brand> {
        return this.http.put<Brand>(`${this.baseUrl}/${id}`, request).pipe(
            tap(() => this.toast.success('Brand updated successfully', { title: '✅ Brand Updated' }))
        );
    }

    /**
     * Delete a brand (soft delete by default)
     */
    delete(id: number, hardDelete: boolean = false): Observable<void> {
        const params = new HttpParams().set('hardDelete', hardDelete.toString());
        return this.http.delete<void>(`${this.baseUrl}/${id}`, { params }).pipe(
            tap(() => this.toast.warning('Brand deleted', { title: '🗑️ Brand Deleted' }))
        );
    }

    /**
     * Toggle brand active status
     */
    toggleStatus(brand: Brand): Observable<Brand> {
        const request: UpdateBrandRequest = {
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
    getPagedWithLanguageReload(
        pageNumber: number = 1,
        pageSize: number = 10,
        search?: string,
        isActive?: boolean
    ): Observable<BrandListResponse> {
        return this.languageService.currentLanguage$.pipe(
            switchMap(() => this.getPaged(pageNumber, pageSize, search, isActive))
        );
    }
}
