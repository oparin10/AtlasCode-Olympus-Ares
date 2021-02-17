import { SvgIcon } from "@material-ui/core";
import React from "react";
import { IconDictonary } from "../../../dictionaries";
import { IconTypes } from "../../../types";

interface Props {
  iconType: IconTypes;
}

const IconComponent = ({ iconType, ...rest }: Props) => {
  const IconComponentDynamic = IconDictonary[iconType];

  return <SvgIcon component={IconComponentDynamic}></SvgIcon>;
};

export default IconComponent;
