// import React, { useEffect } from 'react';
import React from "react";
import { Link } from "react-router-dom";
import Movie from "../../interfaces/Movie";
import Person from "../../interfaces/Person";
import TvShow from "../../interfaces/TvShow";
import styles from "./result-container.module.scss";

export interface ResultsContainerProps {
  resultsObject: Movie | TvShow | Person;
  className?: string;
}

export const ResultContainer = (props: ResultsContainerProps) => {
  const resultsObject = props.resultsObject;
  const customClassName = props.className || 'resultContainer';
  return (
    <Link
      className={styles.link}
      to={{
        pathname: `/${resultsObject.id}`,
        state: { props: resultsObject },
      }}>
      <button className={styles[customClassName]}>
        {resultsObject.media_type === 'tv'? <> {(resultsObject as TvShow).name}</>  : null
          || resultsObject.media_type === 'movie'? <>{(resultsObject as Movie).title}</> : null
          || resultsObject.media_type === 'person'? <> {(resultsObject as Person).name}</> : null
        }
      </button>
    </Link>
  );
};

export default ResultContainer;
