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
        name: action.payload.name,
        icon: action.payload.icon,
        label: action.payload.label,
        path: action.payload.path,
        widget: action.payload.widget,
      };

      return activeAdminItem;

    default:
      return state;
  }
};
