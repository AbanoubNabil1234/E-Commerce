// ==============================================
// product-detail.component.ts
// Product Details with Real Inventory Integration
// ==============================================

import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, switchMap, takeUntil, merge, forkJoin, of, catchError } from 'rxjs';
import { ProductService, Product } from '../../services/product.service';
import { LanguageService } from '../../../../core/services/language.service';
import { InventoryService } from '../../../inventory/services/inventory.service';
import { WarehousesService } from '../../../warehouses/services/warehouses.service';
import { ProductStock, StockMovement, ProductStockSummary } from '../../../inventory/models/inventory.models';
import { WarehouseListDto } from '../../../warehouses/models/warehouse.models';

@Component({
    selector: 'app-product-detail',
    standalone: true,
    imports: [CommonModule, RouterModule, TranslateModule],
    templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    private destroy$ = new Subject<void>();

    product: Product | null = null;
    isLoading = false;
    error: string | null = null;
    private productId: number | null = null;

    // Image Gallery
    selectedImageIndex = 0;

    // Responsive
    isMobile = false;
    isTablet = false;

    // Inventory Data (Real)
    warehouses: WarehouseListDto[] = [];
    selectedWarehouseId: number | null = null;
    stockSummary: ProductStockSummary | null = null;
    productStock: ProductStock | null = null;
    stockMovements: StockMovement[] = [];
    isLoadingInventory = false;
    inventoryError: string | null = null;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private productService: ProductService,
        private translate: TranslateService,
        private languageService: LanguageService,
        private inventoryService: InventoryService,
        private warehousesService: WarehousesService
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

    get dir(): string {
        return this.languageService.currentLanguage === 'ar' ? 'rtl' : 'ltr';
    }

    get imageCount(): number {
        return this.product?.images?.length || 0;
    }

    get currentImageNumber(): number {
        return this.selectedImageIndex + 1;
    }

    get selectedWarehouse(): WarehouseListDto | undefined {
        return this.warehouses.find(w => w.id === this.selectedWarehouseId);
    }

    ngOnInit(): void {
        this.isLoading = true;

        // Load warehouses first
        this.warehousesService.getActive().pipe(
            takeUntil(this.destroy$)
        ).subscribe({
            next: (warehouses) => {
                this.warehouses = warehouses;
                // Select default or first warehouse
                const defaultWh = warehouses.find(w => w.isDefault) || warehouses[0];
                if (defaultWh) {
                    this.selectedWarehouseId = defaultWh.id;
                }
            },
            error: (err) => console.error('Error loading warehouses:', err)
        });

        // Load product when route changes OR language changes
        merge(
            this.route.paramMap,
            this.translate.onLangChange
        ).pipe(
            switchMap(() => {
                const id = this.productId || Number(this.route.snapshot.paramMap.get('id'));
                if (!id) throw new Error('Invalid Product ID');
                this.productId = id;
                this.isLoading = true;
                this.product = null;
                return this.productService.getById(id);
            }),
            takeUntil(this.destroy$)
        ).subscribe({
            next: (product) => {
                this.product = product;
                if (product.images && product.images.length > 0) {
                    this.selectedImageIndex = 0;
                }
                this.isLoading = false;

                // Load inventory data
                this.loadInventoryData();
            },
            error: (err) => {
                console.error('Error loading product:', err);
                this.error = 'PRODUCTS.LOAD_ERROR';
                this.isLoading = false;
            }
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    // ==================== Inventory ==================== //

    private loadInventoryData(): void {
        if (!this.productId) return;

        this.isLoadingInventory = true;
        this.inventoryError = null;

        // Load stock summary and movements
        forkJoin({
            summary: this.inventoryService.getStockSummary(this.productId).pipe(
                catchError(err => {
                    console.error('Error loading stock summary:', err);
                    return of(null);
                })
            ),
            movements: this.inventoryService.getMovementHistory(this.productId, undefined, 1, 5).pipe(
                catchError(err => {
                    console.error('Error loading movements:', err);
                    return of([]);
                })
            )
        }).subscribe({
            next: (result) => {
                this.stockSummary = result.summary;
                this.stockMovements = result.movements;
                this.isLoadingInventory = false;

                // Load specific warehouse stock if warehouse selected
                if (this.selectedWarehouseId) {
                    this.loadWarehouseStock();
                }
            },
            error: (err) => {
                console.error('Error loading inventory:', err);
                this.inventoryError = 'INVENTORY.LOAD_ERROR';
                this.isLoadingInventory = false;
            }
        });
    }

    private loadWarehouseStock(): void {
        if (!this.productId || !this.selectedWarehouseId) return;

        this.inventoryService.getStockByProduct(this.productId, this.selectedWarehouseId).pipe(
            catchError(err => {
                console.error('Error loading warehouse stock:', err);
                return of(null);
            }),
            takeUntil(this.destroy$)
        ).subscribe(stock => {
            this.productStock = stock;
        });
    }

    onWarehouseChange(warehouseId: number): void {
        this.selectedWarehouseId = warehouseId;
        this.loadWarehouseStock();
    }

    getStockStatus(): 'in-stock' | 'low-stock' | 'out-of-stock' {
        if (!this.productStock) {
            if (this.stockSummary) {
                if (this.stockSummary.totalQuantityAvailable <= 0) return 'out-of-stock';
                if (this.stockSummary.isLowStock) return 'low-stock';
                return 'in-stock';
            }
            return 'out-of-stock';
        }
        if (this.productStock.quantityAvailable <= 0) return 'out-of-stock';
        if (this.productStock.isLowStock) return 'low-stock';
        return 'in-stock';
    }

    getStockStatusClass(): string {
        switch (this.getStockStatus()) {
            case 'in-stock': return 'bg-emerald-100 text-emerald-700';
            case 'low-stock': return 'bg-amber-100 text-amber-700';
            case 'out-of-stock': return 'bg-red-100 text-red-700';
            default: return 'bg-slate-100 text-slate-700';
        }
    }

    getStockStatusLabel(): string {
        switch (this.getStockStatus()) {
            case 'in-stock': return 'INVENTORY.IN_STOCK';
            case 'low-stock': return 'INVENTORY.LOW_STOCK';
            case 'out-of-stock': return 'INVENTORY.OUT_OF_STOCK';
            default: return '';
        }
    }

    getMovementTypeLabel(type: number): string {
        const labels: Record<number, string> = {
            0: 'INVENTORY.TYPE_IN',
            1: 'INVENTORY.TYPE_OUT',
            2: 'INVENTORY.TYPE_TRANSFER',
            3: 'INVENTORY.TYPE_ADJUSTMENT',
            4: 'INVENTORY.TYPE_DAMAGED',
            5: 'INVENTORY.TYPE_RETURN'
        };
        return labels[type] || 'INVENTORY.TYPE_OTHER';
    }

    getMovementTypeClass(type: number): string {
        switch (type) {
            case 0: return 'text-emerald-600'; // In
            case 1: return 'text-red-600';     // Out
            case 2: return 'text-blue-600';    // Transfer
            case 3: return 'text-amber-600';   // Adjustment
            case 4: return 'text-red-600';     // Damaged
            case 5: return 'text-purple-600';  // Return
            default: return 'text-slate-600';
        }
    }

    // ==================== Image Gallery ==================== //

    get selectedImageUrl(): string | undefined {
        if (!this.product?.images?.length) return this.product?.primaryImageUrl;
        return this.product.images[this.selectedImageIndex]?.imageUrl;
    }

    onImageSelect(index: number): void {
        this.selectedImageIndex = index;
    }

    nextImage(): void {
        if (this.product?.images?.length) {
            this.selectedImageIndex = (this.selectedImageIndex + 1) % this.product.images.length;
        }
    }

    prevImage(): void {
        if (this.product?.images?.length) {
            this.selectedImageIndex = (this.selectedImageIndex - 1 + this.product.images.length) % this.product.images.length;
        }
    }

    // ==================== Formatters ==================== //

    formatPrice(price: number): string {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
    }

    formatDate(dateStr: string): string {
        const date = new Date(dateStr);
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        if (days === 0) return this.translate.instant('COMMON.TODAY');
        if (days === 1) return this.translate.instant('COMMON.YESTERDAY');
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }

    formatTime(dateStr: string): string {
        const date = new Date(dateStr);
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    }

    // ==================== Navigation ==================== //

    goBack(): void {
        this.router.navigate(['/products']);
    }

    editProduct(): void {
        if (this.product) {
            this.router.navigate(['/products', this.product.id, 'edit']);
        }
    }

    adjustStock(): void {
        // Navigate to inventory adjustment or open modal
        if (this.product) {
            this.router.navigate(['/inventory'], {
                queryParams: {
                    productId: this.product.id,
                    warehouseId: this.selectedWarehouseId
                }
            });
        }
    }

    viewInventoryHistory(): void {
        if (this.product) {
            this.router.navigate(['/inventory'], {
                queryParams: { productId: this.product.id }
            });
        }
    }
}
