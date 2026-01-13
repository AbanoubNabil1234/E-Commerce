import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { NotificationService } from '../../../core/services/notification.service';
import {
    Order,
    OrderListItem,
    OrderFilter,
    CreateOrderRequest,
    AddOrderItemRequest,
    UpdateOrderItemRequest,
    OrderAvailabilityResult
} from '../models/order.model';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private http = inject(HttpClient);
    private toast = inject(NotificationService);
    private apiUrl = `${environment.apiUrl}/order`;

    // Query Operations
    getAll(filter?: OrderFilter): Observable<OrderListItem[]> {
        let params = new HttpParams();

        if (filter) {
            if (filter.status) params = params.set('Status', filter.status);
            if (filter.paymentStatus) params = params.set('PaymentStatus', filter.paymentStatus);
            if (filter.warehouseId) params = params.set('WarehouseId', filter.warehouseId);
            if (filter.customerId) params = params.set('CustomerId', filter.customerId);
            if (filter.fromDate) params = params.set('FromDate', filter.fromDate);
            if (filter.toDate) params = params.set('ToDate', filter.toDate);
            if (filter.searchTerm) params = params.set('SearchTerm', filter.searchTerm);
            if (filter.pageNumber) params = params.set('PageNumber', filter.pageNumber);
            if (filter.pageSize) params = params.set('PageSize', filter.pageSize);
        }

        return this.http.get<OrderListItem[]>(this.apiUrl, { params });
    }

    getById(id: number): Observable<Order> {
        return this.http.get<Order>(`${this.apiUrl}/${id}`);
    }

    getByOrderNumber(orderNumber: string): Observable<Order> {
        return this.http.get<Order>(`${this.apiUrl}/by-number/${orderNumber}`);
    }

    checkAvailability(orderId: number): Observable<OrderAvailabilityResult> {
        return this.http.get<OrderAvailabilityResult>(`${this.apiUrl}/${orderId}/availability`);
    }

    // Order Lifecycle
    create(request: CreateOrderRequest): Observable<Order> {
        return this.http.post<Order>(this.apiUrl, request).pipe(
            tap(order => this.toast.success(`Order #${order.orderNumber} created successfully`, { title: '📦 Order Created' }))
        );
    }

    addItem(orderId: number, request: AddOrderItemRequest): Observable<Order> {
        return this.http.post<Order>(`${this.apiUrl}/${orderId}/items`, request).pipe(
            tap(() => this.toast.success('Item added to order', { title: '✅ Item Added' }))
        );
    }

    updateItem(orderId: number, itemId: number, request: UpdateOrderItemRequest): Observable<Order> {
        return this.http.put<Order>(`${this.apiUrl}/${orderId}/items/${itemId}`, request).pipe(
            tap(() => this.toast.success('Order item updated', { title: '✅ Updated' }))
        );
    }

    removeItem(orderId: number, itemId: number): Observable<Order> {
        return this.http.delete<Order>(`${this.apiUrl}/${orderId}/items/${itemId}`).pipe(
            tap(() => this.toast.info('Item removed from order', { title: '🗑️ Item Removed' }))
        );
    }

    confirm(orderId: number): Observable<Order> {
        return this.http.post<Order>(`${this.apiUrl}/${orderId}/confirm`, {}).pipe(
            tap(order => this.toast.success(`Order #${order.orderNumber} confirmed`, { title: '✅ Order Confirmed' }))
        );
    }

    cancel(orderId: number, reason: string): Observable<Order> {
        return this.http.post<Order>(`${this.apiUrl}/${orderId}/cancel`, { reason }).pipe(
            tap(order => this.toast.warning(`Order #${order.orderNumber} cancelled`, { title: '❌ Order Cancelled' }))
        );
    }

    ship(orderId: number): Observable<Order> {
        return this.http.post<Order>(`${this.apiUrl}/${orderId}/ship`, {}).pipe(
            tap(order => this.toast.success(`Order #${order.orderNumber} shipped`, { title: '🚚 Order Shipped' }))
        );
    }

    deliver(orderId: number): Observable<Order> {
        return this.http.post<Order>(`${this.apiUrl}/${orderId}/deliver`, {}).pipe(
            tap(order => this.toast.success(`Order #${order.orderNumber} delivered`, { title: '✅ Order Delivered' }))
        );
    }
}

