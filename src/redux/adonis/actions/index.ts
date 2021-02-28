import { Dispatch } from "react";
import { RootStateOrAny } from "react-redux";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  DeleteAdonisImageActionTypes,
  DELETE_ADONIS_IMAGE_FAIL,
  DELETE_ADONIS_IMAGE_START,
  DELETE_ADONIS_IMAGE_SUCCESS,
  GetAdonisGalleryPhotosActionTypes,
  GET_ADONIS_GALLERY_PHOTOS_FAIL,
  GET_ADONIS_GALLERY_PHOTOS_START,
  GET_ADONIS_GALLERY_PHOTOS_SUCCESS,
  SetAdonisActivePhotoActionTypes,
  SetAdonisGalleryComponentActionTypes,
  SET_ADONIS_ACTIVE_PHOTO,
  SET_ADONIS_ACTIVE_PHOTO_NULL,
  SET_ADONIS_GALLERY_CLOSE,
  SET_ADONIS_GALLERY_OPEN,
  UploadAdonisPhotoActionTypes,
  UPLOAD_ADONIS_PHOTO_FAIL,
  UPLOAD_ADONIS_PHOTO_START,
  UPLOAD_ADONIS_PHOTO_SUCCESS,
} from "../types";
import Axios, { AxiosResponse } from "axios";
import { storage } from "../../../firebase";
import {
  adonisConfig,
  AdonisImage,
  AdonisOrderedTriple,
} from "../../../config/adonis.config";
import getAdonisOrderedTriple from "../../../helper/getAdonisOrderedTriple";

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

export const setActivePhoto = (
  adonisImage: AdonisImage
): SetAdonisActivePhotoActionTypes => {
  return {
    type: SET_ADONIS_ACTIVE_PHOTO,
    payload: {
      fileName: adonisImage.fileName,
      uuid: adonisImage.uuid,
      gallery: adonisImage.gallery,
      gallery_thumbnail: adonisImage.gallery_thumbnail,
      gallery_thumbnail_blur: adonisImage.gallery_thumbnail_blur,
    },
  };
};

export const setActivePhotoNull = (): SetAdonisActivePhotoActionTypes => {
  return {
    type: SET_ADONIS_ACTIVE_PHOTO_NULL,
  };
};

export const getAllImageLinks = (): ThunkAction<
  void,
  RootStateOrAny,
  unknown,
  Action<string>
> => {
  return async (dispatch: Dispatch<GetAdonisGalleryPhotosActionTypes>) => {
    dispatch({
      type: GET_ADONIS_GALLERY_PHOTOS_START,
    });

    try {
      let allThumbNailFolder = await storage
        .ref()
        .child(
          `${adonisConfig.path.rootFolder}/${adonisConfig.path.galleryThumbnail}`
        )
        .listAll();

      let allFilesPaths: Array<string> = [];

      allThumbNailFolder.prefixes.forEach((item) => {
        allFilesPaths.push(item.fullPath);
      });

      let adonisImages: Array<AdonisImage> = [];

      for (let i = 0; i < allFilesPaths.length; i++) {
        const element = allFilesPaths[i];

        let fullImagePath: string = (
          await storage.ref().child(element).listAll()
        ).items[0].fullPath;

        let thumbNailMetadata: any = await storage
          .ref()
          .child(fullImagePath)
          .getMetadata();

        let orderTripleLocal: AdonisOrderedTriple = getAdonisOrderedTriple(
          thumbNailMetadata.name,
          thumbNailMetadata.customMetadata.uuid
        );

        let orderedTripleWithMeta: AdonisImage = {
          fileName: thumbNailMetadata.name,
          uuid: thumbNailMetadata.customMetadata.uuid,
          gallery: orderTripleLocal.gallery,
          gallery_thumbnail: orderTripleLocal.gallery_thumbnail,
          gallery_thumbnail_blur: orderTripleLocal.gallery_thumbnail_blur,
        };

        adonisImages.push(orderedTripleWithMeta);
      }

      dispatch({
        type: GET_ADONIS_GALLERY_PHOTOS_SUCCESS,
        payload: adonisImages,
      });
    } catch (error) {
      dispatch({
        type: GET_ADONIS_GALLERY_PHOTOS_FAIL,
        payload: error.message,
      });
    }
  };
};

export const deleteImage = (
  imageURL: string
): ThunkAction<void, RootStateOrAny, unknown, Action<string>> => {
  return (dispatch: Dispatch<DeleteAdonisImageActionTypes>) => {
    dispatch({
      type: DELETE_ADONIS_IMAGE_START,
    });

    storage
      .refFromURL(imageURL)
      .delete()
      .then((deleteSuccessResult) => {
        console.log(deleteSuccessResult);
        dispatch({
          type: DELETE_ADONIS_IMAGE_SUCCESS,
          payload: { deletedImageURL: imageURL },
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: DELETE_ADONIS_IMAGE_FAIL,
        });
      });
  };
};

export const uploadAndOptimizeImage = (
  fileName: string,
  base64URI: string
): ThunkAction<void, RootStateOrAny, unknown, Action<string>> => {
  return (dispatch: Dispatch<UploadAdonisPhotoActionTypes>) => {
    dispatch({
      type: UPLOAD_ADONIS_PHOTO_START,
    });

    Axios.post<AdonisImage, AxiosResponse<AdonisImage>>(
      "http://localhost:5001/atlas-ares/us-central1/api/adonis/optimize",
      {
        fileName: fileName,
        base64URI: base64URI,
      }
    )
      .then((uploadSuccessResponse) => {
        console.log(uploadSuccessResponse.data);

        let orderTripleLocal: AdonisImage = {
          fileName: uploadSuccessResponse.data.fileName,
          uuid: uploadSuccessResponse.data.uuid,
          gallery: uploadSuccessResponse.data.gallery,
          gallery_thumbnail: uploadSuccessResponse.data.gallery_thumbnail,
          gallery_thumbnail_blur:
            uploadSuccessResponse.data.gallery_thumbnail_blur,
        };

        dispatch({
          type: UPLOAD_ADONIS_PHOTO_SUCCESS,
          payload: orderTripleLocal,
        });
      })
      .catch((error) => {
        dispatch({
          type: UPLOAD_ADONIS_PHOTO_FAIL,
        });
      });
  };
};
