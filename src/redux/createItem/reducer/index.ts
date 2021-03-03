import {
  CreateItemActionTypes,
  CreateItemState,
  SET_CREATE_ITEM_FIELDS_VALUE,
  SET_CREATE_ITEM_VISIBILITY_CLOSED,
  SET_CREATE_ITEM_VISILIBILITY_OPEN,
} from "../types";

let initialState: CreateItemState = {
  isOpen: false,
  field: null,
};

export const createItemReducer = (
  state = initialState,
  action: CreateItemActionTypes
): CreateItemState => {
  switch (action.type) {
    case SET_CREATE_ITEM_FIELDS_VALUE:
      let fieldObjectLocal: any = {};

      for (const collectionField of action.payload) {
        fieldObjectLocal[collectionField.name] = "";
      }

      return { ...state, field: fieldObjectLocal };

    case SET_CREATE_ITEM_VISILIBILITY_OPEN:
      return { ...state, isOpen: true };

    case SET_CREATE_ITEM_VISIBILITY_CLOSED:
      return { ...state, isOpen: false };

    default:
      return state;
  }
};
