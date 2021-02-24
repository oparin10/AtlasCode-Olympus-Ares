import { Action } from "redux";
import { AdminItem } from "../../config/collections.config";
import { AppConfig } from "../../config/global.config";
import {
  AlertSeverity,
  SetGlobalNotificationActionTypes,
} from "../globalUI/types";

export const GET_CONFIG_START = "GET_CONFIG_START";
export const GET_CONFIG_SUCCESS = "GET_CONFIG_SUCCESS";
export const GET_CONFIG_FAIL = "GET_CONFIG_FAIL";
export const SET_CONFIG_START = "SET_CONFIG_START";
export const SET_CONFIG_SUCCESS = "SET_CONFIG_SUCCESS";
export const SET_CONFIG_FAIL = "SET_CONFIG_FAIL";
export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";
export const LOGOUT_USER_START = "LOGOUT_USER_START";
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
export const LOGOUT_USER_FAIL = "LOGOUT_USER_FAIL";
export const CREATE_USER_WITH_FIELDS_START = "CREATE_USER_WITH_FIELDS_START";
export const CREATE_USER_WITH_FIELDS_SUCCESS =
  "CREATE_USER_WITH_FIELDS_SUCCESS";
export const CREATE_USER_WITH_FIELDS_FAIL = "CREATE_USER_WITH_FIELDS_FAIL";
export const SET_LOADING_TRUE = "SET_LOADING_TRUE";
export const SET_LOADING_FALSE = "SET_LOADING_FALSE";
export const CHANGE_CONTENT_FIELD = "CHANGE_CONTENT_FIELD";
export const SET_ACTIVE_CONTENT = "SET_ACTIVE_CONTENT";

interface SetActiveContent {
  type: typeof SET_ACTIVE_CONTENT;
  payload: AdminItem;
}

export type ActiveContentActionTypes = SetActiveContent;

export interface AppConfigState extends AppConfig {
  error: string | Array<string> | null | undefined;
}
export interface GlobalUIState {
  isLoading: boolean;
  notificationOpen: boolean;
  notificationMessage: string;
  notificationSeverity: AlertSeverity;
}

interface SetLoadingTrue {
  type: typeof SET_LOADING_TRUE;
}

interface SetLoadingFalse {
  type: typeof SET_LOADING_FALSE;
}

interface ChangeContentField {
  type: typeof CHANGE_CONTENT_FIELD;
  payload: any;
}

export type ContentFieldActionTypes = ChangeContentField;

export type SetLoadingActionTypes = SetLoadingTrue | SetLoadingFalse;

export type GlobalStateActionTypes =
  | SetLoadingActionTypes
  | SetGlobalNotificationActionTypes;

interface GetConfigStart {
  type: typeof GET_CONFIG_START;
}
interface GetConfigSuccess {
  type: typeof GET_CONFIG_SUCCESS;
  payload: AppConfig;
}
interface GetConfigFail {
  type: typeof GET_CONFIG_FAIL;
  error: string;
}
interface SetConfigStart {
  type: typeof SET_CONFIG_START;
}
interface SetConfigSuccess {
  type: typeof SET_CONFIG_SUCCESS;
}
interface SetConfigFail {
  type: typeof SET_CONFIG_FAIL;
  error: string;
}

export type GetConfigActionTypes =
  | GetConfigStart
  | GetConfigSuccess
  | GetConfigFail;

export type SetConfigActionTypes =
  | SetConfigStart
  | SetConfigSuccess
  | SetConfigFail;

export type ConfigurationActionTypes =
  | GetConfigActionTypes
  | SetConfigActionTypes;

interface CreateUserWithFieldsStart {
  type: typeof CREATE_USER_WITH_FIELDS_START;
}

interface CreateUserWithFieldsSuccess {
  type: typeof CREATE_USER_WITH_FIELDS_SUCCESS;
}

interface CreateUserWithFieldsFail {
  type: typeof CREATE_USER_WITH_FIELDS_FAIL;
  error: string;
}

interface LoginUserActionStart {
  type: typeof LOGIN_USER_START;
}

interface LoginUserActionSuccess {
  type: typeof LOGIN_USER_SUCCESS;
  payload: object | null | any;
}

interface LoginUserActionFail {
  type: typeof LOGIN_USER_FAIL;
  error: string;
}

interface LogoutUserActionStart {
  type: typeof LOGOUT_USER_START;
}

interface LogoutUserActionSuccess {
  type: typeof LOGOUT_USER_SUCCESS;
}

interface LogoutUserActionFail {
  type: typeof LOGOUT_USER_FAIL;
  error: string;
}

export type CreateUserWithFieldsTypes =
  | CreateUserWithFieldsStart
  | CreateUserWithFieldsSuccess
  | CreateUserWithFieldsFail;

export type LogoutUserActionTypes =
  | LogoutUserActionStart
  | LogoutUserActionSuccess
  | LogoutUserActionFail;

export type LoginUserActionTypes =
  | LoginUserActionStart
  | LoginUserActionSuccess
  | LoginUserActionFail;

export type AuthenticationActionTypes =
  | CreateUserWithFieldsTypes
  | LogoutUserActionTypes
  | LoginUserActionTypes;
