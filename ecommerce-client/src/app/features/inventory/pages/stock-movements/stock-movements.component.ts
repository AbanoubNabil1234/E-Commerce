// stock-movements.component.ts - Stock Movement History
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-stock-movements',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './stock-movements.component.html',
    styleUrls: ['./stock-movements.component.scss']
})
export class StockMovementsComponent { }
