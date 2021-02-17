import React from "react";
import { AdminItem, RouterItem } from "../../../types";
import { Router, navigate } from "@reach/router";
import PrivateRoute from "../../Util/PrivateRoute";
import StringWidget from "../../Widgets/StringWidget";
import Login from "../Login";
import NotFoundRoute from "../../Util/NotFoundRoute";

interface Props {
  basePath?: string;
  routes: Array<AdminItem>;
  startingPath?: string;
  layoutComponent?: (props: any) => JSX.Element;
}

const RouterCore = ({
  basePath = "admin",
  routes = [],
  startingPath = "dashboard",
  layoutComponent,
}: Props) => {
  React.useEffect(() => {
    if (
      window.location.pathname == `/${basePath}/` ||
      window.location.pathname == `/${basePath}` ||
      window.location.pathname == `/`
    ) {
      navigate(`/${basePath}/login`);
    }
  });

  const testAuth: boolean = true;

  return (
    <Router>
      <PrivateRoute
        isAuth={testAuth}
        component={"login"}
        path={"/admin/login"}
        basePath={basePath}
        startingPath={startingPath}
      ></PrivateRoute>

      {routes.map((routerItem: AdminItem, index: number) => {
        return (
          <PrivateRoute
            key={index}
            isAuth={testAuth}
            layout={layoutComponent}
            component={routerItem.widget}
            path={`/${basePath}/${routerItem.path}`}
            basePath={basePath}
            startingPath={startingPath}
          />
        );
      })}

      {/* <NotFoundRoute default /> */}
    </Router>
  );
};

export default RouterCore;
