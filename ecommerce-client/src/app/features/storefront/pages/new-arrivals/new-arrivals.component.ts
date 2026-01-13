import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// ============================================
// INTERFACES
// ============================================

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  addedDate: string;
  category: string;
}

// ============================================
// COMPONENT
// ============================================

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss']
})
export class NewArrivalsComponent {

  // ============================================
  // PUBLIC PROPERTIES
  // ============================================

  categoryTabs = ['All', 'Watches', 'Jewelry', 'Bags', 'Apparel', 'Shoes', 'Accessories', 'Beauty'];
  activeTab = signal('All');

  // ============================================
  // PUBLIC SIGNALS - Products
  // ============================================

  products = signal<Product[]>([
    { id: 101, name: 'Celestial Diamond Ring', brand: 'TIFFANY & CO.', price: 4850, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop', rating: 5, reviewCount: 12, addedDate: '2 hours ago', category: 'Jewelry' },
    { id: 102, name: 'Executive Leather Briefcase', brand: 'LOUIS VUITTON', price: 3200, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop', rating: 5, reviewCount: 8, addedDate: '5 hours ago', category: 'Bags' },
    { id: 103, name: 'Titanium Chronograph Elite', brand: 'OMEGA', price: 8900, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop', rating: 5, reviewCount: 24, addedDate: 'Yesterday', category: 'Watches' },
    { id: 104, name: 'Silk Evening Dress', brand: 'CHANEL', price: 6500, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop', rating: 5, reviewCount: 15, addedDate: 'Yesterday', category: 'Apparel' },
    { id: 105, name: 'Signature Perfume 100ml', brand: 'DIOR', price: 245, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop', rating: 4, reviewCount: 56, addedDate: '2 days ago', category: 'Beauty' },
    { id: 106, name: 'Aviator Sunglasses Titanium', brand: 'GUCCI', price: 580, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop', rating: 5, reviewCount: 34, addedDate: '2 days ago', category: 'Accessories' },
    { id: 107, name: 'Velvet Loafers Premium', brand: 'PRADA', price: 890, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', rating: 4, reviewCount: 28, addedDate: '3 days ago', category: 'Shoes' },
    { id: 108, name: 'Pearl Necklace Classic', brand: 'CARTIER', price: 12500, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop', rating: 5, reviewCount: 18, addedDate: '3 days ago', category: 'Jewelry' },
    { id: 109, name: 'Royal Oak Limited', brand: 'AUDEMARS PIGUET', price: 45000, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop', rating: 5, reviewCount: 9, addedDate: '4 days ago', category: 'Watches' },
    { id: 110, name: 'Quilted Crossbody Bag', brand: 'CHANEL', price: 4200, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop', rating: 5, reviewCount: 42, addedDate: '4 days ago', category: 'Bags' },
    { id: 111, name: 'Cashmere Wool Coat', brand: 'HERMÈS', price: 8900, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', rating: 5, reviewCount: 21, addedDate: '5 days ago', category: 'Apparel' },
    { id: 112, name: 'Diamond Stud Earrings', brand: 'BVLGARI', price: 7800, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop', rating: 5, reviewCount: 16, addedDate: '5 days ago', category: 'Jewelry' },
  ]);

  filteredProducts = signal<Product[]>([]);

  // ============================================
  // CONSTRUCTOR
  // ============================================

  constructor() {
    this.filteredProducts.set(this.products());
  }

  // ============================================
  // PUBLIC METHODS
  // ============================================

  filterByCategory(category: string): void {
    if (category === 'All') {
      this.filteredProducts.set(this.products());
    } else {
      this.filteredProducts.set(this.products().filter(p => p.category === category));
    }
  }
}
