import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../mocks/handlers";
import { mockFilms } from "../mocks/mockFilms";
import { server } from "../mocks/server";
import useFilmsApi from "./useFilmsApi";

describe("Given a useFilmsApi custom hook", () => {
  describe("When calling a useFilmsApi", () => {
    test("Then you will receive a list of films", async () => {
      const { result } = renderHook(() => useFilmsApi());
      const { getFilmsApi } = result.current;

      const films = await getFilmsApi();

      expect(films).toStrictEqual(mockFilms);
    });

    test("Then you will get an error 'Can't get films'", async () => {
      server.resetHandlers(...errorHandlers);

      const expectedError = new Error("Can't get films");
      const { result } = renderHook(() => useFilmsApi());
      const { getFilmsApi } = result.current;

      const error = getFilmsApi();

      expect(error).rejects.toThrowError(expectedError);
    });
  });
});
