import { Component, OnInit, OnDestroy, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs';
import { ShipmentsService } from '../../services/shipments.service';
import { ShipmentListItem, ShipmentFilter } from '../../models/shipment.model';
import { ShipmentStatus } from '../../models/shipment-status.enum';
import { WarehousesService } from '../../../warehouses/services/warehouses.service';
import { WarehouseListDto } from '../../../warehouses/models/warehouse.models';

@Component({
    selector: 'app-shipment-list',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule, TranslateModule],
    templateUrl: './shipment-list.component.html'
})
export class ShipmentListComponent implements OnInit, OnDestroy {
    private shipmentService = inject(ShipmentsService);
    private warehouseService = inject(WarehousesService);
    private translateService = inject(TranslateService);
    private destroy$ = new Subject<void>();

    // Make Math available in template
    Math = Math;

    // Data
    shipments = signal<ShipmentListItem[]>([]);
    warehouses = signal<WarehouseListDto[]>([]);
    loading = signal(false);
    error = signal<string | null>(null);

    // Pagination
    currentPage = signal(1);
    pageSize = signal(10);
    totalCount = signal(0);
    totalPages = signal(0);

    // Filters
    searchTerm = signal('');
    statusFilter = signal<ShipmentStatus | null>(null);
    warehouseFilter = signal<number | null>(null);
    searchSubject = new Subject<string>();

    // Stats
    stats = signal({ totalActive: 0, atRisk: 0, deliveredToday: 0 });

    // Enums for template
    ShipmentStatus = ShipmentStatus;
    statuses = Object.values(ShipmentStatus);

    // Toast
    showToast = false;
    toastMessage = '';
    toastType: 'success' | 'error' = 'success';

    ngOnInit(): void {
        this.loadShipments();
        this.loadWarehouses();
        this.setupSearch();
        this.calculateStats();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    setupSearch(): void {
        this.searchSubject.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.currentPage.set(1);
            this.loadShipments();
        });
    }

    loadShipments(): void {
        this.loading.set(true);
        this.error.set(null);

        const filter: ShipmentFilter = {
            pageNumber: this.currentPage(),
            pageSize: this.pageSize(),
            search: this.searchTerm() || undefined,
            status: this.statusFilter() || undefined,
            warehouseId: this.warehouseFilter() || undefined
        };

        this.shipmentService.getList(filter)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: (response) => {
                    this.shipments.set(response.items);
                    this.totalCount.set(response.totalCount);
                    this.totalPages.set(response.totalPages);
                    this.loading.set(false);
                    this.calculateStats();
                },
                error: (err) => {
                    console.error('Failed to load shipments:', err);
                    this.error.set('Failed to load shipments');
                    this.loading.set(false);
                }
            });
    }

    loadWarehouses(): void {
        this.warehouseService.getAll()
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: (data) => this.warehouses.set(data),
                error: (err) => console.error('Failed to load warehouses:', err)
            });
    }

    calculateStats(): void {
        const all = this.shipments();
        const stats = {
            totalActive: all.filter(s =>
                s.status !== ShipmentStatus.Delivered &&
                s.status !== ShipmentStatus.Cancelled
            ).length,
            atRisk: all.filter(s =>
                s.status === ShipmentStatus.Delayed ||
                s.status === ShipmentStatus.Failed
            ).length,
            deliveredToday: all.filter(s => s.status === ShipmentStatus.Delivered).length
        };
        this.stats.set(stats);
    }

    onSearchChange(term: string): void {
        this.searchTerm.set(term);
        this.searchSubject.next(term);
    }

    onStatusChange(status: string): void {
        this.statusFilter.set(status ? status as ShipmentStatus : null);
        this.currentPage.set(1);
        this.loadShipments();
    }

    onWarehouseChange(warehouseId: number | null): void {
        this.warehouseFilter.set(warehouseId);
        this.currentPage.set(1);
        this.loadShipments();
    }

    goToPage(page: number): void {
        if (page >= 1 && page <= this.totalPages()) {
            this.currentPage.set(page);
            this.loadShipments();
        }
    }

    // Actions
    async markAsShipped(id: number): Promise<void> {
        try {
            await this.shipmentService.markAsShipped(id).toPromise();
            this.showNotification('success', 'SHIPMENTS.SHIPPED_SUCCESS');
            this.loadShipments();
        } catch {
            this.showNotification('error', 'SHIPMENTS.SHIPPED_ERROR');
        }
    }

    async markAsDelivered(id: number): Promise<void> {
        try {
            await this.shipmentService.markAsDelivered(id).toPromise();
            this.showNotification('success', 'SHIPMENTS.DELIVERED_SUCCESS');
            this.loadShipments();
        } catch {
            this.showNotification('error', 'SHIPMENTS.DELIVERED_ERROR');
        }
    }

    getStatusClass(status: ShipmentStatus): string {
        const classes: Record<ShipmentStatus, string> = {
            [ShipmentStatus.Pending]: 'bg-amber-100 text-amber-800',
            [ShipmentStatus.Assigned]: 'bg-blue-100 text-blue-800',
            [ShipmentStatus.LabelCreated]: 'bg-purple-100 text-purple-800',
            [ShipmentStatus.PickedUp]: 'bg-indigo-100 text-indigo-800',
            [ShipmentStatus.InTransit]: 'bg-blue-100 text-blue-800',
            [ShipmentStatus.OutForDelivery]: 'bg-cyan-100 text-cyan-800',
            [ShipmentStatus.Delivered]: 'bg-green-100 text-green-800',
            [ShipmentStatus.Delayed]: 'bg-red-100 text-red-800',
            [ShipmentStatus.Failed]: 'bg-red-100 text-red-800',
            [ShipmentStatus.Returned]: 'bg-slate-100 text-slate-800',
            [ShipmentStatus.Cancelled]: 'bg-slate-100 text-slate-800'
        };
        return classes[status] || 'bg-slate-100 text-slate-800';
    }

    getProgressPercent(status: ShipmentStatus): number {
        const progress: Record<ShipmentStatus, number> = {
            [ShipmentStatus.Pending]: 5,
            [ShipmentStatus.Assigned]: 15,
            [ShipmentStatus.LabelCreated]: 25,
            [ShipmentStatus.PickedUp]: 40,
            [ShipmentStatus.InTransit]: 60,
            [ShipmentStatus.OutForDelivery]: 85,
            [ShipmentStatus.Delivered]: 100,
            [ShipmentStatus.Delayed]: 50,
            [ShipmentStatus.Failed]: 50,
            [ShipmentStatus.Returned]: 100,
            [ShipmentStatus.Cancelled]: 0
        };
        return progress[status] || 0;
    }

    getProgressClass(status: ShipmentStatus): string {
        if (status === ShipmentStatus.Delivered) return 'bg-green-500';
        if (status === ShipmentStatus.Delayed || status === ShipmentStatus.Failed) return 'bg-red-500';
        return 'bg-blue-500';
    }

    formatDate(date: string): string {
        return new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    }

    private showNotification(type: 'success' | 'error', key: string): void {
        this.toastType = type;
        this.toastMessage = this.translateService.instant(key);
        this.showToast = true;
        setTimeout(() => this.showToast = false, 3000);
    }
}
