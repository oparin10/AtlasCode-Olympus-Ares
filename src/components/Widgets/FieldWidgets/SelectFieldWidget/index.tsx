import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";
import { DraftStateField } from "../../../../redux/draft/types";
import { FieldComponentProps } from "../../../RootComponents/FieldWidgetComponent";
import styled from "styled-components";

const RootContainer = styled.div`
  width: 250px;
  
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
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          onChange={(e: any) => changeField(name, e.target.value)}
          value={currentFieldValue}
        >
          {currentValues?.[name].array_options?.map((value, index) => {
            return (
              <MenuItem key={index} value={value}>
                {value.toString()}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </RootContainer>
  );
};

export default SelectFieldWidget;
