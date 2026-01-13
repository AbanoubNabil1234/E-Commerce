import "./chunk-N7TOP6ZD.js";

// src/app/features/users/users.routes.ts
var usersRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-BH6HLEFF.js").then((m) => m.UsersListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-47N2IMX3.js").then((m) => m.UserFormComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./chunk-47N2IMX3.js").then((m) => m.UserFormComponent)
  },
  {
    path: "roles",
    loadComponent: () => import("./chunk-GFLYVWOH.js").then((m) => m.RolesListComponent)
  },
  {
    path: "roles/create",
    loadComponent: () => import("./chunk-47N2IMX3.js").then((m) => m.UserFormComponent)
    // Reuse or create dedicated role form
  },
  {
    path: "roles/:roleId/permissions",
    loadComponent: () => import("./chunk-A3Q2EK7D.js").then((m) => m.PermissionsMatrixComponent)
  }
];
export {
  usersRoutes
};
//# sourceMappingURL=chunk-GRLZB2KI.js.map
