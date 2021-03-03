import { AdminCollectionField } from "../../../config/collections.config";

export interface EntriesState {
  field: Record<string, any> | null;
  isOpen: boolean;
}

export const ENTRY_CREATE_VISIBILITY_SHOW = "ENTRY_CREATE_VISIBILITY_SHOW";
export const ENTRY_CREATE_VISIBILITY_HIDE = "ENTRY_CREATE_VISIBILITY_HIDE";

export const ENTRY_SET_INITIAL_VALUE = "ENTRY_SET_INITIAL_VALUE";
export const ENTRY_SET_INITIAL_NULL = "ENTRY_SET_INITIAL_NULL";

interface EntrySetInitialValue {
  type: typeof ENTRY_SET_INITIAL_VALUE;
  payload: Array<AdminCollectionField>;
}

interface EntrySetInitialNull {
  type: typeof ENTRY_SET_INITIAL_NULL;
}

interface EntryCreateVisibilityShow {
  type: typeof ENTRY_CREATE_VISIBILITY_SHOW;
}

interface EntryCreateVisibilityHide {
  type: typeof ENTRY_CREATE_VISIBILITY_HIDE;
}

export type EntrySetInitialActionTypes =
  | EntrySetInitialValue
  | EntrySetInitialNull;

export type EntryCreateVisibilityActionTypes =
  | EntryCreateVisibilityShow
  | EntryCreateVisibilityHide;

export type EntryActionTypes =
  | EntryCreateVisibilityActionTypes
  | EntrySetInitialActionTypes;
