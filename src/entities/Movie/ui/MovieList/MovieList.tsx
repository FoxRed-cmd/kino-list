import { classNames } from "src/shared/lib/classNames/classNames";
import { MovieLitsType } from "../../model/types/MovieListType";
import cls from "./MovieList.module.scss";
import { MovieCard } from "../MovieCard/MovieCard";

interface MovieListProps {
  className?: string;
  movies: MovieLitsType[];
}

export const MovieList = (props: MovieListProps) => {
  const { movies, className = "" } = props;

  return (
    <div className={classNames(cls.MovieList, [className])}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
