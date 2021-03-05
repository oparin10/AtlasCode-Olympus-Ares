import { AdminCollectionField } from "../../../config/collections.config";

export interface EntriesState {
  isOpen: boolean;
  draft: Record<string, any> | null;
  entryUpdate: Record<string, any> | null;
  data: Array<any> | Record<string, any> | null;
}

export const ENTRY_CREATE_VISIBILITY_SHOW = "ENTRY_CREATE_VISIBILITY_SHOW";
export const ENTRY_CREATE_VISIBILITY_HIDE = "ENTRY_CREATE_VISIBILITY_HIDE";

export const ENTRY_SET_INITIAL_VALUE = "ENTRY_SET_INITIAL_VALUE";
export const ENTRY_SET_INITIAL_NULL = "ENTRY_SET_INITIAL_NULL";

export const ENTRY_DRAFT_NEW = "ENTRY_DRAFT_NEW";
export const ENTRY_DRAFT_DISCARD = "ENTRY_DRAFT_DISCARD";
export const ENTRY_DRAFT_SAVE_START = "ENTRY_DRAFT_SAVE_START";
export const ENTRY_DRAFT_SAVE_SUCCESS = "ENTRY_DRAFT_SAVE_SUCCESS";
export const ENTRY_DRAFT_SAVE_FAIL = "ENTRY_DRAFT_FAIL";

export const ENTRY_DRAFT_CHANGE_FIELD = "ENTRY_DRAFT_CHANGE_FIELD";

export interface EntryDraftChangePayload {
  fieldKey: string;
  fieldValue: any;
}

interface EntryDraftChangeField {
  type: typeof ENTRY_DRAFT_CHANGE_FIELD;
  payload: EntryDraftChangePayload;
}

interface EntryDraftSaveStart {
  type: typeof ENTRY_DRAFT_SAVE_START;
}

interface EntryDraftSaveSuccess {
  type: typeof ENTRY_DRAFT_SAVE_SUCCESS;
}

interface EntryDraftSaveFail {
  type: typeof ENTRY_DRAFT_SAVE_FAIL;
}

interface EntryDraftNew {
  type: typeof ENTRY_DRAFT_NEW;
  payload: Array<AdminCollectionField>;
}

interface EntryDraftDiscard {
  type: typeof ENTRY_DRAFT_DISCARD;
}

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

export type EntryDraftChangeActionTypes = EntryDraftChangeField;

export type EntryDraftSaveActionTypes =
  | EntryDraftSaveStart
  | EntryDraftSaveSuccess
  | EntryDraftSaveFail;

export type EntryDraftActionTypes = EntryDraftNew | EntryDraftDiscard;

export type EntrySetInitialActionTypes =
  | EntrySetInitialValue
  | EntrySetInitialNull;

export type EntryCreateVisibilityActionTypes =
  | EntryCreateVisibilityShow
  | EntryCreateVisibilityHide;

export type EntryActionTypes =
  | EntryCreateVisibilityActionTypes
  | EntrySetInitialActionTypes
  | EntryDraftActionTypes
  | EntryDraftSaveActionTypes
  | EntryDraftChangeActionTypes;
