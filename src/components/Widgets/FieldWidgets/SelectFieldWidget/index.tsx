import { FormControl, InputLabel, Select } from "@material-ui/core";
import React from "react";
import { FieldComponentProps } from "../../../RootComponents/FieldWidgetComponent";

interface Props extends FieldComponentProps {}

const SelectFieldWidget = ({
  label,
  changeField,
  currentValues,
  name,
}: Props) => {
  return (
    <div>
      <FormControl>
        <InputLabel>{label}</InputLabel>
        <Select
          onChange={(e: any) => changeField(name, e.target.value)}
          value={currentValues![name] ?? ""}
        >
          
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectFieldWidget;
