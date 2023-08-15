import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FilmsListPage from "../../pages/FilmsListPage/FilmsListPage";
import FilmsContextProvider from "../../store/films/context/FilmsContextProvider";

describe("Given a FilmList component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a list of films of cards", async () => {
      const textToShow = "Viaje a Darjeeling (2007)";

      render(
        <FilmsContextProvider>
          <BrowserRouter>
            <FilmsListPage />
          </BrowserRouter>
        </FilmsContextProvider>,
      );

      const firstFilm = await waitFor(() =>
        screen.getByRole("heading", {
          name: textToShow,
        }),
      );

      expect(firstFilm).toBeInTheDocument();
    });
  });
});
