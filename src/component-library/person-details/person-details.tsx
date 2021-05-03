// import React, { useEffect } from 'react';
import React from "react";
import Person from "../../interfaces/Person";
import styles from "./person-details.module.scss";

export interface PersonDetailsProps {
  details: Person;
}
export const PersonDetails = (props: PersonDetailsProps) => {
  const { details } = props;
  console.log(details.known_for);
  return (
    <>
      <h3>Person Details</h3>
      <div>Name: {details.name}</div>
      <h3>Known For</h3>
      <div className={styles.posterContainer}>
        {details.known_for?.map((movieOrShow, index) => {
          // <div>{movieOrShow.poster_path}</div>
          return (
              <img
                key={`poster_${index}`}
                src={`https://image.tmdb.org/t/p/w500${movieOrShow.poster_path}`}
                height="200px"
                alt="#"
              />
          );
        })}
      </div>
      <h3>Profile</h3>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${details.profile_path}`}
          height="100px"
          alt="#"
        />
      </div>
    </>
  );
};

export default PersonDetails;
