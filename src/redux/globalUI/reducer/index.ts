import {
  GlobalStateActionTypes,
  GlobalUIState,
  SET_LOADING_FALSE,
  SET_LOADING_TRUE,
} from "../../types";

let initialState: GlobalUIState = {
  isLoading: false,
};

export const globalUIReducer = (
  state = initialState,
  action: GlobalStateActionTypes
) => {
  switch (action.type) {
    case SET_LOADING_TRUE:
      return { ...state, isLoading: true };

    case SET_LOADING_FALSE:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
