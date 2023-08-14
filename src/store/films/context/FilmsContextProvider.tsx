import { PropsWithChildren, useMemo } from "react";
import FilmsContext from "./filmsContext";
import FilmsContextStructure from "./types";

const FilmsContextProvider = ({ children }: PropsWithChildren) => {
  const filmsContextValue = useMemo(
    (): FilmsContextStructure => ({ films: [] }),
    [],
  );
  return (
    <FilmsContext.Provider value={filmsContextValue}>
      {children}
    </FilmsContext.Provider>
  );
};

export default FilmsContextProvider;
