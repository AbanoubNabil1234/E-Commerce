// shipment-list.component.ts - Shipping Shipments List
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-shipping-shipment-list',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './shipment-list.component.html',
    styleUrls: ['./shipment-list.component.scss']
})
export class ShipmentListComponent { }
