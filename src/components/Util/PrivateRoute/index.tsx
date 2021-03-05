import React from "react";
import { navigate } from "@reach/router";
import { DataWidgetTypes, LayoutTypes, WidgetsTypes } from "../../../types";
import DataWidgetComponent from "../../DataWidgets/DataWidgetComponent";
import LayoutComponent from "../../LayoutComponent";

interface Props {
  component: DataWidgetTypes | WidgetsTypes;
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
