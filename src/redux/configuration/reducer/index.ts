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

  dionysus: {
    path: {
      gallery: "",
      galleryThumbnail: "",
      galleryThumbnailBlur: "",
    },
    createBlur: true,
  },
  error: [],
};

export const configurationReducer = (
  state = initialState,
  action: ConfigurationActionTypes
): AppConfigState => {
  switch (action.type) {
    case GET_CONFIG_START:
      return { ...state };

    case GET_CONFIG_FAIL:
      return { ...state, error: action.error };

    case GET_CONFIG_SUCCESS:
      return {
        ...state,
        branding: {
          companyName: action.payload.branding.companyName,
          companyWebsite: action.payload.branding.companyWebsite,
          logoUrl: action.payload.branding.logoUrl,
        },
        collections: action.payload.collections,
        dionysus: action.payload.dionysus,
      };

    default:
      return state;
  }
};
