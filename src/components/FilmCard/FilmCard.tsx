import { X } from "react-feather";
import Film from "../../types";
import Button from "../Button/Button";
import "./FilmCard.css";
interface FilmCardProps {
  film: Film;
}

const FilmCard = ({
  film: { title, poster, director, year },
}: FilmCardProps): React.ReactElement => {
  return (
    <article className="film">
      <h3>
        {title} ({year})
      </h3>
      <img
        className="film__poster"
        src={poster}
        alt={`Cartel de ${title}`}
        width="300"
        height="406"
      />
      <span aria-label="director">Dirección: {director}</span>
      <Button className="film__button">
        <X aria-label="eliminar película" />
      </Button>
    </article>
  );
};

export default FilmCard;
