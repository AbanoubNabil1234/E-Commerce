// shipment-map.component.ts - Shipment Map Component
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-shipment-map',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './shipment-map.component.html',
    styleUrls: ['./shipment-map.component.scss']
})
export class ShipmentMapComponent {
    @Input() shipmentId?: number;
    @Input() height: string = '300px';
}
