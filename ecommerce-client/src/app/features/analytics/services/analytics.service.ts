// Analytics Service - connects to backend analytics API
import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';

// ==========================================
// Analytics DTOs
// ==========================================

export interface AnalyticsFilter {
    startDate?: string;
    endDate?: string;
    warehouseId?: number;
    categoryId?: number;
}

export interface TimeSeriesDataPoint {
    date: string;
    label: string;
    value: number;
}

export interface CategoryDataPoint {
    category: string;
    value: number;
    percentage: number;
}

export interface OverviewAnalytics {
    totalOrders: number;
    totalRevenue: number;
    activeShipments: number;
    lowStockProducts: number;
    deliveredOrders: number;
    pendingOrders: number;
    newCustomers: number;
    averageOrderValue: number;
    revenueGrowth: number;
    ordersGrowth: number;
}

export interface SalesAnalytics {
    totalRevenue: number;
    totalOrders: number;
    averageOrderValue: number;
    revenueOverTime: TimeSeriesDataPoint[];
    bestSellingProducts: BestSellingProduct[];
    ordersByCountry: CategoryDataPoint[];
    paymentStatusSummary: CategoryDataPoint[];
    orderStatusSummary: CategoryDataPoint[];
}

export interface BestSellingProduct {
    productId: number;
    productName: string;
    sku: string;
    quantitySold: number;
    revenue: number;
    imageUrl?: string;
}

export interface InventoryAnalytics {
    totalProducts: number;
    lowStockCount: number;
    outOfStockCount: number;
    totalStockValue: number;
    lowStockProducts: LowStockProduct[];
    outOfStockProducts: LowStockProduct[];
    stockByWarehouse: WarehouseStock[];
    fastMovingProducts: FastMovingProduct[];
}

export interface LowStockProduct {
    productId: number;
    productName: string;
    sku: string;
    currentStock: number;
    reorderLevel: number;
    warehouseName: string;
    imageUrl?: string;
}

export interface WarehouseStock {
    warehouseId: number;
    warehouseName: string;
    totalProducts: number;
    totalQuantity: number;
    stockValue: number;
    lowStockItems: number;
}

export interface FastMovingProduct {
    productId: number;
    productName: string;
    sku: string;
    quantitySold: number;
    currentStock: number;
    turnoverRate: number;
}

export interface LogisticsAnalytics {
    averageDeliveryDays: number;
    totalShipments: number;
    deliveredShipments: number;
    delayedShipments: number;
    deliverySuccessRate: number;
    onTimeDeliveryRate: number;
    courierPerformance: CourierPerformance[];
    shipmentsByStatus: CategoryDataPoint[];
    deliveriesOverTime: TimeSeriesDataPoint[];
}

export interface CourierPerformance {
    carrierId: number;
    carrierName: string;
    totalShipments: number;
    deliveredOnTime: number;
    delayedDeliveries: number;
    averageDeliveryDays: number;
    successRate: number;
}

export interface CustomerAnalytics {
    totalCustomers: number;
    newCustomers: number;
    returningCustomers: number;
    customerRetentionRate: number;
    averageOrdersPerCustomer: number;
    customerLifetimeValue: number;
    newCustomersOverTime: TimeSeriesDataPoint[];
    topCustomers: TopCustomer[];
    orderFrequencyDistribution: CategoryDataPoint[];
}

export interface TopCustomer {
    customerId: string;
    customerName: string;
    email?: string;
    totalOrders: number;
    totalSpent: number;
    lastOrderDate: string;
}

// ==========================================
// Analytics Service
// ==========================================

@Injectable({
    providedIn: 'root'
})
export class AnalyticsService {
    private http = inject(HttpClient);
    private apiUrl = `${environment.apiUrl}/analytics`;

    // Signals for reactive state
    private _overview = signal<OverviewAnalytics | null>(null);
    private _sales = signal<SalesAnalytics | null>(null);
    private _inventory = signal<InventoryAnalytics | null>(null);
    private _logistics = signal<LogisticsAnalytics | null>(null);
    private _customers = signal<CustomerAnalytics | null>(null);
    private _loading = signal(false);
    private _error = signal<string | null>(null);

    // Public readonly signals
    overview = this._overview.asReadonly();
    sales = this._sales.asReadonly();
    inventory = this._inventory.asReadonly();
    logistics = this._logistics.asReadonly();
    customers = this._customers.asReadonly();
    loading = this._loading.asReadonly();
    error = this._error.asReadonly();

    // Computed values
    hasData = computed(() =>
        this._overview() !== null ||
        this._sales() !== null ||
        this._inventory() !== null
    );

    private buildParams(filter?: AnalyticsFilter): HttpParams {
        let params = new HttpParams();
        if (filter?.startDate) params = params.set('startDate', filter.startDate);
        if (filter?.endDate) params = params.set('endDate', filter.endDate);
        if (filter?.warehouseId) params = params.set('warehouseId', filter.warehouseId);
        if (filter?.categoryId) params = params.set('categoryId', filter.categoryId);
        return params;
    }

    getOverview(filter?: AnalyticsFilter): Observable<OverviewAnalytics> {
        this._loading.set(true);
        return this.http.get<OverviewAnalytics>(`${this.apiUrl}/overview`, { params: this.buildParams(filter) }).pipe(
            tap({
                next: (data) => {
                    this._overview.set(data);
                    this._loading.set(false);
                },
                error: (err) => {
                    this._error.set(err.message);
                    this._loading.set(false);
                }
            })
        );
    }

    getSales(filter?: AnalyticsFilter): Observable<SalesAnalytics> {
        this._loading.set(true);
        return this.http.get<SalesAnalytics>(`${this.apiUrl}/sales`, { params: this.buildParams(filter) }).pipe(
            tap({
                next: (data) => {
                    this._sales.set(data);
                    this._loading.set(false);
                },
                error: (err) => {
                    this._error.set(err.message);
                    this._loading.set(false);
                }
            })
        );
    }

    getInventory(filter?: AnalyticsFilter): Observable<InventoryAnalytics> {
        this._loading.set(true);
        return this.http.get<InventoryAnalytics>(`${this.apiUrl}/inventory`, { params: this.buildParams(filter) }).pipe(
            tap({
                next: (data) => {
                    this._inventory.set(data);
                    this._loading.set(false);
                },
                error: (err) => {
                    this._error.set(err.message);
                    this._loading.set(false);
                }
            })
        );
    }

    getLogistics(filter?: AnalyticsFilter): Observable<LogisticsAnalytics> {
        this._loading.set(true);
        return this.http.get<LogisticsAnalytics>(`${this.apiUrl}/logistics`, { params: this.buildParams(filter) }).pipe(
            tap({
                next: (data) => {
                    this._logistics.set(data);
                    this._loading.set(false);
                },
                error: (err) => {
                    this._error.set(err.message);
                    this._loading.set(false);
                }
            })
        );
    }

    getCustomers(filter?: AnalyticsFilter): Observable<CustomerAnalytics> {
        this._loading.set(true);
        return this.http.get<CustomerAnalytics>(`${this.apiUrl}/customers`, { params: this.buildParams(filter) }).pipe(
            tap({
                next: (data) => {
                    this._customers.set(data);
                    this._loading.set(false);
                },
                error: (err) => {
                    this._error.set(err.message);
                    this._loading.set(false);
                }
            })
        );
    }

    // Load all analytics data at once
    loadAll(filter?: AnalyticsFilter): void {
        this.getOverview(filter).subscribe();
        this.getSales(filter).subscribe();
        this.getInventory(filter).subscribe();
        this.getLogistics(filter).subscribe();
        this.getCustomers(filter).subscribe();
    }

    // Clear all cached data
    clearCache(): void {
        this._overview.set(null);
        this._sales.set(null);
        this._inventory.set(null);
        this._logistics.set(null);
        this._customers.set(null);
        this._error.set(null);
    }
}
