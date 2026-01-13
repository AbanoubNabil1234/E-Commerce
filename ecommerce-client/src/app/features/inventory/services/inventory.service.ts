import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { NotificationService } from '../../../core/services/notification.service';
import {
    ProductStock,
    StockMovement,
    ProductStockSummary,
    InitializeStockRequest,
    AdjustStockRequest,
    TransferStockRequest
} from '../models/inventory.models';

@Injectable({
    providedIn: 'root'
})
export class InventoryService {
    private http = inject(HttpClient);
    private toast = inject(NotificationService);
    private apiUrl = `${environment.apiUrl}/inventory`;

    getAllStock(warehouseId?: number, lowStockOnly?: boolean): Observable<ProductStock[]> {
        let params = new HttpParams();
        if (warehouseId) params = params.set('warehouseId', warehouseId);
        if (lowStockOnly) params = params.set('lowStockOnly', true);

        return this.http.get<ProductStock[]>(this.apiUrl, { params });
    }

    getStockByProduct(productId: number, warehouseId: number): Observable<ProductStock> {
        return this.http.get<ProductStock>(
            `${this.apiUrl}/product/${productId}`,
            { params: new HttpParams().set('warehouseId', warehouseId) }
        );
    }

    getStockSummary(productId: number): Observable<ProductStockSummary> {
        return this.http.get<ProductStockSummary>(`${this.apiUrl}/product/${productId}/summary`);
    }

    getMovementHistory(
        productId: number,
        warehouseId?: number,
        pageNumber: number = 1,
        pageSize: number = 20
    ): Observable<StockMovement[]> {
        let params = new HttpParams()
            .set('pageNumber', pageNumber)
            .set('pageSize', pageSize);

        if (warehouseId) params = params.set('warehouseId', warehouseId);

        return this.http.get<StockMovement[]>(`${this.apiUrl}/movements/${productId}`, { params });
    }

    getLowStockProducts(warehouseId?: number): Observable<ProductStock[]> {
        let params = new HttpParams();
        if (warehouseId) params = params.set('warehouseId', warehouseId);
        return this.http.get<ProductStock[]>(`${this.apiUrl}/low-stock`, { params });
    }

    initializeStock(request: InitializeStockRequest): Observable<ProductStock> {
        return this.http.post<ProductStock>(`${this.apiUrl}/initialize`, request).pipe(
            tap(() => this.toast.success('Stock initialized successfully', { title: '📦 Stock Initialized' }))
        );
    }

    estimateStock(request: AdjustStockRequest): Observable<ProductStock> {
        return this.adjustStock(request);
    }

    increaseStock(request: AdjustStockRequest): Observable<ProductStock> {
        return this.http.post<ProductStock>(`${this.apiUrl}/increase`, request).pipe(
            tap(() => this.toast.success(`Stock increased by ${request.quantity}`, { title: '📈 Stock Increased' }))
        );
    }

    decreaseStock(request: AdjustStockRequest): Observable<ProductStock> {
        return this.http.post<ProductStock>(`${this.apiUrl}/decrease`, request).pipe(
            tap(() => this.toast.warning(`Stock decreased by ${request.quantity}`, { title: '📉 Stock Decreased' }))
        );
    }

    adjustStock(request: AdjustStockRequest): Observable<ProductStock> {
        const endpoints = {
            0: 'increase',
            1: 'decrease',
            2: 'adjust'
        };
        const endpoint = endpoints[request.adjustmentType as keyof typeof endpoints];
        return this.http.post<ProductStock>(`${this.apiUrl}/${endpoint}`, request).pipe(
            tap(() => this.toast.success('Stock adjusted successfully', { title: '📊 Stock Adjusted' }))
        );
    }

    transferStock(request: TransferStockRequest): Observable<any> {
        return this.http.post(`${this.apiUrl}/transfer`, request).pipe(
            tap(() => this.toast.success(`${request.quantity} units transferred successfully`, { title: '🔄 Stock Transferred' }))
        );
    }

    checkAvailability(productId: number, warehouseId: number, quantity: number): Observable<any> {
        const params = new HttpParams()
            .set('productId', productId)
            .set('warehouseId', warehouseId)
            .set('quantity', quantity);
        return this.http.get(`${this.apiUrl}/check-availability`, { params });
    }
}

