import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// ============================================
// INTERFACES
// ============================================

interface WishlistItem {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  inStock: boolean;
}

// ============================================
// COMPONENT
// ============================================

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {

  // ============================================
  // PUBLIC SIGNALS - Wishlist Items
  // ============================================

  wishlistItems = signal<WishlistItem[]>([
    {
      id: 1,
      name: 'Minimalist Gold Watch',
      brand: 'AETHER',
      price: 450.00,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      inStock: true
    },
    {
      id: 2,
      name: 'Elegant Leather Tote',
      brand: 'LUXE',
      price: 450.00,
      originalPrice: 550.00,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop',
      inStock: true
    },
    {
      id: 3,
      name: 'Wireless Noise-Canceling Headphones',
      brand: 'SOUNDLUX',
      price: 299.00,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      inStock: true
    },
    {
      id: 4,
      name: 'Artisanal Candle Collection',
      brand: 'ESSENCE',
      price: 89.00,
      image: 'https://images.unsplash.com/photo-1602523069063-b99c15ff9bf3?w=400&h=400&fit=crop',
      inStock: false
    },
    {
      id: 5,
      name: 'Monaco Wool Blazer',
      brand: 'LUXE',
      price: 895.00,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      inStock: true
    },
    {
      id: 6,
      name: 'Designer Sunglasses',
      brand: 'OPTICA',
      price: 320.00,
      originalPrice: 400.00,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
      inStock: true
    }
  ]);

  // ============================================
  // PUBLIC METHODS
  // ============================================

  removeFromWishlist(itemId: number): void {
    this.wishlistItems.update(items => items.filter(item => item.id !== itemId));
  }

  addToCart(itemId: number): void {
    console.log('Added to cart:', itemId);
  }

  moveToCart(itemId: number): void {
    console.log('Moved to cart:', itemId);
    this.removeFromWishlist(itemId);
  }
}
