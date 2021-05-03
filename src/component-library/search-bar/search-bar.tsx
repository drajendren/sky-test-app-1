// import React, { useEffect } from 'react';
import React from "react";
import SearchResponse from "../../interfaces/SearchResponse";
import ResultContainer from "../result-container/result-container";
import styles from "./search-bar.module.scss";
export interface SearchBarProps {
  searchSuggestion: SearchResponse;
  searchValue: string;
  setSearchValue: any;
  handleClick: (e: React.SyntheticEvent) => void;
}

export const SearchBar = (props: SearchBarProps) => {
  const { searchValue, setSearchValue, handleClick, searchSuggestion } = props;
  const onHandleChange = (e: any) => {
    setSearchValue(e.target.value);
  };
  const handleEnter = (event: any) => {
    if (event.key === "Enter") {
      handleClick(event);
    }
  };

  return (
    <div>
      <div className={styles.searchBarContainer}>
        <div className={styles.autoComplete}>
          <input
            autoFocus
            className={styles.searchInputBox}
            type="text"
            value={searchValue}
            onChange={onHandleChange}
            onKeyDown={handleEnter}
          />
        </div>
        <button
          data-testid="searchBar"
          className={styles.searchButton}
          onClick={handleClick}
        >
          Search
        </button>
      </div>
      {searchSuggestion.results ? (
        <>
        <h4>Suggested searches</h4>
        <div className={styles.suggestionsContainer}>
          {searchSuggestion?.results?.map((searchSuggestion, index) => {
            return (
              <div key={index} className={styles.resultRow}>
                <ResultContainer className={'searchSuggestions'} resultsObject={searchSuggestion} />
              </div>
            );
          })}
        </div>
      </>
      ) : (
        null
      )}
    </div>
  );
};

export default SearchBar;
