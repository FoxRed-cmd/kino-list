import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../model/services/fetchMovieDetails";
import { PageLoader } from "src/shared/ui/PageLoader/PageLoader";
import { MovieDetailsCard } from "src/widgets/MovieDetailsCard";
import { MovieList, MovieLitsType } from "src/widgets/MovieList";
import { fetchRecommendedMovies } from "../model/services/fetchRecommendedMovies";
import { ErrorPage } from "src/pages/ErrorPage";

const MovieDetailsPage = () => {
  const { id } = useParams();
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
