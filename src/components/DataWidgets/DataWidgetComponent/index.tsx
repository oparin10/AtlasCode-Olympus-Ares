import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { DataWidgetDictionary } from "../../../dictionaries";
import { RootState } from "../../../redux";
import { entryDraftNew } from "../../../redux/entries/actions";
import { DataWidgetComponentRootProps, DataWidgetTypes } from "../../../types";

const DataWidgetComponent = ({
  widgetType,
  activeCollection,
  newEntry,
}: DataWidgetComponentRootProps) => {
  const DataWidgetComponentDynamic = DataWidgetDictionary[widgetType];

  return (
    <div>
      <DataWidgetComponentDynamic
        activeCollection={activeCollection}
        addNew={newEntry}
      />
    </div>
  );
};

const mapDispatchToProps = {
  newEntry: entryDraftNew,
};

const mapStateToProps = (rootState: RootState) => ({
  activeCollection: rootState.activeCollection,
});

export const dataWidgetConnector = connect(mapStateToProps, mapDispatchToProps);

export default dataWidgetConnector(DataWidgetComponent);
