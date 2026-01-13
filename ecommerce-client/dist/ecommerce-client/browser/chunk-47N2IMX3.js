import {
  UserManagementService
} from "./chunk-2OPK4VS6.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-XIYZMPFO.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-74XXAL65.js";
import {
  TranslateModule
} from "./chunk-BOQBRULU.js";
import {
  CommonModule,
  DatePipe,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-IGAGZNZV.js";
import "./chunk-N7TOP6ZD.js";

// src/app/features/users/pages/user-form/user-form.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function UserFormComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading user data...");
    \u0275\u0275elementEnd()();
  }
}
function UserFormComponent_Conditional_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ID: #", (tmp_2_0 = ctx_r1.user()) == null ? null : tmp_2_0.id == null ? null : tmp_2_0.id.substring(0, 8), " \u2022 Last Login: ", ((tmp_2_0 = ctx_r1.user()) == null ? null : tmp_2_0.lastLoginAt) ? \u0275\u0275pipeBind2(2, 2, (tmp_2_0 = ctx_r1.user()) == null ? null : tmp_2_0.lastLoginAt, "medium") : "Never", " ");
  }
}
function UserFormComponent_Conditional_9_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFieldError("firstName"));
  }
}
function UserFormComponent_Conditional_9_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFieldError("lastName"));
  }
}
function UserFormComponent_Conditional_9_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFieldError("email"));
  }
}
function UserFormComponent_Conditional_9_Conditional_35_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFieldError("password"));
  }
}
function UserFormComponent_Conditional_9_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "label", 47);
    \u0275\u0275text(2, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 48);
    \u0275\u0275template(4, UserFormComponent_Conditional_9_Conditional_35_Conditional_4_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("invalid", ctx_r1.isFieldInvalid("password"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("password") ? 4 : -1);
  }
}
function UserFormComponent_Conditional_9_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r3 = ctx.$implicit;
    \u0275\u0275property("value", role_r3.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r3.name);
  }
}
function UserFormComponent_Conditional_9_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFieldError("role"));
  }
}
function UserFormComponent_Conditional_9_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 43)(1, "div", 22);
    \u0275\u0275element(2, "i", 49);
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Security & Access");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 50)(6, "div", 51)(7, "h3");
    \u0275\u0275text(8, "Reset User Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "Set a new password for this user account.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 52);
    \u0275\u0275listener("click", function UserFormComponent_Conditional_9_Conditional_59_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onResetPassword());
    });
    \u0275\u0275text(12, " Reset Password ");
    \u0275\u0275elementEnd()()();
  }
}
function UserFormComponent_Conditional_9_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 53);
    \u0275\u0275text(1, " Saving... ");
  }
}
function UserFormComponent_Conditional_9_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 54);
    \u0275\u0275text(1, " Save Changes ");
  }
}
function UserFormComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 10);
    \u0275\u0275listener("ngSubmit", function UserFormComponent_Conditional_9_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 12)(3, "h1", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, UserFormComponent_Conditional_9_Conditional_5_Template, 3, 5, "p", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15)(7, "span", 16);
    \u0275\u0275text(8, "User Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "label", 17);
    \u0275\u0275element(10, "input", 18)(11, "span", 19);
    \u0275\u0275elementStart(12, "span", 20);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "section", 21)(15, "div", 22);
    \u0275\u0275element(16, "i", 23);
    \u0275\u0275elementStart(17, "h2");
    \u0275\u0275text(18, "Account Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 24)(20, "div", 25)(21, "label", 26);
    \u0275\u0275text(22, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 27);
    \u0275\u0275template(24, UserFormComponent_Conditional_9_Conditional_24_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 25)(26, "label", 29);
    \u0275\u0275text(27, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 30);
    \u0275\u0275template(29, UserFormComponent_Conditional_9_Conditional_29_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 25)(31, "label", 31);
    \u0275\u0275text(32, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 32);
    \u0275\u0275template(34, UserFormComponent_Conditional_9_Conditional_34_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, UserFormComponent_Conditional_9_Conditional_35_Template, 5, 3, "div", 25);
    \u0275\u0275elementStart(36, "div", 25)(37, "label", 33);
    \u0275\u0275text(38, "Role Selection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 34)(40, "select", 35)(41, "option", 36);
    \u0275\u0275text(42, "Select a role");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(43, UserFormComponent_Conditional_9_For_44_Template, 2, 2, "option", 37, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, UserFormComponent_Conditional_9_Conditional_46_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 25)(48, "label", 39);
    \u0275\u0275text(49, "Warehouse Assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 34)(51, "select", 40)(52, "option", 36);
    \u0275\u0275text(53, "No warehouse assigned");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "option", 41);
    \u0275\u0275text(55, "Main Distribution Hub");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "option", 42);
    \u0275\u0275text(57, "Secondary Warehouse");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(58, "i", 38);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(59, UserFormComponent_Conditional_9_Conditional_59_Template, 13, 0, "section", 43);
    \u0275\u0275elementStart(60, "footer", 44)(61, "button", 45);
    \u0275\u0275listener("click", function UserFormComponent_Conditional_9_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(62, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "button", 46);
    \u0275\u0275template(64, UserFormComponent_Conditional_9_Conditional_64_Template, 2, 0)(65, UserFormComponent_Conditional_9_Conditional_65_Template, 2, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.pageTitle());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isEditMode() && ctx_r1.user() ? 5 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.form.value.isActive ? "Active" : "Inactive");
    \u0275\u0275advance(10);
    \u0275\u0275classProp("invalid", ctx_r1.isFieldInvalid("firstName"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("firstName") ? 24 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("invalid", ctx_r1.isFieldInvalid("lastName"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("lastName") ? 29 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("invalid", ctx_r1.isFieldInvalid("email"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("email") ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isEditMode() ? 35 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("invalid", ctx_r1.isFieldInvalid("role"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.roles());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("role") ? 46 : -1);
    \u0275\u0275advance(13);
    \u0275\u0275conditional(ctx_r1.isEditMode() ? 59 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving() ? 64 : 65);
  }
}
var UserFormComponent = class _UserFormComponent {
  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);
  router = inject(Router);
  userService = inject(UserManagementService);
  // Form state
  form;
  isEditMode = signal(false);
  userId = signal(null);
  loading = signal(false);
  saving = signal(false);
  // Data
  user = this.userService.selectedUser;
  roles = this.userService.roles;
  // Page title
  pageTitle = computed(() => this.isEditMode() ? "Edit User Profile" : "Create New User");
  ngOnInit() {
    this.initForm();
    this.loadRoles();
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.isEditMode.set(true);
      this.userId.set(id);
      this.loadUser(id);
    }
  }
  initForm() {
    this.form = this.fb.group({
      firstName: ["", [Validators.required, Validators.maxLength(50)]],
      lastName: ["", [Validators.required, Validators.maxLength(50)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", this.isEditMode() ? [] : [Validators.required, Validators.minLength(8)]],
      role: ["", Validators.required],
      warehouseId: [""],
      isActive: [true]
    });
  }
  loadRoles() {
    this.userService.getRoles().subscribe();
  }
  loadUser(id) {
    this.loading.set(true);
    this.userService.getUserById(id).subscribe({
      next: (user) => {
        this.patchForm(user);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.router.navigate(["/users"]);
      }
    });
  }
  patchForm(user) {
    this.form.patchValue({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.roles[0] || "",
      isActive: user.isActive
    });
    this.form.get("password")?.clearValidators();
    this.form.get("password")?.updateValueAndValidity();
  }
  onSubmit() {
    if (this.form.invalid) {
      this.markFormTouched();
      return;
    }
    this.saving.set(true);
    const formValue = this.form.value;
    if (this.isEditMode() && this.userId()) {
      const updateDto = {
        firstName: formValue.firstName,
        lastName: formValue.lastName,
        email: formValue.email,
        isActive: formValue.isActive
      };
      this.userService.updateUser(this.userId(), updateDto).subscribe({
        next: () => {
          this.userService.assignRoles(this.userId(), { roles: [formValue.role] }).subscribe({
            next: () => this.onSaveSuccess(),
            error: () => this.saving.set(false)
          });
        },
        error: () => this.saving.set(false)
      });
    } else {
      const createDto = {
        firstName: formValue.firstName,
        lastName: formValue.lastName,
        email: formValue.email,
        password: formValue.password,
        roles: [formValue.role]
      };
      this.userService.createUser(createDto).subscribe({
        next: () => this.onSaveSuccess(),
        error: () => this.saving.set(false)
      });
    }
  }
  onSaveSuccess() {
    this.saving.set(false);
    this.router.navigate(["/users"]);
  }
  markFormTouched() {
    Object.keys(this.form.controls).forEach((key) => {
      this.form.get(key)?.markAsTouched();
    });
  }
  onResetPassword() {
    if (!this.userId())
      return;
    const newPassword = prompt("Enter new password (min 8 characters):");
    if (newPassword && newPassword.length >= 8) {
      this.userService.resetPassword(this.userId(), { newPassword }).subscribe({
        next: () => alert("Password reset successfully"),
        error: () => alert("Failed to reset password")
      });
    }
  }
  onCancel() {
    this.router.navigate(["/users"]);
  }
  // Form helpers
  isFieldInvalid(fieldName) {
    const field = this.form.get(fieldName);
    return !!(field?.invalid && field?.touched);
  }
  getFieldError(fieldName) {
    const field = this.form.get(fieldName);
    if (field?.hasError("required"))
      return "This field is required";
    if (field?.hasError("email"))
      return "Please enter a valid email";
    if (field?.hasError("minlength"))
      return `Minimum ${field.errors?.["minlength"].requiredLength} characters`;
    if (field?.hasError("maxlength"))
      return `Maximum ${field.errors?.["maxlength"].requiredLength} characters`;
    return "";
  }
  static \u0275fac = function UserFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserFormComponent, selectors: [["app-user-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 2, consts: [[1, "user-form-page"], [1, "page-header"], [1, "breadcrumb"], ["routerLink", "/users"], [1, "fas", "fa-chevron-right"], [1, "current"], [1, "loading-state"], [1, "form-card", 3, "formGroup"], [1, "page-footer"], [1, "spinner"], [1, "form-card", 3, "ngSubmit", "formGroup"], [1, "card-header"], [1, "header-info"], [1, "form-title"], [1, "user-meta"], [1, "status-toggle"], [1, "status-label"], [1, "toggle"], ["type", "checkbox", "formControlName", "isActive"], [1, "slider"], [1, "toggle-text"], [1, "form-section"], [1, "section-header"], [1, "fas", "fa-user"], [1, "form-grid"], [1, "form-group"], ["for", "firstName"], ["type", "text", "id", "firstName", "formControlName", "firstName", "placeholder", "Enter first name"], [1, "error-message"], ["for", "lastName"], ["type", "text", "id", "lastName", "formControlName", "lastName", "placeholder", "Enter last name"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "user@company.com"], ["for", "role"], [1, "select-wrapper"], ["id", "role", "formControlName", "role"], ["value", ""], [3, "value"], [1, "fas", "fa-chevron-down"], ["for", "warehouseId"], ["id", "warehouseId", "formControlName", "warehouseId"], ["value", "main"], ["value", "secondary"], [1, "form-section", "security-section"], [1, "form-actions"], ["type", "button", 1, "btn-cancel", 3, "click"], ["type", "submit", 1, "btn-save", 3, "disabled"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", "placeholder", "Minimum 8 characters"], [1, "fas", "fa-lock"], [1, "security-action"], [1, "action-info"], ["type", "button", 1, "btn-outline", 3, "click"], [1, "spinner-sm"], [1, "fas", "fa-check"]], template: function UserFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "nav", 2)(3, "a", 3);
      \u0275\u0275text(4, "User Management");
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "i", 4);
      \u0275\u0275elementStart(6, "span", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(8, UserFormComponent_Conditional_8_Template, 4, 0, "div", 6)(9, UserFormComponent_Conditional_9_Template, 66, 20, "form", 7);
      \u0275\u0275elementStart(10, "div", 8)(11, "span");
      \u0275\u0275text(12, "Enterprise ERP v4.2 stable - Authorized access only. All actions are logged.");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.pageTitle());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 8 : 9);
    }
  }, dependencies: [CommonModule, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, RouterModule, RouterLink, TranslateModule], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  --primary: #6366f1;\n  --primary-light: #818cf8;\n  --primary-dark: #4f46e5;\n  --success: #22c55e;\n  --warning: #f59e0b;\n  --danger: #ef4444;\n  --gray-50: #f8fafc;\n  --gray-100: #f1f5f9;\n  --gray-200: #e2e8f0;\n  --gray-300: #cbd5e1;\n  --gray-400: #94a3b8;\n  --gray-500: #64748b;\n  --gray-600: #475569;\n  --gray-700: #334155;\n  --gray-800: #1e293b;\n  --gray-900: #0f172a;\n  --white: #ffffff;\n  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  --radius: 12px;\n  --radius-sm: 8px;\n}\n.user-form-page[_ngcontent-%COMP%] {\n  padding: 24px 32px;\n  background: var(--gray-50);\n  min-height: 100vh;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: var(--gray-500);\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--gray-500);\n  text-decoration: none;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n.breadcrumb[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.breadcrumb[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  color: var(--gray-700);\n  font-weight: 500;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-radius: var(--radius);\n  box-shadow: var(--shadow);\n  overflow: hidden;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 24px;\n  border-bottom: 1px solid var(--gray-100);\n}\n.header-info[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--gray-900);\n  margin: 0 0 4px 0;\n}\n.header-info[_ngcontent-%COMP%]   .user-meta[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--gray-500);\n  margin: 0;\n}\n.status-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.status-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--gray-600);\n}\n.toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.toggle[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  position: relative;\n  width: 44px;\n  height: 24px;\n  background: var(--gray-300);\n  border-radius: 12px;\n  transition: background 0.2s;\n}\n.toggle[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: var(--white);\n  top: 2px;\n  left: 2px;\n  transition: transform 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n.toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background: var(--primary);\n}\n.toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]::before {\n  transform: translateX(20px);\n}\n.toggle[_ngcontent-%COMP%]   .toggle-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--gray-700);\n}\n.form-section[_ngcontent-%COMP%] {\n  padding: 24px;\n  border-bottom: 1px solid var(--gray-100);\n}\n.form-section[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.section-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--primary);\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--gray-800);\n  margin: 0;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--gray-700);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  background: var(--gray-50);\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  color: var(--gray-800);\n  transition: all 0.15s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: var(--gray-400);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background: var(--white);\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.form-group[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select.invalid[_ngcontent-%COMP%] {\n  border-color: var(--danger);\n}\n.form-group[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select.invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.select-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.select-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  appearance: none;\n  padding-right: 40px;\n  cursor: pointer;\n}\n.select-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--gray-400);\n  font-size: 12px;\n  pointer-events: none;\n}\n.error-message[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--danger);\n}\n.security-section[_ngcontent-%COMP%] {\n  background: var(--gray-50);\n  border-bottom: none !important;\n}\n.security-action[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  background: var(--white);\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius-sm);\n}\n.security-action[_ngcontent-%COMP%]   .action-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--gray-800);\n  margin: 0 0 4px 0;\n}\n.security-action[_ngcontent-%COMP%]   .action-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--gray-500);\n  margin: 0;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  background: var(--white);\n  border: 1px solid var(--primary);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--primary);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: var(--white);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 20px 24px;\n  background: var(--gray-50);\n  border-top: 1px solid var(--gray-200);\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: var(--white);\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--gray-600);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--gray-50);\n  border-color: var(--gray-300);\n}\n.btn-save[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  background: var(--primary);\n  border: none;\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--white);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-dark);\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-save[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 20px;\n  gap: 16px;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--gray-200);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.loading-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-500);\n}\n.page-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px;\n}\n.page-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--gray-400);\n}\n@media (max-width: 768px) {\n  .user-form-page[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .card-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .security-action[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n    text-align: center;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=user-form.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserFormComponent, { className: "UserFormComponent", filePath: "src\\app\\features\\users\\pages\\user-form\\user-form.component.ts", lineNumber: 20 });
})();
export {
  UserFormComponent
};
//# sourceMappingURL=chunk-47N2IMX3.js.map
