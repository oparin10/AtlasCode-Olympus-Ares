import React from "react";
import { DataWidgetFunctionalComponentProps } from "../../../types";

interface Props extends DataWidgetFunctionalComponentProps {}

const OrderedList = ({ activeCollection, addNew }: Props) => {
  return <div>Ordered list component</div>;
};

export default OrderedList;
