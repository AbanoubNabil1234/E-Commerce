// ==============================================
// api-response.model.ts
// Generic API response interfaces
// ==============================================

export interface ApiResponse<T> {
    data: T;
    message?: string;
    success: boolean;
}

export interface PaginatedResponse<T> {
    items: T[];
    pageNumber: number;
    totalPages: number;
    totalCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
}

export interface ApiError {
    message: string;
    errors?: Record<string, string[]>;
}
