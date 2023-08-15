import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FilmsContextProvider from "../../store/films/context/FilmsContextProvider";
import FilmsListPage from "./FilmsListPage";

describe("Given a FilmsListPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Listado de películas' inside a heading", () => {
      render(
        <FilmsContextProvider>
          <BrowserRouter>
            <FilmsListPage />
          </BrowserRouter>
        </FilmsContextProvider>,
      );

      const headerText = screen.getByRole("heading", {
        name: "Listado de películas",
      });

      expect(headerText).toBeInTheDocument();
    });
  });
});
