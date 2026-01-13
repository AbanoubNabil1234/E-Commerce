// brand-list.component.ts - Brands List Page
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-catalog-brand-list',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './brand-list.component.html',
    styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent { }
