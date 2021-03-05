import { AdminItem } from "../../../config/collections.config";

export const SET_ACTIVE_CONTENT = "SET_ACTIVE_CONTENT";

export interface ActiveCollectionState extends AdminItem {
  entries: Array<any> | null | undefined;
}

export interface SetActiveContent {
  type: typeof SET_ACTIVE_CONTENT;
  payload: AdminItem;
}

export type ActiveContentActionTypes = SetActiveContent;
