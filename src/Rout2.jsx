// import React from "react";
import { useRoutes } from "react-router-dom";
import { RouteConfig } from "./Routes/RouteConfig";

const Rout2 = () => {
  let routing = useRoutes(RouteConfig);
  return routing;
};

export default Rout2;
