import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PersonDetails from "./PersonDetails";
import { personDetailsData } from "../../test-data/test-data";

describe("<PersonDetails />", () => {
  test("it should display correct person details", () => {
    const { baseElement } = render(<PersonDetails details={personDetailsData} />);
    expect(baseElement).toMatchSnapshot();
  });
});
