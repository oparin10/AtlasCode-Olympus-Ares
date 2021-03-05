import React from "react";
import { navigate } from "@reach/router";
import { DataWidgetTypes, LayoutTypes } from "../../../types";
import DataWidgetComponent from "../../RootComponents/DataWidgetComponent";
import LayoutComponent from "../../RootComponents/LayoutComponent";

interface Props {
  component: DataWidgetTypes;
  layout: LayoutTypes;
  location?: Location;
  isAuth: boolean;
  path: string;
  startingPath?: string;
  basePath?: string;
  default?: any;
}

const PrivateRoute: React.FC<Props> = ({
  component = "string",
  layout,
  location,
  isAuth,
  path,
  startingPath = "dashboard",
  basePath = "admin",
  ...rest
}) => {
  const auth = isAuth;

  if (!auth && location!.pathname !== `/${basePath}/login`) {
    navigate(`/${basePath}/login`);
  } else if (auth && location!.pathname == `/${basePath}/login`) {
    navigate(`/${basePath}/${startingPath}`);
  }

  return (
    <LayoutComponent layoutType={layout}>
      <DataWidgetComponent widgetType={component as DataWidgetTypes} />
    </LayoutComponent>
  );
};

export default PrivateRoute;
