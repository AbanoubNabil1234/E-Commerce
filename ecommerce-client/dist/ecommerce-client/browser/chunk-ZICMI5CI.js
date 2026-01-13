import {
  BehaviorSubject,
  ɵɵdefineInjectable
} from "./chunk-IGAGZNZV.js";

// src/app/core/services/notification.service.ts
var NotificationService = class _NotificationService {
  DEFAULT_DURATION = 5e3;
  MAX_NOTIFICATIONS = 5;
  notificationsSubject = new BehaviorSubject([]);
  notifications$ = this.notificationsSubject.asObservable();
  generateId() {
    return `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
  addNotification(notification) {
    const current = this.notificationsSubject.value;
    const updated = [...current, notification].slice(-this.MAX_NOTIFICATIONS);
    this.notificationsSubject.next(updated);
    if (notification.duration && notification.duration > 0) {
      setTimeout(() => this.dismiss(notification.id), notification.duration);
    }
  }
  /**
   * Show a success notification
   */
  success(message, options) {
    this.addNotification({
      id: this.generateId(),
      type: "success",
      message,
      title: options?.title,
      duration: options?.duration ?? this.DEFAULT_DURATION,
      dismissible: options?.dismissible ?? true
    });
  }
  /**
   * Show an error notification
   */
  error(message, options) {
    this.addNotification({
      id: this.generateId(),
      type: "error",
      message,
      title: options?.title,
      duration: options?.duration ?? this.DEFAULT_DURATION * 1.5,
      // Errors stay longer
      dismissible: options?.dismissible ?? true
    });
  }
  /**
   * Show a warning notification
   */
  warning(message, options) {
    this.addNotification({
      id: this.generateId(),
      type: "warning",
      message,
      title: options?.title,
      duration: options?.duration ?? this.DEFAULT_DURATION,
      dismissible: options?.dismissible ?? true
    });
  }
  /**
   * Show an info notification
   */
  info(message, options) {
    this.addNotification({
      id: this.generateId(),
      type: "info",
      message,
      title: options?.title,
      duration: options?.duration ?? this.DEFAULT_DURATION,
      dismissible: options?.dismissible ?? true
    });
  }
  /**
   * Dismiss a specific notification
   */
  dismiss(id) {
    const current = this.notificationsSubject.value;
    this.notificationsSubject.next(current.filter((n) => n.id !== id));
  }
  /**
   * Clear all notifications
   */
  clearAll() {
    this.notificationsSubject.next([]);
  }
  static \u0275fac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
};

export {
  NotificationService
};
//# sourceMappingURL=chunk-ZICMI5CI.js.map
