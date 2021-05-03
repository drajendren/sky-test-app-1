// import React, { useEffect } from 'react';
import React from "react";
import { useLocation } from "react-router-dom";
import Movie from "../../interfaces/Movie";
import Person from "../../interfaces/Person";
import TvShow from "../../interfaces/TvShow";
import MovieDetails from "../movie-details/movie-details";
import PersonDetails from "../person-details/person-details";
import TvDetails from "../tv-details/tv-details";

export const DetailsPage = () => {
const state= useLocation().state as any;
const props = state.props;
// const test = props.location.state;
  return (
    <div>
    {props.media_type === 'tv' ? <TvDetails details={props as TvShow} /> : 
    props.media_type === 'movie' ? <MovieDetails details={props as Movie} /> :
    props.media_type === 'person' ? <PersonDetails details={props as Person} /> :
    null}
    </div>
  );
};

export default DetailsPage;
