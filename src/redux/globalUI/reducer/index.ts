import {
  DeleteAdonisImageActionTypes,
  DELETE_ADONIS_IMAGE_FAIL,
  DELETE_ADONIS_IMAGE_START,
  DELETE_ADONIS_IMAGE_SUCCESS,
  GetAdonisGalleryPhotosActionTypes,
  GET_ADONIS_GALLERY_PHOTOS_FAIL,
  GET_ADONIS_GALLERY_PHOTOS_START,
  GET_ADONIS_GALLERY_PHOTOS_SUCCESS,
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
  GLOBAL_NOTIFICATION_CUSTOM,
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
    | DeleteAdonisImageActionTypes
    | GetAdonisGalleryPhotosActionTypes
): GlobalUIState => {
  switch (action.type) {
    case GET_CONFIG_FAIL:
      return {
        ...state,
        notificationOpen: true,
        notificationMessage:
          "Ocorreu um erro no processo de configuração do app",
        notificationSeverity: "error",
      };

    case GLOBAL_NOTIFICATION_CUSTOM:
      return {
        ...state,
        notificationOpen: true,
        notificationMessage: action.payload.notificationMessage,
        notificationSeverity: action.payload.notificationSeverity,
      };

    // Fetch Adonis Gallery
    case GET_ADONIS_GALLERY_PHOTOS_START:
      return {
        ...state,
        isLoading: true,
      };

    case GET_ADONIS_GALLERY_PHOTOS_FAIL:
      return {
        ...state,
        isLoading: false,
        notificationMessage:
          "Houve um erro ao tentar definir as fotos da galeria. Recarregue a página",
        notificationOpen: true,
        notificationSeverity: "error",
      };

    case GET_ADONIS_GALLERY_PHOTOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    // Delete Adonis Image
    case DELETE_ADONIS_IMAGE_START:
      return { ...state, isLoading: true };

    case DELETE_ADONIS_IMAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        notificationMessage: "Imagem deletada com sucesso",
        notificationOpen: true,
        notificationSeverity: "success",
      };

    case DELETE_ADONIS_IMAGE_FAIL:
      return {
        ...state,
        isLoading: false,
        notificationMessage:
          "Ocorreu um erro ao tentar deletar uma imagem da galeria",
        notificationOpen: true,
        notificationSeverity: "error",
      };

    // General Global UI events

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

    // Adonis photo upload process  s

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
