import React from "react";
import { FieldComponentProps } from "../../../RootComponents/FieldWidgetComponent";

interface Props extends FieldComponentProps {}

const CategoryListFieldWidget = ({
  label,
  changeField,
  currentValues,
  name,
}: Props) => {
  return <div>this is a list with categories in it</div>;
};

export default CategoryListFieldWidget;
