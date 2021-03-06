import { AdminItem } from "../../../config/collections.config";

export const DRAFT_COMPONENT_SHOW = "DRAFT_COMPONENT_SHOW";
export const DRAFT_COMPONENT_HIDE = "DRAFT_COMPONENT_HIDE";

export const DRAFT_ENTRY_NEW_CREATE = "DRAFT_ENTRY_NEW_CREATE";
export const DRAFT_ENTRY_NEW_DISCARD = "DRAFT_ENTRY_NEW_DISCARD";

export const DRAFT_CHANGE_FIELD = "DRAFT_CHANGE_FIELD";

export interface DraftChangeField {
  type: typeof DRAFT_CHANGE_FIELD;
  payload: {
    key: string;
    value: any;
  };
}

export type DraftChangeActionTypes = DraftChangeField;

interface DraftEntryNewCreate {
  type: typeof DRAFT_ENTRY_NEW_CREATE;
  payload: AdminItem;
}

interface DraftEntryNewDiscard {
  type: typeof DRAFT_ENTRY_NEW_DISCARD;
}

export type DraftEntryNewActionTypes =
  | DraftEntryNewCreate
  | DraftEntryNewDiscard;

interface DraftComponentShow {
  type: typeof DRAFT_COMPONENT_SHOW;
}

interface DraftComponentHide {
  type: typeof DRAFT_COMPONENT_HIDE;
}

export type DraftComponentVisibilityActionTypes =
  | DraftComponentHide
  | DraftComponentShow;

export interface DraftState {
  isOpen: boolean;
  collectionRef: string;
  fields: Record<string, any>;
  categories?: Array<string>;
}

export type DraftActionTypes =
  | DraftComponentVisibilityActionTypes
  | DraftEntryNewActionTypes
  | DraftChangeActionTypes;
