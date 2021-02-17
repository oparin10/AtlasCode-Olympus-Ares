import React from "react";
import { WidgetDictonary } from "../../../dictionaries";
import { WidgetsTypes } from "../../../types";

interface Props {
  widgetType: WidgetsTypes;
}

const CollectionField = ({ widgetType, ...rest }: Props) => {
  const WidgetComponent = WidgetDictonary[widgetType] as React.ElementType;

  return (
    <div>
      <WidgetComponent {...rest}></WidgetComponent>
    </div>
  );
};

export default CollectionField;
