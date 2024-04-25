import { Card } from "src/shared/ui/Card/Card";
import { MovieLitsType } from "../../MovieList";
import { CardImage } from "src/shared/ui/CardImage/CardImage";
import { IMAGE_BASE_URL } from "src/shared/api/api";
import { Row } from "src/shared/ui/Row/Row";
import { Column } from "src/shared/ui/Column/Column";
import { CardText } from "src/shared/ui/CardText/CardText";
import cls from "./MovieDetailsCard.module.scss";

interface MovieDetailsCardProps {
  movie: MovieLitsType;
}

export const MovieDetailsCard = ({ movie }: MovieDetailsCardProps) => {
  return (
    <div className={cls.MovieDetailsCard}>
      <Card width={"100%"} height={"100%"} alignItems="start">
        <Row>
          <Column>
            <CardImage
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt="Постер фильма"
              width={220}
              height={"auto"}
            />
          </Column>
          <Column>
            <Row>
              <h1>
                {movie.title} {movie.vote_average.toFixed(1)}
              </h1>
            </Row>
            <Column>
              <div>Жанр: {movie.genres.map((genre) => genre.name + " ")}</div>
              <div>Дата выхода: {movie.release_date}</div>
              <div>Длительность: {movie.runtime} мин.</div>
              <div>Популярность: {movie.popularity}</div>
            </Column>
            <Row>
              <CardText textAlign={"left"}>{movie.overview}</CardText>
            </Row>
          </Column>
        </Row>
      </Card>
    </div>
  );
};
