import {
  DraftState,
  DraftActionTypes,
  DRAFT_ENTRY_NEW_CREATE,
  DRAFT_ENTRY_NEW_DISCARD,
  DRAFT_CHANGE_FIELD,
  DraftStateField,
} from "../types";

const initialState: Partial<DraftState> = {
  isOpen: false,
};

export const draftReducer = (
  state = initialState,
  action: DraftActionTypes
): Partial<DraftState> => {
  switch (action.type) {
    case DRAFT_CHANGE_FIELD:
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.payload.key]: {
            ...state.fields?.[action.payload.key],
            value: action.payload.value,
          },
        },
      };

    case DRAFT_ENTRY_NEW_CREATE:
      let fieldsLocal: Record<string, DraftStateField> = {};

      for (const collectionField of action.payload.fields) {
        if (collectionField.defaultValue) {
          fieldsLocal[collectionField.name] = {
            fieldType: collectionField.fieldType,
            label: collectionField.label,
            name: collectionField.name,
            value: collectionField.defaultValue,
          };
        } else {
          fieldsLocal[collectionField.name] = {
            fieldType: collectionField.fieldType,
            label: collectionField.label,
            name: collectionField.name,
            value: "",
          };
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
