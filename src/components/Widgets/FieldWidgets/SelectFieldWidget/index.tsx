import { FormControl, InputLabel, Select } from "@material-ui/core";
import React from "react";
import { DraftStateField } from "../../../../redux/draft/types";
import { FieldComponentProps } from "../../../RootComponents/FieldWidgetComponent";

interface Props extends FieldComponentProps {}

const SelectFieldWidget = ({
  label,
  changeField,
  currentValues,
  name,
}: Props) => {
  let currentFieldValue: DraftStateField | string =
    currentValues?.[name].value ?? "";

  return (
    <div>
      <FormControl>
        <InputLabel>{label}</InputLabel>
        <Select
          onChange={(e: any) => changeField(name, e.target.value)}
          value={currentFieldValue}
        ></Select>
      </FormControl>
    </div>
  );
};

export default SelectFieldWidget;
