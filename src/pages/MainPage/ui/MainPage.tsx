import { MovieList, MovieLitsType } from "src/widgets/MovieList";
import { fetchTopRatedMovies } from "../model/services/fetchTopRatedMovies";
import { useQuery } from "react-query";
import { useState } from "react";
import { Pagination } from "src/widgets/Pagination";
import { PageLoader } from "src/shared/ui/PageLoader/PageLoader";
import { ErrorPage } from "src/pages/ErrorPage";

const MainPage = () => {
  const [page, setPage] = useState(
    Number(localStorage.getItem("lastPage") ?? 1)
  );

  const onPageChange = (page: number) => {
    setPage(page);
    localStorage.setItem("lastPage", page.toString());
  };

  const { data, isLoading, isSuccess, isError } = useQuery(
    ["topMovies", page],
    () => fetchTopRatedMovies("ru-RU", page),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isError) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <PageLoader />;
  }

  if (isSuccess) {
    const movies = data.results as MovieLitsType[];
    return (
      <div className="container">
        <h1>Лучшие фильмы</h1>
        <Pagination
          page={page}
          totalPages={data.total_pages}
          onPageChange={onPageChange}
        />
        <MovieList movies={movies} />
        <Pagination
          page={page}
          totalPages={data.total_pages}
          onPageChange={onPageChange}
        />
      </div>
    );
  }
};

export default MainPage;
