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
      if (
        action.payload.fieldType == "image" &&
        action.payload.additionalConfig == "url"
      ) {
        return {
          ...state,
          fields: {
            ...state.fields,
            [action.payload.key]: {
              ...state.fields?.[action.payload.key],
              value: {
                imageURL: action.payload.value,
                imageDescription:
                  state.fields?.[action.payload.key].value.imageDescription,
              },
            },
          },
        };
      }

      if (
        action.payload.fieldType == "image" &&
        action.payload.additionalConfig == "description"
      ) {
        return {
          ...state,
          fields: {
            ...state.fields,
            [action.payload.key]: {
              ...state.fields?.[action.payload.key],
              value: {
                imageDescription: action.payload.value,
                imageURL: state.fields?.[action.payload.key].value.imageURL,
              },
            },
          },
        };
      }
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
            break;
          case "categorySelect":
            fieldsLocal[collectionField.name].array_options =
              action.payload.categories as Array<string>;
            break;

          case "image":
            fieldsLocal[collectionField.name].value = {
              imageURL: "",
              imageDescription: "",
            };
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
