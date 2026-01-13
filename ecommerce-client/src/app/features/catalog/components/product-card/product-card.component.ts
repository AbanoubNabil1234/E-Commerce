// product-card.component.ts - Product Card Component
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-catalog-product-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
    @Input() product: any;
}
