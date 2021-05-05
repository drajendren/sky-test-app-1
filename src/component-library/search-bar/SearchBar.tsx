import React from "react";
import { ResultContainer } from "..";
import SearchResponse from "../../interfaces/SearchResponse";
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
          data-testid="searchButton"
          className={styles.searchButton}
          onClick={handleClick}
        >
          Search
        </button>
      </div>
      {searchSuggestion.results ? (
        <>
          <h4 data-testid="suggestedSearch">Suggested searches</h4>
          <div className={styles.suggestionsContainer}>
            {searchSuggestion?.results?.map((searchSuggestion, index) => {
              return (
                <div
                  data-testid={`search_suggestion_${index}`}
                  key={index}
                  className={styles.resultRow}
                >
                  <ResultContainer
                    className={"searchSuggestions"}
                    resultsObject={searchSuggestion}
                  />
                </div>
              );
            })}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default SearchBar;
