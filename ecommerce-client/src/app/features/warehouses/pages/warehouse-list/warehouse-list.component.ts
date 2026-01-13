// ==============================================
// warehouse-list.component.ts
// Warehouse List - Enterprise ERP Style (Matching Product List)
// ==============================================

import { Component, OnInit, OnDestroy, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs';
import { WarehousesService } from '../../services/warehouses.service';
import { WarehouseListDto } from '../../models/warehouse.models';
import { HasPermissionDirective } from '../../../../shared/directives/has-permission.directive';
import { StatusConfirmDialogComponent } from '../../components/status-confirm-dialog/status-confirm-dialog.component';
import { LanguageService } from '../../../../core/services/language.service';
import { finalize } from 'rxjs';

@Component({
    selector: 'app-warehouse-list',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        TranslateModule,
        HasPermissionDirective,
        StatusConfirmDialogComponent
    ],
    templateUrl: './warehouse-list.component.html'
})
export class WarehouseListComponent implements OnInit, OnDestroy {
    private warehouseService = inject(WarehousesService);
    private languageService = inject(LanguageService);
    private destroy$ = new Subject<void>();

    // Data
    warehouses: WarehouseListDto[] = [];
    filteredWarehouses: WarehouseListDto[] = [];
    loading = false;

    // Filters
    searchControl = new FormControl('');
    statusFilter = new FormControl('');

    // Selection
    selectedIds = new Set<number>();

    // Dialog
    showDialog = false;
    selectedWarehouse: WarehouseListDto | null = null;

    // Mobile
    showMobileFilters = false;
    isMobile = false;

    get dir(): string {
        return this.languageService.currentLanguage === 'ar' ? 'rtl' : 'ltr';
    }

    @HostListener('window:resize')
    onResize() {
        this.isMobile = window.innerWidth < 768;
    }

    ngOnInit() {
        this.isMobile = window.innerWidth < 768;
        this.fetchWarehouses();

        // Search with debounce
        this.searchControl.valueChanges
            .pipe(
                takeUntil(this.destroy$),
                debounceTime(300),
                distinctUntilChanged()
            )
            .subscribe(() => this.applyFilters());

        // Status filter
        this.statusFilter.valueChanges
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.applyFilters());
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    fetchWarehouses(): void {
        this.loading = true;
        this.warehouseService.getAll()
            .pipe(
                takeUntil(this.destroy$),
                finalize(() => this.loading = false)
            )
            .subscribe({
                next: (data: WarehouseListDto[]) => {
                    this.warehouses = data;
                    this.applyFilters();
                },
                error: (err) => console.error('Error fetching warehouses:', err)
            });
    }

    applyFilters(): void {
        let result = [...this.warehouses];

        // Search filter
        const search = this.searchControl.value?.toLowerCase() || '';
        if (search) {
            result = result.filter(w =>
                w.name.toLowerCase().includes(search) ||
                w.code.toLowerCase().includes(search) ||
                w.location.toLowerCase().includes(search)
            );
        }

        // Status filter
        const status = this.statusFilter.value;
        if (status === 'active') {
            result = result.filter(w => w.isActive);
        } else if (status === 'inactive') {
            result = result.filter(w => !w.isActive);
        }

        this.filteredWarehouses = result;
    }

    getCountByStatus(active: boolean): number {
        return this.warehouses.filter(w => w.isActive === active).length;
    }

    // ==================== Selection ====================

    isSelected(id: number): boolean {
        return this.selectedIds.has(id);
    }

    toggleSelection(id: number): void {
        if (this.selectedIds.has(id)) {
            this.selectedIds.delete(id);
        } else {
            this.selectedIds.add(id);
        }
    }

    toggleSelectAll(event: Event): void {
        const checked = (event.target as HTMLInputElement).checked;
        if (checked) {
            this.filteredWarehouses.forEach(w => this.selectedIds.add(w.id));
        } else {
            this.selectedIds.clear();
        }
    }

    // ==================== Actions ====================

    confirmStatusToggle(warehouse: WarehouseListDto): void {
        this.selectedWarehouse = warehouse;
        this.showDialog = true;
    }

    toggleStatus(): void {
        if (!this.selectedWarehouse) return;

        this.showDialog = false;
        this.loading = true;

        const action = this.selectedWarehouse.isActive
            ? this.warehouseService.deactivate(this.selectedWarehouse.id)
            : this.warehouseService.activate(this.selectedWarehouse.id);

        action.pipe(
            takeUntil(this.destroy$),
            finalize(() => this.loading = false)
        )
            .subscribe({
                next: () => {
                    this.fetchWarehouses();
                    this.selectedWarehouse = null;
                },
                error: (err) => {
                    console.error('Error toggling status:', err);
                }
            });
    }

    setAsDefault(warehouse: WarehouseListDto): void {
        this.loading = true;
        this.warehouseService.setDefault(warehouse.id)
            .pipe(
                takeUntil(this.destroy$),
                finalize(() => this.loading = false)
            )
            .subscribe({
                next: () => this.fetchWarehouses(),
                error: (err) => console.error('Error setting default:', err)
            });
    }
}
