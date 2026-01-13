// stock-list.component.ts - Stock Levels View
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-stock-list',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './stock-list.component.html',
    styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent { }
