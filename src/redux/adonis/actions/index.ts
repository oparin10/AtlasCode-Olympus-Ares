import { Dispatch } from "react";
import { RootStateOrAny } from "react-redux";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  GetAdonisGalleryPhotosActionTypes,
  GET_ADONIS_GALLERY_PHOTOS_FAIL,
  GET_ADONIS_GALLERY_PHOTOS_START,
  GET_ADONIS_GALLERY_PHOTOS_SUCCESS,
  SetAdonisGalleryComponentActionTypes,
  SET_ADONIS_GALLERY_CLOSE,
  SET_ADONIS_GALLERY_OPEN,
  UploadAdonisPhotoActionTypes,
  UPLOAD_ADONIS_PHOTO_FAIL,
  UPLOAD_ADONIS_PHOTO_START,
  UPLOAD_ADONIS_PHOTO_SUCCESS,
} from "../types";
import Axios from "axios";
import { storage } from "../../../firebase";
import {
  adonisConfig,
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

      let adonisImages: Array<AdonisOrderedTriple> = [];

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

        adonisImages.push(orderTripleLocal);
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

export const uploadAndOptimizeImage = (
  fileName: string,
  base64URI: string
): ThunkAction<void, RootStateOrAny, unknown, Action<string>> => {
  return (dispatch: Dispatch<UploadAdonisPhotoActionTypes>) => {
    dispatch({
      type: UPLOAD_ADONIS_PHOTO_START,
    });

    Axios.post(
      "http://localhost:5001/atlas-ares/us-central1/api/adonis/optimize",
      {
        fileName: fileName,
        base64URI: base64URI,
      }
    )
      .then((uploadSuccessResponse) => {
        console.log(uploadSuccessResponse.data);

        dispatch({
          type: UPLOAD_ADONIS_PHOTO_SUCCESS,
          payload: {
            gallery: uploadSuccessResponse.data
              .gallery as Array<AdonisOrderedTriple>,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: UPLOAD_ADONIS_PHOTO_FAIL,
        });
      });
  };
};
