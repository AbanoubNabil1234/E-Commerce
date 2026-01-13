// tracking-timeline.component.ts - Tracking Timeline Component
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tracking-timeline',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tracking-timeline.component.html',
    styleUrls: ['./tracking-timeline.component.scss']
})
export class TrackingTimelineComponent {
    @Input() events: any[] = [];
}
