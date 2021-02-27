export const SET_GLOBAL_NOTIFICATION_OPEN = "SET_GLOBAL_NOTIFICATION_OPEN";
export const SET_GLOBAL_NOTIFICATION_CLOSED = "SET_GLOBAL_NOTIFICATION_CLOSED";
export const GLOBAL_NOTIFICATION_CUSTOM = "GLOBAL_NOTIFICATION_CUSTOM";

interface GlobalNotificationCustomPayload {
  notificationMessage: string;
  notificationSeverity: AlertSeverity;
}

export interface GlobalNotificationCustom {
  type: typeof GLOBAL_NOTIFICATION_CUSTOM;
  payload: GlobalNotificationCustomPayload;
}

interface SetGlobalNotificationClosed {
  type: typeof SET_GLOBAL_NOTIFICATION_CLOSED;
}

interface SetGlobalNotificationOpen {
  type: typeof SET_GLOBAL_NOTIFICATION_OPEN;
}

export type SetGlobalNotificationActionTypes =
  | SetGlobalNotificationClosed
  | SetGlobalNotificationOpen
  | GlobalNotificationCustom;

export type AlertSeverity = "error" | "warning" | "info" | "success";
