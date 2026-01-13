// Analytics Dashboard Component
import { Component, OnInit, inject, signal, computed, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {
    AnalyticsService,
    OverviewAnalytics,
    SalesAnalytics,
    InventoryAnalytics,
    LogisticsAnalytics,
    AnalyticsFilter
} from '../../services/analytics.service';
import { WarehousesService } from '../../../warehouses/services/warehouses.service';
import { WarehouseListDto } from '../../../warehouses/models/warehouse.models';
import { Subject, takeUntil, forkJoin } from 'rxjs';

interface Activity {
    id: number;
    type: 'order' | 'shipment' | 'stock' | 'alert';
    icon: string;
    title: string;
    description: string;
    time: Date;
}

@Component({
    selector: 'app-analytics-dashboard',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule
    ],
    templateUrl: './analytics-dashboard.component.html',
    styleUrl: './analytics-dashboard.component.scss'
})
export class AnalyticsDashboardComponent implements OnInit, OnDestroy {
    private analyticsService = inject(AnalyticsService);
    private warehouseService = inject(WarehousesService);
    private destroy$ = new Subject<void>();

    // State signals
    loading = signal(true);
    selectedPeriod: 'today' | 'week' | 'month' | 'year' = 'month';
    selectedWarehouse = '';
    chartView: 'daily' | 'weekly' | 'monthly' = 'daily';

    // Data from service
    overview = this.analyticsService.overview;
    sales = this.analyticsService.sales;
    inventory = this.analyticsService.inventory;
    logistics = this.analyticsService.logistics;

    // Warehouses list
    warehouses = signal<{ id: number; name: string }[]>([]);

    // Recent activities (mock for demo)
    recentActivities = signal<Activity[]>([]);

    // Chart data (computed without chart library)
    revenueChartData = computed(() => {
        const data = this.sales()?.revenueOverTime || [];
        return {
            labels: data.map(d => d.label),
            values: data.map(d => d.value),
            maxValue: Math.max(...data.map(d => d.value), 0)
        };
    });

    orderStatusData = computed(() => {
        const data = this.sales()?.orderStatusSummary || [];
        const total = data.reduce((sum, d) => sum + d.value, 0);
        return data.map(d => ({
            ...d,
            percentage: total > 0 ? (d.value / total) * 100 : 0,
            color: this.getStatusColor(d.category)
        }));
    });

    ngOnInit(): void {
        this.loadWarehouses();
        this.loadAnalytics();
        this.loadRecentActivities();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    private loadWarehouses(): void {
        this.warehouseService.getAll().pipe(
            takeUntil(this.destroy$)
        ).subscribe((warehouses: WarehouseListDto[]) => {
            this.warehouses.set(warehouses.map(w => ({ id: w.id, name: w.name })));
        });
    }

    loadAnalytics(): void {
        this.loading.set(true);
        const filter = this.buildFilter();

        forkJoin({
            overview: this.analyticsService.getOverview(filter),
            sales: this.analyticsService.getSales(filter),
            inventory: this.analyticsService.getInventory(filter),
            logistics: this.analyticsService.getLogistics(filter)
        }).pipe(
            takeUntil(this.destroy$)
        ).subscribe({
            next: () => this.loading.set(false),
            error: () => this.loading.set(false)
        });
    }

    private buildFilter(): AnalyticsFilter {
        const now = new Date();
        let startDate: Date;

        switch (this.selectedPeriod) {
            case 'today':
                startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                break;
            case 'week':
                startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                break;
            case 'year':
                startDate = new Date(now.getFullYear(), 0, 1);
                break;
            case 'month':
            default:
                startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        }

        return {
            startDate: startDate.toISOString(),
            endDate: now.toISOString(),
            warehouseId: this.selectedWarehouse ? parseInt(this.selectedWarehouse) : undefined
        };
    }

    setPeriod(period: 'today' | 'week' | 'month' | 'year'): void {
        this.selectedPeriod = period;
        this.loadAnalytics();
    }

    onWarehouseChange(): void {
        this.loadAnalytics();
    }

    setChartView(view: 'daily' | 'weekly' | 'monthly'): void {
        this.chartView = view;
    }

    getStatusColor(status: string): string {
        const colors: Record<string, string> = {
            'Draft': '#94a3b8',
            'Pending': '#f59e0b',
            'Confirmed': '#3b82f6',
            'Processing': '#8b5cf6',
            'Shipped': '#06b6d4',
            'Delivered': '#22c55e',
            'Cancelled': '#ef4444'
        };
        return colors[status] || '#6b7280';
    }

    getStockLevel(current: number, reorder: number): 'critical' | 'low' | 'safe' {
        const ratio = current / reorder;
        if (ratio <= 0.25) return 'critical';
        if (ratio <= 0.5) return 'low';
        return 'safe';
    }

    private loadRecentActivities(): void {
        this.recentActivities.set([
            {
                id: 1,
                type: 'order',
                icon: 'fa-shopping-cart',
                title: 'New Order #ORD-2026-001234',
                description: '3 items - $299.00',
                time: new Date(Date.now() - 5 * 60 * 1000)
            },
            {
                id: 2,
                type: 'shipment',
                icon: 'fa-truck',
                title: 'Shipment Dispatched',
                description: 'Order #ORD-2026-001230 via DHL',
                time: new Date(Date.now() - 15 * 60 * 1000)
            },
            {
                id: 3,
                type: 'stock',
                icon: 'fa-box',
                title: 'Stock Adjusted',
                description: 'SKU-12345 +50 units',
                time: new Date(Date.now() - 30 * 60 * 1000)
            },
            {
                id: 4,
                type: 'alert',
                icon: 'fa-exclamation-triangle',
                title: 'Low Stock Alert',
                description: 'SKU-67890 - Only 5 units left',
                time: new Date(Date.now() - 45 * 60 * 1000)
            },
            {
                id: 5,
                type: 'shipment',
                icon: 'fa-check-circle',
                title: 'Delivery Confirmed',
                description: 'Order #ORD-2026-001225',
                time: new Date(Date.now() - 60 * 60 * 1000)
            }
        ]);
    }

    // Format currency for display
    formatCurrency(value: number): string {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    }

    // Format number for display
    formatNumber(value: number): string {
        return new Intl.NumberFormat('en-US').format(value);
    }
}
