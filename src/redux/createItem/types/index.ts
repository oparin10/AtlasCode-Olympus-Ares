import { AdminCollectionField } from "../../../config/collections.config";

export interface CreateItemState {
  field: Record<string, any> | null ;
  isOpen: boolean;
}

export const SET_CREATE_ITEM_VISILIBILITY_OPEN =
  "SET_CREATE_ITEM_VISIBILITY_OPEN";
export const SET_CREATE_ITEM_VISIBILITY_CLOSED =
  "SET_CREATE_ITEM_VISIBILITY_CLOSED";

export const SET_CREATE_ITEM_FIELDS_VALUE = "SET_CREATE_ITEM_FIELDS_VALUE";
export const SET_CREATE_ITEM_FIELDS_NULL = "SET_CREATE_ITEM_FIELDS_NULL";

interface SetCreateItemFieldsValue {
  type: typeof SET_CREATE_ITEM_FIELDS_VALUE;
  payload: Array<AdminCollectionField>;
}

interface SetCreateItemFieldsNull {
  type: typeof SET_CREATE_ITEM_FIELDS_NULL;
}

interface SetCreateItemVisibilityOpen {
  type: typeof SET_CREATE_ITEM_VISILIBILITY_OPEN;
}

interface SetCreateItemVisibilityClosed {
  type: typeof SET_CREATE_ITEM_VISIBILITY_CLOSED;
}

export type SetCreateItemFieldsActionTypes =
  | SetCreateItemFieldsValue
  | SetCreateItemFieldsNull;

export type SetCreateItemsVisibilityActionTypes =
  | SetCreateItemVisibilityOpen
  | SetCreateItemVisibilityClosed;

export type CreateItemActionTypes =
  | SetCreateItemsVisibilityActionTypes
  | SetCreateItemFieldsActionTypes;
