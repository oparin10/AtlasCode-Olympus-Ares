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
import global_config from "../../../global_config";
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
            companyName: global_config.branding.companyName,
            companyWebsite: global_config.branding.companyWebsite,
            logoUrl: global_config.branding.logoUrl,
          },

          collections: global_config.collections,
          dionysus: global_config.dionysus,
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
