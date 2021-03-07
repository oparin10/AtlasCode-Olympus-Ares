import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React from "react";
import { DraftStateField } from "../../../../redux/draft/types";
import { FieldComponentProps } from "../../../RootComponents/FieldWidgetComponent";
import styled from "styled-components";

const RootContainer = styled.div`
  width: 250px;

  /* .MuiSelect-root {
    padding-top: 35px;
  } */
`;

interface Props extends FieldComponentProps {}

const SelectFieldWidget = ({
  label,
  changeField,
  currentValues,
  name,
}: Props) => {
  let currentFieldValue: DraftStateField | string =
    currentValues?.[name].value ??
    currentValues?.[name].array_options?.[0] ??
    "";

  return (
    <RootContainer>
      <TextField
        fullWidth
        variant="outlined"
        select
        label={label}
        value={currentFieldValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          changeField(name, e.target.value)
        }
      >
        {currentValues?.[name].array_options?.map((option, index) => {
          return (
            <MenuItem key={index} value={option}>
              {option.toString()}
            </MenuItem>
          );
        }) || <div>placeholder children</div>}
      </TextField>
    </RootContainer>
  );
};

export default SelectFieldWidget;
