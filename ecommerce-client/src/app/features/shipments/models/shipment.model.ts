import { ShipmentStatus } from './shipment-status.enum';

// ==============================================
// Shipment Models
// ==============================================

export interface Shipment {
    id: number;
    orderId: number;
    orderNumber: string;
    warehouseId: number;
    warehouseName: string;
    carrierId?: number;
    carrierName?: string;
    trackingNumber: string;
    shippingMethod: string;
    status: ShipmentStatus;
    estimatedDeliveryDate?: string;
    actualDeliveryDate?: string;
    shippedAt?: string;
    deliveredAt?: string;
    weight?: number;
    shippingCost?: number;
    recipientName?: string;
    recipientPhone?: string;
    deliveryAddress?: string;
    deliveryCity?: string;
    deliveryCountry?: string;
    notes?: string;
    createdAt: string;
    createdBy?: string;
    items: ShipmentItem[];
    trackingHistory: ShipmentTracking[];
}

export interface ShipmentListItem {
    id: number;
    trackingNumber: string;
    orderNumber: string;
    warehouseName: string;
    carrierName?: string;
    status: ShipmentStatus;
    shippingMethod: string;
    recipientName?: string;
    deliveryCity?: string;
    estimatedDeliveryDate?: string;
    createdAt: string;
    itemCount: number;
}

export interface ShipmentItem {
    id: number;
    productId: number;
    productName: string;
    productSku: string;
    productImageUrl?: string;
    quantity: number;
}

export interface ShipmentTracking {
    id: number;
    status: ShipmentStatus;
    location?: string;
    description?: string;
    notes?: string;
    performedBy?: string;
    performedByName?: string;
    occurredAt: string;
}

export interface Carrier {
    id: number;
    name: string;
    code: string;
    trackingUrlTemplate?: string;
    contactPhone?: string;
    contactEmail?: string;
    isActive: boolean;
}

// Alias for compatibility
export type CourierDto = Carrier;

// ==============================================
// Request DTOs
// ==============================================

export interface CreateShipmentRequest {
    orderId: number;
    warehouseId: number;
    carrierId?: number;
    shippingMethod: string;
    estimatedDeliveryDate?: string;
    recipientName?: string;
    recipientPhone?: string;
    deliveryAddress?: string;
    deliveryCity?: string;
    deliveryCountry?: string;
    deliveryPostalCode?: string;
    notes?: string;
    items: ShipmentItemRequest[];
}

export interface ShipmentItemRequest {
    productId: number;
    quantity: number;
    orderItemId?: number;
}

export interface AssignCarrierRequest {
    carrierId: number;
    trackingNumber?: string;
    estimatedDeliveryDate?: string;
}

export interface UpdateStatusRequest {
    status: ShipmentStatus;
    location?: string;
    notes?: string;
}

export interface ShipmentFilter {
    pageNumber: number;
    pageSize: number;
    status?: ShipmentStatus;
    warehouseId?: number;
    carrierId?: number;
    orderId?: number;
    search?: string;
    fromDate?: string;
    toDate?: string;
}

export interface ShipmentListResponse {
    items: ShipmentListItem[];
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
}

export interface AddTrackingEventRequest {
    status: ShipmentStatus;
    location?: string;
    description?: string;
    notes?: string;
}
