import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PersonDetails from "./PersonDetails";
import { personDetails } from "../../test-data/test-data";

describe("<PersonDetails />", () => {
  test("it should display correct person details", () => {
    const { baseElement } = render(<PersonDetails details={personDetails} />);
    expect(baseElement).toMatchSnapshot();
  });
});
