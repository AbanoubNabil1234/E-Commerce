import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-mobile-bottom-nav',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
    template: `
    <nav class="glass-nav">
      <!-- Home -->
      <a routerLink="/store" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="glass-nav-item">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
        <span class="text-xs font-medium">Home</span>
      </a>

      <!-- Search -->
      <a routerLink="/store/search" routerLinkActive="active" class="glass-nav-item">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <span class="text-xs font-medium">Search</span>
      </a>

      <!-- Cart -->
      <a routerLink="/store/cart" routerLinkActive="active" class="glass-nav-item relative">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
        </svg>
        @if (cartCount() > 0) {
          <span class="absolute -top-1 end-2 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
            {{ cartCount() }}
          </span>
        }
        <span class="text-xs font-medium">Cart</span>
      </a>

      <!-- Wishlist -->
      <a routerLink="/store/wishlist" routerLinkActive="active" class="glass-nav-item">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
        <span class="text-xs font-medium">Wishlist</span>
      </a>

      <!-- Profile -->
      <a routerLink="/store/account" routerLinkActive="active" class="glass-nav-item">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
        <span class="text-xs font-medium">Profile</span>
      </a>
    </nav>
  `
})
export class MobileBottomNavComponent {
    cartCount = signal(3);
}
