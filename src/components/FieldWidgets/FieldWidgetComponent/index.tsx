import React from "react";
import { FieldWidgetDictionary } from "../../../dictionaries";
import { FieldComponentRootProps } from "../../../types";

const FieldWidgetComponent = ({
  fieldType,
  label,
  onChange,
  error = false,
}: FieldComponentRootProps) => {
  const FieldComponentDynamic = FieldWidgetDictionary[fieldType];

  return (
    <div>
      <FieldComponentDynamic label={label} onChange={onChange} error={error} />
    </div>
  );
};

export default FieldWidgetComponent;
