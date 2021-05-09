import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";
import config from "./config";
import { SearchResponse } from "./interfaces/SearchResponse";
import { Route, Switch, useHistory } from "react-router-dom";
import {
  DetailsPage,
  PageTitle,
  Results,
  SearchBar,
} from "./component-library";

function App() {
  const [searchResponse, setSearchResponse] = useState({} as SearchResponse);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();
  const [searchSuggestionResponse, setSearchSuggestionResponse] = useState(
    {} as SearchResponse
  );

  const multiSearchApi = useCallback(() => {
    axios
      .get<SearchResponse>(
        `${config.baseUrl}search/multi?api_key=${
          config.apiKey
        }&language=en-US&query=${encodeURIComponent(
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
  },[error, loading, searchResponse, searchValue]);

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
  }, [searchValue, multiSearchApi]);

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
            <div data-testid="searchError">{error}</div>
          ) : null}
        </Route>
        <Route path="/:id" render={() => <DetailsPage />}></Route>
      </Switch>
    </div>
  );
}

export default App;
