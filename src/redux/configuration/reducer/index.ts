import {
  ConfigurationActionTypes,
  GET_CONFIG_FAIL,
  GET_CONFIG_START,
  GET_CONFIG_SUCCESS,
  AppConfigState,
} from "../../types";

let initialState: AppConfigState = {
  branding: {
    companyName: "",
    companyWebsite: "",
    logoUrl: "",
  },

  collections: [],
};

export const configurationReducer = (
  state = initialState,
  action: ConfigurationActionTypes
): AppConfigState => {
  switch (action.type) {
    case GET_CONFIG_START:
      return { ...state };

    case GET_CONFIG_FAIL:
      return { ...state };

    case GET_CONFIG_SUCCESS:
      return {
        ...state,
        branding: {
          companyName: action.payload.branding.companyName,
          companyWebsite: action.payload.branding.companyWebsite,
          logoUrl: action.payload.branding.logoUrl,
        },
        collections: action.payload.collections,
      };

    default:
      return state;
  }
};
