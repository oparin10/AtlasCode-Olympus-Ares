import React from "react";
import { connect, ConnectedProps } from "react-redux";
import {
  AdminCollectionField,
  AdminItem,
} from "../../../config/collections.config";
import { DataWidgetDictionary } from "../../../dictionaries";
import { RootState } from "../../../redux";
import { draftCreateNew } from "../../../redux/draft/actions";
import { DraftEntryNewActionTypes } from "../../../redux/draft/types";
import { DataWidgetTypes } from "../../../types";

export interface DataWidgetComponentRootProps extends DataWidgetReduxProps {
  widgetType: DataWidgetTypes;
}

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
  newEntry: draftCreateNew,
};

const mapStateToProps = (rootState: RootState) => ({
  activeCollection: rootState.activeCollection,
});

export type DataWidgetFunctionalComponentProps = {
  activeCollection: AdminItem;
  addNew: (fields: AdminItem) => DraftEntryNewActionTypes;
};

export type DataWidgetReduxProps = ConnectedProps<typeof dataWidgetConnector>;

export const dataWidgetConnector = connect(mapStateToProps, mapDispatchToProps);

export default dataWidgetConnector(DataWidgetComponent);
