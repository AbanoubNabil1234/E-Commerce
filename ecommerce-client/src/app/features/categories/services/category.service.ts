import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, switchMap, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { LanguageService } from '../../../core/services/language.service';
import { NotificationService } from '../../../core/services/notification.service';

export interface Category {
    id: number;
    parentId?: number;
    parentName?: string;
    level?: number;
    name: string;
    slug: string;
    description?: string;
    imageUrl?: string;
    displayOrder: number;
    languageCode: string;
    isActive: boolean;
    productsCount?: number;
    createdAt?: Date;
}

export interface CategoryListResponse {
    items: Category[];
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
}

export interface CreateCategoryRequest {
    parentId?: number;
    name: string;
    slug: string;
    description?: string;
    imageUrl?: string;
    displayOrder: number;
    translations: CategoryTranslation[];
}

export interface UpdateCategoryRequest {
    id: number;
    parentId?: number;
    name: string;
    slug: string;
    description?: string;
    imageUrl?: string;
    displayOrder: number;
    isActive: boolean;
    translations: CategoryTranslation[];
}

export interface CategoryTranslation {
    id?: number;
    languageCode: string;
    name: string;
    description?: string;
    slug?: string;
}

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private readonly baseUrl = `${environment.apiUrl}/categories`;
    private toast = inject(NotificationService);

    constructor(
        private http: HttpClient,
        private languageService: LanguageService
    ) { }

    /**
     * Get parent options for dropdown
     */
    getDropdown(): Observable<Category[]> {
        return this.http.get<Category[]>(`${this.baseUrl}/dropdown`);
    }

    getPaged(
        pageNumber: number = 1,
        pageSize: number = 10,
        search?: string,
        isActive?: boolean
    ): Observable<CategoryListResponse> {
        let params = new HttpParams()
            .set('pageNumber', pageNumber.toString())
            .set('pageSize', pageSize.toString());

        if (search) {
            params = params.set('search', search);
        }

        if (isActive !== undefined && isActive !== null) {
            params = params.set('isActive', isActive.toString());
        }

        return this.http.get<CategoryListResponse>(`${this.baseUrl}/paged`, { params });
    }

    getById(id: number): Observable<Category> {
        return this.http.get<Category>(`${this.baseUrl}/${id}`);
    }

    create(request: CreateCategoryRequest): Observable<Category> {
        return this.http.post<Category>(this.baseUrl, request).pipe(
            tap(cat => this.toast.success(`Category "${cat.name}" created successfully`, { title: '📂 Category Created' }))
        );
    }

    update(id: number, request: UpdateCategoryRequest): Observable<Category> {
        return this.http.put<Category>(`${this.baseUrl}/${id}`, request).pipe(
            tap(() => this.toast.success('Category updated successfully', { title: '✅ Category Updated' }))
        );
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
            tap(() => this.toast.warning('Category deleted', { title: '🗑️ Category Deleted' }))
        );
    }

    toggleStatus(category: Category): Observable<Category> {
        const request: UpdateCategoryRequest = {
            id: category.id,
            parentId: category.parentId,
            name: category.name,
            slug: category.slug,
            description: category.description,
            imageUrl: category.imageUrl,
            displayOrder: category.displayOrder,
            isActive: !category.isActive, // Toggle
            translations: [] // Usually we fetch full category first or backend handles partial update? 
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

    getPagedWithLanguageReload(
        pageNumber: number = 1,
        pageSize: number = 10,
        search?: string,
        isActive?: boolean
    ): Observable<CategoryListResponse> {
        return this.languageService.currentLanguage$.pipe(
            switchMap(() => this.getPaged(pageNumber, pageSize, search, isActive))
        );
    }
}
