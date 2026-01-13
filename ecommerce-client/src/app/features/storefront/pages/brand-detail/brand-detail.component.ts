import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';

// ============================================
// INTERFACES
// ============================================

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  isNew?: boolean;
  discount?: number;
}

// ============================================
// COMPONENT
// ============================================

@Component({
  selector: 'app-brand-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.scss']
})
export class BrandDetailComponent {

  // ============================================
  // PUBLIC SIGNALS - Brand Info
  // ============================================

  brandName = signal('ROLEX');
  brandDescription = signal('Swiss luxury watch manufacturer known worldwide for precision, innovation, and timeless elegance. Each Rolex watch is crafted to perfection.');

  // ============================================
  // PUBLIC SIGNALS - Products
  // ============================================

  products = signal<Product[]>([
    { id: 1, name: 'Submariner Date', price: 14500, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop', rating: 5, discount: 10 },
    { id: 2, name: 'Daytona Cosmograph', price: 42000, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop', rating: 5 },
    { id: 3, name: 'GMT-Master II', price: 18500, image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop', rating: 5, isNew: true },
    { id: 4, name: 'Datejust 41', price: 12800, image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=400&h=400&fit=crop', rating: 5 },
    { id: 5, name: 'Explorer II', price: 9550, image: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=400&h=400&fit=crop', rating: 4 },
    { id: 6, name: 'Sea-Dweller', price: 14650, image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=400&h=400&fit=crop', rating: 5 },
    { id: 7, name: 'Sky-Dweller', price: 52500, image: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=400&h=400&fit=crop', rating: 5, isNew: true },
    { id: 8, name: 'Yacht-Master II', price: 24950, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop', rating: 4 },
  ]);
}
