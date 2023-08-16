import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../mocks/handlers";
import { mockFilms } from "../mocks/mockFilms";
import { server } from "../mocks/server";
import useFilmsApi from "./useFilmsApi";

describe("Given a 'getFilms' function", () => {
  describe("When it is called", () => {
    test("Then it should a list of films", async () => {
      const { result } = renderHook(() => useFilmsApi());
      const { getFilmsApi } = result.current;

      const films = await getFilmsApi();

      expect(films).toStrictEqual(mockFilms);
    });

    test("And you will get an error 'Can't get films'", async () => {
      server.resetHandlers(...errorHandlers);

      const expectedError = new Error("Can't get films");
      const { result } = renderHook(() => useFilmsApi());
      const { getFilmsApi } = result.current;

      const error = getFilmsApi();

      expect(error).rejects.toThrowError(expectedError);
    });
  });
});
