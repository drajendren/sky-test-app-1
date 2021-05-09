import React from "react";
import { TvShow } from "../../interfaces";
import getGenres from "../../utils/getGenres";
import styles from "./tv-details.module.scss";

export interface TvDetailsProps {
  details: TvShow;
}
export const TvDetails = (props: TvDetailsProps) => {
  const { details } = props;
  const genres = getGenres(details.genre_ids).join(", ");
  return (
    <>
      <h2>Tv show Details</h2>
      <h3>Name</h3>
      <div>{details.name}</div>
      <h3>Genre</h3>
      <div>{genres}</div>
      <h3>Overview</h3>
      <div className={styles.overview}> {details.overview}</div>
      <h3>First Aired</h3>
      <div>{details.first_air_date}</div>
      <img
        src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
        height="200px"
        alt=""
      />
    </>
  );
};

export default TvDetails;
