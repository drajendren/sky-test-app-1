import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { personDetails } from "../../test-data/test-data";
import ResultContainer from "./ResultContainer";
import { BrowserRouter } from "react-router-dom";

describe("<ResultContainer />", () => {
  test("it should display correct result", () => {
    const { baseElement } = render(
      <BrowserRouter>
        <ResultContainer resultsObject={personDetails} />
      </BrowserRouter>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
