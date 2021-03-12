import { Dispatch } from "react";
import { RootStateOrAny } from "react-redux";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  AdminCollectionField,
  AdminItem,
} from "../../../config/collections.config";
import { db } from "../../../firebase";
import { globalNotificationCustom } from "../../globalUI/actions";
import { GlobalStateActionTypes } from "../../types";
import {
  ActiveCollectionState,
  ActiveContentActionTypes,
  ACTIVE_COLLECTION_SET_FAIL,
  ACTIVE_COLLECTION_SET_START,
  ACTIVE_COLLECTION_SET_SUCCESS,
  SetActiveContentActionTypes,
  SET_ACTIVE_CONTENT,
} from "../types";

export const setActiveCollection = (
  activeCollection: AdminItem
): SetActiveContentActionTypes => {
  return {
    type: SET_ACTIVE_CONTENT,
    payload: activeCollection,
  };
};

export const setupActiveCollection = (
  activeCollection: AdminItem
): ThunkAction<void, RootStateOrAny, unknown, Action<string>> => {
  return async (
    dispatch: Dispatch<ActiveContentActionTypes | GlobalStateActionTypes>
  ) => {
    dispatch({
      type: ACTIVE_COLLECTION_SET_START,
    });

    let activeCollectionLocalState: ActiveCollectionState = {
      collectionRef: activeCollection.collectionRef,
      dataWidget: activeCollection.dataWidget,
      fields: activeCollection.fields,
      routerPath: activeCollection.routerPath,
      sidebarIcon: activeCollection.sidebarIcon,
      sidebarLabel: activeCollection.sidebarLabel,
      hasAttributes: activeCollection.hasAttributes
        ? activeCollection.hasAttributes
        : false,
      hasCategories: activeCollection.hasCategories
        ? activeCollection.hasCategories
        : false,
      entries: [],
    };

    try {
      if (
        activeCollection.categories &&
        activeCollection.categories.length > 0
      ) {
        activeCollectionLocalState.categories = activeCollection.categories;
      }

      if (
        activeCollection.categories &&
        activeCollection.categories.length == 0
      ) {
        db.collection("collections")
          .doc(activeCollection.collectionRef)
          .onSnapshot((observerSnapshot) => {
            let categoriesData: Array<string> =
              observerSnapshot.data()?.categories ?? [];

            activeCollectionLocalState.categories = categoriesData;
          });
      }

      if (
        activeCollection.categories &&
        activeCollection.categories.length > 0
      ) {
        db.collection("collections")
          .doc(activeCollection.collectionRef)
          .onSnapshot((observerSnapshot) => {
            let categoriesLocalArray: Array<string> = [];

            let categoriesData: Array<string> =
              observerSnapshot.data()?.categories ?? [];

            categoriesLocalArray = [
              ...(activeCollection.categories as Array<string>),
              ...categoriesData,
            ];

            activeCollectionLocalState.categories = categoriesLocalArray;
          });
      }

      db.collection("collections")
        .doc(activeCollection.collectionRef)
        .collection("entries")
        .onSnapshot((collectionSnapshot) => {
          let snapShotData: Array<AdminCollectionField> = [];

          collectionSnapshot.forEach((doc) => {
            snapShotData.push(doc.data() as AdminCollectionField);
          });

          activeCollectionLocalState.entries = snapShotData;
        });

      dispatch({
        type: ACTIVE_COLLECTION_SET_SUCCESS,
        payload: activeCollectionLocalState,
      });
    } catch (error) {
      dispatch({
        type: ACTIVE_COLLECTION_SET_FAIL,
      });
    }
  };
};
