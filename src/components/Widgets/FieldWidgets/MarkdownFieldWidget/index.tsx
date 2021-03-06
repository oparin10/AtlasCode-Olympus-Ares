import React from "react";
import { FieldComponentProps } from "../../../RootComponents/FieldWidgetComponent";

interface MarkdownFieldProps extends FieldComponentProps {}

const MarkdownFieldWiget = ({
  label,
  changeField,
  currentValues,
  name,
  ...props
}: MarkdownFieldProps) => {
  return <div {...props}>markdown field widget</div>;
};

export default MarkdownFieldWiget;
