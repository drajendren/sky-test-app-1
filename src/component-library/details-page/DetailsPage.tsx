import React from "react";
import { useLocation } from "react-router-dom";
import { MovieDetails, PersonDetails, TvDetails } from "..";
import { Movie, Person, TvShow } from "../../interfaces";

export const DetailsPage = () => {
  const state = useLocation().state as any;
  const props = state.props;
  return (
    <div>
      {props.media_type === "tv" ? (
        <TvDetails details={props as TvShow} />
      ) : props.media_type === "movie" ? (
        <MovieDetails details={props as Movie} />
      ) : props.media_type === "person" ? (
        <PersonDetails details={props as Person} />
      ) : null}
    </div>
  );
};

export default DetailsPage;
