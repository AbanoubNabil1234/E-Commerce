// stock-alerts.component.ts - Stock Alerts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-stock-alerts',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './stock-alerts.component.html',
    styleUrls: ['./stock-alerts.component.scss']
})
export class StockAlertsComponent { }
