import React from "react";
import { connect, RootStateOrAny } from "react-redux";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AdminItem } from "../../../config/collections.config";
import { LayoutDictionary } from "../../../dictionaries";
import { RootState } from "../../../redux";
import {
  setActiveCollection,
  setupActiveCollection,
} from "../../../redux/activeCollection/actions";
import { setEntryInitialFields } from "../../../redux/entries/actions";
import { LayoutComponentRootProps } from "./types";

const LayoutComponent = ({
  activeCollection,
  collections,
  layoutType,
  setActiveCollection,
  setEntryInitialFields,
  children,
  setupCollection,
}: LayoutComponentRootProps) => {
  const LayoutComponentDynamic = LayoutDictionary[layoutType];

  return (
    <div>
      <LayoutComponentDynamic
        activeCollection={activeCollection}
        collections={collections}
        setActiveCollection={setActiveCollection}
        setEntryInitialFields={setEntryInitialFields}
        setupActiveCollection={
          setupCollection as (
            activeCollection: AdminItem
          ) => ThunkAction<void, RootStateOrAny, unknown, Action<string>>
        }
        children={children}
      ></LayoutComponentDynamic>
    </div>
  );
};

const mapDispatchToProps = {
  setActiveCollection: setActiveCollection,
  setEntryInitialFields: setEntryInitialFields,
  setupCollection: setupActiveCollection,
};

const mapStateToProps = (rootState: RootState) => ({
  collections: rootState.collections,
  activeCollection: rootState.activeCollection,
});

export const layoutComponentConnector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default layoutComponentConnector(LayoutComponent);
