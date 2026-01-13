// stock-adjustment.component.ts - Stock Adjustment Page
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-stock-adjustment',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './stock-adjustment.component.html',
    styleUrls: ['./stock-adjustment.component.scss']
})
export class StockAdjustmentComponent { }
