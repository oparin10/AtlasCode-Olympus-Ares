import React from "react";
import { FieldComponentProps } from "../../../../types";

interface MarkdownFieldProps extends FieldComponentProps {}

const MarkdownFieldWiget = ({
  label,
  onChange,
  value,
  error = false,
  ...props
}: MarkdownFieldProps) => {
  return <div {...props}>markdown field widget</div>;
};

export default MarkdownFieldWiget;
