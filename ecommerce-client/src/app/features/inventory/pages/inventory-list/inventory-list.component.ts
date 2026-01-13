// ==============================================
// inventory-list.component.ts
// Inventory Management - Enterprise ERP Style
// ==============================================

import { Component, inject, signal, computed, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Subject, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs';
import { InventoryService } from '../../services/inventory.service';
import { WarehousesService } from '../../../warehouses/services/warehouses.service';
import { WarehouseListDto } from '../../../warehouses/models/warehouse.models';
import { StockStatusBadgeComponent } from '../../components/stock-status-badge/stock-status-badge.component';
import { AdjustStockDialogComponent } from '../../components/adjust-stock-dialog/adjust-stock-dialog.component';
import { ProductStock, AdjustmentType, AdjustStockRequest, TransferStockRequest } from '../../models/inventory.models';
import { LanguageService } from '../../../../core/services/language.service';

interface WarehouseStockGroup {
    warehouseId: number;
    warehouseName: string;
    productCount: number;
    stocks: ProductStock[];
}

@Component({
    selector: 'app-inventory-list',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
        StockStatusBadgeComponent,
        ReactiveFormsModule,
        FormsModule,
        AdjustStockDialogComponent
    ],
    templateUrl: './inventory-list.component.html'
})
export class InventoryListComponent implements OnInit, OnDestroy {
    private inventoryService = inject(InventoryService);
    private warehouseService = inject(WarehousesService);
    private languageService = inject(LanguageService);
    private translateService = inject(TranslateService);
    private destroy$ = new Subject<void>();

    // Signals
    stocks = signal<ProductStock[]>([]);
    warehouses = signal<WarehouseListDto[]>([]);
    isLoading = signal<boolean>(true);

    // Computed: Stocks grouped by warehouse
    stocksByWarehouse = computed<WarehouseStockGroup[]>(() => {
        const allStocks = this.stocks();
        const groupMap = new Map<number, WarehouseStockGroup>();

        for (const stock of allStocks) {
            if (!groupMap.has(stock.warehouseId)) {
                groupMap.set(stock.warehouseId, {
                    warehouseId: stock.warehouseId,
                    warehouseName: stock.warehouseName,
                    productCount: 0,
                    stocks: []
                });
            }
            const group = groupMap.get(stock.warehouseId)!;
            group.stocks.push(stock);
            group.productCount++;
        }

        return Array.from(groupMap.values()).sort((a, b) =>
            a.warehouseName.localeCompare(b.warehouseName)
        );
    });

    // Filters
    searchControl = new FormControl('');
    selectedWarehouseId: number | undefined;
    selectedStatus: string | undefined;
    lowStockOnly = false;

    // Adjust Stock Dialog
    adjustDialogOpen = false;
    adjustDialogStock: ProductStock | null = null;
    adjustDialogType: AdjustmentType = AdjustmentType.Increase;
    adjustDialogSubmitting = false;

    // Transfer Stock Dialog
    transferDialogOpen = false;
    transferDialogStock: ProductStock | null = null;
    transferDialogSubmitting = false;
    transferTargetWarehouseId: number | null = null;
    transferQuantity = 0;
    transferReason = '';

    // Responsive
    isMobile = false;
    isTablet = false;

    // Toast notification
    toastMessage = '';
    toastType: 'success' | 'error' = 'success';
    showToast = false;

    get dir(): string {
        return this.languageService.currentLanguage === 'ar' ? 'rtl' : 'ltr';
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
        this.checkScreenSize();
        this.loadWarehouses();
        this.loadData();

        // Search debounce
        this.searchControl.valueChanges
            .pipe(
                takeUntil(this.destroy$),
                debounceTime(300),
                distinctUntilChanged()
            )
            .subscribe(() => {
                this.loadData();
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    loadWarehouses(): void {
        this.warehouseService.getActive()
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: (data: WarehouseListDto[]) => this.warehouses.set(data),
                error: () => console.error('Failed to load warehouses')
            });
    }

    loadData(): void {
        this.isLoading.set(true);
        this.inventoryService.getAllStock(this.selectedWarehouseId, this.lowStockOnly || undefined).subscribe({
            next: (data: ProductStock[]) => {
                // Apply client-side filtering for search and status
                let filtered = data;

                // Search filter
                const search = this.searchControl.value?.toLowerCase() || '';
                if (search) {
                    filtered = filtered.filter(s =>
                        s.productName.toLowerCase().includes(search) ||
                        s.productSKU.toLowerCase().includes(search) ||
                        s.warehouseName.toLowerCase().includes(search)
                    );
                }

                // Status filter
                if (this.selectedStatus) {
                    filtered = filtered.filter(s => {
                        const status = this.getStockStatus(s);
                        return status === this.selectedStatus;
                    });
                }

                this.stocks.set(filtered);
                this.isLoading.set(false);
            },
            error: () => this.isLoading.set(false)
        });
    }

    private getStockStatus(stock: ProductStock): string {
        if (stock.quantityOnHand <= 0) return 'out_of_stock';
        if (stock.quantityOnHand <= (stock.reorderLevel ?? 0)) return 'low_stock';
        return 'in_stock';
    }

    onWarehouseChange(event: Event): void {
        const value = (event.target as HTMLSelectElement).value;
        this.selectedWarehouseId = value ? +value : undefined;
        this.loadData();
    }

    onStatusChange(event: Event): void {
        const value = (event.target as HTMLSelectElement).value;
        this.selectedStatus = value || undefined;
        this.loadData();
    }

    onLowStockToggle(): void {
        this.lowStockOnly = !this.lowStockOnly;
        this.loadData();
    }

    // ==================== Adjust Stock Dialog ====================

    openAdjustDialog(stock: ProductStock, type: 'increase' | 'decrease'): void {
        this.adjustDialogStock = stock;
        this.adjustDialogType = type === 'increase' ? AdjustmentType.Increase : AdjustmentType.Decrease;
        this.adjustDialogOpen = true;
    }

    closeAdjustDialog(): void {
        this.adjustDialogOpen = false;
        this.adjustDialogStock = null;
        this.adjustDialogSubmitting = false;
    }

    confirmAdjustStock(data: { quantity: number; reason: string }): void {
        if (!this.adjustDialogStock) return;

        this.adjustDialogSubmitting = true;

        const request: AdjustStockRequest = {
            productId: this.adjustDialogStock.productId,
            warehouseId: this.adjustDialogStock.warehouseId,
            quantity: data.quantity,
            adjustmentType: this.adjustDialogType,
            reason: data.reason
        };

        this.inventoryService.adjustStock(request)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: () => {
                    this.closeAdjustDialog();
                    this.loadData();
                    this.showNotification('success', 'INVENTORY.ADJUST_SUCCESS');
                },
                error: (err) => {
                    this.adjustDialogSubmitting = false;
                    this.showNotification('error', 'INVENTORY.ADJUST_ERROR');
                    console.error('Adjust stock error:', err);
                }
            });
    }

    // ==================== Transfer Stock Dialog ====================

    openTransferDialog(stock: ProductStock): void {
        this.transferDialogStock = stock;
        this.transferDialogOpen = true;
        this.transferQuantity = 0;
        this.transferReason = '';
        this.transferTargetWarehouseId = null;
    }

    closeTransferDialog(): void {
        this.transferDialogOpen = false;
        this.transferDialogStock = null;
        this.transferDialogSubmitting = false;
    }

    confirmTransferStock(): void {
        if (!this.transferDialogStock || !this.transferTargetWarehouseId || this.transferQuantity <= 0) return;

        this.transferDialogSubmitting = true;

        const request: TransferStockRequest = {
            productId: this.transferDialogStock.productId,
            sourceWarehouseId: this.transferDialogStock.warehouseId,
            destinationWarehouseId: this.transferTargetWarehouseId,
            quantity: this.transferQuantity,
            reason: this.transferReason
        };

        this.inventoryService.transferStock(request)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: () => {
                    this.closeTransferDialog();
                    this.loadData();
                    this.showNotification('success', 'INVENTORY.TRANSFER_SUCCESS');
                },
                error: (err) => {
                    this.transferDialogSubmitting = false;
                    this.showNotification('error', 'INVENTORY.TRANSFER_ERROR');
                    console.error('Transfer stock error:', err);
                }
            });
    }

    getAvailableWarehousesForTransfer(): WarehouseListDto[] {
        if (!this.transferDialogStock) return [];
        return this.warehouses().filter(w => w.id !== this.transferDialogStock!.warehouseId);
    }

    // ==================== Toast Notification ====================

    private showNotification(type: 'success' | 'error', key: string): void {
        this.toastType = type;
        this.toastMessage = this.translateService.instant(key);
        this.showToast = true;
        setTimeout(() => this.showToast = false, 3000);
    }
}
