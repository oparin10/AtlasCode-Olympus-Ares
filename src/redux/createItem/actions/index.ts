import { AdminCollectionField } from "../../../config/collections.config";
import { fieldValues } from "../../../firebase";
import {
  SetCreateItemFieldsActionTypes,
  SetCreateItemsVisibilityActionTypes,
  SET_CREATE_ITEM_FIELDS_NULL,
  SET_CREATE_ITEM_FIELDS_VALUE,
  SET_CREATE_ITEM_VISIBILITY_CLOSED,
  SET_CREATE_ITEM_VISILIBILITY_OPEN,
} from "../types";

export const hehe = "hehe";

export const setCreateItemFields = (
  fields: Array<AdminCollectionField>
): SetCreateItemFieldsActionTypes => {
  return {
    type: SET_CREATE_ITEM_FIELDS_VALUE,
    payload: fields,
  };
};

export const SetCreateItemFieldsNull = (): SetCreateItemFieldsActionTypes => {
  return {
    type: SET_CREATE_ITEM_FIELDS_NULL,
  };
};

export const createItemOpen = (): SetCreateItemsVisibilityActionTypes => {
  return {
    type: SET_CREATE_ITEM_VISILIBILITY_OPEN,
  };
};

export const createItemClose = (): SetCreateItemsVisibilityActionTypes => {
  return {
    type: SET_CREATE_ITEM_VISIBILITY_CLOSED,
  };
};
