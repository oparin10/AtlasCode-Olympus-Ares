import { AdonisGalleryState, AdonisActionTypes } from "../types";

export const hehe = "hehe";

let initialState: AdonisGalleryState = {
  gallery: [],
  gallery_thumbnail: [],
  selectedPhoto: "",
  error: null,
};

export const adonisReducer = (
  state = initialState,
  action: AdonisActionTypes
) => {
  switch (action.type) {
    default:
      return state;
  }
};
