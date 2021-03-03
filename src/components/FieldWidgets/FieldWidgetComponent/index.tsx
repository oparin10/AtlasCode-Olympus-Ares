import React from "react";
import { FieldWidgetDictionary } from "../../../dictionaries";
import { FieldComponentRootProps } from "../../../types";

const FieldWidgetComponent = ({
  fieldType,
  label,
  onChange,
  value,
  error = false,
}: FieldComponentRootProps) => {
  const FieldComponentDynamic = FieldWidgetDictionary[fieldType];

  return (
    <div>
      <FieldComponentDynamic
        label={label}
        onChange={onChange}
        value={value}
        error={error}
      />
    </div>
  );
};

export default FieldWidgetComponent;
