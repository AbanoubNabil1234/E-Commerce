import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TrackingService, TrackingPointDto } from '../../services/tracking.service';

@Component({
    selector: 'app-tracking-timeline',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    template: `
        <div class="timeline-container">
            <h3 class="timeline-title">
                <svg class="title-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
                {{ 'SHIPMENT_DETAILS.TRACKING_HISTORY' | translate }}
            </h3>
            
            <div class="timeline">
                @for (step of allSteps; track step.status; let i = $index) {
                    <div class="timeline-step" 
                         [class.completed]="isCompleted(step.status)"
                         [class.current]="isCurrent(step.status)"
                         [class.pending]="isPending(step.status)"
                         [class.active]="selectedStep?.status === step.status"
                         (click)="selectStep(step)">
                        <!-- Line -->
                        @if (i < allSteps.length - 1) {
                            <div class="timeline-line" 
                                 [class.completed]="isCompleted(step.status)">
                            </div>
                        }
                        
                        <!-- Icon -->
                        <div class="step-icon">
                            @if (isCompleted(step.status)) {
                                <svg class="icon-check" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                            } @else if (isCurrent(step.status)) {
                                <div class="icon-current"></div>
                            } @else {
                                <span class="step-emoji">{{ step.emoji }}</span>
                            }
                        </div>
                        
                        <!-- Content -->
                        <div class="step-content">
                            <div class="step-header">
                                <span class="step-label">{{ step.label }}</span>
                                @if (getTrackingData(step.status)?.occurredAt) {
                                    <span class="step-time">{{ formatTime(getTrackingData(step.status)!.occurredAt) }}</span>
                                }
                            </div>
                            
                            @if (getTrackingData(step.status)) {
                                @if (getTrackingData(step.status)?.description) {
                                    <p class="step-description">{{ getTrackingData(step.status)!.description }}</p>
                                }
                                @if (getTrackingData(step.status)?.location) {
                                    <p class="step-location">
                                        <span class="location-icon">📍</span>
                                        {{ getTrackingData(step.status)!.location }}
                                    </p>
                                }
                            } @else if (isPending(step.status)) {
                                <p class="step-pending">{{ 'SHIPMENT_DETAILS.PENDING' | translate }}</p>
                            }
                        </div>
                    </div>
                }
            </div>
            
            @if (selectedStep && getTrackingData(selectedStep.status)?.latitude) {
                <div class="selected-info">
                    <p class="selected-label">📍 Location on map highlighted</p>
                </div>
            }
        </div>
    `,
    styles: [`
        .timeline-container {
            background: white;
            border-radius: 12px;
            padding: 20px;
        }
        
        .timeline-title {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 16px;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 20px;
        }
        
        .title-icon {
            width: 20px;
            height: 20px;
            color: #6366f1;
        }
        
        .timeline {
            display: flex;
            flex-direction: column;
        }
        
        .timeline-step {
            display: flex;
            gap: 12px;
            padding: 12px;
            margin-left: 12px;
            position: relative;
            cursor: pointer;
            border-radius: 8px;
            transition: all 0.2s;
        }
        
        .timeline-step:hover {
            background: #f8fafc;
        }
        
        .timeline-step.active {
            background: #eef2ff;
        }
        
        .timeline-line {
            position: absolute;
            left: 23px;
            top: 44px;
            width: 2px;
            height: calc(100% - 24px);
            background: #e2e8f0;
        }
        
        .timeline-line.completed {
            background: #22c55e;
        }
        
        .step-icon {
            flex-shrink: 0;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1;
        }
        
        .timeline-step.completed .step-icon {
            background: #22c55e;
            color: white;
        }
        
        .timeline-step.current .step-icon {
            background: #6366f1;
            box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);
        }
        
        .timeline-step.pending .step-icon {
            background: #e2e8f0;
        }
        
        .icon-check {
            width: 14px;
            height: 14px;
        }
        
        .icon-current {
            width: 10px;
            height: 10px;
            background: white;
            border-radius: 50%;
        }
        
        .step-emoji {
            font-size: 14px;
        }
        
        .step-content {
            flex: 1;
            min-width: 0;
        }
        
        .step-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 8px;
        }
        
        .step-label {
            font-weight: 500;
            color: #1e293b;
        }
        
        .timeline-step.pending .step-label {
            color: #94a3b8;
        }
        
        .step-time {
            font-size: 12px;
            color: #64748b;
            white-space: nowrap;
        }
        
        .step-description {
            font-size: 13px;
            color: #64748b;
            margin-top: 4px;
        }
        
        .step-location {
            font-size: 12px;
            color: #6366f1;
            margin-top: 4px;
            display: flex;
            align-items: center;
            gap: 4px;
        }
        
        .location-icon {
            font-size: 12px;
        }
        
        .step-pending {
            font-size: 12px;
            color: #94a3b8;
            font-style: italic;
            margin-top: 4px;
        }
        
        .selected-info {
            margin-top: 16px;
            padding: 12px;
            background: #eef2ff;
            border-radius: 8px;
            text-align: center;
        }
        
        .selected-label {
            color: #6366f1;
            font-size: 13px;
            margin: 0;
        }
        
        @media (max-width: 640px) {
            .step-header {
                flex-direction: column;
                gap: 2px;
            }
            
            .step-time {
                font-size: 11px;
            }
        }
    `]
})
export class TrackingTimelineComponent {
    @Input() currentStatus: number = 0;
    @Input() trackingPoints: TrackingPointDto[] = [];
    @Output() stepSelected = new EventEmitter<TrackingPointDto | null>();

    private trackingService = inject(TrackingService);

    selectedStep: { status: number; label: string; emoji: string } | null = null;

    // All possible steps in order
    allSteps = [
        { status: 0, label: 'Order Confirmed', emoji: '📦' },
        { status: 1, label: 'Courier Assigned', emoji: '👤' },
        { status: 2, label: 'Picked Up', emoji: '📬' },
        { status: 3, label: 'In Transit', emoji: '🚚' },
        { status: 4, label: 'Out for Delivery', emoji: '🏃' },
        { status: 5, label: 'Delivered', emoji: '✅' }
    ];

    isCompleted(status: number): boolean {
        return status < this.currentStatus;
    }

    isCurrent(status: number): boolean {
        return status === this.currentStatus;
    }

    isPending(status: number): boolean {
        return status > this.currentStatus;
    }

    getTrackingData(status: number): TrackingPointDto | undefined {
        return this.trackingPoints.find(t => t.status === status);
    }

    selectStep(step: { status: number; label: string; emoji: string }): void {
        if (this.selectedStep?.status === step.status) {
            this.selectedStep = null;
            this.stepSelected.emit(null);
        } else {
            this.selectedStep = step;
            const tracking = this.getTrackingData(step.status);
            this.stepSelected.emit(tracking || null);
        }
    }

    formatTime(dateStr: string): string {
        const date = new Date(dateStr);
        const now = new Date();
        const isToday = date.toDateString() === now.toDateString();

        const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        if (isToday) {
            return time;
        }

        const dateFormatted = date.toLocaleDateString([], { month: 'short', day: 'numeric' });
        return `${dateFormatted} ${time}`;
    }
}
