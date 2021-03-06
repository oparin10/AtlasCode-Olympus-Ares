import { TextField } from "@material-ui/core";
import React from "react";
import { DraftStateField } from "../../../../redux/draft/types";
import { FieldComponentProps } from "../../../RootComponents/FieldWidgetComponent";

const StringFieldWidget = ({
  changeField,
  currentValues,
  label,
  name,
}: FieldComponentProps) => {
  let currentFieldValue: DraftStateField | string =
    currentValues?.[name].value ?? "";

  React.useEffect(() => {}, []);

  return (
    <div>
      <TextField
        label={label.toString()}
        value={currentFieldValue}
        onChange={(e: any) => changeField(name, e.target.value)}
      ></TextField>
    </div>
  );
};

export default StringFieldWidget;
