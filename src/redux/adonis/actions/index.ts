import {
  SetAdonisGalleryComponentActionTypes,
  SET_ADONIS_GALLERY_CLOSE,
  SET_ADONIS_GALLERY_OPEN,
} from "../types";

export const galleryClose = (): SetAdonisGalleryComponentActionTypes => {
  return {
    type: SET_ADONIS_GALLERY_CLOSE,
  };
};

export const galleryOpen = (): SetAdonisGalleryComponentActionTypes => {
  return {
    type: SET_ADONIS_GALLERY_OPEN,
  };
};
