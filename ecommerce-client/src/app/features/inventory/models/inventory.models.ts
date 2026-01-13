export interface ProductStock {
    id: number;
    productId: number;
    productName: string;
    productSKU: string;
    brandName?: string;
    categoryName?: string;
    warehouseId: number;
    warehouseName: string;
    binId?: number;
    binCode?: string;
    quantityOnHand: number;
    quantityReserved: number;
    quantityAvailable: number;
    reorderLevel?: number;
    reorderQuantity?: number;
    isLowStock: boolean;
    lastCountedAt?: string;
    updatedAt?: string;
}

export interface StockMovement {
    id: number;
    productId: number;
    productName: string;
    warehouseId: number;
    warehouseName: string;
    movementType: MovementType;
    quantity: number;
    previousQuantity: number;
    newQuantity: number;
    referenceType?: string;
    referenceId?: number;
    reason?: string;
    notes?: string;
    performedBy: string;
    performedByName: string;
    createdAt: string;
}

export interface ProductStockSummary {
    productId: number;
    productName: string;
    productSKU: string;
    totalQuantityOnHand: number;
    totalQuantityReserved: number;
    totalQuantityAvailable: number;
    warehouseCount: number;
    isLowStock: boolean;
}

export enum MovementType {
    In = 0,
    Out = 1,
    Transfer = 2,
    Adjustment = 3,
    Damaged = 4,
    Return = 5
}

export enum AdjustmentType {
    Increase = 0,
    Decrease = 1,
    SetAbsolute = 2
}

export interface InitializeStockRequest {
    productId: number;
    warehouseId: number;
    binId?: number;
    initialQuantity: number;
    reorderLevel?: number;
    reorderQuantity?: number;
    notes?: string;
}

export interface AdjustStockRequest {
    productId: number;
    warehouseId: number;
    quantity: number;
    adjustmentType: AdjustmentType;
    reason: string;
    notes?: string;
}

export interface TransferStockRequest {
    productId: number;
    sourceWarehouseId: number;
    sourceBinId?: number;
    destinationWarehouseId: number;
    destinationBinId?: number;
    quantity: number;
    reason?: string;
    notes?: string;
}
