import { RootStateOrAny } from "react-redux";
import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  GetConfigActionTypes,
  GET_CONFIG_FAIL,
  GET_CONFIG_START,
  GET_CONFIG_SUCCESS,
  SetConfigActionTypes,
} from "../types";
import schema from "../../../../warhorse-schema";

export const configurationSetup = (): ThunkAction<
  void,
  RootStateOrAny,
  unknown,
  Action<string>
> => {
  return (dispatch: Dispatch<GetConfigActionTypes | SetConfigActionTypes>) => {
    dispatch({
      type: GET_CONFIG_START,
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
  };
};
