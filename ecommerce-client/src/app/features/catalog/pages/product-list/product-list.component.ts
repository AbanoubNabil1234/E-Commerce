// product-list.component.ts - Products List Page
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-catalog-product-list',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent { }
