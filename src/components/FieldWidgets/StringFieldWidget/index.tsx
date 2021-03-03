import { TextField } from "@material-ui/core";
import React from "react";

export interface StringFieldWidgetProps {
  fullWidth?: boolean;
  onChange: () => void;
  error?: boolean;
  label: string;
  value: string | number;
}

const StringFieldWidget = ({
  label,
  value,
  onChange,
  fullWidth = false,
}: StringFieldWidgetProps) => {
  return (
    <TextField
      label={label.toString()}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
    ></TextField>
  );
};

export default StringFieldWidget;
