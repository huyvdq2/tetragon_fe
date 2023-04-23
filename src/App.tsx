import { CssBaseline, ThemeProvider } from "@mui/material";
import AuthGuard from "components/AuthGuard";
import MainLayout from "layouts/MainLayout";
import Page404 from "pages/ErrorPages/Page404";
import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "routes";
import theme from "theme";
import { type RoutesType } from "types/routes";

function App() {
  const renderRoutes = React.useCallback(
    (routes: RoutesType[]) =>
      routes.map((route) => {
        const Layout = (route.layout ?? MainLayout) as React.ElementType;
        const Guard = (route.guard ?? AuthGuard) as React.ElementType;

        return route.children != null ? (
          <Route path={route.path} element={route.element}>
            {renderRoutes(route.children)}
          </Route>
        ) : (
          <Route
            key={"route" + route.path}
            path={route.path}
            element={
              <Guard>
                <Layout>{route.element}</Layout>
              </Guard>
            }
          />
        );
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {renderRoutes(routes)}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
