import {
  AdonisGalleryState,
  AdonisActionTypes,
  SET_ADONIS_GALLERY_OPEN,
  SET_ADONIS_GALLERY_CLOSE,
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

    default:
      return state;
  }
};
