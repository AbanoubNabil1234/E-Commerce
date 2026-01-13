// ==============================================
// warehouses.service.ts
// HTTP Service for Warehouse Management
// ==============================================

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
    Warehouse,
    WarehouseListDto,
    CreateWarehouseRequest,
    UpdateWarehouseRequest
} from '../models/warehouse.models';

@Injectable({
    providedIn: 'root'
})
export class WarehousesService {
    private http = inject(HttpClient);
    private apiUrl = `${environment.apiUrl}/warehouses`;

    /**
     * Get all warehouses (active and inactive)
     */
    getAll(): Observable<WarehouseListDto[]> {
        return this.http.get<WarehouseListDto[]>(this.apiUrl);
    }

    /**
     * Get only active warehouses
     */
    getActive(): Observable<WarehouseListDto[]> {
        return this.http.get<WarehouseListDto[]>(`${this.apiUrl}/active`);
    }

    /**
     * Get warehouse by ID
     */
    getById(id: number): Observable<Warehouse> {
        return this.http.get<Warehouse>(`${this.apiUrl}/${id}`);
    }

    /**
     * Get the default warehouse
     */
    getDefault(): Observable<Warehouse> {
        return this.http.get<Warehouse>(`${this.apiUrl}/default`);
    }

    /**
     * Create a new warehouse
     */
    create(request: CreateWarehouseRequest): Observable<Warehouse> {
        return this.http.post<Warehouse>(this.apiUrl, request);
    }

    /**
     * Update an existing warehouse
     */
    update(id: number, request: UpdateWarehouseRequest): Observable<Warehouse> {
        return this.http.put<Warehouse>(`${this.apiUrl}/${id}`, request);
    }

    /**
     * Activate a deactivated warehouse
     */
    activate(id: number): Observable<Warehouse> {
        return this.http.post<Warehouse>(`${this.apiUrl}/${id}/activate`, {});
    }

    /**
     * Deactivate a warehouse
     */
    deactivate(id: number): Observable<Warehouse> {
        return this.http.post<Warehouse>(`${this.apiUrl}/${id}/deactivate`, {});
    }

    /**
     * Set a warehouse as default
     */
    setDefault(id: number): Observable<Warehouse> {
        return this.http.post<Warehouse>(`${this.apiUrl}/${id}/set-default`, {});
    }
}
