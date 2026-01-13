import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs';
import { CategoryService, Category, CreateCategoryRequest, UpdateCategoryRequest } from '../../services/category.service';
import { LanguageService } from '../../../../core/services/language.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { ConfirmModalComponent, ConfirmModalConfig } from '../../../../shared/components/confirm-modal/confirm-modal.component';
import { CategoryFormComponent } from '../../components/category-form/category-form.component';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    standalone: true,
    imports: [CommonModule, RouterModule, ReactiveFormsModule, TranslateModule, ConfirmModalComponent, CategoryFormComponent]
})
export class CategoryListComponent implements OnInit, OnDestroy {
    categories: Category[] = [];

    isLoading = false;
    totalCount = 0;
    pageSize = 10;
    pageNumber = 1;
    totalPages = 1;

    searchControl = new FormControl('');
    statusControl = new FormControl<boolean | null>(null);

    // Responsive
    isMobile = false;
    isTablet = false;

    // Modal State
    showModal = false;
    selectedCategory: Category | null = null;

    // Delete Confirmation Modal
    showDeleteModal = false;
    categoryToDelete: Category | null = null;
    deleteModalConfig: ConfirmModalConfig = {
        type: 'danger',
        title: '',
        message: '',
        confirmText: '',
        cancelText: ''
    };

    private destroy$ = new Subject<void>();

    // Helpers
    get Math() { return Math; }
    get pages() {
        return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }

    get dir(): string {
        return this.languageService.currentLanguage === 'ar' ? 'rtl' : 'ltr';
    }

    constructor(
        private categoryService: CategoryService,
        private languageService: LanguageService,
        private translate: TranslateService,
        private notificationService: NotificationService,
        private router: Router
    ) {
        this.checkScreenSize();
    }

    @HostListener('window:resize')
    onResize() {
        this.checkScreenSize();
    }

    private checkScreenSize(): void {
        const width = window.innerWidth;
        this.isMobile = width < 768;
        this.isTablet = width >= 768 && width < 1024;
    }

    ngOnInit(): void {
        this.translate.use(this.languageService.currentLanguage);

        this.languageService.currentLanguage$
            .pipe(takeUntil(this.destroy$))
            .subscribe(lang => {
                this.translate.use(lang);
                this.loadCategories();
            });

        // Debounced search
        this.searchControl.valueChanges
            .pipe(
                debounceTime(300),
                distinctUntilChanged(),
                takeUntil(this.destroy$)
            )
            .subscribe(() => {
                this.pageNumber = 1;
                this.loadCategories();
            });

        this.statusControl.valueChanges
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.pageNumber = 1;
                this.loadCategories();
            });

        this.loadCategories();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    loadCategories(): void {
        this.isLoading = true;

        const search = this.searchControl.value || undefined;
        const isActive = this.statusControl.value ?? undefined;

        this.categoryService.getPaged(this.pageNumber, this.pageSize, search, isActive)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: (response) => {
                    this.categories = response.items;
                    this.totalCount = response.totalCount;
                    this.totalPages = response.totalPages || Math.ceil(response.totalCount / this.pageSize);
                    this.isLoading = false;
                },
                error: (error) => {
                    console.error('Failed to load categories:', error);
                    this.isLoading = false;
                    this.notificationService.error(this.translate.instant('COMMON.ERROR'));
                    this.categories = [];
                }
            });
    }

    onPageChange(page: number): void {
        if (page < 1 || page > this.totalPages) return;
        this.pageNumber = page;
        this.loadCategories();
    }

    toggleStatus(category: Category): void {
        this.categoryService.toggleStatus(category)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: (updated) => {
                    const index = this.categories.findIndex(c => c.id === category.id);
                    if (index !== -1) {
                        this.categories[index].isActive = !category.isActive;
                    }
                    this.notificationService.success(this.translate.instant('MESSAGES.CATEGORY_STATUS_UPDATED'));
                },
                error: (error) => {
                    console.error('Failed to toggle category status:', error);
                    this.notificationService.error(this.translate.instant('COMMON.ERROR'));
                }
            });
    }

    openAddModal(): void {
        this.selectedCategory = null;
        this.showModal = true;
    }

    editCategory(category: Category): void {
        this.router.navigate(['/categories/edit', category.id]);
    }

    deleteCategory(category: Category): void {
        this.categoryToDelete = category;
        this.deleteModalConfig = {
            type: 'danger',
            title: this.translate.instant('CATEGORIES.DELETE_TITLE'),
            message: this.translate.instant('CATEGORIES.DELETE_MESSAGE'),
            confirmText: this.translate.instant('CATEGORIES.DELETE_BUTTON'),
            cancelText: this.translate.instant('COMMON.CANCEL'),
            itemName: category.name
        };
        this.showDeleteModal = true;
    }

    onConfirmDelete(): void {
        if (!this.categoryToDelete) return;

        this.categoryService.delete(this.categoryToDelete.id)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: () => {
                    this.notificationService.success(this.translate.instant('MESSAGES.CATEGORY_DELETED'));
                    this.loadCategories();
                    this.closeDeleteModal();
                },
                error: (error) => {
                    console.error('Failed to delete category:', error);
                    this.notificationService.error(this.translate.instant('COMMON.ERROR'));
                    this.closeDeleteModal();
                }
            });
    }

    closeDeleteModal(): void {
        this.showDeleteModal = false;
        this.categoryToDelete = null;
    }

    closeModal(): void {
        this.showModal = false;
        this.selectedCategory = null;
    }

    onSaveCategory(data: any): void {
        // Extract name from English translation (primary)
        const enTranslation = data.translations?.find((t: any) => t.languageCode === 'en');
        const name = enTranslation?.name || '';
        const description = enTranslation?.description || '';

        // Map translations with slug
        const translations = (data.translations || []).map((t: any) => ({
            languageCode: t.languageCode,
            name: t.name,
            description: t.description || '',
            slug: data.slug // Use same slug for all translations
        }));

        if (this.selectedCategory) {
            const updateRequest: UpdateCategoryRequest = {
                id: this.selectedCategory.id,
                parentId: data.parentId,
                name: name,
                slug: data.slug,
                description: description,
                imageUrl: data.imageUrl,
                displayOrder: data.displayOrder || 0,
                isActive: data.isActive,
                translations: translations
            };

            this.categoryService.update(this.selectedCategory.id, updateRequest)
                .pipe(takeUntil(this.destroy$))
                .subscribe({
                    next: () => {
                        this.notificationService.success(this.translate.instant('MESSAGES.CATEGORY_UPDATED'));
                        this.closeModal();
                        this.loadCategories();
                    },
                    error: (error) => {
                        console.error('Failed to update category:', error);
                        this.notificationService.error(this.translate.instant('COMMON.ERROR'));
                    }
                });
        } else {
            const createRequest: CreateCategoryRequest = {
                parentId: data.parentId,
                name: name,
                slug: data.slug,
                description: description,
                imageUrl: data.imageUrl,
                displayOrder: data.displayOrder || 0,
                translations: translations
            };

            this.categoryService.create(createRequest)
                .pipe(takeUntil(this.destroy$))
                .subscribe({
                    next: () => {
                        this.notificationService.success(this.translate.instant('MESSAGES.CATEGORY_CREATED'));
                        this.closeModal();
                        this.loadCategories();
                    },
                    error: (error) => {
                        console.error('Failed to create category:', error);
                        this.notificationService.error(this.translate.instant('COMMON.ERROR'));
                    }
                });
        }
    }
}
