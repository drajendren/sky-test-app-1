import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { detailsPageData } from "../../test-data/test-data";
import TvDetails from "./TvDetails";

describe("<TvDetails />", () => {
  test("It should display tv show details", () => {
    const { baseElement } = render(
      <TvDetails details={detailsPageData.props} />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
