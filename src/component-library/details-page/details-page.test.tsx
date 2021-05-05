import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DetailsPage from "./DetailsPage";

const detailsPageData = {props: {
    backdrop_path: "/iIQKA17YHJUmGYRpXmP0KXaxq99.jpg",
    first_air_date: "1996-08-26",
    genre_ids: [
      10759,
      16
    ],
    id: 1168,
    media_type: "tv",
    name: "The Real Adventures of Jonny Quest",
    origin_country: [
      "US"
    ],
    original_language: "en",
    original_name: "The Real Adventures of Jonny Quest",
    overview: "The Real Adventures of Jonny Quest is an American animated action-adventure television series.",
    popularity: 23.65,
    poster_path: "/vx8KdVNOpHVBR0x30shg5kcGnd7.jpg",
    vote_average: 7.1,
    vote_count: 26
  }};
  
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
      pathname: "localhost:3000/123",
      state: detailsPageData
    })
  }));
describe("<DetailsPage />", () => {
    
  test("it should display correct details page from state", () => {
    const { baseElement } = render(<DetailsPage />);
    expect(baseElement).toMatchSnapshot();
  });
});
