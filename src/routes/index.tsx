import { type RoutesType } from "types/routes";
import paths from "./paths";
import RootPage from "pages/RootPage";

const routes: RoutesType[] = [
  {
    path: paths.root,
    element: <RootPage />,
  },
];

export default routes;
