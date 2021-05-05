import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PageTitle from "./PageTitle";

describe("<Pagetitle />", () => {
  test("it should display correct title from props", () => {
    const { baseElement } = render(<PageTitle title="test title" />);
    expect(baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <h1
            class="pageTitle"
            data-testid="pageTitle"
          >
            test title
          </h1>
        </div>
      </body>
    `);
  });
});
