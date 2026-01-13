// user-management.component.ts - Admin User Management
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-admin-user-management',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './user-management.component.html',
    styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent { }
