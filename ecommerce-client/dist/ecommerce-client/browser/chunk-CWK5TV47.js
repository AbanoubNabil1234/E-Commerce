import "./chunk-N7TOP6ZD.js";

// src/app/features/orders/orders.routes.ts
var ordersRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-GZZRWCOX.js").then((m) => m.OrderListComponent),
    title: "Orders"
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-SRBYVZPX.js").then((m) => m.OrderCreateComponent),
    title: "Create Order"
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-LAVF3TVL.js").then((m) => m.OrderDetailComponent),
    title: "Order Details"
  }
];
export {
  ordersRoutes
};
//# sourceMappingURL=chunk-CWK5TV47.js.map
