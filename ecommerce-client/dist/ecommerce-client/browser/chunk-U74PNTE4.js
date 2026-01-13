import {
  TokenService
} from "./chunk-6OPCIAWL.js";
import {
  Router
} from "./chunk-XIYZMPFO.js";
import {
  inject
} from "./chunk-IGAGZNZV.js";

// src/app/core/guards/permission.guard.ts
var permissionGuard = (route) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  if (!tokenService.isTokenValid()) {
    return router.createUrlTree(["/login"]);
  }
  const singlePermission = route.data["permission"];
  const multiplePermissions = route.data["permissions"];
  const requireAll = route.data["requireAll"];
  if (singlePermission) {
    if (tokenService.hasPermission(singlePermission)) {
      return true;
    }
    return router.createUrlTree(["/unauthorized"]);
  }
  if (multiplePermissions && multiplePermissions.length > 0) {
    const hasAccess = requireAll ? tokenService.hasAllPermissions(multiplePermissions) : tokenService.hasAnyPermission(multiplePermissions);
    if (hasAccess) {
      return true;
    }
    return router.createUrlTree(["/unauthorized"]);
  }
  return true;
};

export {
  permissionGuard
};
//# sourceMappingURL=chunk-U74PNTE4.js.map
