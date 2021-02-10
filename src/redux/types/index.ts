import { List } from "immutable";
import { Action } from "redux";

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

export interface WarhorseConfig {
  collections: Array<Content>;
  media_location: string | null;
  branding: BrandingConfigurationState;
}

export interface WarhorseConfigState extends WarhorseConfig {
  error: string | Array<string> | null | undefined;
}

export interface GlobalUIState {
  isLoading: boolean;
}

export interface CollectionsAction extends Action<string> {
  payload?: {};
}

export interface ContentFieldsState {
  data: Map<string, any>;
}

type BrandingConfigurationState = {
  companyName: string | null;
  companyWebsite: string | null;
  logoUrl: string | null;
};

interface ContentField {
  widget: string;
  name: string;
  label: string;
  value: string | undefined | null;
}

export type Content = {
  fields: Array<ContentField>;
  name: string;
};

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

export type GlobalStateActionTypes = SetLoadingActionTypes;

interface GetConfigStart {
  type: typeof GET_CONFIG_START;
}
interface GetConfigSuccess {
  type: typeof GET_CONFIG_SUCCESS;
  payload: WarhorseConfig;
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

export interface StaticallyTypedRecord<T> {
  get<K extends keyof T>(key: K, defaultValue?: T[K]): T[K];
  set<K extends keyof T, V extends T[K]>(
    key: K,
    value: V
  ): StaticallyTypedRecord<T> & T;
  has<K extends keyof T>(key: K): boolean;
  delete<K extends keyof T>(key: K): StaticallyTypedRecord<T>;
  getIn<K1 extends keyof T, K2 extends keyof T[K1], V extends T[K1][K2]>(
    keys: [K1, K2],
    defaultValue?: V
  ): T[K1][K2];
  getIn<
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    V extends T[K1][K2][K3]
  >(
    keys: [K1, K2, K3],
    defaultValue?: V
  ): T[K1][K2][K3];
  getIn(keys: string[]): unknown;
  setIn<K1 extends keyof T, K2 extends keyof T[K1], V extends T[K1][K2]>(
    keys: [K1, K2],
    value: V
  ): StaticallyTypedRecord<T>;
  setIn(keys: string[], value: unknown): StaticallyTypedRecord<T> & T;
  toJS(): T;
  isEmpty(): boolean;
  some<K extends keyof T>(
    predicate: (value: T[K], key: K, iter: this) => boolean
  ): boolean;
  mapKeys<K extends keyof T, V>(
    mapFunc: (key: K, value: StaticallyTypedRecord<T>) => V
  ): V[];
  find<K extends keyof T>(findFunc: (value: T[K]) => boolean): T[K];
  filter<K extends keyof T>(
    predicate: (value: T[K], key: K, iter: this) => boolean
  ): StaticallyTypedRecord<T>;
  valueSeq<K extends keyof T>(): T[K][] & { toArray: () => T[K][] };
  map<K extends keyof T, V>(
    mapFunc: (value: T[K]) => V
  ): StaticallyTypedRecord<{ [key: string]: V }>;
  keySeq<K extends keyof T>(): { toArray: () => K[] };
  withMutations(
    mutator: (mutable: StaticallyTypedRecord<T>) => unknown
  ): StaticallyTypedRecord<T>;
}
