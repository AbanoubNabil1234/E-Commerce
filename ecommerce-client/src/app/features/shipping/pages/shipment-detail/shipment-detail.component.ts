// shipment-detail.component.ts - Shipping Shipment Detail
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-shipping-shipment-detail',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './shipment-detail.component.html',
    styleUrls: ['./shipment-detail.component.scss']
})
export class ShipmentDetailComponent { }
