// ==============================================
// inventory-details.component.ts
// Inventory Details - Enterprise ERP Style
// ==============================================

import { Component, OnInit, OnDestroy, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { InventoryService } from '../../services/inventory.service';
import { AdjustStockDialogComponent } from '../../components/adjust-stock-dialog/adjust-stock-dialog.component';
import { StockStatusBadgeComponent } from '../../components/stock-status-badge/stock-status-badge.component';
import { ProductStock, StockMovement, AdjustmentType } from '../../models/inventory.models';
import { LanguageService } from '../../../../core/services/language.service';

@Component({
    selector: 'app-inventory-details',
    standalone: true,
    imports: [CommonModule, RouterModule, TranslateModule, AdjustStockDialogComponent, StockStatusBadgeComponent],
    templateUrl: './inventory-details.component.html'
})
export class InventoryDetailsComponent implements OnInit, OnDestroy {
    private route = inject(ActivatedRoute);
    private inventoryService = inject(InventoryService);
    private translate = inject(TranslateService);
    private languageService = inject(LanguageService);
    private destroy$ = new Subject<void>();

    productId!: number;
    warehouseId!: number;

    // Data Signals
    stock = signal<ProductStock | null>(null);
    movements = signal<StockMovement[]>([]);
    isLoading = signal<boolean>(true);

    // Modal State
    isModalOpen = false;
    modalType: AdjustmentType = AdjustmentType.SetAbsolute;
    isSubmitting = false;

    // Permissions
    canAdjust = true;
    canTransfer = true;

    // Responsive
    isMobile = false;

    get dir(): string {
        return this.languageService.currentLanguage === 'ar' ? 'rtl' : 'ltr';
    }

    @HostListener('window:resize')
    onResize() {
        this.checkScreenSize();
    }

    private checkScreenSize(): void {
        this.isMobile = window.innerWidth < 768;
    }

    ngOnInit() {
        this.checkScreenSize();
        this.route.paramMap
            .pipe(takeUntil(this.destroy$))
            .subscribe(params => {
                this.productId = +params.get('id')!;
                this.route.queryParamMap
                    .pipe(takeUntil(this.destroy$))
                    .subscribe(queryParams => {
                        this.warehouseId = +queryParams.get('warehouseId')! || 1;
                        this.loadData();
                    });
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    loadData(): void {
        this.isLoading.set(true);

        // Load stock details
        this.inventoryService.getStockByProduct(this.productId, this.warehouseId)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: (data: ProductStock) => {
                    this.stock.set(data);
                    this.isLoading.set(false);
                },
                error: () => this.isLoading.set(false)
            });

        // Load movements
        this.inventoryService.getMovementHistory(this.productId, this.warehouseId)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: (data: StockMovement[]) => this.movements.set(data)
            });
    }

    // ==================== Modal Actions ====================

    openAdjustModal(type: number): void {
        this.modalType = type;
        this.isModalOpen = true;
    }

    openTransferModal(): void {
        // TODO: Implement transfer modal
        console.log('Transfer modal not implemented yet');
    }

    onModalClose(): void {
        this.isModalOpen = false;
    }

    onModalConfirm(event: { quantity: number, reason: string }): void {
        if (!this.stock()) return;

        this.isSubmitting = true;

        const request = {
            productId: this.productId,
            warehouseId: this.warehouseId,
            quantity: event.quantity,
            adjustmentType: this.modalType,
            reason: event.reason
        };

        this.inventoryService.adjustStock(request)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: (updatedStock: ProductStock) => {
                    this.stock.set(updatedStock);
                    this.isSubmitting = false;
                    this.isModalOpen = false;
                    // Refresh history
                    this.inventoryService.getMovementHistory(this.productId, this.warehouseId)
                        .pipe(takeUntil(this.destroy$))
                        .subscribe(data => this.movements.set(data));
                },
                error: (err) => {
                    console.error('Adjustment failed', err);
                    this.isSubmitting = false;
                }
            });
    }

    // ==================== Movement Type Helpers ====================

    getMovementBadgeClass(type: number): string {
        // 0: In, 1: Out, 2: Adjustment, 3: Reserve, 4: Release
        switch (type) {
            case 0: return 'bg-emerald-100 text-emerald-700';  // Inbound
            case 1: return 'bg-red-100 text-red-700';          // Outbound
            case 2: return 'bg-slate-100 text-slate-700';      // Adjustment
            case 3: return 'bg-amber-100 text-amber-700';      // Reserve
            case 4: return 'bg-blue-100 text-blue-700';        // Release/Transfer
            default: return 'bg-slate-100 text-slate-700';
        }
    }

    getMovementDotClass(type: number): string {
        switch (type) {
            case 0: return 'bg-emerald-500';
            case 1: return 'bg-red-500';
            case 2: return 'bg-slate-500';
            case 3: return 'bg-amber-500';
            case 4: return 'bg-blue-500';
            default: return 'bg-slate-500';
        }
    }

    getMovementLabel(type: number): string {
        switch (type) {
            case 0: return this.translate.instant('INVENTORY.TYPE_IN') || 'Inbound';
            case 1: return this.translate.instant('INVENTORY.TYPE_OUT') || 'Outbound';
            case 2: return this.translate.instant('INVENTORY.TYPE_ADJUSTMENT') || 'Adjustment';
            case 3: return this.translate.instant('INVENTORY.TYPE_RESERVE') || 'Reserve';
            case 4: return this.translate.instant('INVENTORY.TYPE_TRANSFER') || 'Transfer';
            default: return 'Other';
        }
    }

    // ==================== Utility Methods ====================

    getInitials(name: string | undefined): string {
        if (!name) return 'SY';
        const parts = name.split(' ');
        if (parts.length >= 2) {
            return (parts[0][0] + parts[1][0]).toUpperCase();
        }
        return name.substring(0, 2).toUpperCase();
    }

    getReferenceLink(move: StockMovement): string[] {
        if (move.referenceType === 'Order') {
            return ['/orders', move.referenceId?.toString() || ''];
        }
        if (move.referenceType === 'Transfer') {
            return ['/inventory/transfers', move.referenceId?.toString() || ''];
        }
        return ['/inventory'];
    }

    getAvailabilityPercent(): number {
        const currentStock = this.stock();
        if (!currentStock || currentStock.quantityOnHand === 0) return 0;
        const percent = Math.round((currentStock.quantityAvailable / currentStock.quantityOnHand) * 100);
        return Math.min(100, Math.max(0, percent));
    }

    get MovementType() { return AdjustmentType; }
}
