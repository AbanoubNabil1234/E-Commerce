// Order Models - Matching Backend DTOs

export type OrderStatus = 'Draft' | 'Pending' | 'Confirmed' | 'Processing' | 'PartiallyShipped' | 'Shipped' | 'Delivered' | 'Cancelled' | 'Refunded';
export type PaymentStatus = 'Pending' | 'Paid' | 'PartiallyPaid' | 'Refunded' | 'Failed';

export interface Order {
    id: number;
    orderNumber: string;
    customerId: string;
    customerName?: string;
    warehouseId?: number;
    warehouseName?: string;
    orderStatus: OrderStatus;
    paymentStatus: PaymentStatus;
    subTotal: number;
    taxAmount: number;
    shippingAmount: number;
    discountAmount: number;
    totalAmount: number;
    currency: string;
    // Shipping
    shippingName: string;
    shippingAddress: string;
    shippingCity: string;
    shippingState?: string;
    shippingCountry: string;
    shippingPostalCode?: string;
    shippingPhone?: string;
    notes?: string;
    // Timestamps
    createdAt: string;
    confirmedAt?: string;
    shippedAt?: string;
    deliveredAt?: string;
    cancelledAt?: string;
    cancellationReason?: string;
    // Items
    items: OrderItem[];
}

export interface OrderItem {
    id: number;
    productId: number;
    sku: string;
    productName: string;
    productImageUrl?: string;
    unitPrice: number;
    quantity: number;
    discountAmount: number;
    totalPrice: number;
}

export interface OrderListItem {
    id: number;
    orderNumber: string;
    customerId: string;
    customerName?: string;
    warehouseName?: string;
    orderStatus: OrderStatus;
    paymentStatus: PaymentStatus;
    itemCount: number;
    totalAmount: number;
    currency: string;
    createdAt: string;
}

export interface CreateOrderRequest {
    customerId: string;
    warehouseId: number;
    shippingName?: string;
    shippingAddress?: string;
    shippingCity?: string;
    shippingState?: string;
    shippingCountry?: string;
    shippingPostalCode?: string;
    shippingPhone?: string;
    notes?: string;
    currency?: string;
}

export interface AddOrderItemRequest {
    productId: number;
    quantity: number;
    overrideUnitPrice?: number;
    discountAmount?: number;
}

export interface UpdateOrderItemRequest {
    quantity: number;
    discountAmount?: number;
}

export interface OrderFilter {
    status?: OrderStatus;
    paymentStatus?: PaymentStatus;
    warehouseId?: number;
    customerId?: string;
    fromDate?: string;
    toDate?: string;
    searchTerm?: string;
    pageNumber?: number;
    pageSize?: number;
}

export interface OrderAvailabilityResult {
    isFullyAvailable: boolean;
    items: ItemAvailability[];
}

export interface ItemAvailability {
    productId: number;
    productName: string;
    requestedQuantity: number;
    availableQuantity: number;
    isAvailable: boolean;
}
