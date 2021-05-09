import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { personDetailsData } from "../../test-data/test-data";
import ResultContainer from "./ResultContainer";
import { BrowserRouter } from "react-router-dom";

describe("<ResultContainer />", () => {
  test("it should display correct result", () => {
    const { baseElement } = render(
      <BrowserRouter>
        <ResultContainer resultsObject={personDetailsData} />
      </BrowserRouter>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
