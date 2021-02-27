import {
  AdonisImage,
  AdonisOrderedTriple,
} from "../../../config/adonis.config";
import {
  AdonisGalleryState,
  AdonisActionTypes,
  SET_ADONIS_GALLERY_OPEN,
  SET_ADONIS_GALLERY_CLOSE,
  UPLOAD_ADONIS_PHOTO_START,
  UPLOAD_ADONIS_PHOTO_FAIL,
  UPLOAD_ADONIS_PHOTO_SUCCESS,
  GET_ADONIS_GALLERY_PHOTOS_SUCCESS,
  GET_ADONIS_GALLERY_PHOTOS_START,
  GET_ADONIS_GALLERY_PHOTOS_FAIL,
} from "../types";

let initialState: AdonisGalleryState = {
  gallery: [],
  selectedPhoto: "",
  isOpen: false,
  isLoading: false,
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
      return { ...state };
    }

    case UPLOAD_ADONIS_PHOTO_SUCCESS: {
      let localGalleryArray: Array<AdonisImage> = [...state.gallery];

      localGalleryArray.splice(0, 0, action.payload);

      return {
        ...state,
        gallery: localGalleryArray,
      };
    }
    case GET_ADONIS_GALLERY_PHOTOS_START: {
      return { ...state, isLoading: true };
    }

    case GET_ADONIS_GALLERY_PHOTOS_SUCCESS: {
      return { ...state, isLoading: false, gallery: action.payload };
    }

    case GET_ADONIS_GALLERY_PHOTOS_FAIL: {
      return { ...state, isLoading: false };
    }

    default:
      return state;
  }
};
