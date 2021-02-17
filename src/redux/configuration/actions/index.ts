import { RootStateOrAny } from "react-redux";
import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  ConfigurationActionTypes,
  GetConfigActionTypes,
  GET_CONFIG_FAIL,
  GET_CONFIG_START,
  GET_CONFIG_SUCCESS,
  SetConfigActionTypes,
  SetLoadingActionTypes,
  SET_LOADING_FALSE,
  SET_LOADING_TRUE,
} from "../../types";
import schema from "../../../schema";
import { setLoadingTrue } from "../../globalUI/actions";

export const configurationSetup = (): ThunkAction<
  void,
  RootStateOrAny,
  unknown,
  Action<string>
> => {
  return (
    dispatch: Dispatch<
      GetConfigActionTypes | SetConfigActionTypes | SetLoadingActionTypes
    >
  ) => {
    dispatch({
      type: GET_CONFIG_START,
    });

    dispatch({
      type: SET_LOADING_TRUE,
    });

    try {
      dispatch({
        type: GET_CONFIG_SUCCESS,
        payload: {
          branding: {
            companyName: schema.branding.companyName,
            companyWebsite: schema.branding.companyWebsite,
            logoUrl: schema.branding.logoUrl,
          },

          collections: schema.collections,
          media_location: schema.media_location,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_CONFIG_FAIL,
        error: error.message,
      });
    }

    dispatch({
      type: SET_LOADING_FALSE,
    });
  };
};
