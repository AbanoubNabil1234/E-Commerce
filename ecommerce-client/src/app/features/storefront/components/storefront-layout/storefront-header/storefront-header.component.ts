import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-storefront-header',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <header class="sticky top-0 z-40 bg-white/95 dark:bg-dark-surface/95 backdrop-blur-md border-b border-gray-100 dark:border-dark-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 lg:h-20">
          
          <!-- Logo -->
          <a routerLink="/" class="flex items-center gap-2">
            <div class="w-10 h-10 bg-cta-gradient rounded-xl flex items-center justify-center">
              <span class="text-white font-bold text-lg">L</span>
            </div>
            <span class="text-xl font-bold text-gray-900 dark:text-white tracking-tight">LUXE</span>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center gap-8">
            <a routerLink="/" class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              {{ 'Home' }}
            </a>
            <a routerLink="/store/category/new-arrivals" class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              {{ 'New Arrivals' }}
            </a>
            <a routerLink="/store/category/categories" class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              {{ 'Categories' }}
            </a>
            <a routerLink="/store/category/brands" class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              {{ 'Brands' }}
            </a>
          </nav>

          <!-- Search Bar (Desktop) -->
          <div class="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div class="relative w-full">
              <svg class="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <input 
                type="text" 
                placeholder="Search products..."
                class="w-full ps-10 pe-4 py-2.5 bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
              />
            </div>
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-2 lg:gap-4">
            <!-- Search Icon (Mobile) -->
            <button class="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>

            <!-- Wishlist -->
            <a routerLink="/store/wishlist" class="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 transition-colors relative">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
              @if (wishlistCount() > 0) {
                <span class="absolute -top-1 -end-1 w-5 h-5 bg-primary-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {{ wishlistCount() }}
                </span>
              }
            </a>

            <!-- Cart -->
            <a routerLink="/store/cart" class="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 transition-colors relative">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
              @if (cartCount() > 0) {
                <span class="absolute -top-1 -end-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                  {{ cartCount() }}
                </span>
              }
            </a>

            <!-- Profile -->
            <a routerLink="/store/account" class="hidden lg:flex items-center gap-2 p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  `
})
export class StorefrontHeaderComponent {
    cartCount = signal(3);
    wishlistCount = signal(5);
}
