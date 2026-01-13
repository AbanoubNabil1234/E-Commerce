import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs';
import { BrandService, Brand } from '../../services/brand.service';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '../../../../core/services/notification.service';
import { ConfirmModalConfig } from '../../../../shared/components/confirm-modal/confirm-modal.component';

@Component({
    selector: 'app-brand-list',
    templateUrl: './brand-list.component.html',
    standalone: false
})
export class BrandListComponent implements OnInit, OnDestroy {
    brands: Brand[] = [];

    isLoading = false;
    totalCount = 0;
    pageSize = 10;
    pageNumber = 1;
    totalPages = 1;

    searchControl = new FormControl('');
    statusControl = new FormControl<boolean | null>(null);

    showModal = false;
    selectedBrand: Brand | null = null;

    // Delete Confirmation Modal
    showDeleteModal = false;
    brandToDelete: Brand | null = null;
    deleteModalConfig: ConfirmModalConfig = {
        type: 'danger',
        title: '',
        message: '',
        confirmText: '',
        cancelText: ''
    };

    private destroy$ = new Subject<void>();

    // Helper for pagination template
    get Math() { return Math; }
    get pages() {
        return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }

    // KPI Helpers
    getActiveCount(): number {
        return this.brands.filter(b => b.isActive).length;
    }

    getInactiveCount(): number {
        return this.brands.filter(b => !b.isActive).length;
    }

    constructor(
        private brandService: BrandService,
        private languageService: LanguageService,
        private translate: TranslateService,
        private notificationService: NotificationService
    ) { }

    ngOnInit(): void {
        // Setup ngx-translate
        this.translate.use(this.languageService.currentLanguage);

        // Subscribe to language changes
        this.languageService.currentLanguage$
            .pipe(takeUntil(this.destroy$))
            .subscribe(lang => {
                this.translate.use(lang);
                this.loadBrands(); // Reload data in new language
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
                this.loadBrands();
            });

        // Status filter changes
        this.statusControl.valueChanges
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.pageNumber = 1;
                this.loadBrands();
            });

        // Initial load
        this.loadBrands();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    loadBrands(): void {
        this.isLoading = true;

        const search = this.searchControl.value || undefined;
        const isActive = this.statusControl.value ?? undefined;

        this.brandService.getPaged(this.pageNumber, this.pageSize, search, isActive)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: (response) => {
                    this.brands = response.items;
                    this.totalCount = response.totalCount;
                    this.totalPages = response.totalPages || Math.ceil(response.totalCount / this.pageSize);
                    this.isLoading = false;
                },
                error: (error) => {
                    console.error('Failed to load brands:', error);
                    this.isLoading = false;
                    this.notificationService.error(this.translate.instant('COMMON.ERROR'));
                    // Fallback to empty state
                    this.brands = [];
                    this.totalCount = 0;
                }
            });
    }

    onPageChange(page: number): void {
        if (page < 1 || page > this.totalPages) return;
        this.pageNumber = page;
        this.loadBrands();
    }

    toggleStatus(brand: Brand): void {
        this.brandService.toggleStatus(brand)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: (updated) => {
                    // Update local state
                    const index = this.brands.findIndex(b => b.id === brand.id);
                    if (index !== -1) {
                        this.brands[index].isActive = !brand.isActive;
                    }
                    this.notificationService.success(this.translate.instant('MESSAGES.BRAND_STATUS_UPDATED'));
                },
                error: (error) => {
                    console.error('Failed to toggle brand status:', error);
                    this.notificationService.error(this.translate.instant('COMMON.ERROR'));
                }
            });
    }

    openAddModal(): void {
        this.selectedBrand = null;
        this.showModal = true;
    }

    editBrand(brand: Brand): void {
        this.selectedBrand = { ...brand };
        this.showModal = true;
    }

    // Delete with confirmation modal
    deleteBrand(brand: Brand): void {
        this.brandToDelete = brand;
        this.deleteModalConfig = {
            type: 'danger',
            title: this.translate.instant('BRANDS.DELETE_TITLE'),
            message: this.translate.instant('BRANDS.DELETE_MESSAGE'),
            confirmText: this.translate.instant('BRANDS.DELETE_BUTTON'),
            cancelText: this.translate.instant('COMMON.CANCEL'),
            itemName: brand.name
        };
        this.showDeleteModal = true;
    }

    onConfirmDelete(): void {
        if (!this.brandToDelete) return;

        this.brandService.delete(this.brandToDelete.id)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: () => {
                    this.notificationService.success(this.translate.instant('MESSAGES.BRAND_DELETED'));
                    this.loadBrands();
                    this.closeDeleteModal();
                },
                error: (error) => {
                    console.error('Failed to delete brand:', error);
                    this.notificationService.error(this.translate.instant('COMMON.ERROR'));
                    this.closeDeleteModal();
                }
            });
    }

    closeDeleteModal(): void {
        this.showDeleteModal = false;
        this.brandToDelete = null;
    }

    closeModal(): void {
        this.showModal = false;
        this.selectedBrand = null;
    }

    onSaveBrand(brandData: any): void {
        // Extract name from English translation (primary)
        const enTranslation = brandData.translations?.find((t: any) => t.languageCode === 'en');
        const name = enTranslation?.name || '';
        const description = enTranslation?.description || '';

        // Map translations with slug
        const translations = (brandData.translations || []).map((t: any) => ({
            languageCode: t.languageCode,
            name: t.name,
            description: t.description || '',
            slug: brandData.slug // Use same slug for all translations
        }));

        if (this.selectedBrand) {
            // Update existing brand
            const updateRequest = {
                id: this.selectedBrand.id,
                name: name,
                slug: brandData.slug,
                description: description,
                logoUrl: brandData.logoUrl,
                website: brandData.website,
                isActive: brandData.isActive,
                translations: translations
            };

            this.brandService.update(this.selectedBrand.id, updateRequest)
                .pipe(takeUntil(this.destroy$))
                .subscribe({
                    next: (updatedBrand) => {
                        this.notificationService.success(this.translate.instant('MESSAGES.BRAND_UPDATED'));
                        this.closeModal();
                        this.loadBrands();
                    },
                    error: (error) => {
                        console.error('Failed to update brand:', error);
                        this.notificationService.error(this.translate.instant('COMMON.ERROR'));
                    }
                });
        } else {
            // Create new brand
            const createRequest = {
                name: name,
                slug: brandData.slug,
                description: description,
                logoUrl: brandData.logoUrl,
                website: brandData.website,
                translations: translations
            };

            this.brandService.create(createRequest)
                .pipe(takeUntil(this.destroy$))
                .subscribe({
                    next: (newBrand) => {
                        this.notificationService.success(this.translate.instant('MESSAGES.BRAND_CREATED'));
                        this.closeModal();
                        this.loadBrands();
                    },
                    error: (error) => {
                        console.error('Failed to create brand:', error);
                        this.notificationService.error(this.translate.instant('COMMON.ERROR'));
                    }
                });
        }
    }
}

