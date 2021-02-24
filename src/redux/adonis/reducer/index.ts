import {
  AdonisGalleryState,
  AdonisActionTypes,
  SET_ADONIS_GALLERY_OPEN,
  SET_ADONIS_GALLERY_CLOSE,
  UPLOAD_ADONIS_PHOTO_START,
  UPLOAD_ADONIS_PHOTO_FAIL,
  UPLOAD_ADONIS_PHOTO_SUCCESS,
} from "../types";

export const hehe = "hehe";

let initialState: AdonisGalleryState = {
  gallery: [],
  gallery_thumbnail: [],
  selectedPhoto: "",
  error: null,
  isOpen: false,
};

export const adonisReducer = (
  state = initialState,
  action: AdonisActionTypes
) => {
  switch (action.type) {
    case SET_ADONIS_GALLERY_OPEN:
      return { ...state, isOpen: true };

    case SET_ADONIS_GALLERY_CLOSE:
      return { ...state, isOpen: false };

    case UPLOAD_ADONIS_PHOTO_START: {
      return { ...state };
    }

    case UPLOAD_ADONIS_PHOTO_FAIL: {
      return { ...state, error: action.payload.error };
    }

    case UPLOAD_ADONIS_PHOTO_SUCCESS: {
      return { ...state, gallery: [action.payload.gallery] };
    }

    default:
      return state;
  }
};
