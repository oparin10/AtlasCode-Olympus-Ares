import {
  UploadAdonisPhotoActionTypes,
  UPLOAD_ADONIS_PHOTO_FAIL,
  UPLOAD_ADONIS_PHOTO_START,
  UPLOAD_ADONIS_PHOTO_SUCCESS,
} from "../../adonis/types";
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
  action: GlobalStateActionTypes | UploadAdonisPhotoActionTypes
) => {
  switch (action.type) {
    case SET_LOADING_TRUE:
      return { ...state, isLoading: true };

    case SET_LOADING_FALSE:
      return { ...state, isLoading: false };

    // Adonis photo upload process

    case UPLOAD_ADONIS_PHOTO_START:
      return { isLoading: true };

    case UPLOAD_ADONIS_PHOTO_FAIL:
      return { isLoading: false };

    case UPLOAD_ADONIS_PHOTO_SUCCESS:
      return { isLoading: false };

    default:
      return state;
  }
};
