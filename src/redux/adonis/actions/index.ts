import { Dispatch } from "react";
import { RootStateOrAny } from "react-redux";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  SetAdonisGalleryComponentActionTypes,
  SET_ADONIS_GALLERY_CLOSE,
  SET_ADONIS_GALLERY_OPEN,
  UploadAdonisPhotoActionTypes,
  UPLOAD_ADONIS_PHOTO_FAIL,
  UPLOAD_ADONIS_PHOTO_START,
  UPLOAD_ADONIS_PHOTO_SUCCESS,
} from "../types";
import Axios from "axios";

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
            gallery: uploadSuccessResponse.data.gallery as Array<string>,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: UPLOAD_ADONIS_PHOTO_FAIL,
          payload: {
            error: error.message,
          },
        });
      });
  };
};
