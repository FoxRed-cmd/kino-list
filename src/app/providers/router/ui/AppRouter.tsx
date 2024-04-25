import { Suspense } from "react";
import { routeConfig } from "src/shared/config/routeConfig/routeConfig";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};
