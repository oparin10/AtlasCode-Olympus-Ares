export const SET_ADONIS_GALLERY_OPEN = "SET_ADONIS_GALLERY_OPEN";
export const SET_ADONIS_GALLERY_CLOSE = "SET_ADONIS_GALLERY_CLOSE";

export const GET_ADONIS_GALLERY_PHOTOS_START =
  "GET_ADONIS_GALLERY_PHOTOS_START";
export const GET_ADONIS_GALLERY_PHOTOS_SUCCESS =
  "GET_ADONIS_GALLERY_PHOTOS_SUCCESS";
export const GET_ADONIS_GALLERY_PHOTOS_FAIL = "GET_ADONIS_GALLERY_PHOTOS_FAIL";

export const SET_ADONIS_SELECTED_PHOTO = "SET_ADONIS_SELECTED_PHOTO";

interface SetAdonisSelectedPhoto {
  type: typeof SET_ADONIS_SELECTED_PHOTO;
}

export type SetAdonisSelectedPhotoActionTypes = SetAdonisSelectedPhoto;

export interface AdonisGalleryState {
  gallery: Array<string>;
  gallery_thumbnail: Array<string>;
  selectedPhoto: string;
  error: Array<string> | string | null | undefined;
  isOpen: boolean;
}

interface SetAdonisGalleryOpen {
  type: typeof SET_ADONIS_GALLERY_OPEN;
}

interface SetAdonisGalleryClose {
  type: typeof SET_ADONIS_GALLERY_CLOSE;
}

export type SetAdonisGalleryComponentActionTypes =
  | SetAdonisGalleryClose
  | SetAdonisGalleryOpen;

interface GetAdonisGalleryPhotosStart {
  type: typeof GET_ADONIS_GALLERY_PHOTOS_START;
}

interface GetAdonisGalleryPhotosSuccess {
  type: typeof GET_ADONIS_GALLERY_PHOTOS_SUCCESS;
  payload: any;
}

interface GetAdonisGalleryPhotosFail {
  type: typeof GET_ADONIS_GALLERY_PHOTOS_FAIL;
  payload: any;
}

export type GetAdonisGalleryPhotosActionTypes =
  | GetAdonisGalleryPhotosStart
  | GetAdonisGalleryPhotosSuccess
  | GetAdonisGalleryPhotosFail;

export type AdonisActionTypes =
  | GetAdonisGalleryPhotosActionTypes
  | SetAdonisGalleryComponentActionTypes
  | SetAdonisSelectedPhotoActionTypes;
