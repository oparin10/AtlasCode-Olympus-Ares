import React from "react";
import { navigate } from "@reach/router";
import { DataWidgetTypes, WidgetsTypes } from "../../../types";
import CollectionField from "../../App/CollectionField";
import DataWidgetComponent from "../../DataWidgets/DataWidgetComponent";

interface Props {
  component: DataWidgetTypes | WidgetsTypes;
  layout?: React.ElementType;
  location?: Location;
  isAuth: boolean;
  path: string;
  startingPath?: string;
  basePath?: string;
  default?: any;
}

const PrivateRoute: React.FC<Props> = ({
  component = "string",
  layout: Layout,
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

  if (typeof Layout == null || typeof Layout == "undefined") {
    return <DataWidgetComponent widgetType={component as DataWidgetTypes} />;
  } else {
    return (
      <Layout>
        <DataWidgetComponent widgetType={component as DataWidgetTypes} />
      </Layout>
    );
  }
};

export default PrivateRoute;
