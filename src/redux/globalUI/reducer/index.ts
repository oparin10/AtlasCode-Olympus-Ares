import {
  UploadAdonisPhotoActionTypes,
  UPLOAD_ADONIS_PHOTO_FAIL,
  UPLOAD_ADONIS_PHOTO_START,
  UPLOAD_ADONIS_PHOTO_SUCCESS,
} from "../../adonis/types";
import {
  ConfigurationActionTypes,
  GET_CONFIG_FAIL,
  GET_CONFIG_START,
  GET_CONFIG_SUCCESS,
  GlobalStateActionTypes,
  GlobalUIState,
  SET_LOADING_FALSE,
  SET_LOADING_TRUE,
} from "../../types";
import {
  SET_GLOBAL_NOTIFICATION_CLOSED,
  SET_GLOBAL_NOTIFICATION_OPEN,
} from "../types";

let initialState: GlobalUIState = {
  isLoading: false,
  notificationMessage: "",
  notificationOpen: false,
  notificationSeverity: "info",
};

export const globalUIReducer = (
  state = initialState,
  action:
    | GlobalStateActionTypes
    | UploadAdonisPhotoActionTypes
    | ConfigurationActionTypes
): GlobalUIState => {
  switch (action.type) {
    case GET_CONFIG_START:
      return { ...state, isLoading: true };

    case GET_CONFIG_FAIL:
      return { ...state, isLoading: false };

    case GET_CONFIG_SUCCESS:
      return { ...state, isLoading: false };

    case SET_GLOBAL_NOTIFICATION_OPEN:
      return { ...state };

    case SET_GLOBAL_NOTIFICATION_CLOSED:
      return { ...state, notificationOpen: false };

    case SET_LOADING_TRUE:
      return { ...state, isLoading: true };

    case SET_LOADING_FALSE:
      return { ...state, isLoading: false };

    // Adonis photo upload process

    case UPLOAD_ADONIS_PHOTO_START:
      return {
        ...state,
        isLoading: true,
        notificationMessage: "Upload de imagem iniciado.",
        notificationOpen: true,
        notificationSeverity: "info",
      };

    case UPLOAD_ADONIS_PHOTO_FAIL:
      return {
        isLoading: false,
        notificationMessage: "Houve um erro no upload da imagem",
        notificationOpen: true,
        notificationSeverity: "error",
      };

    case UPLOAD_ADONIS_PHOTO_SUCCESS:
      return {
        isLoading: false,
        notificationMessage: "Imagem otimizada com sucesso!",
        notificationOpen: true,
        notificationSeverity: "success",
      };

    default:
      return state;
  }
};
