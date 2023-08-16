import { createContext } from "react";
import FilmsContextStructure from "./types";

const FilmsContext = createContext<FilmsContextStructure>(
  {} as FilmsContextStructure,
);

export default FilmsContext;
