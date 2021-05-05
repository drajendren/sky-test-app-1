import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { movieDetails } from "../../test-data/test-data";
import { MovieDetails } from "..";

describe("<MovieDetails />", () => {
  test("It should display movie details", () => {
    const { baseElement } = render(<MovieDetails details={movieDetails} />);
    expect(baseElement).toMatchSnapshot();
  });
});
