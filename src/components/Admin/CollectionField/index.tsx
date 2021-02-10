import React from "react";
import {
  CollectionWidgets,
  WarhorseWidgets,
  WidgetDictonary,
  Widgets,
  WidgetsTypes,
} from "../../../schema";

interface Props {
  widgetType: WidgetsTypes;
}

const CollectionField = ({ widgetType }: Props) => {
  const WidgetComponent: any = CollectionWidgets[widgetType];

  const WidgetComponentWithDict = WidgetDictonary[widgetType];

  return (
    <div>
      <WidgetComponent></WidgetComponent>
    </div>
  );
};

export default CollectionField;
