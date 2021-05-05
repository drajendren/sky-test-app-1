import React from "react";
import Movie from "../../interfaces/Movie";
import getGenres from "../../utils/getGenres";
import styles from "./movie-details.module.scss";

export interface MovieDetailsProps {
  details: Movie;
}
export const MovieDetails = (props: MovieDetailsProps) => {
  const { details } = props;

  const genres = getGenres(details.genre_ids).join(", ");
  return (
    <>
      <h2>Movie Details</h2>
      <h3>Name</h3>
      <div>{details.title}</div>
      <h3>Genre</h3>
      <div>{genres}</div>
      <h3>Overview</h3>
      <div className={styles.overview}> {details.overview}</div>
      <h3>Release Date</h3>
      <div>{details.release_date}</div>
      <img
        src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
        height="200px"
        alt=""
      />
    </>
  );
};

export default MovieDetails;
