// general-settings.component.ts - General Settings Page
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-general-settings',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './general-settings.component.html',
    styleUrls: ['./general-settings.component.scss']
})
export class GeneralSettingsComponent { }
