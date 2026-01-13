import {
  permissionGuard
} from "./chunk-U74PNTE4.js";
import "./chunk-6OPCIAWL.js";
import "./chunk-XIYZMPFO.js";
import "./chunk-IGAGZNZV.js";
import "./chunk-N7TOP6ZD.js";

// src/app/features/warehouses/warehouses.routes.ts
var WAREHOUSES_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-UAHZOLOS.js").then((m) => m.WarehouseListComponent),
    canActivate: [permissionGuard],
    data: { permission: "Warehouses.View" }
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-CKAFJSAZ.js").then((m) => m.WarehouseFormComponent),
    canActivate: [permissionGuard],
    data: { permission: "Warehouses.Manage" }
  },
  {
    path: ":id/edit",
    loadComponent: () => import("./chunk-CKAFJSAZ.js").then((m) => m.WarehouseFormComponent),
    canActivate: [permissionGuard],
    data: { permission: "Warehouses.Manage" }
  }
];
export {
  WAREHOUSES_ROUTES
};
//# sourceMappingURL=chunk-EUQ7YAUK.js.map
