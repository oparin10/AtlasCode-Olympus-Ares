import { SvgIcon } from "@material-ui/core";
import React from "react";
import { IconDictonary } from "../../../dictionaries";
import { IconTypes } from "../../../types";

interface Props {
  iconType: IconTypes;
  height?: string;
  width?: string;
  clickable?: boolean;
}

const IconComponent = ({
  iconType,
  width,
  height,
  clickable,
  ...rest
}: Props) => {
  const IconComponentDynamic = IconDictonary[iconType as IconTypes];

  return (
    <SvgIcon
      style={{
        width: `${width ? width : "1em"}`,
        height: `${height ? height : "1em"}`,
        cursor: `${clickable ? "pointer" : "initial"}`,
      }}
      {...rest}
      component={IconComponentDynamic}
    ></SvgIcon>
  );
};

export default IconComponent;
