import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

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

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="bg-white dark:bg-dark-bg min-h-screen">
      <!-- Header -->
      <div class="bg-gray-50 dark:bg-dark-surface border-b border-gray-100 dark:border-dark-border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav class="flex items-center gap-2 text-sm mb-4">
            <a routerLink="/store" class="text-gray-500 hover:text-primary-600">Home</a>
            <span class="text-gray-400">/</span>
            <span class="text-gray-900 dark:text-white font-medium">{{ categoryName() }}</span>
          </nav>
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">{{ categoryName() }}</h1>
          <p class="text-gray-500 mt-2">{{ products().length }} products found</p>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex gap-8">
          
          <!-- Filters Sidebar -->
          <aside class="hidden lg:block w-64 flex-shrink-0">
            <div class="sticky top-24 space-y-6">
              
              <!-- Brand Filter -->
              <div class="bg-white dark:bg-dark-card rounded-xl p-5 border border-gray-100 dark:border-dark-border">
                <h3 class="font-semibold text-gray-900 dark:text-white mb-4 flex items-center justify-between">
                  Brand
                  <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </h3>
                <div class="space-y-3">
                  @for (brand of brands; track brand.value) {
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        [checked]="selectedBrands().includes(brand.value)"
                        (change)="toggleBrand(brand.value)"
                        class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span class="text-sm text-gray-700 dark:text-gray-300 group-hover:text-primary-600">{{ brand.label }}</span>
                      @if (brand.count) {
                        <span class="text-xs text-gray-400 ms-auto">{{ brand.count }}</span>
                      }
                    </label>
                  }
                </div>
              </div>

              <!-- Price Range -->
              <div class="bg-white dark:bg-dark-card rounded-xl p-5 border border-gray-100 dark:border-dark-border">
                <h3 class="font-semibold text-gray-900 dark:text-white mb-4">Price Range</h3>
                <div class="space-y-4">
                  <input 
                    type="range" 
                    [min]="0" 
                    [max]="1000" 
                    [value]="priceRange()[1]"
                    (input)="updatePriceRange($event)"
                    class="w-full accent-primary-600"
                  />
                  <div class="flex items-center justify-between text-sm">
                    <span class="text-gray-600 dark:text-gray-400">\${{ priceRange()[0] }}</span>
                    <span class="text-gray-600 dark:text-gray-400">\${{ priceRange()[1] }}</span>
                  </div>
                </div>
              </div>

              <!-- Rating Filter -->
              <div class="bg-white dark:bg-dark-card rounded-xl p-5 border border-gray-100 dark:border-dark-border">
                <h3 class="font-semibold text-gray-900 dark:text-white mb-4">Rating</h3>
                <div class="space-y-3">
                  @for (rating of [5,4,3,2,1]; track rating) {
                    <label class="flex items-center gap-2 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <div class="flex">
                        @for (star of [1,2,3,4,5]; track star) {
                          <svg class="w-4 h-4" [class]="star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        }
                      </div>
                      <span class="text-sm text-gray-500">& up</span>
                    </label>
                  }
                </div>
              </div>

            </div>
          </aside>

          <!-- Products Grid -->
          <div class="flex-1">
            <!-- Sort Bar -->
            <div class="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 dark:border-dark-border">
              <div class="flex items-center gap-4">
                <button 
                  (click)="viewMode.set('grid')"
                  class="p-2 rounded-lg transition-colors"
                  [class]="viewMode() === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-gray-400 hover:text-gray-600'"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                  </svg>
                </button>
                <button 
                  (click)="viewMode.set('list')"
                  class="p-2 rounded-lg transition-colors"
                  [class]="viewMode() === 'list' ? 'bg-primary-100 text-primary-600' : 'text-gray-400 hover:text-gray-600'"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                </button>
              </div>
              
              <div class="flex items-center gap-4">
                <span class="text-sm text-gray-500">Sort by:</span>
                <select 
                  [ngModel]="sortBy()" 
                  (ngModelChange)="sortBy.set($event)"
                  class="px-3 py-2 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            <!-- Products -->
            <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
              @for (product of products(); track product.id) {
                <a [routerLink]="['/store/product', product.id]" class="product-card group">
                  <div class="product-card-image">
                    <img [src]="product.image" [alt]="product.name" />
                    <button class="product-card-wishlist" (click)="$event.preventDefault(); toggleWishlist(product.id)">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                      </svg>
                    </button>
                    @if (product.isNew) {
                      <span class="product-card-badge new">NEW</span>
                    }
                    @if (product.discount) {
                      <span class="product-card-badge sale">-{{ product.discount }}%</span>
                    }
                    <div class="product-card-quick-view">
                      <button class="btn-glass text-sm py-2 px-4">Quick View</button>
                    </div>
                  </div>
                  <div class="product-card-body">
                    <p class="product-card-brand">{{ product.brand }}</p>
                    <h3 class="product-card-title">{{ product.name }}</h3>
                    <div class="flex items-center gap-1 mb-2">
                      @for (star of [1,2,3,4,5]; track star) {
                        <svg class="w-4 h-4" [class]="star <= product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      }
                    </div>
                    <div class="product-card-price">
                      <span class="current">\${{ product.price.toFixed(2) }}</span>
                      @if (product.originalPrice) {
                        <span class="original">\${{ product.originalPrice.toFixed(2) }}</span>
                      }
                    </div>
                  </div>
                </a>
              }
            </div>

            <!-- Pagination -->
            <div class="flex items-center justify-center gap-2 mt-12">
              <button class="px-4 py-2 border border-gray-200 dark:border-dark-border rounded-lg text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50">
                Previous
              </button>
              @for (page of [1,2,3]; track page) {
                <button 
                  class="w-10 h-10 rounded-lg text-sm font-medium transition-colors"
                  [class]="page === 1 ? 'bg-primary-600 text-white' : 'text-gray-600 hover:bg-gray-100'"
                >
                  {{ page }}
                </button>
              }
              <span class="text-gray-400">...</span>
              <button class="w-10 h-10 rounded-lg text-sm text-gray-600 hover:bg-gray-100">10</button>
              <button class="px-4 py-2 border border-gray-200 dark:border-dark-border rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Spacer for mobile nav -->
      <div class="h-24 lg:hidden"></div>
    </div>
  `
})
export class CategoryComponent {
  categoryName = signal('Luxury Watches');
  viewMode = signal<'grid' | 'list'>('grid');
  sortBy = signal('featured');
  selectedBrands = signal<string[]>([]);
  priceRange = signal<[number, number]>([0, 500]);

  brands: FilterOption[] = [
    { label: 'Rolex', value: 'rolex', count: 24 },
    { label: 'Patek Philippe', value: 'patek', count: 18 },
    { label: 'Audemars Piguet', value: 'ap', count: 12 },
    { label: 'Omega', value: 'omega', count: 31 },
    { label: 'Cartier', value: 'cartier', count: 15 },
  ];

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
