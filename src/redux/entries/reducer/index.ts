import {
  EntryActionTypes,
  EntriesState,
  ENTRY_SET_INITIAL_VALUE,
  ENTRY_CREATE_VISIBILITY_SHOW,
  ENTRY_CREATE_VISIBILITY_HIDE,
  ENTRY_DRAFT_NEW,
  ENTRY_DRAFT_DISCARD,
} from "../types";

let initialState: EntriesState = {
  isOpen: false,
  fields: null,
  draft: {},
};

export const entriesReducer = (
  state = initialState,
  action: EntryActionTypes
): EntriesState => {
  switch (action.type) {
    case ENTRY_DRAFT_NEW:
      let localFieldObject: any = {};

      for (const collectionField of action.payload) {
        if (collectionField.defaultValue) {
          localFieldObject[collectionField.name] = collectionField.defaultValue;
        } else {
          localFieldObject[collectionField.name] = "";
        }
      }

      return { ...state, isOpen: true, draft: localFieldObject };

    case ENTRY_DRAFT_DISCARD:
      return { ...state, isOpen: false, draft: {} };

    case ENTRY_SET_INITIAL_VALUE:
      let fieldObjectLocal: any = {};

      for (const collectionField of action.payload) {
        if (collectionField.defaultValue) {
          fieldObjectLocal[collectionField.name] = collectionField.defaultValue;
        } else {
          fieldObjectLocal[collectionField.name] = "";
        }
      }

      return { ...state, fields: fieldObjectLocal };

    case ENTRY_CREATE_VISIBILITY_SHOW:
      return { ...state, isOpen: true };

    case ENTRY_CREATE_VISIBILITY_HIDE:
      return { ...state, isOpen: false };

    default:
      return state;
  }
};
