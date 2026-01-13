import { Component, OnInit, OnDestroy, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { OrderService } from '../../services/orders.service';
import { OrderListItem, OrderStatus, OrderFilter } from '../../models/order.model';
import { WarehouseListDto } from '../../../warehouses/models/warehouse.models';
import { WarehousesService } from '../../../warehouses/services/warehouses.service';

@Component({
    selector: 'app-order-list',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule, TranslateModule],
    templateUrl: './order-list.component.html'
})
export class OrderListComponent implements OnInit, OnDestroy {
    private orderService = inject(OrderService);
    private warehouseService = inject(WarehousesService);
    private translateService = inject(TranslateService);
    private destroy$ = new Subject<void>();

    // State
    orders = signal<OrderListItem[]>([]);
    warehouses = signal<WarehouseListDto[]>([]);
    loading = signal(true);
    error = signal<string | null>(null);

    // Filters
    searchTerm = signal('');
    selectedStatus = signal<OrderStatus | ''>('');
    selectedWarehouseId = signal<number | null>(null);
    fromDate = signal<string>('');
    toDate = signal<string>('');

    // Pagination
    pageNumber = signal(1);
    pageSize = signal(10);
    totalOrders = signal(0);

    // UI States
    showToast = false;
    toastMessage = '';
    toastType: 'success' | 'error' = 'success';

    // Action menu
    activeMenuOrderId = signal<number | null>(null);

    // Status options for filter
    statusOptions: { value: OrderStatus | ''; label: string }[] = [
        { value: '', label: 'ORDERS.STATUS.ALL' },
        { value: 'Draft', label: 'ORDERS.STATUS.DRAFT' },
        { value: 'Confirmed', label: 'ORDERS.STATUS.CONFIRMED' },
        { value: 'Shipped', label: 'ORDERS.STATUS.SHIPPED' },
        { value: 'Delivered', label: 'ORDERS.STATUS.DELIVERED' },
        { value: 'Cancelled', label: 'ORDERS.STATUS.CANCELLED' }
    ];

    // Computed: filtered orders
    filteredOrders = computed(() => {
        let filtered = this.orders();
        const search = this.searchTerm().toLowerCase();

        if (search) {
            filtered = filtered.filter(o =>
                o.orderNumber.toLowerCase().includes(search) ||
                (o.customerName?.toLowerCase().includes(search))
            );
        }

        return filtered;
    });

    ngOnInit(): void {
        this.loadWarehouses();
        this.loadOrders();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    loadWarehouses(): void {
        this.warehouseService.getAll()
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: (data) => this.warehouses.set(data),
                error: (err) => console.error('Failed to load warehouses', err)
            });
    }

    loadOrders(): void {
        this.loading.set(true);
        this.error.set(null);

        const filter: OrderFilter = {
            pageNumber: this.pageNumber(),
            pageSize: this.pageSize()
        };

        if (this.selectedStatus()) filter.status = this.selectedStatus() as OrderStatus;
        if (this.selectedWarehouseId()) filter.warehouseId = this.selectedWarehouseId()!;
        if (this.fromDate()) filter.fromDate = this.fromDate();
        if (this.toDate()) filter.toDate = this.toDate();
        if (this.searchTerm()) filter.searchTerm = this.searchTerm();

        this.orderService.getAll(filter)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: (data) => {
                    this.orders.set(data);
                    this.loading.set(false);
                },
                error: (err) => {
                    this.error.set('Failed to load orders');
                    this.loading.set(false);
                    console.error('Load orders error:', err);
                }
            });
    }

    // Filter handlers
    onSearchChange(term: string): void {
        this.searchTerm.set(term);
        this.pageNumber.set(1);
        this.loadOrders();
    }

    onStatusChange(status: OrderStatus | ''): void {
        this.selectedStatus.set(status);
        this.pageNumber.set(1);
        this.loadOrders();
    }

    onWarehouseChange(warehouseId: number | null): void {
        this.selectedWarehouseId.set(warehouseId);
        this.pageNumber.set(1);
        this.loadOrders();
    }

    onDateRangeChange(): void {
        this.pageNumber.set(1);
        this.loadOrders();
    }

    clearFilters(): void {
        this.searchTerm.set('');
        this.selectedStatus.set('');
        this.selectedWarehouseId.set(null);
        this.fromDate.set('');
        this.toDate.set('');
        this.pageNumber.set(1);
        this.loadOrders();
    }

    hasActiveFilters(): boolean {
        return !!(this.searchTerm() || this.selectedStatus() || this.selectedWarehouseId() || this.fromDate() || this.toDate());
    }

    // Pagination
    onPageChange(page: number): void {
        this.pageNumber.set(page);
        this.loadOrders();
    }

    onPageSizeChange(size: number): void {
        this.pageSize.set(size);
        this.pageNumber.set(1);
        this.loadOrders();
    }

    // Actions menu
    toggleMenu(orderId: number): void {
        this.activeMenuOrderId.set(this.activeMenuOrderId() === orderId ? null : orderId);
    }

    closeMenu(): void {
        this.activeMenuOrderId.set(null);
    }

    // Order actions
    confirmOrder(order: OrderListItem): void {
        this.orderService.confirm(order.id)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: () => {
                    this.showNotification('success', 'ORDERS.CONFIRM_SUCCESS');
                    this.loadOrders();
                },
                error: (err) => {
                    this.showNotification('error', 'ORDERS.CONFIRM_ERROR');
                    console.error('Confirm error:', err);
                }
            });
        this.closeMenu();
    }

    cancelOrder(order: OrderListItem): void {
        const reason = prompt(this.translateService.instant('ORDERS.CANCEL_REASON_PROMPT'));
        if (reason === null) return;

        this.orderService.cancel(order.id, reason)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: () => {
                    this.showNotification('success', 'ORDERS.CANCEL_SUCCESS');
                    this.loadOrders();
                },
                error: (err) => {
                    this.showNotification('error', 'ORDERS.CANCEL_ERROR');
                    console.error('Cancel error:', err);
                }
            });
        this.closeMenu();
    }

    shipOrder(order: OrderListItem): void {
        this.orderService.ship(order.id)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: () => {
                    this.showNotification('success', 'ORDERS.SHIP_SUCCESS');
                    this.loadOrders();
                },
                error: (err) => {
                    this.showNotification('error', 'ORDERS.SHIP_ERROR');
                    console.error('Ship error:', err);
                }
            });
        this.closeMenu();
    }

    // Helpers
    getStatusClass(status: OrderStatus): string {
        const classes: Record<OrderStatus, string> = {
            'Draft': 'bg-slate-100 text-slate-700',
            'Pending': 'bg-amber-100 text-amber-700',
            'Confirmed': 'bg-blue-100 text-blue-700',
            'Processing': 'bg-cyan-100 text-cyan-700',
            'PartiallyShipped': 'bg-indigo-100 text-indigo-700',
            'Shipped': 'bg-purple-100 text-purple-700',
            'Delivered': 'bg-green-100 text-green-700',
            'Cancelled': 'bg-red-100 text-red-700',
            'Refunded': 'bg-rose-100 text-rose-700'
        };
        return classes[status] || 'bg-slate-100 text-slate-700';
    }

    formatCurrency(amount: number, currency: string = 'USD'): string {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
    }

    formatDate(dateString: string): string {
        return new Date(dateString).toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }

    getRelativeTime(dateString: string): string {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 1) return this.translateService.instant('COMMON.JUST_NOW');
        if (diffMins < 60) return `${diffMins} ${this.translateService.instant('COMMON.MINS_AGO')}`;
        if (diffHours < 24) return `${diffHours} ${this.translateService.instant('COMMON.HOURS_AGO')}`;
        return `${diffDays} ${this.translateService.instant('COMMON.DAYS_AGO')}`;
    }

    private showNotification(type: 'success' | 'error', key: string): void {
        this.toastType = type;
        this.toastMessage = this.translateService.instant(key);
        this.showToast = true;
        setTimeout(() => this.showToast = false, 3000);
    }

    canConfirm(order: OrderListItem): boolean {
        return order.orderStatus === 'Draft';
    }

    canCancel(order: OrderListItem): boolean {
        return order.orderStatus === 'Draft' || order.orderStatus === 'Confirmed';
    }

    canShip(order: OrderListItem): boolean {
        return order.orderStatus === 'Confirmed';
    }
}
