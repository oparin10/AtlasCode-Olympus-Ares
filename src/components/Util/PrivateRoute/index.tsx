import React from "react";
import { navigate, useNavigate } from "@reach/router";

interface Props {
  component: (props: any) => React.ComponentElement<any, any>;
  layout?: React.ElementType;
  location?: Location;
  isAuth: boolean;
  path: string;
  startingPath?: string;
  basePath?: string;
  default?: any;
}

const PrivateRoute: React.FC<Props> = ({
  component: Component,
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
    return <Component {...rest}></Component>;
  } else {
    return (
      <Layout>
        <Component {...rest}></Component>
      </Layout>
    );
  }
};

export default PrivateRoute;
