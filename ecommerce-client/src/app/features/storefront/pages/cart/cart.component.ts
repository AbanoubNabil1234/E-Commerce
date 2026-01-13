import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface CartItem {
  id: number;
  productId: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-gray-50 dark:bg-dark-bg min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Shopping Cart</h1>

        @if (cartItems().length > 0) {
          <div class="grid lg:grid-cols-3 gap-8">
            
            <!-- Cart Items -->
            <div class="lg:col-span-2 space-y-4">
              @for (item of cartItems(); track item.id) {
                <div class="bg-white dark:bg-dark-card rounded-xl p-4 lg:p-6 border border-gray-100 dark:border-dark-border flex gap-4 lg:gap-6">
                  <!-- Image -->
                  <a [routerLink]="['/store/product', item.productId]" class="flex-shrink-0">
                    <img [src]="item.image" [alt]="item.name" class="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-xl" />
                  </a>
                  
                  <!-- Details -->
                  <div class="flex-1 min-w-0">
                    <div class="flex items-start justify-between gap-4">
                      <div>
                        <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">{{ item.brand }}</p>
                        <a [routerLink]="['/store/product', item.productId]" class="font-medium text-gray-900 dark:text-white hover:text-primary-600 line-clamp-2">
                          {{ item.name }}
                        </a>
                        <p class="text-sm text-gray-500 mt-1">{{ item.color }} · {{ item.size }}</p>
                      </div>
                      <button 
                        (click)="removeItem(item.id)"
                        class="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                      </button>
                    </div>
                    
                    <!-- Quantity & Price -->
                    <div class="flex items-center justify-between mt-4">
                      <div class="flex items-center gap-2">
                        <button 
                          (click)="decreaseQty(item.id)"
                          class="w-8 h-8 flex items-center justify-center border border-gray-200 dark:border-dark-border rounded-lg text-gray-500 hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors"
                        >
                          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                          </svg>
                        </button>
                        <span class="w-8 text-center font-medium text-gray-900 dark:text-white">{{ item.quantity }}</span>
                        <button 
                          (click)="increaseQty(item.id)"
                          class="w-8 h-8 flex items-center justify-center border border-gray-200 dark:border-dark-border rounded-lg text-gray-500 hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors"
                        >
                          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                          </svg>
                        </button>
                      </div>
                      <span class="text-lg font-bold text-gray-900 dark:text-white">\${{ (item.price * item.quantity).toFixed(2) }}</span>
                    </div>
                  </div>
                </div>
              }
            </div>

            <!-- Order Summary -->
            <div class="lg:col-span-1">
              <div class="bg-white dark:bg-dark-card rounded-xl p-6 border border-gray-100 dark:border-dark-border sticky top-24">
                <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-6">Order Summary</h2>
                
                <div class="space-y-4 pb-6 border-b border-gray-100 dark:border-dark-border">
                  <div class="flex items-center justify-between text-sm">
                    <span class="text-gray-600 dark:text-gray-400">Subtotal</span>
                    <span class="text-gray-900 dark:text-white">\${{ subtotal().toFixed(2) }}</span>
                  </div>
                  <div class="flex items-center justify-between text-sm">
                    <span class="text-gray-600 dark:text-gray-400">Shipping Estimate</span>
                    <span class="text-gray-900 dark:text-white">\${{ shipping().toFixed(2) }}</span>
                  </div>
                  <div class="flex items-center justify-between text-sm">
                    <span class="text-gray-600 dark:text-gray-400">Tax Estimate</span>
                    <span class="text-gray-900 dark:text-white">\${{ tax().toFixed(2) }}</span>
                  </div>
                </div>
                
                <!-- Discount Code -->
                <div class="py-6 border-b border-gray-100 dark:border-dark-border">
                  <label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Discount Code</label>
                  <div class="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Enter code"
                      class="flex-1 px-3 py-2 border border-gray-200 dark:border-dark-border rounded-lg text-sm bg-white dark:bg-dark-surface focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <button class="px-4 py-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors">
                      Apply
                    </button>
                  </div>
                </div>
                
                <!-- Total -->
                <div class="flex items-center justify-between py-6">
                  <span class="text-lg font-semibold text-gray-900 dark:text-white">Total</span>
                  <span class="text-2xl font-bold text-gray-900 dark:text-white">\${{ total().toFixed(2) }}</span>
                </div>
                
                <a routerLink="/store/checkout" class="btn-cta w-full justify-center">
                  Proceed to Checkout
                </a>
                
                <!-- Trust Badges -->
                <div class="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-gray-100 dark:border-dark-border">
                  <div class="flex items-center gap-1 text-xs text-gray-500">
                    <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                    Secure
                  </div>
                  <div class="flex items-center gap-1 text-xs text-gray-500">
                    <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                    </svg>
                    Free Returns
                  </div>
                  <div class="flex items-center gap-1 text-xs text-gray-500">
                    <svg class="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    24/7 Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        } @else {
          <!-- Empty Cart -->
          <div class="text-center py-16">
            <div class="w-24 h-24 mx-auto bg-gray-100 dark:bg-dark-surface rounded-full flex items-center justify-center mb-6">
              <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
            </div>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Your cart is empty</h2>
            <p class="text-gray-500 mb-6">Looks like you haven't added any items yet.</p>
            <a routerLink="/store" class="btn-cta">
              Continue Shopping
            </a>
          </div>
        }
      </div>

      <!-- Spacer for mobile nav -->
      <div class="h-24 lg:hidden"></div>
    </div>
  `
})
export class CartComponent {
  cartItems = signal<CartItem[]>([
    {
      id: 1,
      productId: 1,
      name: 'Aether Chrono Smart Watch - Titanium Edition',
      brand: 'AETHER',
      price: 299.00,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop',
      color: 'Space Gray',
      size: 'M/L',
      quantity: 1
    },
    {
      id: 2,
      productId: 5,
      name: 'Monaco Wool Blazer',
      brand: 'LUXE',
      price: 895.00,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      color: 'Navy',
      size: 'L',
      quantity: 1
    },
    {
      id: 3,
      productId: 7,
      name: 'Statement Perfume 60ml',
      brand: 'ESSENCE',
      price: 195.00,
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop',
      color: 'Original',
      size: '60ml',
      quantity: 2
    }
  ]);

  subtotal = computed(() => {
    return this.cartItems().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  });

  shipping = computed(() => this.subtotal() > 500 ? 0 : 15);

  tax = computed(() => this.subtotal() * 0.08);

  total = computed(() => this.subtotal() + this.shipping() + this.tax());

  increaseQty(itemId: number): void {
    this.cartItems.update(items =>
      items.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  decreaseQty(itemId: number): void {
    this.cartItems.update(items =>
      items.map(item =>
        item.id === itemId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      )
    );
  }

  removeItem(itemId: number): void {
    this.cartItems.update(items => items.filter(item => item.id !== itemId));
  }
}
