import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Category {
  id: number;
  name: string;
  icon: string;
  slug: string;
  productCount: number;
  image: string;
}

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  discount?: number;
}

interface Brand {
  id: number;
  name: string;
  logo: string;
}

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  product: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- ============================================== -->
    <!-- HERO SECTION - Full Width Immersive -->
    <!-- ============================================== -->
    <section class="hero-section min-h-[85vh] flex items-center">
      <div class="max-w-7xl mx-auto w-full">
        <div class="hero-content flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <!-- Hero Text -->
          <div class="flex-1 text-center lg:text-start">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-200 mb-8">
              <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Free Shipping on Orders Over \$500
            </div>
            
            <h1 class="hero-title leading-tight">
              Discover<br/>
              <span class="bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Timeless Luxury
              </span>
            </h1>
            
            <p class="hero-subtitle mt-6 text-lg lg:text-xl leading-relaxed">
              Curated collections of the world's finest luxury goods. 
              From Swiss timepieces to Parisian haute couture — experience excellence.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              <a routerLink="/store/new-arrivals" class="btn-cta text-lg px-10 py-5">
                <span>Shop New Arrivals</span>
                <svg class="w-5 h-5 ms-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
              <a routerLink="/store/brands" class="btn-glass px-8 py-5">
                Explore Brands
              </a>
            </div>
            
            <!-- Trust Indicators -->
            <div class="flex items-center gap-8 mt-12 justify-center lg:justify-start">
              <div class="text-center">
                <span class="text-2xl font-bold text-white">250K+</span>
                <p class="text-sm text-gray-400">Happy Customers</p>
              </div>
              <div class="w-px h-10 bg-gray-700"></div>
              <div class="text-center">
                <span class="text-2xl font-bold text-white">4.9</span>
                <p class="text-sm text-gray-400">Average Rating</p>
              </div>
              <div class="w-px h-10 bg-gray-700"></div>
              <div class="text-center">
                <span class="text-2xl font-bold text-white">500+</span>
                <p class="text-sm text-gray-400">Luxury Brands</p>
              </div>
            </div>
          </div>
          
          <!-- Hero Image Composition -->
          <div class="flex-1 relative hidden lg:block">
            <div class="relative">
              <!-- Background Glow -->
              <div class="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-purple-500/30 rounded-3xl blur-3xl scale-110"></div>
              
              <!-- Main Image -->
              <div class="relative">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=700&fit=crop" 
                  alt="Luxury Shopping"
                  class="w-full h-auto rounded-3xl shadow-2xl"
                />
                
                <!-- Floating Card 1 -->
                <div class="absolute -start-12 top-1/4 bg-white/95 dark:bg-dark-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <span class="text-2xl">⌚</span>
                    </div>
                    <div>
                      <p class="text-sm font-semibold text-gray-900 dark:text-white">Swiss Watches</p>
                      <p class="text-xs text-gray-500">2,500+ Items</p>
                    </div>
                  </div>
                </div>
                
                <!-- Floating Card 2 -->
                <div class="absolute -end-8 bottom-1/4 bg-white/95 dark:bg-dark-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float" style="animation-delay: 1s;">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <span class="text-2xl">💎</span>
                    </div>
                    <div>
                      <p class="text-sm font-semibold text-gray-900 dark:text-white">Fine Jewelry</p>
                      <p class="text-xs text-gray-500">1,800+ Items</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================== -->
    <!-- FEATURED CATEGORIES - Visual Grid -->
    <!-- ============================================== -->
    <section class="py-16 lg:py-24 bg-white dark:bg-dark-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="text-primary-600 font-medium">EXPLORE</span>
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-2">Shop by Category</h2>
          <p class="text-gray-500 mt-3 max-w-2xl mx-auto">
            Browse our carefully curated categories featuring the finest selection of luxury goods
          </p>
        </div>
        
        <!-- Large Category Grid -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          @for (category of featuredCategories(); track category.id; let i = $index) {
            <a 
              [routerLink]="['/store/category', category.slug]" 
              class="group relative rounded-2xl overflow-hidden"
              [class]="i === 0 ? 'col-span-2 row-span-2' : ''"
            >
              <div class="aspect-square">
                <img 
                  [src]="category.image" 
                  [alt]="category.name"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div class="absolute inset-x-0 bottom-0 p-6">
                <span class="text-3xl mb-2 block">{{ category.icon }}</span>
                <h3 class="text-xl lg:text-2xl font-bold text-white">{{ category.name }}</h3>
                <p class="text-gray-300 text-sm mt-1">{{ category.productCount }} Products</p>
              </div>
            </a>
          }
        </div>
        
        <!-- View All Categories -->
        <div class="text-center mt-10">
          <a routerLink="/store/category/all" class="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700">
            View All Categories
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- ============================================== -->
    <!-- FLASH SALE - Urgency Section -->
    <!-- ============================================== -->
    <section class="py-16 lg:py-20 bg-gradient-to-br from-red-600 via-red-700 to-rose-800 text-white relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 start-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 end-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
          <div>
            <div class="flex items-center gap-3 mb-3">
              <span class="text-4xl">⚡</span>
              <h2 class="text-3xl lg:text-4xl font-bold">Flash Sale</h2>
            </div>
            <p class="text-white/80 text-lg">Up to 70% off on selected premium items</p>
          </div>
          
          <!-- Countdown Timer -->
          <div class="flex items-center gap-4">
            <div class="text-center">
              <div class="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <span class="text-2xl lg:text-3xl font-bold">{{ hours() }}</span>
              </div>
              <span class="text-sm text-white/70 mt-2 block">Hours</span>
            </div>
            <span class="text-3xl font-bold">:</span>
            <div class="text-center">
              <div class="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <span class="text-2xl lg:text-3xl font-bold">{{ minutes() }}</span>
              </div>
              <span class="text-sm text-white/70 mt-2 block">Minutes</span>
            </div>
            <span class="text-3xl font-bold">:</span>
            <div class="text-center">
              <div class="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <span class="text-2xl lg:text-3xl font-bold">{{ seconds() }}</span>
              </div>
              <span class="text-sm text-white/70 mt-2 block">Seconds</span>
            </div>
          </div>
        </div>
        
        <!-- Flash Sale Products -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          @for (product of flashSaleProducts(); track product.id) {
            <a [routerLink]="['/store/product', product.id]" class="bg-white dark:bg-dark-card rounded-2xl overflow-hidden group shadow-xl">
              <div class="relative aspect-square overflow-hidden">
                <img [src]="product.image" [alt]="product.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                @if (product.discount) {
                  <span class="absolute top-3 start-3 px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
                    -{{ product.discount }}%
                  </span>
                }
              </div>
              <div class="p-4">
                <p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">{{ product.brand }}</p>
                <h3 class="font-medium text-gray-900 dark:text-white line-clamp-1 mt-1">{{ product.name }}</h3>
                <div class="flex items-center gap-2 mt-2">
                  <span class="text-lg font-bold text-red-600">\${{ product.price }}</span>
                  @if (product.originalPrice) {
                    <span class="text-sm text-gray-400 line-through">\${{ product.originalPrice }}</span>
                  }
                </div>
              </div>
            </a>
          }
        </div>
        
        <div class="text-center mt-10">
          <a routerLink="/store/category/flash-sale" class="btn-glass bg-white/20 hover:bg-white/30 px-8 py-4 text-white border-white/30">
            View All Sale Items →
          </a>
        </div>
      </div>
    </section>

    <!-- ============================================== -->
    <!-- NEW ARRIVALS - Horizontal Scroll -->
    <!-- ============================================== -->
    <section class="py-16 lg:py-24 bg-gray-50 dark:bg-dark-surface">
      <div class="