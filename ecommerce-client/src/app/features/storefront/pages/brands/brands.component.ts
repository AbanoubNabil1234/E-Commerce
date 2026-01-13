import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// ============================================
// INTERFACES
// ============================================

interface Brand {
  id: number;
  name: string;
  slug: string;
  logo: string;
  description: string;
  productCount: number;
  isFeatured: boolean;
}

// ============================================
// COMPONENT
// ============================================

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {

  // ============================================
  // PUBLIC PROPERTIES
  // ============================================

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  selectedLetter = signal('');

  // ============================================
  // PUBLIC SIGNALS - Brands Data
  // ============================================

  allBrands = signal<Brand[]>([
    { id: 1, name: 'AETHER', slug: 'aether', logo: '', description: 'Innovative smartwatches blending luxury with cutting-edge technology.', productCount: 45, isFeatured: true },
    { id: 2, name: 'Audemars Piguet', slug: 'audemars-piguet', logo: '', description: 'Swiss haute horlogerie since 1875, creators of the Royal Oak.', productCount: 28, isFeatured: true },
    { id: 3, name: 'Bvlgari', slug: 'bvlgari', logo: '', description: 'Italian luxury brand known for jewelry, watches, and accessories.', productCount: 52, isFeatured: false },
    { id: 4, name: 'Cartier', slug: 'cartier', logo: '', description: 'French luxury goods conglomerate, the jeweler of kings.', productCount: 67, isFeatured: true },
    { id: 5, name: 'Chanel', slug: 'chanel', logo: '', description: 'Parisian fashion house renowned for haute couture and accessories.', productCount: 89, isFeatured: false },
    { id: 6, name: 'Dior', slug: 'dior', logo: '', description: 'French luxury brand founded by Christian Dior.', productCount: 76, isFeatured: false },
    { id: 7, name: 'ESSENCE', slug: 'essence', logo: '', description: 'Premium fragrances and home scents collection.', productCount: 34, isFeatured: false },
    { id: 8, name: 'Gucci', slug: 'gucci', logo: '', description: 'Italian luxury fashion brand with a bold, contemporary approach.', productCount: 124, isFeatured: true },
    { id: 9, name: 'Hermès', slug: 'hermes', logo: '', description: 'French high-end artisan manufacturer of leather, lifestyle accessories.', productCount: 98, isFeatured: true },
    { id: 10, name: 'IWC', slug: 'iwc', logo: '', description: 'Swiss luxury watch manufacturer based in Schaffhausen.', productCount: 31, isFeatured: false },
    { id: 11, name: 'Jaeger-LeCoultre', slug: 'jaeger-lecoultre', logo: '', description: 'Swiss luxury watch and clock manufacturer since 1833.', productCount: 42, isFeatured: false },
    { id: 12, name: 'Louis Vuitton', slug: 'louis-vuitton', logo: '', description: 'French fashion house and luxury goods company.', productCount: 156, isFeatured: true },
    { id: 13, name: 'LUXE', slug: 'luxe', logo: '', description: 'Premium lifestyle brand for the discerning modern consumer.', productCount: 87, isFeatured: true },
    { id: 14, name: 'Montblanc', slug: 'montblanc', logo: '', description: 'German manufacturer of luxury writing instruments, watches, and accessories.', productCount: 48, isFeatured: false },
    { id: 15, name: 'Omega', slug: 'omega', logo: '', description: 'Swiss luxury watchmaker known for precision and adventure.', productCount: 65, isFeatured: true },
    { id: 16, name: 'OPTICA', slug: 'optica', logo: '', description: 'Designer eyewear and optical accessories.', productCount: 29, isFeatured: false },
    { id: 17, name: 'Patek Philippe', slug: 'patek-philippe', logo: '', description: 'Swiss luxury watch manufacturer, one of the oldest in the world.', productCount: 38, isFeatured: true },
    { id: 18, name: 'Prada', slug: 'prada', logo: '', description: 'Italian luxury fashion house specializing in leather goods.', productCount: 94, isFeatured: false },
    { id: 19, name: 'Rolex', slug: 'rolex', logo: '', description: 'Swiss luxury watch manufacturer known worldwide for precision.', productCount: 72, isFeatured: true },
    { id: 20, name: 'SOUNDLUX', slug: 'soundlux', logo: '', description: 'Premium audio equipment and luxury headphones.', productCount: 18, isFeatured: false },
    { id: 21, name: 'Tag Heuer', slug: 'tag-heuer', logo: '', description: 'Swiss luxury watchmaker known for sports watches.', productCount: 54, isFeatured: false },
    { id: 22, name: 'Tiffany & Co.', slug: 'tiffany-co', logo: '', description: 'American luxury jewelry and specialty retailer.', productCount: 112, isFeatured: true },
    { id: 23, name: 'Versace', slug: 'versace', logo: '', description: 'Italian luxury fashion company known for bold designs.', productCount: 68, isFeatured: false },
    { id: 24, name: 'Zenith', slug: 'zenith', logo: '', description: 'Swiss luxury watchmaker known for precision chronographs.', productCount: 26, isFeatured: false },
  ]);

  featuredBrands = signal<Brand[]>([]);
  filteredBrands = signal<Brand[]>([]);

  // ============================================
  // CONSTRUCTOR
  // ============================================

  constructor() {
    this.featuredBrands.set(this.allBrands().filter(b => b.isFeatured));
    this.filteredBrands.set(this.allBrands());
  }

  // ============================================
  // PUBLIC METHODS
  // ============================================

  filterByLetter(letter: string): void {
    this.selectedLetter.set(letter);
    if (letter) {
      this.filteredBrands.set(this.allBrands().filter(b => b.name.charAt(0).toUpperCase() === letter));
    } else {
      this.filteredBrands.set(this.allBrands());
    }
  }
}
