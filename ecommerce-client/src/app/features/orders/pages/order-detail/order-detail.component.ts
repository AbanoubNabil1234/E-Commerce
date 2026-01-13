import { Component, OnInit, OnDestroy, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil, switchMap } from 'rxjs';
import { OrderService } from '../../services/orders.service';
import { Order, OrderItem, OrderStatus } from '../../models/order.model';

interface ActivityLogItem {
    icon: 'check' | 'clock' | 'box' | 'truck' | 'x' | 'package' | 'credit-card' | 'clipboard';
    title: string;
    description?: string;
    timestamp: string;
    status: 'completed' | 'pending' | 'current';
}

interface InventoryAllocation {
    zone: string;
    aisle: string;
    bin: string;
    inStock: number;
    reserved: number;
    status: 'optimized' | 'normal' | 'critical';
    statusLabel: string;
}

interface ItemStockStatus {
    productId: number;
    available: number;
    ordered: number;
    reserved: number;
    status: 'in-stock' | 'low-stock' | 'out-of-stock';
}

@Component({
    selector: 'app-order-detail',
    standalone: true,
    imports: [CommonModule, RouterModule, TranslateModule],
    templateUrl: './order-detail.component.html'
})
export class OrderDetailComponent implements OnInit, OnDestroy {
    private route = inject(ActivatedRoute);
    private router = inject(Router);
    private orderService = inject(OrderService);
    private translateService = inject(TranslateService);
    private destroy$ = new Subject<void>();

    // State
    order = signal<Order | null>(null);
    loading = signal(true);
    error = signal<string | null>(null);
    actionLoading = signal(false);

    // Toast
    showToast = false;
    toastMessage = '';
    toastType: 'success' | 'error' | 'warning' = 'success';

    // Modal States
    showShortagesModal = signal(false);
    showConfirmDialog = signal(false);
    confirmDialogAction = signal<'reserve' | 'ship' | 'cancel' | null>(null);

    // Mock Inventory Allocation
    inventoryAllocations = signal<InventoryAllocation[]>([
        { zone: 'A', aisle: '4', bin: 'B-12', inStock: 142, reserved: 2, status: 'optimized', statusLabel: 'OPTIMIZED' },
        { zone: 'G', aisle: '1', bin: 'C-05', inStock: 21, reserved: 0, status: 'critical', statusLabel: 'CRITICAL' }
    ]);

    // Mock Item Stock Status
    itemStockStatus = signal<Map<number, ItemStockStatus>>(new Map());

    // Computed: Fulfillment
    fulfillmentPercentage = computed(() => {
        const o = this.order();
        if (!o || o.items.length === 0) return 0;

        // Calculate based on stock availability
        const stockMap = this.itemStockStatus();
        if (stockMap.size === 0) return this.getDefaultFulfillment(o.orderStatus);

        let ready = 0;
        o.items.forEach(item => {
            const stock = stockMap.get(item.productId);
            if (stock && stock.available >= item.quantity) ready++;
        });
        return Math.round((ready / o.items.length) * 100);
    });

    itemsReady = computed(() => {
        const o = this.order();
        if (!o) return 0;
        const stockMap = this.itemStockStatus();
        let ready = 0;
        o.items.forEach(item => {
            const stock = stockMap.get(item.productId);
            if (stock && stock.available >= item.quantity) ready++;
        });
        return ready;
    });

    totalItems = computed(() => this.order()?.items.length || 0);

    shortageCount = computed(() => {
        const o = this.order();
        if (!o) return 0;
        const stockMap = this.itemStockStatus();
        let shortages = 0;
        o.items.forEach(item => {
            const stock = stockMap.get(item.productId);
            if (!stock || stock.available < item.quantity) shortages++;
        });
        return shortages;
    });

    hasInsufficientStock = computed(() => this.shortageCount() > 0);

    activityLog = computed((): ActivityLogItem[] => {
        const o = this.order();
        if (!o) return [];

        const log: ActivityLogItem[] = [];

        // Order Created
        log.push({
            icon: 'clipboard',
            title: 'ORDER_DETAILS.ACTIVITY.CREATED',
            description: 'Customer Portal',
            timestamp: o.createdAt,
            status: 'completed'
        });

        // Order Confirmed
        if (o.confirmedAt) {
            log.push({
                icon: 'check',
                title: 'ORDER_DETAILS.ACTIVITY.CONFIRMED',
                description: 'System auto-triggered by API',
                timestamp: o.confirmedAt,
                status: 'completed'
            });
        }

        // Inventory Reserved
        if (o.confirmedAt && o.orderStatus !== 'Draft' && o.orderStatus !== 'Pending') {
            log.push({
                icon: 'box',
                title: 'ORDER_DETAILS.ACTIVITY.RESERVED',
                description: 'Stock checked and reserved',
                timestamp: o.confirmedAt,
                status: 'completed'
            });
        }

        // Order Shipped
        if (o.shippedAt) {
            log.push({
                icon: 'truck',
                title: 'ORDER_DETAILS.ACTIVITY.SHIPPED',
                description: 'Carrier pickup completed',
                timestamp: o.shippedAt,
                status: 'completed'
            });
        }

        // Order Delivered
        if (o.deliveredAt) {
            log.push({
                icon: 'check',
                title: 'ORDER_DETAILS.ACTIVITY.DELIVERED',
                description: 'Customer signed',
                timestamp: o.deliveredAt,
                status: 'completed'
            });
        }

        // Order Cancelled
        if (o.cancelledAt) {
            log.push({
                icon: 'x',
                title: 'ORDER_DETAILS.ACTIVITY.CANCELLED',
                description: o.cancellationReason || 'Cancelled',
                timestamp: o.cancelledAt,
                status: 'completed'
            });
        }

        // Pending actions
        if (!o.confirmedAt && o.orderStatus === 'Draft') {
            log.push({
                icon: 'clock',
                title: 'ORDER_DETAILS.ACTIVITY.AWAITING_CONFIRM',
                timestamp: o.createdAt,
                status: 'pending'
            });
        }

        return log.reverse();
    });

    ngOnInit(): void {
        this.route.paramMap.pipe(
            switchMap(params => {
                const id = Number(params.get('id'));
                this.loading.set(true);
                return this.orderService.getById(id);
            }),
            takeUntil(this.destroy$)
        ).subscribe({
            next: (order) => {
                this.order.set(order);
                this.generateMockStockStatus(order);
                this.loading.set(false);
            },
            error: (err) => {
                this.error.set('Failed to load order');
                this.loading.set(false);
                console.error('Load order error:', err);
            }
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    // Generate mock stock status for items
    private generateMockStockStatus(order: Order): void {
        const stockMap = new Map<number, ItemStockStatus>();
        order.items.forEach((item, index) => {
            // Simulate different stock scenarios
            const scenarios: ItemStockStatus[] = [
                { productId: item.productId, available: item.quantity + 10, ordered: item.quantity, reserved: 0, status: 'in-stock' },
                { productId: item.productId, available: item.quantity + 2, ordered: item.quantity, reserved: 0, status: 'low-stock' },
                { productId: item.productId, available: Math.max(0, item.quantity - 2), ordered: item.quantity, reserved: 0, status: 'out-of-stock' }
            ];
            // Simulate realistic scenario - most items in stock
            const scenario = index === 1 ? scenarios[2] : (index === 2 ? scenarios[1] : scenarios[0]);
            stockMap.set(item.productId, scenario);
        });
        this.itemStockStatus.set(stockMap);
    }

    private getDefaultFulfillment(status: OrderStatus): number {
        const fulfillmentMap: Record<OrderStatus, number> = {
            'Draft': 0,
            'Pending': 25,
            'Confirmed': 50,
            'Processing': 75,
            'PartiallyShipped': 85,
            'Shipped': 100,
            'Delivered': 100,
            'Cancelled': 0,
            'Refunded': 0
        };
        return fulfillmentMap[status] || 0;
    }

    // Actions
    reserveStock(): void {
        this.confirmDialogAction.set('reserve');
        this.showConfirmDialog.set(true);
    }

    shipOrder(): void {
        if (this.hasInsufficientStock()) {
            this.showNotification('warning', 'ORDER_DETAILS.INSUFFICIENT_STOCK_WARNING');
            return;
        }
        this.confirmDialogAction.set('ship');
        this.showConfirmDialog.set(true);
    }

    cancelOrder(): void {
        this.confirmDialogAction.set('cancel');
        this.showConfirmDialog.set(true);
    }

    confirmAction(): void {
        const action = this.confirmDialogAction();
        const o = this.order();
        if (!o || !action) return;

        this.actionLoading.set(true);
        this.showConfirmDialog.set(false);

        switch (action) {
            case 'reserve':
                this.orderService.confirm(o.id)
                    .pipe(takeUntil(this.destroy$))
                    .subscribe({
                        next: (updated) => {
                            this.order.set(updated);
                            this.showNotification('success', 'ORDER_DETAILS.RESERVE_SUCCESS');
                            this.actionLoading.set(false);
                        },
                        error: () => {
                            this.showNotification('error', 'ORDER_DETAILS.RESERVE_ERROR');
                            this.actionLoading.set(false);
                        }
                    });
                break;
            case 'ship':
                this.orderService.ship(o.id)
                    .pipe(takeUntil(this.destroy$))
                    .subscribe({
                        next: (updated) => {
                            this.order.set(updated);
                            this.showNotification('success', 'ORDERS.SHIP_SUCCESS');
                            this.actionLoading.set(false);
                        },
                        error: () => {
                            this.showNotification('error', 'ORDERS.SHIP_ERROR');
                            this.actionLoading.set(false);
                        }
                    });
                break;
            case 'cancel':
                const reason = 'Cancelled by admin';
                this.orderService.cancel(o.id, reason)
                    .pipe(takeUntil(this.destroy$))
                    .subscribe({
                        next: (updated) => {
                            this.order.set(updated);
                            this.showNotification('success', 'ORDERS.CANCEL_SUCCESS');
                            this.actionLoading.set(false);
                        },
                        error: () => {
                            this.showNotification('error', 'ORDERS.CANCEL_ERROR');
                            this.actionLoading.set(false);
                        }
                    });
                break;
        }
    }

    printInvoice(): void {
        window.print();
    }

    viewShortages(): void {
        this.showShortagesModal.set(true);
    }

    triggerReplenishment(): void {
        this.showNotification('success', 'ORDER_DETAILS.REPLENISHMENT_TRIGGERED');
    }

    goToPickList(): void {
        this.router.navigate(['/orders', this.order()?.id, 'picking']);
    }

    goToCarrierAssign(): void {
        this.router.navigate(['/shipments/create'], { queryParams: { orderId: this.order()?.id } });
    }

    // Helpers
    getStockStatus(item: OrderItem): ItemStockStatus | null {
        return this.itemStockStatus().get(item.productId) || null;
    }

    getStockStatusClass(status: string): string {
        const classes: Record<string, string> = {
            'in-stock': 'text-green-600',
            'low-stock': 'text-amber-600',
            'out-of-stock': 'text-red-600'
        };
        return classes[status] || 'text-slate-500';
    }

    getStockStatusBadge(status: string): string {
        const classes: Record<string, string> = {
            'in-stock': 'bg-green-100 text-green-700',
            'low-stock': 'bg-amber-100 text-amber-700',
            'out-of-stock': 'bg-red-100 text-red-700'
        };
        return classes[status] || 'bg-slate-100 text-slate-700';
    }

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

    getPaymentStatusClass(status: string): string {
        const classes: Record<string, string> = {
            'Paid': 'bg-green-100 text-green-700',
            'Pending': 'bg-amber-100 text-amber-700',
            'Failed': 'bg-red-100 text-red-700',
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
            month: 'short',
            year: 'numeric'
        });
    }

    formatDateTime(dateString: string): string {
        return new Date(dateString).toLocaleString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    formatTime(dateString: string): string {
        return new Date(dateString).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    canReserve(): boolean {
        const status = this.order()?.orderStatus;
        return status === 'Draft' || status === 'Pending';
    }

    canShip(): boolean {
        return this.order()?.orderStatus === 'Confirmed';
    }

    canCancel(): boolean {
        const status = this.order()?.orderStatus;
        return status === 'Draft' || status === 'Pending' || status === 'Confirmed';
    }

    private showNotification(type: 'success' | 'error' | 'warning', key: string): void {
        this.toastType = type;
        this.toastMessage = this.translateService.instant(key);
        this.showToast = true;
        setTimeout(() => this.showToast = false, 4000);
    }
}
