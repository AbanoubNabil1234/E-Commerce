import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

// ============================================
// INTERFACES
// ============================================

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  discount?: number;
  isNew?: boolean;
}

interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

// ============================================
// COMPONENT
// ============================================

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  // ============================================
  // PUBLIC SIGNALS - Page State
  // ============================================

  categoryName = signal('Luxury Watches');
  viewMode = signal<'grid' | 'list'>('grid');
  sortBy = signal('featured');
  selectedBrands = signal<string[]>([]);
  priceRange = signal<[number, number]>([0, 500]);

  // ============================================
  // PUBLIC PROPERTIES - Filter Options
  // ============================================

  brands: FilterOption[] = [
    { label: 'Rolex', value: 'rolex', count: 24 },
    { label: 'Patek Philippe', value: 'patek', count: 18 },
    { label: 'Audemars Piguet', value: 'ap', count: 12 },
    { label: 'Omega', value: 'omega', count: 31 },
    { label: 'Cartier', value: 'cartier', count: 15 },
  ];

  // ============================================
  // PUBLIC SIGNALS - Products
  // ============================================

  products = signal<Product[]>([
    { id: 1, name: 'Submariner Date Classic', brand: 'ROLEX', price: 14500, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop', rating: 5, reviewCount: 234, discount: 15 },
    { id: 2, name: 'Nautilus 5711', brand: 'PATEK PHILIPPE', price: 35000, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop', rating: 5, reviewCount: 156, isNew: true },
    { id: 3, name: 'Royal Oak Offshore', brand: 'AUDEMARS PIGUET', price: 28500, image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop', rating: 5, reviewCount: 189, discount: 10 },
    { id: 4, name: 'Speedmaster Professional', brand: 'OMEGA', price: 6500, image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=400&h=400&fit=crop', rating: 4, reviewCount: 312 },
    { id: 5, name: 'Santos de Cartier', brand: 'CARTIER', price: 7200, image: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=400&h=400&fit=crop', rating: 5, reviewCount: 98, isNew: true },
    { id: 6, name: 'Daytona Cosmograph', brand: 'ROLEX', price: 42000, image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=400&h=400&fit=crop', rating: 5, reviewCount: 267 },
    { id: 7, name: 'Aquanaut Travel Time', brand: 'PATEK PHILIPPE', price: 52000, image: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=400&h=400&fit=crop', rating: 5, reviewCount: 134, discount: 8 },
    { id: 8, name: 'Seamaster Planet Ocean', brand: 'OMEGA', price: 6800, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop', rating: 4, reviewCount: 245 },
  ]);

  // ============================================
  // PUBLIC METHODS
  // ============================================

  toggleBrand(brand: string): void {
    this.selectedBrands.update(brands => {
      if (brands.includes(brand)) {
        return brands.filter(b => b !== brand);
      }
      return [...brands, brand];
    });
  }

  updatePriceRange(event: Event): void {
    const value = (event.target as HTMLInputElement).valueAsNumber;
    this.priceRange.set([0, value]);
  }

  toggleWishlist(productId: number): void {
    console.log('Toggle wishlist for product:', productId);
  }
}
