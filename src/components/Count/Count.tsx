import { useContext } from "react";
import FilmsContext from "../../store/films/context/Context";

const Count = (): React.ReactElement => {
  const { films } = useContext(FilmsContext);

  return (
    <span className="count" aria-label={`Listando ${films.length} películas`}>
      Listando {films.length} películas
    </span>
  );
};

export default Count;
