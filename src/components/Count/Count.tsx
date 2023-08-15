import { useContext } from "react";
import FilmsContext from "../../store/films/context/filmsContext";

const Count = (): React.ReactElement => {
  const { films } = useContext(FilmsContext);

  return <span className="count">Listando {films.length} películas</span>;
};

export default Count;
