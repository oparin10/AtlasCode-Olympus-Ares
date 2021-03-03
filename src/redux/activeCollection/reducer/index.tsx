import { AdminItem } from "../../../config/collections.config";
import { ActiveContentActionTypes, SET_ACTIVE_CONTENT } from "../../types";

let initialState: AdminItem | null = null;

export const activeCollectionReducer = (
  state = initialState,
  action: ActiveContentActionTypes
) => {
  switch (action.type) {
    case SET_ACTIVE_CONTENT:
      let activeAdminItem: AdminItem = {
        collectionID: action.payload.collectionID,
        sidebarIcon: action.payload.sidebarIcon,
        sidebarLabel: action.payload.sidebarLabel,
        path: action.payload.path,
        widget: action.payload.widget,
        fields: action.payload.fields,
      };

      return activeAdminItem;

    default:
      return state;
  }
};
