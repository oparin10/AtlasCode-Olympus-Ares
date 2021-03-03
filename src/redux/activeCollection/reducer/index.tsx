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
        collectionRef: action.payload.collectionRef,
        sidebarIcon: action.payload.sidebarIcon,
        sidebarLabel: action.payload.sidebarLabel,
        routerPath: action.payload.routerPath,
        dataWidget: action.payload.dataWidget,
        fields: action.payload.fields,
      };

      return activeAdminItem;

    default:
      return state;
  }
};
