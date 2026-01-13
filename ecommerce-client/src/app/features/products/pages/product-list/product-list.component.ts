// ==============================================
// product-list.component.ts
// Products Management - Enterprise ERP Style
// Matching Reference Images (Desktop/Tablet/Mobile)
// ==============================================

import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, debounceTime, takeUntil, finalize, forkJoin, catchError, of } from 'rxjs';
import { ProductService, ProductListItem, ProductListResponse } from '../../services/product.service';
import { BrandService, Brand } from '../../../brands/services/brand.service';
import { CategoryService, Category } from '../../../categories/services/category.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { ConfirmModalComponent, ConfirmModalConfig } from '../../../../shared/components/confirm-modal/confirm-modal.component';
import { LanguageService } from '../../../../core/services/language.service';
import { InventoryService } from '../../../inventory/services/inventory.service';
import { ProductStock } from '../../../inventory/models/inventory.models';

// Stock status types
type StockStatus = 'in-stock' | 'low-stock' | 'out-of-stock';
type FilterType = 'all' | 'active' | 'inactive' | 'low-stock' | 'out-of-stock';
type SortField = 'updatedAt' | 'name' | 'unitPrice' | 'sku';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule, RouterModule, ReactiveFormsModule, TranslateModule, ConfirmModalComponent],
    templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit, OnDestroy {
    private destroy$ = new Subject<void>();

    // State
    products: ProductListItem[] = [];
    brands: Brand[] = [];
    categories: Category[] = [];
    isLoading = false;
    totalCount = 0;
    pageNumber = 1;
    pageSize = 10;

    // Inventory Stock Map (productId -> stock data)
    stockMap = new Map<number, ProductStock>();
    isLoadingStock = false;

    // Selection
    selectedProducts = new Set<number>();
    isAllSelected = false;

    // Filters & Sort
    searchControl = new FormControl('');
    brandControl = new FormControl<number | null>(null);
    categoryControl = new FormControl<number | null>(null);
    statusControl = new FormControl<boolean | null>(null);
    activeFilter: FilterType = 'all';
    sortField: SortField = 'updatedAt';
    sortDescending = true;
    showSortDropdown = false;

    // Responsive
    isMobile = false;
    isTablet = false;

    // Delete Confirmation Modal
    showDeleteModal = false;
    productToDelete: ProductListItem | null = null;
    deleteModalConfig: ConfirmModalConfig = {
        type: 'danger',
        title: '',
        message: '',
        confirmText: '',
        cancelText: ''
    };

    // Bulk delete
    showBulkDeleteModal = false;
    bulkDeleteModalConfig: ConfirmModalConfig = {
        type: 'danger',
        title: '',
        message: '',
        confirmText: '',
        cancelText: ''
    };

    constructor(
        private productService: ProductService,
        private brandService: BrandService,
        private categoryService: CategoryService,
        private translate: TranslateService,
        private notificationService: NotificationService,
        private languageService: LanguageService,
        private inventoryService: InventoryService
    ) {
        this.checkScreenSize();
    }

    @HostListener('window:resize')
    onResize() {
        this.checkScreenSize();
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
        const target = event.target as HTMLElement;
        if (!target.closest('.sort-dropdown')) {
            this.showSortDropdown = false;
        }
    }

    private checkScreenSize(): void {
        const width = window.innerWidth;
        this.isMobile = width < 768;
        this.isTablet = width >= 768 && width < 1024;
    }

    get dir(): string {
        return this.languageService.currentLanguage === 'ar' ? 'rtl' : 'ltr';
    }

    ngOnInit(): void {
        this.setupLanguageReactiveData();
        this.loadProducts();
        this.setupFilters();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    private setupLanguageReactiveData(): void {
        this.loadBrands();
        this.loadCategories();

        this.translate.onLangChange
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.brands = [];
                this.categories = [];
                this.products = [];
                this.loadBrands();
                this.loadCategories();
                this.loadProducts();
            });
    }

    private loadBrands(): void {
        this.brandService.getAll()
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: (brands) => this.brands = brands,
                error: (err) => console.error('Failed to load brands', err)
            });
    }

    private loadCategories(): void {
        this.categoryService.getDropdown()
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: (categories) => this.categories = categories,
                error: (err) => console.error('Failed to load categories', err)
            });
    }

    loadProducts(): void {
        this.isLoading = true;
        this.clearSelection();

        // Map filter to API params
        let isActive: boolean | undefined;
        if (this.activeFilter === 'active') isActive = true;
        else if (this.activeFilter === 'inactive') isActive = false;

        this.productService.getPaged(
            this.pageNumber,
            this.pageSize,
            this.searchControl.value || undefined,
            this.brandControl.value || undefined,
            this.categoryControl.value || undefined,
            isActive,
            undefined,
            undefined,
            this.sortField,
            this.sortDescending
        )
            .pipe(
                takeUntil(this.destroy$),
                finalize(() => this.isLoading = false)
            )
            .subscribe({
                next: (response: ProductListResponse) => {
                    this.products = response.items;
                    this.totalCount = response.totalCount;
                    // Load stock data for these products
                    this.loadStockData();
                },
                error: (err) => {
                    console.error('Failed to load products', err);
                    this.notificationService.error(this.translate.instant('COMMON.ERROR'));
                    this.products = [];
                    this.totalCount = 0;
                }
            });
    }

    private setupFilters(): void {
        this.searchControl.valueChanges
            .pipe(debounceTime(400), takeUntil(this.destroy$))
            .subscribe(() => {
                this.pageNumber = 1;
                this.loadProducts();
            });

        this.brandControl.valueChanges
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.pageNumber = 1;
                this.loadProducts();
            });

        this.categoryControl.valueChanges
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.pageNumber = 1;
                this.loadProducts();
            });
    }

    // Filter chips
    setFilter(filter: FilterType): void {
        this.activeFilter = filter;
        this.pageNumber = 1;
        this.loadProducts();
    }

    // Sort
    toggleSortDropdown(): void {
        this.showSortDropdown = !this.showSortDropdown;
    }

    setSort(field: SortField): void {
        if (this.sortField === field) {
            this.sortDescending = !this.sortDescending;
        } else {
            this.sortField = field;
            this.sortDescending = true;
        }
        this.showSortDropdown = false;
        this.loadProducts();
    }

    getSortLabel(): string {
        const labels: Record<SortField, string> = {
            updatedAt: 'PRODUCTS.SORT_LAST_UPDATED',
            name: 'PRODUCTS.SORT_NAME',
            unitPrice: 'PRODUCTS.SORT_PRICE',
            sku: 'PRODUCTS.SORT_SKU'
        };
        return this.translate.instant(labels[this.sortField]);
    }

    // Selection
    toggleSelection(productId: number): void {
        if (this.selectedProducts.has(productId)) {
            this.selectedProducts.delete(productId);
        } else {
            this.selectedProducts.add(productId);
        }
        this.updateAllSelectedState();
    }

    toggleSelectAll(): void {
        if (this.isAllSelected) {
            this.clearSelection();
        } else {
            this.products.forEach(p => this.selectedProducts.add(p.id));
            this.isAllSelected = true;
        }
    }

    clearSelection(): void {
        this.selectedProducts.clear();
        this.isAllSelected = false;
    }

    private updateAllSelectedState(): void {
        this.isAllSelected = this.products.length > 0 &&
            this.products.every(p => this.selectedProducts.has(p.id));
    }

    isSelected(productId: number): boolean {
        return this.selectedProducts.has(productId);
    }

    get selectedCount(): number {
        return this.selectedProducts.size;
    }

    // Bulk Actions
    bulkActivate(): void {
        const ids = Array.from(this.selectedProducts);
        // Implement bulk activation
        ids.forEach(id => {
            this.productService.toggleStatus(id, true)
                .pipe(takeUntil(this.destroy$))
                .subscribe();
        });
        this.notificationService.success(this.translate.instant('PRODUCTS.BULK_ACTIVATED'));
        this.clearSelection();
        setTimeout(() => this.loadProducts(), 500);
    }

    bulkDeactivate(): void {
        const ids = Array.from(this.selectedProducts);
        ids.forEach(id => {
            this.productService.toggleStatus(id, false)
                .pipe(takeUntil(this.destroy$))
                .subscribe();
        });
        this.notificationService.success(this.translate.instant('PRODUCTS.BULK_DEACTIVATED'));
        this.clearSelection();
        setTimeout(() => this.loadProducts(), 500);
    }

    confirmBulkDelete(): void {
        this.bulkDeleteModalConfig = {
            type: 'danger',
            title: this.translate.instant('PRODUCTS.BULK_DELETE_TITLE'),
            message: this.translate.instant('PRODUCTS.BULK_DELETE_MESSAGE', { count: this.selectedCount }),
            confirmText: this.translate.instant('PRODUCTS.BULK_DELETE_BUTTON'),
            cancelText: this.translate.instant('COMMON.CANCEL')
        };
        this.showBulkDeleteModal = true;
    }

    onConfirmBulkDelete(): void {
        const ids = Array.from(this.selectedProducts);
        let completed = 0;
        ids.forEach(id => {
            this.productService.delete(id)
                .pipe(takeUntil(this.destroy$))
                .subscribe({
                    next: () => {
                        completed++;
                        if (completed === ids.length) {
                            this.notificationService.success(this.translate.instant('PRODUCTS.BULK_DELETED'));
                            this.clearSelection();
                            this.loadProducts();
                        }
                    }
                });
        });
        this.showBulkDeleteModal = false;
    }

    closeBulkDeleteModal(): void {
        this.showBulkDeleteModal = false;
    }

    // Single product actions
    toggleStatus(product: ProductListItem): void {
        const newStatus = !product.isActive;
        const previousStatus = product.isActive;
        product.isActive = newStatus;

        this.productService.toggleStatus(product.id, newStatus)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: () => {
                    this.notificationService.success(this.translate.instant('MESSAGES.PRODUCT_STATUS_UPDATED'));
                },
                error: (err) => {
                    console.error('Failed to toggle status', err);
                    this.notificationService.error(this.translate.instant('COMMON.ERROR'));
                    product.isActive = previousStatus;
                }
            });
    }

    deleteProduct(product: ProductListItem): void {
        this.productToDelete = product;
        this.deleteModalConfig = {
            type: 'danger',
            title: this.translate.instant('PRODUCTS.DELETE_TITLE'),
            message: this.translate.instant('PRODUCTS.DELETE_MESSAGE'),
            confirmText: this.translate.instant('PRODUCTS.DELETE_BUTTON'),
            cancelText: this.translate.instant('COMMON.CANCEL'),
            itemName: product.name
        };
        this.showDeleteModal = true;
    }

    onConfirmDelete(): void {
        if (!this.productToDelete) return;

        this.productService.delete(this.productToDelete.id)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: () => {
                    this.products = this.products.filter(p => p.id !== this.productToDelete!.id);
                    this.totalCount--;
                    this.notificationService.success(this.translate.instant('MESSAGES.PRODUCT_DELETED'));
                    this.closeDeleteModal();
                },
                error: (err) => {
                    console.error('Failed to delete product', err);
                    this.notificationService.error(this.translate.instant('COMMON.ERROR'));
                    this.closeDeleteModal();
                }
            });
    }

    closeDeleteModal(): void {
        this.showDeleteModal = false;
        this.productToDelete = null;
    }

    // Pagination
    onPageChange(page: number): void {
        if (page < 1 || page > this.totalPages) return;
        this.pageNumber = page;
        this.loadProducts();
    }

    onPageSizeChange(size: number): void {
        this.pageSize = size;
        this.pageNumber = 1;
        this.loadProducts();
    }

    get totalPages(): number {
        return Math.ceil(this.totalCount / this.pageSize);
    }

    get pagesArray(): number[] {
        const pages: number[] = [];
        const maxVisible = 5;
        let start = Math.max(1, this.pageNumber - Math.floor(maxVisible / 2));
        let end = Math.min(this.totalPages, start + maxVisible - 1);

        if (end - start + 1 < maxVisible) {
            start = Math.max(1, end - maxVisible + 1);
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    }

    get showingFrom(): number {
        return (this.pageNumber - 1) * this.pageSize + 1;
    }

    get showingTo(): number {
        return Math.min(this.pageNumber * this.pageSize, this.totalCount);
    }

    // Helpers
    formatPrice(price: number): string {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price);
    }

    // Load stock data for all visible products
    private loadStockData(): void {
        if (this.products.length === 0) return;

        this.isLoadingStock = true;

        // Get all stock (could be optimized with specific product IDs)
        this.inventoryService.getAllStock().pipe(
            catchError(err => {
                console.error('Failed to load stock data', err);
                return of([]);
            }),
            takeUntil(this.destroy$)
        ).subscribe((stocks: ProductStock[]) => {
            // Build map for quick lookup
            this.stockMap.clear();
            stocks.forEach(stock => {
                // Aggregate by product if multiple warehouses
                const existing = this.stockMap.get(stock.productId);
                if (existing) {
                    // Sum up quantities across warehouses
                    this.stockMap.set(stock.productId, {
                        ...existing,
                        quantityOnHand: existing.quantityOnHand + stock.quantityOnHand,
                        quantityReserved: existing.quantityReserved + stock.quantityReserved,
                        quantityAvailable: existing.quantityAvailable + stock.quantityAvailable,
                        isLowStock: existing.isLowStock || stock.isLowStock
                    });
                } else {
                    this.stockMap.set(stock.productId, stock);
                }
            });
            this.isLoadingStock = false;
        });
    }

    getStockStatus(product: ProductListItem): StockStatus {
        const stock = this.stockMap.get(product.id);
        if (!stock) return 'out-of-stock'; // No stock record = out of stock
        if (stock.quantityAvailable <= 0) return 'out-of-stock';
        if (stock.isLowStock) return 'low-stock';
        return 'in-stock';
    }

    getStockQty(product: ProductListItem): number {
        const stock = this.stockMap.get(product.id);
        return stock?.quantityAvailable ?? 0;
    }

    getStockBadgeClass(status: StockStatus): string {
        switch (status) {
            case 'in-stock':
                return 'bg-emerald-100 text-emerald-700';
            case 'low-stock':
                return 'bg-amber-100 text-amber-700';
            case 'out-of-stock':
                return 'bg-red-100 text-red-700';
        }
    }

    getStatusBadgeClass(isActive: boolean): string {
        return isActive
            ? 'bg-emerald-100 text-emerald-700'
            : 'bg-slate-100 text-slate-600';
    }

    formatDate(date: string | undefined): string {
        if (!date) return '-';
        const d = new Date(date);
        const now = new Date();
        const diff = now.getTime() - d.getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        if (days === 0) return this.translate.instant('COMMON.TODAY');
        if (days === 1) return this.translate.instant('COMMON.YESTERDAY');
        if (days < 7) return this.translate.instant('COMMON.DAYS_AGO', { days });

        return d.toLocaleDateString();
    }
}
