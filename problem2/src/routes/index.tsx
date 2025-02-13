import HomePage from "#/pages/home";
import { useRoutes } from "react-router-dom";
import { ROUTES } from "#/src/constants";

const Routes = () => {
  const routes = useRoutes([
    {
      element: <HomePage />,
      path: ROUTES.HOME,
    },
    {
      element: <HomePage />,
      path: "/*",
    },
  ]);

  return routes;
};

export default Routes;
