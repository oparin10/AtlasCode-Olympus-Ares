import { AdminCollectionField } from "../../../config/collections.config";
import { fieldValues } from "../../../firebase";
import {
  EntrySetInitialActionTypes,
  EntryCreateVisibilityActionTypes,
  ENTRY_CREATE_VISIBILITY_HIDE,
  ENTRY_CREATE_VISIBILITY_SHOW,
  ENTRY_SET_INITIAL_VALUE,
  ENTRY_SET_INITIAL_NULL,
} from "../types";

export const hehe = "hehe";

export const setCreateItemFields = (
  fields: Array<AdminCollectionField>
): EntrySetInitialActionTypes => {
  return {
    type: ENTRY_SET_INITIAL_VALUE,
    payload: fields,
  };
};

export const SetCreateItemFieldsNull = (): EntrySetInitialActionTypes => {
  return {
    type: ENTRY_SET_INITIAL_NULL,
  };
};

export const createItemOpen = (): EntryCreateVisibilityActionTypes => {
  return {
    type: ENTRY_CREATE_VISIBILITY_SHOW,
  };
};

export const createItemClose = (): EntryCreateVisibilityActionTypes => {
  return {
    type: ENTRY_CREATE_VISIBILITY_HIDE,
  };
};
