import { useNavigate } from "react-router-dom";
import { IMAGE_BASE_URL } from "src/shared/api/api";
import { Card } from "src/shared/ui/Card/Card";
import { CardImage } from "src/shared/ui/CardImage/CardImage";
import { CardText } from "src/shared/ui/CardText/CardText";
import { CardTitle } from "src/shared/ui/CardTitle/CardTitle";
import { MovieLitsType } from "src/widgets/MovieList";
import cls from "./MovieCard.module.scss";

interface MovieCardProps {
  movie: MovieLitsType;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const navigate = useNavigate();

  const openDetailsPage = () => {
    navigate("/movie/" + movie.id);
  };

  return (
    <div className={cls.MovieCard}>
      <Card key={movie.id} onClick={openDetailsPage}>
        <CardImage
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt="Постер фильма"
        />
        <CardTitle>{movie.title}</CardTitle>
        <CardText>
          <p>Рейтинг: {movie.vote_average.toFixed(1)}</p>
        </CardText>
      </Card>
    </div>
  );
};
