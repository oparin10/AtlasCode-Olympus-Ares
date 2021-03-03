import React from "react";
import { DataWidgetDictionary } from "../../../dictionaries";
import { DataWidgetComponentRootProps, DataWidgetTypes } from "../../../types";

interface Props {
  widgetType: DataWidgetTypes;
}

const DataWidgetComponent = ({
  props,
  widgetType,
}: DataWidgetComponentRootProps) => {
  const DataWidgetComponentDynamic = DataWidgetDictionary[widgetType];

  return (
    <div>
      <DataWidgetComponentDynamic />
    </div>
  );
};

export default DataWidgetComponent;
