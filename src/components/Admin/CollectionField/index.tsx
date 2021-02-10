import React from "react";
import { WarhorseWidgets, Widgets } from "../../../schema";

interface Props {
  widgetType: Widgets;
}

const CollectionField = ({ widgetType }: Props) => {
  const WidgetComponent = WarhorseWidgets[widgetType];

  return (
    <div>
      <WidgetComponent></WidgetComponent>
    </div>
  );
};

export default CollectionField;
