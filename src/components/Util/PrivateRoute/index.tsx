import React from "react";
import { navigate } from "@reach/router";
import { WidgetsTypes } from "../../../types";
import CollectionField from "../../App/CollectionField";

interface Props {
  component: WidgetsTypes;
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

  // if (!auth && location!.pathname !== `/${basePath}/login`) {
  //   navigate(`/${basePath}/login`);
  // } else if (auth && location!.pathname == `/${basePath}/login`) {
  //   navigate(`/${basePath}/${startingPath}`);
  // }

  if (typeof Layout == null || typeof Layout == "undefined") {
    return <CollectionField widgetType={component} />;
  } else {
    return (
      <Layout>
        <CollectionField widgetType={component} />
      </Layout>
    );
  }
};

export default PrivateRoute;
