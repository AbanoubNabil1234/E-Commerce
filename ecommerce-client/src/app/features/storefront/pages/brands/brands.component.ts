import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Brand {
    id: number;
    name: string;
    slug: string;
    logo: string;
    description: string;
    productCount: number;
    isFeatured: boolean;
}

@Component({
    selector: 'app-brands',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="bg-white dark:bg-dark-bg min-h-screen">
      <!-- Header -->
      <div class="bg-hero-gradient text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 class="text-4xl lg:text-5xl font-bold mb-4">Our Exclusive Brands</h1>
          <p class="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover world-renowned luxury brands, each selected for their exceptional craftsmanship and timeless elegance.
          </p>
        </div>
      </div>

      <!-- Featured Brands -->
      <section class="py-12 lg:py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Brands</h2>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (brand of featuredBrands(); track brand.id) {
              <a 
                [routerLink]="['/store/brand', brand.slug]" 
                class="group relative bg-gray-50 dark:bg-dark-card rounded-2xl overflow-hidden border border-gray-100 dark:border-dark-border hover:border-primary-300 transition-all duration-300 hover:shadow-xl"
              >
                <!-- Brand Banner -->
                <div class="aspect-[16/9] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-8">
                  <span class="text-3xl lg:text-4xl font-bold text-white tracking-wider opacity-90 group-hover:opacity-100 transition-opacity">
                    {{ brand.name }}
                  </span>
                </div>
                
                <!-- Brand Info -->
                <div class="p-6">
                  <div class="flex items-center justify-between mb-3">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                      {{ brand.name }}
                    </h3>
                    <span class="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-xs font-medium rounded-full">
                      {{ brand.productCount }} Products
                    </span>
                  </div>
                  <p class="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                    {{ brand.description }}
                  </p>
                  <div class="mt-4 flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium">
                    Explore Collection
                    <svg class="w-4 h-4 ms-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </a>
            }
          </div>
        </div>
      </section>

      <!-- All Brands A-Z -->
      <section class="py-12 lg:py-16 bg-gray-50 dark:bg-dark-surface">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">All Brands A-Z</h2>
          
          <!-- Alphabet Filter -->
          <div class="flex flex-wrap gap-2 mb-8">
            @for (letter of alphabet; track letter) {
              <button 
                (click)="filterByLetter(letter)"
                class="w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-all"
                [class]="selectedLetter() === letter 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-white dark:bg-dark-card text-gray-600 dark:text-gray-400 hover:bg-primary-50 dark:hover:bg-primary-900/20'"
              >
                {{ letter }}
              </button>
            }
            <button 
              (click)="filterByLetter('')"
              class="px-4 h-10 flex items-center justify-center rounded-lg text-sm font-medium bg-white dark:bg-dark-card text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-border"
            >
              All
            </button>
          </div>
          
          <!-- Brands Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            @for (brand of filteredBrands(); track brand.id) {
              <a 
                [routerLink]="['/store/brand', brand.slug]"
                class="bg-white dark:bg-dark-card rounded-xl p-6 text-center border border-gray-100 dark:border-dark-border hover:border-primary-300 hover:shadow-md transition-all group"
              >
                <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-100 dark:bg-dark-surface flex items-center justify-center">
                  <span class="text-2xl font-bold text-gray-400 group-hover:text-primary-600 transition-colors">
                    {{ brand.name.charAt(0) }}
                  </span>
                </div>
                <h3 class="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors text-sm">
                  {{ brand.name }}
                </h3>
                <span class="text-xs text-gray-500 mt-1">{{ brand.productCount }} items</span>
              </a>
            }
          </div>
        </div>
      </section>

      <!-- Spacer for mobile nav -->
      <div class="h-24 lg:hidden"></div>
    </div>
  `
})
export class BrandsComponent {
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    selectedLetter = signal('');

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

    constructor() {
        this.featuredBrands.set(this.allBrands().filter(b => b.isFeatured));
        this.filteredBrands.set(this.allBrands());
    }

    filterByLetter(letter: string): void {
        this.selectedLetter.set(letter);
        if (letter) {
            this.filteredBrands.set(this.allBrands().filter(b => b.name.charAt(0).toUpperCase() === letter));
        } else {
            this.filteredBrands.set(this.allBrands());
        }
    }
}
