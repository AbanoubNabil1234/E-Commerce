import "./chunk-N7TOP6ZD.js";

// src/app/features/shipments/shipments.routes.ts
var shipmentsRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-CHKUIVZH.js").then((m) => m.ShipmentListComponent),
    title: "Shipments"
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-KQF3VBEP.js").then((m) => m.ShipmentCreateComponent),
    title: "Create Shipment"
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-E36LTBTZ.js").then((m) => m.ShipmentDetailComponent),
    title: "Shipment Details"
  }
];
export {
  shipmentsRoutes
};
//# sourceMappingURL=chunk-RTKMKF4Z.js.map
