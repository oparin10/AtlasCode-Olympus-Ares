import {
  SetLoadingActionTypes,
  SET_LOADING_FALSE,
  SET_LOADING_TRUE,
} from "../../types";
import {
  SetGlobalNotificationActionTypes,
  SET_GLOBAL_NOTIFICATION_CLOSED,
  SET_GLOBAL_NOTIFICATION_OPEN,
} from "../types";

export const setLoadingTrue = (): SetLoadingActionTypes => {
  return {
    type: SET_LOADING_TRUE,
  };
};

export const setLoadingFalse = (): SetLoadingActionTypes => {
  return {
    type: SET_LOADING_FALSE,
  };
};

export const setGlobalNotificationOpen = (): SetGlobalNotificationActionTypes => {
  return {
    type: SET_GLOBAL_NOTIFICATION_OPEN,
  };
};

export const setGlobalNotificationClosed = (): SetGlobalNotificationActionTypes => {
  return {
    type: SET_GLOBAL_NOTIFICATION_CLOSED,
  };
};
