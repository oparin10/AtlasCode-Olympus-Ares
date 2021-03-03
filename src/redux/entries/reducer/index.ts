import {
  EntryActionTypes,
  EntriesState,
  ENTRY_SET_INITIAL_VALUE,
  ENTRY_CREATE_VISIBILITY_SHOW,
  ENTRY_CREATE_VISIBILITY_HIDE,
} from "../types";

let initialState: EntriesState = {
  isOpen: false,
  field: null,
};

export const entriesReducer = (
  state = initialState,
  action: EntryActionTypes
): EntriesState => {
  switch (action.type) {
    case ENTRY_SET_INITIAL_VALUE:
      let fieldObjectLocal: any = {};

      for (const collectionField of action.payload) {
        fieldObjectLocal[collectionField.name] = "";
      }

      return { ...state, field: fieldObjectLocal };

    case ENTRY_CREATE_VISIBILITY_SHOW:
      return { ...state, isOpen: true };

    case ENTRY_CREATE_VISIBILITY_HIDE:
      return { ...state, isOpen: false };

    default:
      return state;
  }
};
