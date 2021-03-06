import {
  DraftState,
  DraftActionTypes,
  DRAFT_ENTRY_NEW_CREATE,
  DRAFT_ENTRY_NEW_DISCARD,
} from "../types";

const initialState: Partial<DraftState> = {};

export const draftReducer = (
  state = initialState,
  action: DraftActionTypes
): Partial<DraftState> => {
  switch (action.type) {
    case DRAFT_ENTRY_NEW_CREATE:
      let fieldsLocal: Record<string, any> = {};

      for (const collectionField of action.payload.fields) {
        if (collectionField.defaultValue) {
          fieldsLocal[collectionField.name] = collectionField.defaultValue;
        } else {
          fieldsLocal[collectionField.name] = "";
        }
      }

      let localDraftState: DraftState = {
        collectionRef: action.payload.collectionRef,
        isOpen: true,
        fields: { ...fieldsLocal },
      };

      return localDraftState;

    case DRAFT_ENTRY_NEW_DISCARD:
      return { isOpen: false };

    default:
      return state;
  }
};
