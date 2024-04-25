import { Suspense } from "react";
import { routeConfig } from "src/shared/config/routeConfig/routeConfig";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "src/shared/ui/PageLoader/PageLoader";

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};
