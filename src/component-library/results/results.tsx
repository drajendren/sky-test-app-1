import React, { useEffect, useState } from "react";
import { ResultContainer } from "..";
import Movie from "../../interfaces/Movie";
import Person from "../../interfaces/Person";
import TvShow from "../../interfaces/TvShow";
import styles from "./results.module.scss";

export interface ResultsProps {
  results: (Movie | TvShow | Person)[];
}
export const Results = (props: ResultsProps) => {
  const { results } = props;
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [resultsState, setResultsState] = useState(results);
  const filterResults = () => {
    if (selectedFilter === "Movies") {
      setResultsState(
        results.filter((result) => result.media_type === "movie")
      );
    } else if (selectedFilter === "Tv") {
      setResultsState(results.filter((result) => result.media_type === "tv"));
    } else if (selectedFilter === "Person") {
      setResultsState(
        results.filter((result) => result.media_type === "person")
      );
    } else {
      setResultsState(results);
    }
  };

  useEffect(() => {
    filterResults();
  }, [selectedFilter]);

  return (
    <>
      <div className={`${styles.resultRow} ${styles.filterContainer}`}>
        Filter Results:
        <select
          name="filter"
          id="resultFilter"
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className={styles.filterSelect}
        >
          <option value="Movies">Movies</option>
          <option value="Tv">TV shows</option>
          <option value="Person">People</option>
          <option value="All">All</option>
        </select>
      </div>
      <div className={styles.searchResultsContainer}>
        {resultsState.map((result) => {
          return (
            <div key={result.id} className={styles.resultRow}>
              <ResultContainer resultsObject={result} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Results;
