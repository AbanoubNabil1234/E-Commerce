import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// ============================================
// INTERFACES
// ============================================

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

// ============================================
// COMPONENT
// ============================================

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  // ============================================
  // PUBLIC SIGNALS - Cart Items
  // ============================================

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

  // ============================================
  // COMPUTED SIGNALS
  // ============================================

  subtotal = computed(() => {
    return this.cartItems().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  });

  shipping = computed(() => this.subtotal() > 500 ? 0 : 15);

  tax = computed(() => this.subtotal() * 0.08);

  total = computed(() => this.subtotal() + this.shipping() + this.tax());

  // ============================================
  // PUBLIC METHODS
  // ============================================

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
