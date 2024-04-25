import { RouteProps } from "react-router-dom";
import { MainPage } from "src/pages/MainPage";
import { MovieDetailsPage } from "src/pages/MovieDetailsPage";

export enum AppRoutes {
  MAIN = "main",
  MOVIE_DETAILS = "movieDetails",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.MOVIE_DETAILS]: "/movie/:id",
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
};
