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
  entry_new: false,
  entry_update: false,
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
        if (collectionField.initialValue) {
          fieldsLocal[collectionField.name] = {
            field_type: collectionField.fieldType,
            label: collectionField.label,
            name: collectionField.name,
            default_value: collectionField.initialValue,
            value: "",
          };
        } else {
          fieldsLocal[collectionField.name] = {
            field_type: collectionField.fieldType,
            label: collectionField.label,
            name: collectionField.name,
            default_value: "",
            value: "",
          };
        }

        switch (collectionField.fieldType) {
          case "select":
            fieldsLocal[collectionField.name].array_options = [
              ...(collectionField.selectOptions as Array<string>),
            ];
        }
      }

      let localDraftState: DraftState = {
        collectionRef: action.payload.collectionRef,
        isOpen: true,
        entry_new: true,
        entry_update: false,
        fields: { ...fieldsLocal },
      };

      return localDraftState;

    case DRAFT_ENTRY_NEW_DISCARD:
      return { isOpen: false, entry_new: false, entry_update: false };

    default:
      return state;
  }
};
