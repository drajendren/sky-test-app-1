import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {
  searchWithLessThanFiveCharactersData,
  searchWithResultsData,
} from "../../test-data/test-data";
import SearchBar from "./SearchBar";
import { BrowserRouter } from "react-router-dom";
import axios, { AxiosStatic } from "axios";
interface AxiosMock extends AxiosStatic {
  mockResolvedValue: Function;
  mockRejectedValue: Function;
}
jest.mock("axios");
const mockAxios = axios as AxiosMock;
describe("<SearchBar />", () => {
  test("It should render correctly", () => {
    const { baseElement } = render(
      <BrowserRouter>
        <SearchBar {...searchWithResultsData} />
      </BrowserRouter>
    );
    expect(baseElement).toMatchSnapshot();
  });
  test("When there are less than 5 characters in search, should be no suggestions displayed", () => {
    const { queryByTestId } = render(
      <BrowserRouter>
        <SearchBar {...searchWithLessThanFiveCharactersData} />
      </BrowserRouter>
    );
    const suggestedSearchResult = queryByTestId("search_suggestion_0");

    expect(suggestedSearchResult).toBeNull();
  });
  test("When there are more than 5 characters in search, should be no suggestions displayed", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <SearchBar {...searchWithResultsData} />
      </BrowserRouter>
    );
    const suggestedSearchResult = getByTestId("search_suggestion_0");
    expect(suggestedSearchResult).toBeTruthy();
  });
});
