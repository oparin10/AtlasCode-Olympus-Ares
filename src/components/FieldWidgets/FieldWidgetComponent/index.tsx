import React from "react";
import { FieldWidgetDictionary } from "../../../dictionaries";
import { FieldWidgetTypes } from "../../../types";

interface Props {
  fieldType: FieldWidgetTypes;
  label: string;
  name: string;
}

const FieldWidgetComponent = ({ fieldType, label, name }: Props) => {
  const FieldComponentDynamic = FieldWidgetDictionary[
    fieldType
  ] as React.ElementType;

  return (
    <div>
      <h1>{label}</h1>
      <h2>{name}</h2>
      <FieldComponentDynamic />
    </div>
  );
};

export default FieldWidgetComponent;
