import { AdminItem } from "../../../types";
import { ActiveContentActionTypes, SET_ACTIVE_CONTENT } from "../../types";

export const setActiveCollection = (
  activeCollection: AdminItem
): ActiveContentActionTypes => {
  return {
    type: SET_ACTIVE_CONTENT,
    payload: activeCollection,
  };
};