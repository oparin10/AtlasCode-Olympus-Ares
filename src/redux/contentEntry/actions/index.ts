import { Map } from "immutable";
import { CHANGE_CONTENT_FIELD, ContentFieldActionTypes } from "../../types";

export const changeContentField = (data: any): ContentFieldActionTypes => {
  return {
    type: CHANGE_CONTENT_FIELD,
    payload: data,
  };
};
