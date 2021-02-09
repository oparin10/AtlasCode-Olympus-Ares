import {
  ConfigurationActionTypes,
  GET_CONFIG_FAIL,
  GET_CONFIG_START,
  GET_CONFIG_SUCCESS,
  WarhorseConfig,
  WarhorseConfigState,
} from "../types";

let initialState: WarhorseConfigState = {
  branding: {
    companyName: "",
    companyWebsite: "",
    logoUrl: "",
  },

  collections: [],
  media_location: "",
  isLoading: true,
  error: [],
};

export const configurationReducer = (
  state = initialState,
  action: ConfigurationActionTypes
): WarhorseConfigState => {
  switch (action.type) {
    case (action.type = GET_CONFIG_START):
      return { ...state, isLoading: true };

    case (action.type = GET_CONFIG_FAIL):
      return { ...state, isLoading: false, error: action.error };

    case (action.type = GET_CONFIG_SUCCESS):
      return {
        ...state,
        branding: {
          companyName: action.payload.branding.companyName,
          companyWebsite: action.payload.branding.companyWebsite,
          logoUrl: action.payload.branding.logoUrl,
        },
        collections: action.payload.collections,
        isLoading: false,
        media_location: action.payload.media_location,
      };

    default:
      return state;
  }
};
