// audit-logs.component.ts - Audit Logs Page
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-settings-audit-logs',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './audit-logs.component.html',
    styleUrls: ['./audit-logs.component.scss']
})
export class AuditLogsComponent { }
