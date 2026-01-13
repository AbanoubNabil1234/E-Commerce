// product-detail.component.ts - Product Detail Page
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-catalog-product-detail',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent { }
