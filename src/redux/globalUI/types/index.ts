export const SET_GLOBAL_NOTIFICATION_OPEN = "SET_GLOBAL_NOTIFICATION_OPEN";
export const SET_GLOBAL_NOTIFICATION_CLOSED = "SET_GLOBAL_NOTIFICATION_CLOSED";

interface SetGlobalNotificationClosed {
  type: typeof SET_GLOBAL_NOTIFICATION_CLOSED;
}

interface SetGlobalNotificationOpen {
  type: typeof SET_GLOBAL_NOTIFICATION_OPEN;
}

export type SetGlobalNotificationActionTypes =
  | SetGlobalNotificationClosed
  | SetGlobalNotificationOpen;

export type AlertSeverity = "error" | "warning" | "info" | "success";
