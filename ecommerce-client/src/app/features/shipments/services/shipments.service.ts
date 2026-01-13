import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { NotificationService } from '../../../core/services/notification.service';
import {
    Shipment,
    ShipmentListResponse,
    ShipmentFilter,
    CreateShipmentRequest,
    AssignCarrierRequest,
    UpdateStatusRequest,
    AddTrackingEventRequest,
    Carrier,
    ShipmentTracking
} from '../models/shipment.model';

@Injectable({
    providedIn: 'root'
})
export class ShipmentsService {
    private http = inject(HttpClient);
    private toast = inject(NotificationService);
    private baseUrl = `${environment.apiUrl}/shipments`;

    // Query operations
    getList(filter: ShipmentFilter): Observable<ShipmentListResponse> {
        let params = new HttpParams()
            .set('pageNumber', filter.pageNumber)
            .set('pageSize', filter.pageSize);

        if (filter.status) params = params.set('status', filter.status);
        if (filter.warehouseId) params = params.set('warehouseId', filter.warehouseId);
        if (filter.carrierId) params = params.set('carrierId', filter.carrierId);
        if (filter.orderId) params = params.set('orderId', filter.orderId);
        if (filter.search) params = params.set('search', filter.search);
        if (filter.fromDate) params = params.set('fromDate', filter.fromDate);
        if (filter.toDate) params = params.set('toDate', filter.toDate);

        return this.http.get<ShipmentListResponse>(this.baseUrl, { params });
    }

    getById(id: number): Observable<Shipment> {
        return this.http.get<Shipment>(`${this.baseUrl}/${id}`);
    }

    getTracking(id: number): Observable<ShipmentTracking[]> {
        return this.http.get<ShipmentTracking[]>(`${this.baseUrl}/${id}/tracking`);
    }

    getByOrderId(orderId: number): Observable<Shipment[]> {
        return this.http.get<Shipment[]>(`${this.baseUrl}/by-order/${orderId}`);
    }

    getCarriers(): Observable<Carrier[]> {
        return this.http.get<Carrier[]>(`${this.baseUrl}/carriers`);
    }

    // Command operations
    create(request: CreateShipmentRequest): Observable<Shipment> {
        return this.http.post<Shipment>(this.baseUrl, request).pipe(
            tap(shipment => this.toast.success(`Shipment #${shipment.trackingNumber} created`, { title: '🚚 Shipment Created' }))
        );
    }

    assignCarrier(id: number, request: AssignCarrierRequest): Observable<Shipment> {
        return this.http.put<Shipment>(`${this.baseUrl}/${id}/assign-carrier`, request).pipe(
            tap(() => this.toast.success('Carrier assigned to shipment', { title: '✅ Carrier Assigned' }))
        );
    }

    updateStatus(id: number, request: UpdateStatusRequest): Observable<Shipment> {
        return this.http.put<Shipment>(`${this.baseUrl}/${id}/status`, request).pipe(
            tap(() => this.toast.info('Shipment status updated', { title: '📦 Status Updated' }))
        );
    }

    markAsShipped(id: number): Observable<Shipment> {
        return this.http.post<Shipment>(`${this.baseUrl}/${id}/ship`, {}).pipe(
            tap(shipment => this.toast.success(`Shipment #${shipment.trackingNumber} shipped`, { title: '🚚 Shipped' }))
        );
    }

    markAsDelivered(id: number): Observable<Shipment> {
        return this.http.post<Shipment>(`${this.baseUrl}/${id}/deliver`, {}).pipe(
            tap(shipment => this.toast.success(`Shipment #${shipment.trackingNumber} delivered`, { title: '✅ Delivered' }))
        );
    }

    cancel(id: number, reason: string): Observable<Shipment> {
        return this.http.post<Shipment>(`${this.baseUrl}/${id}/cancel`, { reason }).pipe(
            tap(() => this.toast.warning('Shipment cancelled', { title: '❌ Cancelled' }))
        );
    }

    // Add tracking event
    addTrackingEvent(id: number, request: AddTrackingEventRequest): Observable<ShipmentTracking> {
        return this.http.post<ShipmentTracking>(`${this.baseUrl}/${id}/track`, request).pipe(
            tap(() => this.toast.info('Tracking event added', { title: '📍 Tracking Updated' }))
        );
    }
}

