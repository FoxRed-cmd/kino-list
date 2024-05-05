import { RouteProps } from "react-router-dom";
import { MainPage } from "src/pages/MainPage";
import { MovieDetailsPage } from "src/pages/MovieDetailsPage";
import { NotFoundPage } from "src/pages/NotFoundPage";

export enum AppRoutes {
  MAIN = "main",
  MOVIE_DETAILS = "movieDetails",
  NOT_FOUND = "notFound",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.MOVIE_DETAILS]: "/movie/:id",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.MOVIE_DETAILS]: {
    path: RoutePath.movieDetails,
    element: <MovieDetailsPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.notFound,
    element: <NotFoundPage />,
  },
};
