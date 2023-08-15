import { X } from "react-feather";
import Film from "../../types";
import Button from "../Button/Button";
import "./FilmCard.css";
interface FilmCardProps {
  film: Film;
}

const FilmCard = ({ film }: FilmCardProps): React.ReactElement => {
  return (
    <article className="film">
      <h3>
        {film.title} ({film.year})
      </h3>
      <img
        className="film__poster"
        src={film.poster}
        alt={`Cartel de ${film.title}`}
        width="300"
        height="406"
      />
      Dirección: {film.director}
      <Button className="film__button">
        <X aria-label="eliminar película" />
      </Button>
    </article>
  );
};

export default FilmCard;
