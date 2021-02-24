export const SET_ADONIS_GALLERY_OPEN = "SET_ADONIS_GALLERY_OPEN";
export const SET_ADONIS_GALLERY_CLOSE = "SET_ADONIS_GALLERY_CLOSE";

export const GET_ADONIS_GALLERY_PHOTOS_START =
  "GET_ADONIS_GALLERY_PHOTOS_START";
export const GET_ADONIS_GALLERY_PHOTOS_SUCCESS =
  "GET_ADONIS_GALLERY_PHOTOS_SUCCESS";
export const GET_ADONIS_GALLERY_PHOTOS_FAIL = "GET_ADONIS_GALLERY_PHOTOS_FAIL";

export const SET_ADONIS_SELECTED_PHOTO = "SET_ADONIS_SELECTED_PHOTO";

export const UPLOAD_ADONIS_PHOTO_START = "UPLOAD_ADONIS_PHOTO_START";
export const UPLOAD_ADONIS_PHOTO_SUCCESS = "UPLOAD_ADONIS_PHOTO_SUCCESS";
export const UPLOAD_ADONIS_PHOTO_FAIL = "UPLOAD_ADONIS_PHOTO_FAIL";

interface UploadAdonisPhotoStart {
  type: typeof UPLOAD_ADONIS_PHOTO_START;
}

interface UploadAdonisPhotoFail {
  type: typeof UPLOAD_ADONIS_PHOTO_FAIL;
  payload: Partial<AdonisGalleryState>;
}

interface UploadAdonisPhotoSuccess {
  type: typeof UPLOAD_ADONIS_PHOTO_SUCCESS;
  payload: Partial<AdonisGalleryState>;
}

export type UploadAdonisPhotoActionTypes =
  | UploadAdonisPhotoStart
  | UploadAdonisPhotoSuccess
  | UploadAdonisPhotoFail;

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
  | SetAdonisSelectedPhotoActionTypes
  | UploadAdonisPhotoActionTypes;