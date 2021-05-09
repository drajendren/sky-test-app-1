import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { resultData } from "../../test-data/test-data";
import Results from "./Results";

describe("<Results />", () => {
  test("it should display correct results", () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Results results={resultData} />
      </BrowserRouter>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
