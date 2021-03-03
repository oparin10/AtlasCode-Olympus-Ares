import { AdminCollectionField } from "../../../config/collections.config";
import {
  EntrySetInitialActionTypes,
  EntryCreateVisibilityActionTypes,
  ENTRY_CREATE_VISIBILITY_HIDE,
  ENTRY_CREATE_VISIBILITY_SHOW,
  ENTRY_SET_INITIAL_VALUE,
  ENTRY_SET_INITIAL_NULL,
  EntryDraftSaveActionTypes,
  EntryDraftActionTypes,
  ENTRY_DRAFT_NEW,
  ENTRY_DRAFT_DISCARD,
} from "../types";

export const entryDraftNew = (
  fields: Array<AdminCollectionField>
): EntryDraftActionTypes => {
  return {
    type: ENTRY_DRAFT_NEW,
    payload: fields,
  };
};

export const entryDraftDiscard = (): EntryDraftActionTypes => {
  return {
    type: ENTRY_DRAFT_DISCARD,
  };
};

export const setEntryInitialFields = (
  fields: Array<AdminCollectionField>
): EntrySetInitialActionTypes => {
  return {
    type: ENTRY_SET_INITIAL_VALUE,
    payload: fields,
  };
};

export const setEntryFieldsNull = (): EntrySetInitialActionTypes => {
  return {
    type: ENTRY_SET_INITIAL_NULL,
  };
};

export const entryComponentOpen = (): EntryCreateVisibilityActionTypes => {
  return {
    type: ENTRY_CREATE_VISIBILITY_SHOW,
  };
};

export const entryComponentClose = (): EntryCreateVisibilityActionTypes => {
  return {
    type: ENTRY_CREATE_VISIBILITY_HIDE,
  };
};
