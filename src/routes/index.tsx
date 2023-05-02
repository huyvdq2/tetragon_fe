import { type RoutesType } from "types/routes.type";
import paths from "./paths";
import React from "react";

const RootPage = React.lazy(async () => await import("pages/RootPage"));
const LogPage = React.lazy(async () => await import("pages/LogPage"));

const routes: RoutesType[] = [
  {
    path: paths.root,
    element: <RootPage />,
  },
  {
    path: paths.log,
    element: <LogPage />,
  },
];

export default routes;
