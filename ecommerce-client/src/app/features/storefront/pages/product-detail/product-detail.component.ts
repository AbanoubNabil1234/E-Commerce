import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';

// ============================================
// INTERFACES
// ============================================

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

// ============================================
// COMPONENT
// ============================================

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  // ============================================
  // PUBLIC PROPERTIES
  // ============================================

  tabs = ['Description', 'Specifications', 'Reviews'];
  activeTab = signal('Description');

  // ============================================
  // PUBLIC SIGNALS - UI State
  // ============================================

  selectedImageIndex = signal(0);
  selectedColorIndex = signal(0);
  selectedSize = signal('M/L');
  quantity = signal(1);
  isWishlisted = signal(false);

  // ============================================
  // PUBLIC SIGNALS - Product Data
  // ============================================

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

  // ============================================
  // COMPUTED SIGNALS
  // ============================================

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

  // ============================================
  // PUBLIC METHODS
  // ============================================

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
