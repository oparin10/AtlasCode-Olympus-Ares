import { navigate, useNavigate } from "@reach/router";
import React from "react";

interface Props {
  default?: any;
  basePath?: string;
  startingPath?: string;
}

const NotFoundRoute = ({
  basePath = "admin",
  startingPath = "dashboard",
}: Props) => {
  const startingRoute: string = `/${basePath}/${startingPath}`;

  React.useEffect(() => {
    setTimeout(() => {
      navigate(startingRoute);
    }, 5000);
  }, []);

  return (
    <div>
      This route does not exists, route not found. You will be redirect in 5
      seconds
    </div>
  );
};

export default NotFoundRoute;
