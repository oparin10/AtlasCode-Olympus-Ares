import { Box, TextField } from "@material-ui/core";
import React from "react";
import { DraftStateField } from "../../../../redux/draft/types";
import { FieldComponentProps } from "../../../RootComponents/FieldWidgetComponent";

const TextFieldWidget = ({
  changeField,
  currentValues,
  label,
  name,
}: FieldComponentProps) => {
  let currentFieldValue: DraftStateField | string =
    currentValues?.[name].value ?? "";

    

  return (
    <Box width={{ xs: "300px", md: "500px" }}>
      <TextField
        multiline
        fullWidth
        rows={6}
        variant="outlined"
        label={label.toString()}
        value={currentFieldValue}
        onChange={(e: any) => changeField(name, e.target.value)}
      ></TextField>
    </Box>
  );
};

export default TextFieldWidget;
