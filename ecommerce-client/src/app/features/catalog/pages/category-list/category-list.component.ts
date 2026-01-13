// category-list.component.ts - Categories List Page
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-catalog-category-list',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent { }
