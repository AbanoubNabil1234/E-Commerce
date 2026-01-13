import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';

interface ProductImage {
  id: number;
  url: string;
  alt: string;
}

interface ProductVariant {
  color: string;
  colorCode: string;
  sizes: string[];
}

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: ProductImage[];
  rating: number;
  reviewCount: number;
  variants: ProductVariant[];
  features: string[];
  inStock: boolean;
}

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Breadcrumb -->
    <div class="bg-gray-50 dark:bg-dark-surface border-b border-gray-100 dark:border-dark-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav class="flex items-center gap-2 text-sm">
          <a routerLink="/store" class="text-gray-500 hover:text-primary-600">Home</a>
          <span class="text-gray-400">/</span>
          <a routerLink="/store/category/watches" class="text-gray-500 hover:text-primary-600">Watches</a>
          <span class="text-gray-400">/</span>
          <span class="text-gray-900 dark:text-white font-medium">{{ product().name }}</span>
        </nav>
      </div>
    </div>

    <!-- Product Section -->
    <section class="py-8 lg:py-12 bg-white dark:bg-dark-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          <!-- Image Gallery -->
          <div class="space-y-4">
            <!-- Main Image -->
            <div class="relative aspect-square bg-gray-50 dark:bg-dark-surface rounded-2xl overflow-hidden">
              <img 
                [src]="selectedImage().url" 
                [alt]="selectedImage().alt"
                class="w-full h-full object-cover"
              />
              <!-- Zoom Button -->
              <button class="absolute top-4 end-4 p-2 bg-white/90 dark:bg-dark-card/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors">
                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                </svg>
              </button>
            </div>
            
            <!-- Thumbnails -->
            <div class="flex gap-3 overflow-x-auto pb-2">
              @for (image of product().images; track image.id; let i = $index) {
                <button 
                  (click)="selectImage(i)"
                  class="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all"
                  [class]="selectedImageIndex() === i ? 'border-primary-500 shadow-md' : 'border-gray-200 dark:border-dark-border hover:border-primary-300'"
                >
                  <img [src]="image.url" [alt]="image.alt" class="w-full h-full object-cover" />
                </button>
              }
            </div>
          </div>
          
          <!-- Product Info -->
          <div class="space-y-6">
            <!-- Brand -->
            <p class="text-sm text-primary-600 font-medium uppercase tracking-wider">{{ product().brand }}</p>
            
            <!-- Title -->
            <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">{{ product().name }}</h1>
            
            <!-- Rating -->
            <div class="flex items-center gap-3">
              <div class="flex items-center">
                @for (star of [1,2,3,4,5]; track star) {
                  <svg class="w-5 h-5" [class]="star <= product().rating ? 'text-yellow-400 fill-current' : 'text-gray-300'" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                }
              </div>
              <span class="text-sm text-primary-600 font-medium">{{ product().rating }}</span>
              <span class="text-sm text-gray-500">({{ product().reviewCount }} reviews)</span>
            </div>
            
            <!-- Price -->
            <div class="flex items-baseline gap-3">
              <span class="text-3xl font-bold text-gray-900 dark:text-white">\${{ product().price.toFixed(2) }}</span>
              @if (product().originalPrice) {
                <span class="text-xl text-gray-400 line-through">\${{ product().originalPrice?.toFixed(2) }}</span>
                <span class="px-2.5 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full">
                  {{ discountPercent() }}% OFF
                </span>
              }
            </div>
            
            <!-- Description -->
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ product().description }}</p>
            
            <!-- Color Selection -->
            <div>
              <h3 class="text-sm font-medium text-gray-900 dark:text-white mb-3">Color</h3>
              <div class="flex gap-3">
                @for (variant of product().variants; track variant.color; let i = $index) {
                  <button 
                    (click)="selectColor(i)"
                    class="w-10 h-10 rounded-full border-2 transition-all"
                    [style.backgroundColor]="variant.colorCode"
                    [class]="selectedColorIndex() === i ? 'border-primary-500 ring-2 ring-primary-500 ring-offset-2' : 'border-gray-200 hover:border-gray-400'"
                    [title]="variant.color"
                  ></button>
                }
              </div>
            </div>
            
            <!-- Size Selection -->
            <div>
              <h3 class="text-sm font-medium text-gray-900 dark:text-white mb-3">Size</h3>
              <div class="flex flex-wrap gap-2">
                @for (size of availableSizes(); track size) {
                  <button 
                    (click)="selectSize(size)"
                    class="px-4 py-2 border rounded-lg text-sm font-medium transition-all"
                    [class]="selectedSize() === size 
                      ? 'border-primary-500 bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400' 
                      : 'border-gray-200 dark:border-dark-border text-gray-700 dark:text-gray-300 hover:border-primary-300'"
                  >
                    {{ size }}
                  </button>
                }
              </div>
            </div>
            
            <!-- Quantity -->
            <div>
              <h3 class="text-sm font-medium text-gray-900 dark:text-white mb-3">Quantity</h3>
              <div class="flex items-center gap-3">
                <button 
                  (click)="decreaseQty()"
                  class="w-10 h-10 flex items-center justify-center border border-gray-200 dark:border-dark-border rounded-lg text-gray-600 hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                  </svg>
                </button>
                <span class="w-12 text-center text-lg font-medium text-gray-900 dark:text-white">{{ quantity() }}</span>
                <button 
                  (click)="increaseQty()"
                  class="w-10 h-10 flex items-center justify-center border border-gray-200 dark:border-dark-border rounded-lg text-gray-600 hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <!-- Actions -->
            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <button (click)="addToCart()" class="btn-cta flex-1 justify-center">
                <svg class="w-5 h-5 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                </svg>
                Add to Cart
              </button>
              <button class="btn-glass flex-1 justify-center text-gray-900 dark:text-white border border-gray-200 dark:border-dark-border">
                Buy Now
              </button>
              <button (click)="toggleWishlist()" class="p-4 border border-gray-200 dark:border-dark-border rounded-xl hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors">
                <svg class="w-6 h-6" [class]="isWishlisted() ? 'text-red-500 fill-current' : 'text-gray-400'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </button>
            </div>
            
            <!-- Trust Badges -->
            <div class="flex flex-wrap gap-6 pt-6 border-t border-gray-100 dark:border-dark-border">
              <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                Secure Payment
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
                30-Day Returns
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
                </svg>
                Free Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tabs Section -->
    <section class="py-12 bg-gray-50 dark:bg-dark-surface">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Tab Headers -->
        <div class="flex gap-8 border-b border-gray-200 dark:border-dark-border mb-8">
          @for (tab of tabs; track tab) {
            <button 
              (click)="activeTab.set(tab)"
              class="pb-4 text-sm font-medium transition-colors relative"
              [class]="activeTab() === tab 
                ? 'text-primary-600 border-b-2 border-primary-600' 
                : 'text-gray-500 hover:text-gray-700'"
            >
              {{ tab }}
            </button>
          }
        </div>
        
        <!-- Tab Content -->
        @if (activeTab() === 'Description') {
          <div class="prose dark:prose-invert max-w-none">
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ product().description }}</p>
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-4">Features</h4>
            <ul class="space-y-2">
              @for (feature of product().features; track feature) {
                <li class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  {{ feature }}
                </li>
              }
            </ul>
          </div>
        }
        
        @if (activeTab() === 'Specifications') {
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-4 bg-white dark:bg-dark-card rounded-xl">
              <span class="text-sm text-gray-500">Brand</span>
              <p class="font-medium text-gray-900 dark:text-white">{{ product().brand }}</p>
            </div>
            <div class="p-4 bg-white dark:bg-dark-card rounded-xl">
              <span class="text-sm text-gray-500">Material</span>
              <p class="font-medium text-gray-900 dark:text-white">Titanium</p>
            </div>
            <div class="p-4 bg-white dark:bg-dark-card rounded-xl">
              <span class="text-sm text-gray-500">Water Resistance</span>
              <p class="font-medium text-gray-900 dark:text-white">100m</p>
            </div>
            <div class="p-4 bg-white dark:bg-dark-card rounded-xl">
              <span class="text-sm text-gray-500">Warranty</span>
              <p class="font-medium text-gray-900 dark:text-white">2 Years</p>
            </div>
          </div>
        }
        
        @if (activeTab() === 'Reviews') {
          <div class="text-center py-12 text-gray-500">
            <p>{{ product().reviewCount }} reviews available</p>
            <button class="btn-primary mt-4">Write a Review</button>
          </div>
        }
      </div>
    </section>

    <!-- Spacer for mobile nav -->
    <div class="h-24 lg:hidden"></div>
  `
})
export class ProductDetailComponent {
  tabs = ['Description', 'Specifications', 'Reviews'];
  activeTab = signal('Description');

  selectedImageIndex = signal(0);
  selectedColorIndex = signal(0);
  selectedSize = signal('M/L');
  quantity = signal(1);
  isWishlisted = signal(false);

  product = signal<Product>({
    id: 1,
    name: 'Aether Chrono Smart Watch - Titanium Edition',
    brand: 'AETHER',
    price: 299.00,
    originalPrice: 399.00,
    description: 'Experience luxury meets technology with the Aether Chrono Smart Watch. Crafted from aerospace-grade titanium with sapphire crystal display, this timepiece seamlessly blends classic horology with cutting-edge smart features.',
    images: [
      { id: 1, url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop', alt: 'Watch front view' },
      { id: 2, url: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&h=800&fit=crop', alt: 'Watch side view' },
      { id: 3, url: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&h=800&fit=crop', alt: 'Watch on wrist' },
      { id: 4, url: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&h=800&fit=crop', alt: 'Watch detail' },
    ],
    rating: 4.5,
    reviewCount: 1245,
    variants: [
      { color: 'Space Gray', colorCode: '#4a4a4a', sizes: ['S/M', 'M/L'] },
      { color: 'Silver', colorCode: '#c0c0c0', sizes: ['S/M', 'M/L'] },
      { color: 'Gold', colorCode: '#d4af37', sizes: ['S/M', 'M/L'] },
    ],
    features: [
      'Aerospace-grade titanium case',
      'Sapphire crystal display with anti-glare coating',
      'Advanced health monitoring sensors',
      '7-day battery life with fast charging',
      'Water resistant up to 100 meters',
      'Premium leather and silicone bands included',
    ],
    inStock: true
  });

  selectedImage = computed(() => this.product().images[this.selectedImageIndex()]);

  availableSizes = computed(() => {
    const variant = this.product().variants[this.selectedColorIndex()];
    return variant?.sizes || [];
  });

  discountPercent = computed(() => {
    const p = this.product();
    if (p.originalPrice) {
      return Math.round((1 - p.price / p.originalPrice) * 100);
    }
    return 0;
  });

  selectImage(index: number): void {
    this.selectedImageIndex.set(index);
  }

  selectColor(index: number): void {
    this.selectedColorIndex.set(index);
  }

  selectSize(size: string): void {
    this.selectedSize.set(size);
  }

  increaseQty(): void {
    this.quantity.update(q => q + 1);
  }

  decreaseQty(): void {
    this.quantity.update(q => Math.max(1, q - 1));
  }

  addToCart(): void {
    console.log('Added to cart:', {
      product: this.product().name,
      color: this.product().variants[this.selectedColorIndex()].color,
      size: this.selectedSize(),
      quantity: this.quantity()
    });
  }

  toggleWishlist(): void {
    this.isWishlisted.update(w => !w);
  }
}
