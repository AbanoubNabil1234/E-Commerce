import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';

interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    isNew?: boolean;
    discount?: number;
}

@Component({
    selector: 'app-brand-detail',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="bg-white dark:bg-dark-bg min-h-screen">
      <!-- Brand Hero -->
      <div class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <nav class="flex items-center gap-2 text-sm mb-6">
            <a routerLink="/store" class="text-gray-400 hover:text-white">Home</a>
            <span class="text-gray-600">/</span>
            <a routerLink="/store/brands" class="text-gray-400 hover:text-white">Brands</a>
            <span class="text-gray-600">/</span>
            <span class="text-white">{{ brandName() }}</span>
          </nav>
          
          <div class="flex flex-col lg:flex-row items-center gap-8">
            <div class="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <span class="text-4xl font-bold">{{ brandName().charAt(0) }}</span>
            </div>
            <div class="text-center lg:text-start">
              <h1 class="text-4xl lg:text-5xl font-bold mb-4">{{ brandName() }}</h1>
              <p class="text-lg text-gray-300 max-w-2xl">
                {{ brandDescription() }}
              </p>
              <div class="flex items-center gap-6 mt-6 justify-center lg:justify-start">
                <div class="text-center">
                  <span class="text-2xl font-bold text-white">{{ products().length }}</span>
                  <p class="text-sm text-gray-400">Products</p>
                </div>
                <div class="w-px h-10 bg-gray-700"></div>
                <div class="text-center">
                  <span class="text-2xl font-bold text-white">4.8</span>
                  <p class="text-sm text-gray-400">Rating</p>
                </div>
                <div class="w-px h-10 bg-gray-700"></div>
                <div class="text-center">
                  <span class="text-2xl font-bold text-white">Since 1875</span>
                  <p class="text-sm text-gray-400">Established</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Products -->
      <section class="py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">All Products</h2>
            <select class="px-4 py-2 border border-gray-200 dark:border-dark-border rounded-lg bg-white dark:bg-dark-card text-sm">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            @for (product of products(); track product.id) {
              <a [routerLink]="['/store/product', product.id]" class="product-card group">
                <div class="product-card-image">
                  <img [src]="product.image" [alt]="product.name" />
                  <button class="product-card-wishlist" (click)="$event.preventDefault()">
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
                </div>
                <div class="product-card-body">
                  <p class="product-card-brand">{{ brandName() }}</p>
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
        </div>
      </section>

      <!-- Spacer for mobile nav -->
      <div class="h-24 lg:hidden"></div>
    </div>
  `
})
export class BrandDetailComponent {
    brandName = signal('ROLEX');
    brandDescription = signal('Swiss luxury watch manufacturer known worldwide for precision, innovation, and timeless elegance. Each Rolex watch is crafted to perfection.');

    products = signal<Product[]>([
        { id: 1, name: 'Submariner Date', price: 14500, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop', rating: 5, discount: 10 },
        { id: 2, name: 'Daytona Cosmograph', price: 42000, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop', rating: 5 },
        { id: 3, name: 'GMT-Master II', price: 18500, image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop', rating: 5, isNew: true },
        { id: 4, name: 'Datejust 41', price: 12800, image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=400&h=400&fit=crop', rating: 5 },
        { id: 5, name: 'Explorer II', price: 9550, image: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=400&h=400&fit=crop', rating: 4 },
        { id: 6, name: 'Sea-Dweller', price: 14650, image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=400&h=400&fit=crop', rating: 5 },
        { id: 7, name: 'Sky-Dweller', price: 52500, image: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=400&h=400&fit=crop', rating: 5, isNew: true },
        { id: 8, name: 'Yacht-Master II', price: 24950, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop', rating: 4 },
    ]);
}
