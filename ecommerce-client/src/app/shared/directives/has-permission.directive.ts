// ==============================================
// has-permission.directive.ts
// Permission-based UI Control Directive
// ==============================================
// Usage:
// <button *hasPermission="'Products.Create'">Add Product</button>
// <button *hasAnyPermission="['Products.Edit', 'Products.Delete']">Edit</button>
// ==============================================

import { Directive, Input, TemplateRef, ViewContainerRef, inject, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

/**
 * Structural directive to show/hide elements based on single permission
 * 
 * @example
 * <button *hasPermission="'Products.Create'">Add Product</button>
 */
@Directive({
    selector: '[hasPermission]',
    standalone: true
})
export class HasPermissionDirective implements OnInit {
    private templateRef = inject(TemplateRef<any>);
    private viewContainer = inject(ViewContainerRef);
    private authService = inject(AuthService);

    private permission: string = '';
    private hasView = false;

    @Input()
    set hasPermission(permission: string) {
        this.permission = permission;
        this.updateView();
    }

    ngOnInit(): void {
        this.updateView();
    }

    private updateView(): void {
        const hasPermission = this.authService.hasPermission(this.permission);

        if (hasPermission && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        } else if (!hasPermission && this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    }
}

/**
 * Structural directive for multiple permissions (any match)
 * 
 * @example
 * <button *hasAnyPermission="['Products.Edit', 'Products.Delete']">Edit</button>
 */
@Directive({
    selector: '[hasAnyPermission]',
    standalone: true
})
export class HasAnyPermissionDirective implements OnInit {
    private templateRef = inject(TemplateRef<any>);
    private viewContainer = inject(ViewContainerRef);
    private authService = inject(AuthService);

    private permissions: string[] = [];
    private hasView = false;

    @Input()
    set hasAnyPermission(permissions: string[]) {
        this.permissions = permissions;
        this.updateView();
    }

    ngOnInit(): void {
        this.updateView();
    }

    private updateView(): void {
        const hasPermission = this.authService.hasAnyPermission(this.permissions);

        if (hasPermission && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        } else if (!hasPermission && this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    }
}

/**
 * Structural directive for role-based display
 * 
 * @example
 * <div *hasRole="'Admin'">Admin Panel</div>
 */
@Directive({
    selector: '[hasRole]',
    standalone: true
})
export class HasRoleDirective implements OnInit {
    private templateRef = inject(TemplateRef<any>);
    private viewContainer = inject(ViewContainerRef);
    private authService = inject(AuthService);

    private role: string = '';
    private hasView = false;

    @Input()
    set hasRole(role: string) {
        this.role = role;
        this.updateView();
    }

    ngOnInit(): void {
        this.updateView();
    }

    private updateView(): void {
        const hasRole = this.authService.hasRole(this.role);

        if (hasRole && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        } else if (!hasRole && this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    }
}
