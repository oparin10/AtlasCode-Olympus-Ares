import {
  SetLoadingActionTypes,
  SET_LOADING_FALSE,
  SET_LOADING_TRUE,
} from "../../types";

export const setLoadingTrue = (): SetLoadingActionTypes => {
  return {
    type: SET_LOADING_TRUE,
  };
};

export const setLoadingFalse = (): SetLoadingActionTypes => {
  return {
    type: SET_LOADING_FALSE,
  };
};
