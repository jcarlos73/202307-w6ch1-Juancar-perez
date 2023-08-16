import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { mockFilms } from "../../mocks/mockFilms";
import FilmsContext from "../../store/films/context/Context";
import Count from "./Count";

describe("Given a Count component", () => {
  describe("When it is rendered", () => {
    test("Then it shoud show a text 'listando 4 películas'", () => {
      const length = mockFilms.length;
      const textCounter = `Listando ${length} películas`;
      const loadFilms = vi.fn();

      render(
        <FilmsContext.Provider
          value={{ films: mockFilms, loadFilms: loadFilms }}
        >
          {<Count />}
        </FilmsContext.Provider>,
      );
      const totalFilms = screen.getByText(textCounter);

      expect(totalFilms).toBeInTheDocument();
    });
  });
});
