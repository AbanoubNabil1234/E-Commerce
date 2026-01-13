export interface Brand {
    id: number;
    name: string;
    slug: string;
    description?: string;
    logoUrl?: string;
    website?: string;
    isActive: boolean;
    productsCount?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface BrandFilter {
    searchTerm?: string;
    isActive?: boolean;
    pageNumber: number;
    pageSize: number;
}
