import { AdminItem } from "../../../config/collections.config";
import { FieldWidgetTypes } from "../../../types";

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
    fieldType?: FieldWidgetTypes;
    additionalConfig?: any;
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
  entry_new: boolean;
  entry_update: boolean;
  collectionRef: string;
  fields: Record<string, Partial<DraftStateField>>;
  categories?: Array<string>;
}

export interface DraftStateField {
  name: string;
  label: string;
  field_type: FieldWidgetTypes;
  default_value: any;
  value: any;
  array_options?: Array<string>;
}

export type DraftActionTypes =
  | DraftComponentVisibilityActionTypes
  | DraftEntryNewActionTypes
  | DraftChangeActionTypes;
