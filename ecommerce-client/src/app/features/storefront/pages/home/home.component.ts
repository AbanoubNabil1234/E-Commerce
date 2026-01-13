import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// ============================================
// INTERFACES
// ============================================

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

// ============================================
// COMPONENT
// ============================================

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  // ============================================
  // PRIVATE PROPERTIES
  // ============================================

  private timerInterval: any;

  // ============================================
  // PUBLIC SIGNALS - Timer
  // ============================================

  hours = signal('02');
  minutes = signal('45');
  seconds = signal('30');

  // ============================================
  // PUBLIC PROPERTIES - Static Data
  // ============================================

  bestSellerTabs = ['All Products', 'Watches', 'Jewelry', 'Bags', 'Fashion'];
  activeBestSellerTab = signal('All Products');
  featuredBrands = ['ROLEX', 'CARTIER', 'LOUIS VUITTON', 'GUCCI', 'HERMÈS', 'CHANEL'];

  // ============================================
  // PUBLIC SIGNALS - Categories
  // ============================================

  featuredCategories = signal<Category[]>([
    { id: 1, name: 'Luxury Watches', icon: '⌚', slug: 'watches', productCount: 2500, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop' },
    { id: 2, name: 'Fine Jewelry', icon: '💎', slug: 'jewelry', productCount: 1800, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop' },
    { id: 3, name: 'Designer Bags', icon: '👜', slug: 'bags', productCount: 1200, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop' },
    { id: 4, name: 'Premium Apparel', icon: '👔', slug: 'apparel', productCount: 3500, image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop' },
    { id: 5, name: 'Luxury Shoes', icon: '👟', slug: 'shoes', productCount: 950, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop' },
  ]);

  // ============================================
  // PUBLIC SIGNALS - Flash Sale Products
  // ============================================

  flashSaleProducts = signal<Product[]>([
    { id: 1, name: 'Titanium Chronograph', brand: 'AETHER', price: 75, originalPrice: 150, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop', rating: 5, reviewCount: 120, discount: 50 },
    { id: 2, name: 'Azure Leather Tote', brand: 'LUXE', price: 125, originalPrice: 250, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop', rating: 4, reviewCount: 89, discount: 50 },
    { id: 3, name: 'Aura Pro Max Headphones', brand: 'SOUNDLUX', price: 299, originalPrice: 399, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop', rating: 5, reviewCount: 234, discount: 25 },
    { id: 4, name: 'Pearl Necklace Set', brand: 'GEMS', price: 89, originalPrice: 178, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop', rating: 4, reviewCount: 67, discount: 50 },
  ]);

  // ============================================
  // PUBLIC SIGNALS - New Arrivals
  // ============================================

  newArrivals = signal<Product[]>([
    { id: 5, name: 'Monaco Wool Blazer', brand: 'LUXE', price: 895, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop', rating: 5, reviewCount: 156, isNew: true },
    { id: 6, name: 'Velvet Evening Loafers', brand: 'ARTISAN', price: 425, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop', rating: 4, reviewCount: 89, isNew: true },
    { id: 7, name: 'Statement Perfume 60ml', brand: 'ESSENCE', price: 195, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop', rating: 5, reviewCount: 312, isNew: true },
    { id: 8, name: 'Titanium Aviator Glasses', brand: 'OPTICA', price: 380, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop', rating: 4, reviewCount: 78, isNew: true },
    { id: 9, name: 'Cashmere Infinity Scarf', brand: 'HERMÈS', price: 650, image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&h=500&fit=crop', rating: 5, reviewCount: 45, isNew: true },
  ]);

  // ============================================
  // PUBLIC SIGNALS - Best Sellers
  // ============================================

  bestSellers = signal<Product[]>([
    { id: 10, name: 'Submariner Date Classic', brand: 'ROLEX', price: 14500, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop', rating: 5, reviewCount: 234 },
    { id: 11, name: 'Classic Flap Bag Medium', brand: 'CHANEL', price: 8200, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop', rating: 5, reviewCount: 189, discount: 10 },
    { id: 12, name: 'Panthère de Cartier Ring', brand: 'CARTIER', price: 12500, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop', rating: 5, reviewCount: 156 },
    { id: 13, name: 'Royal Oak Offshore', brand: 'AUDEMARS PIGUET', price: 28500, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop', rating: 5, reviewCount: 98, discount: 15 },
    { id: 14, name: 'Keepall Bandoulière 55', brand: 'LOUIS VUITTON', price: 2490, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop', rating: 5, reviewCount: 267 },
    { id: 15, name: 'Speedmaster Moonwatch', brand: 'OMEGA', price: 6500, image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop', rating: 5, reviewCount: 312 },
    { id: 16, name: 'Birkin 30 Togo Leather', brand: 'HERMÈS', price: 15000, image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&h=400&fit=crop', rating: 5, reviewCount: 89 },
    { id: 17, name: 'Tennis Bracelet Diamond', brand: 'TIFFANY & CO.', price: 9800, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop', rating: 5, reviewCount: 145 },
  ]);

  // ============================================
  // PUBLIC SIGNALS - Testimonials
  // ============================================

  testimonials = signal<Testimonial[]>([
    { id: 1, name: 'Sarah Mitchell', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', rating: 5, text: 'Absolutely stunning quality! The Cartier ring exceeded all my expectations. The packaging and delivery experience felt truly luxurious.', product: 'Panthère Ring' },
    { id: 2, name: 'James Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', rating: 5, text: 'My Rolex arrived in perfect condition with all documentation. The authentication process gave me complete confidence in my purchase.', product: 'Submariner Date' },
    { id: 3, name: 'Emma Thompson', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', rating: 5, text: 'The customer service is exceptional. They helped me find the perfect Louis Vuitton bag and the returns process was seamless.', product: 'Keepall 55' },
  ]);

  // ============================================
  // PUBLIC SIGNALS - Recommended Products
  // ============================================

  recommendedProducts = signal<(Product & { matchScore: number; reason: string })[]>([
    { id: 50, name: 'GMT-Master II Pepsi', brand: 'ROLEX', price: 18500, image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=400&h=400&fit=crop', rating: 5, reviewCount: 178, matchScore: 98, reason: 'Based on your interest in luxury watches' },
    { id: 51, name: 'Neverfull MM Damier', brand: 'LOUIS VUITTON', price: 1960, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop', rating: 5, reviewCount: 342, matchScore: 95, reason: 'Popular in your size preference' },
    { id: 52, name: 'Love Bracelet Gold', brand: 'CARTIER', price: 6900, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop', rating: 5, reviewCount: 256, matchScore: 92, reason: 'Trending in jewelry you viewed' },
    { id: 53, name: 'City Steamer PM', brand: 'LOUIS VUITTON', price: 3650, image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&h=400&fit=crop', rating: 5, reviewCount: 89, matchScore: 89, reason: 'Matches your style preferences' },
    { id: 54, name: 'Datejust 36 Jubilee', brand: 'ROLEX', price: 12800, image: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=400&h=400&fit=crop', rating: 5, reviewCount: 145, matchScore: 87, reason: 'Similar to items in your wishlist' },
    { id: 55, name: 'Kelly 28 Epsom', brand: 'HERMÈS', price: 12800, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop', rating: 5, reviewCount: 67, matchScore: 85, reason: 'Customers like you also bought' },
    { id: 56, name: 'Santos de Cartier', brand: 'CARTIER', price: 7200, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop', rating: 5, reviewCount: 198, matchScore: 83, reason: 'Based on your browsing history' },
    { id: 57, name: 'Classic Sunglasses', brand: 'GUCCI', price: 420, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop', rating: 4, reviewCount: 234, matchScore: 80, reason: 'Complements recent purchases' },
  ]);

  // ============================================
  // LIFECYCLE HOOKS
  // ============================================

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  // ============================================
  // PRIVATE METHODS
  // ============================================

  private startCountdown(): void {
    let totalSeconds = 2 * 3600 + 45 * 60 + 30;

    this.timerInterval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;
        this.hours.set(h.toString().padStart(2, '0'));
        this.minutes.set(m.toString().padStart(2, '0'));
        this.seconds.set(s.toString().padStart(2, '0'));
      }
    }, 1000);
  }

  // ============================================
  // PUBLIC METHODS
  // ============================================

  toggleWishlist(productId: number): void {
    console.log('Toggle wishlist for product:', productId);
  }
}
