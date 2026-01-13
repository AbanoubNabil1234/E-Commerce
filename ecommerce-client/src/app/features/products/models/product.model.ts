// Product Model
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    sku: string;
    categoryId: string;
    brandId: string;
    images: string[];
}
