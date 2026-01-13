// ==============================================
// warehouse.models.ts
// Domain models for Warehouse Management
// ==============================================

export interface Warehouse {
    id: number;
    name: string;
    code: string;
    address: string;
    city: string;
    state?: string;
    country: string;
    postalCode?: string;
    phone?: string;
    email?: string;
    isActive: boolean;
    isDefault: boolean;
    createdAt: string;
}

export interface WarehouseListDto {
    id: number;
    name: string;
    code: string;
    location: string;
    isActive: boolean;
    isDefault: boolean;
}

export interface CreateWarehouseRequest {
    name: string;
    code: string;
    address: string;
    city: string;
    state?: string;
    country: string;
    postalCode?: string;
    phone?: string;
    email?: string;
    isDefault: boolean;
}

export interface UpdateWarehouseRequest {
    name: string;
    code: string;
    address: string;
    city: string;
    state?: string;
    country: string;
    postalCode?: string;
    phone?: string;
    email?: string;
    isDefault: boolean;
}
