import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.scss";
import DetailsPage from "./component-library/details-page/details-page";
import PageTitle from "./component-library/page-title/page-title";
import Results from "./component-library/results/results";
import SearchBar from "./component-library/search-bar/search-bar";
import { SearchResponse } from "./interfaces/SearchResponse";

function App() {
  const [searchResponse, setSearchResponse] = useState({} as SearchResponse);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();
  //Autosuggest
  const [searchSuggestionResponse, setSearchSuggestionResponse] = useState({} as SearchResponse);


  const multiSearchApi = () => {
    axios
      .get<SearchResponse>(
        `https://api.themoviedb.org/3/search/multi?api_key=60208f0804976a80f0b8a726de9c6147&language=en-US&query=${encodeURIComponent(
          searchValue
        )}&page=1&include_adult=true`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setSearchResponse(response.data as SearchResponse);
        setLoading(false);
      })
      .catch((ex) => {
        const error = ex.response.data.errors[0];
        setError(error);
        setLoading(false);
      });
    return { searchResponse, loading, error };
  };

  const onSearch = () => {
    history.push("/home");
    setError("");
    setLoading(true);
    return multiSearchApi();
  };

  useEffect(() => {
    if (searchValue.length > 4) {
      const searchSuggestion = multiSearchApi();
      setSearchSuggestionResponse(searchSuggestion.searchResponse);
    } else {
      setSearchSuggestionResponse({} as SearchResponse);
    }
  }, [
    searchValue]);

  return (
    <div className="App">
      <PageTitle title="Movie DB search" />
      <SearchBar
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        handleClick={onSearch}
        searchSuggestion={searchSuggestionResponse}
      />
      <Switch>
        <Route path="/home">
          {loading ? (
            <div>Loading...</div>
          ) : searchResponse.total_results > 0 && !error ? (
            <Results results={searchResponse.results} />
          ) : error ? (
            <div>{error}</div>
          ) : null}
          {/* <DetailsPage id={result.id} /> */}
        </Route>
        <Route path="/:id" render={() => <DetailsPage />}></Route>
        {/* <DetailsPage /> */}
        {/* </Route> */}
      </Switch>
    </div>
  );
}

export default App;
