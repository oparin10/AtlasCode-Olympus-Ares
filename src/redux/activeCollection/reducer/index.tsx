import { AdminItem } from "../../../config/collections.config";
import {
  ActiveCollectionState,
  ActiveContentActionTypes,
  ACTIVE_COLLECTION_SET_FAIL,
  ACTIVE_COLLECTION_SET_START,
  ACTIVE_COLLECTION_SET_SUCCESS,
  SET_ACTIVE_CONTENT,
} from "../types";

let initialState: ActiveCollectionState = {
  entries: [],
  collectionRef: "",
  dataWidget: "table",
  fields: [],
  routerPath: "",
  sidebarIcon: "Add",
  sidebarLabel: "",
};

export const activeCollectionReducer = (
  state = initialState,
  action: ActiveContentActionTypes
): ActiveCollectionState => {
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

      if (action.payload.categories) {
        activeAdminItem.categories = action.payload.categories;
      }

      return { ...activeAdminItem, entries: [] };

    case ACTIVE_COLLECTION_SET_START:
      return { ...state };

    case ACTIVE_COLLECTION_SET_SUCCESS:
      return action.payload;

    case ACTIVE_COLLECTION_SET_FAIL:
      return { ...state };

    default:
      return state;
  }
};
