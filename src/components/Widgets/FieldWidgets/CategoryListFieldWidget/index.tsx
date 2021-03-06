import React from "react";
import { FieldComponentProps } from "../../../../types";

interface Props extends FieldComponentProps {}

const CategoryListFieldWidget = ({ label, onChange, error, value }: Props) => {
  return <div>this is a list with categories in it</div>;
};

export default CategoryListFieldWidget;
