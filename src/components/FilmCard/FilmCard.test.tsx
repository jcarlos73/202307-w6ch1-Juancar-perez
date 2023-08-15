import { render, screen } from "@testing-library/react";
import { mockFilms } from "../../mocks/mockFilms";
import FilmCard from "./FilmCard";

describe("Given a FilmCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'REC' inside the heading", () => {
      const expectedTitle = "REC (2007)";

      render(<FilmCard film={mockFilms[3]} />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show an image with 'Cartel de REC' as alt text", () => {
      const altText = "Cartel de REC";

      render(<FilmCard film={mockFilms[3]} />);

      const image = screen.getByAltText(altText);

      expect(image).toBeInTheDocument();
    });

    test("Then it should show a 'Dirección: Jaume B. y Paco P.' text", () => {
      const label = "director";

      render(<FilmCard film={mockFilms[3]} />);

      const director = screen.getByLabelText(label);

      expect(director).toBeInTheDocument();
    });

    test("Then it should show a button with a cross inside", () => {
      const label = "eliminar película";

      render(<FilmCard film={mockFilms[3]} />);

      const button = screen.getByRole("button", { name: label });

      expect(button).toBeInTheDocument();
    });
  });
});
