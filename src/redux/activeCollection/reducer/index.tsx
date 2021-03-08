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
  isReady: false,
};

export const activeCollectionReducer = (
  state = initialState,
  action: ActiveContentActionTypes
): ActiveCollectionState => {
  switch (action.type) {
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
