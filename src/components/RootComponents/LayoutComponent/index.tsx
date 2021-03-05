import React from "react";
import { connect } from "react-redux";
import { LayoutDictionary } from "../../../dictionaries";
import { RootState } from "../../../redux";
import { setActiveCollection } from "../../../redux/activeCollection/actions";
import { setEntryInitialFields } from "../../../redux/entries/actions";
import { LayoutComponentRootProps } from "../../../types";

const LayoutComponent = ({
  activeCollection,
  collections,
  layoutType,
  setActiveCollection,
  setEntryInitialFields,
  children,
}: LayoutComponentRootProps) => {
  const LayoutComponentDynamic = LayoutDictionary[layoutType];

  return (
    <div>
      <LayoutComponentDynamic
        activeCollection={activeCollection}
        collections={collections}
        setActiveCollection={setActiveCollection}
        setEntryInitialFields={setEntryInitialFields}
        children={children}
      ></LayoutComponentDynamic>
    </div>
  );
};

const mapDispatchToProps = {
  setActiveCollection: setActiveCollection,
  setEntryInitialFields: setEntryInitialFields,
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
