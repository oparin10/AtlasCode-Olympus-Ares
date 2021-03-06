import { TextField } from "@material-ui/core";
import React from "react";
import { FieldComponentProps } from "../../../RootComponents/FieldWidgetComponent";

const StringFieldWidget = ({
  changeField,
  currentValues,
  label,
  name,
}: FieldComponentProps) => {
  return (
    <div>
      {currentValues?.name}
      <TextField
        label={label.toString()}
        value={currentValues![name] ?? ""}
        onChange={(e: any) => changeField(name, e.target.value)}
      ></TextField>
    </div>
  );
};

export default StringFieldWidget;
