import { AdminItem } from "../../../config/collections.config";

export const SET_ACTIVE_CONTENT = "SET_ACTIVE_CONTENT";

export const ACTIVE_COLLECTION_SET_START = "ACTIVE_COLLECTION_SET_START";
export const ACTIVE_COLLECTION_SET_SUCCESS = "ACTIVE_COLLECTION_SET_SUCCESS";
export const ACTIVE_COLLECTION_SET_FAIL = "ACTIVE_COLLECTION_SET_FAIL";
export const ACTIVE_COLLECTION_ENTRIES_GET_START =
  "ACTIVE_COLLECTION_ENTRIES_GET_START";
export const ACTIVE_COLLECTION_ENTRIES_GET_SUCCESS =
  "ACTIVE_COLLECTION_ENTRIES_GET_START";
export const ACTIVE_COLLECTION_ENTRIES_GET_FAIL =
  "ACTIVE_COLLECTION_ENTRIES_GET_FAIL";

export const ACTIVE_COLLECTION_ENTRIES_CATEGORIES_GET_START =
  "ACTIVE_COLLECTION_ENTRIES_CATEGORIES_GET_START";

export const ACTIVE_COLLECTION_ENTRIES_CATEGORIES_GET_SUCCESS =
  "ACTIVE_COLLECTION_ENTRIES_CATEGORIES_GET_SUCCESS";

export const ACTIVE_COLLECTION_ENTRIES_CATEGORIES_GET_FAIL =
  "ACTIVE_COLLECTION_ENTRIES_CATEGORIES_GET_FAIL";

export interface ActiveCollectionEntriesCategoriesGetSuccess {
  type: typeof ACTIVE_COLLECTION_ENTRIES_CATEGORIES_GET_SUCCESS;
}

export interface ActiveCollectionEntriesCategoriesGetStart {
  type: typeof ACTIVE_COLLECTION_ENTRIES_CATEGORIES_GET_START;
}

export interface ActiveCollectionEntriesCategoriesGetFail {
  type: typeof ACTIVE_COLLECTION_ENTRIES_CATEGORIES_GET_FAIL;
}

export interface ActiveCollectionEntriesGetStart {
  type: typeof ACTIVE_COLLECTION_ENTRIES_GET_START;
}

export interface ActiveCollectionEntriesGetSuccess {
  type: typeof ACTIVE_COLLECTION_ENTRIES_GET_SUCCESS;
}

export interface ActiveCollectionEntriesGetFail {
  type: typeof ACTIVE_COLLECTION_ENTRIES_GET_FAIL;
}

export interface ActiveCollectionSetStart {
  type: typeof ACTIVE_COLLECTION_SET_START;
}

export interface ActiveCollectionSetSuccess {
  type: typeof ACTIVE_COLLECTION_SET_SUCCESS;
  payload: ActiveCollectionState;
}

export interface ActiveCollectionSetFail {
  type: typeof ACTIVE_COLLECTION_SET_FAIL;
}

export type ActiveCollectionEntriesCategoriesGetActionTypes =
  | ActiveCollectionEntriesCategoriesGetStart
  | ActiveCollectionEntriesCategoriesGetSuccess
  | ActiveCollectionEntriesCategoriesGetFail;

export type ActiveCollectionEntriesGetActionTypes =
  | ActiveCollectionEntriesGetStart
  | ActiveCollectionEntriesGetSuccess
  | ActiveCollectionEntriesGetFail;

export type ActiveCollectionSetActionTypes =
  | ActiveCollectionSetStart
  | ActiveCollectionSetFail
  | ActiveCollectionSetSuccess;

export interface ActiveCollectionState extends AdminItem {
  entries: Array<any> | null | undefined;
}

export interface SetActiveContent {
  type: typeof SET_ACTIVE_CONTENT;
  payload: AdminItem;
}

export type SetActiveContentActionTypes = SetActiveContent;

export type ActiveContentActionTypes =
  | SetActiveContent
  | ActiveCollectionSetActionTypes
  | ActiveCollectionEntriesGetActionTypes
  | ActiveCollectionEntriesCategoriesGetActionTypes;
