import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { PageLoader } from "src/shared/ui/PageLoader/PageLoader";
import {
  MovieList,
  MovieDetailsCard,
  MovieLitsType,
  fetchMovieDetails,
  fetchRecommendedMovies,
} from "src/entities/Movie";
import { ErrorPage } from "src/pages/ErrorPage";
import { useScrollToTop } from "src/shared/lib/classNames/useScrollToTop";

const MovieDetailsPage = () => {
  const { id } = useParams();
  useScrollToTop([id]);
  const movieDetailsQuery = useQuery(
    ["movie", id],
    () => fetchMovieDetails(Number(id)),
    {
      refetchOnWindowFocus: false,
    }
  );
  const recommendedMoviesQuery = useQuery(
    ["moviesRecommended", id],
    () => fetchRecommendedMovies(Number(id)),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (movieDetailsQuery.isError) {
    return <ErrorPage />;
  }

  if (movieDetailsQuery.isLoading || recommendedMoviesQuery.isLoading) {
    return <PageLoader />;
  }

  if (movieDetailsQuery.isSuccess && recommendedMoviesQuery.isSuccess) {
    const movies = recommendedMoviesQuery.data.results as MovieLitsType[];
    return (
      <div className="container">
        <MovieDetailsCard movie={movieDetailsQuery.data} />
        <h2>Похожие фильмы</h2>
        <MovieList movies={movies.slice(0, 5)} />
      </div>
    );
  }
};

export default MovieDetailsPage;
