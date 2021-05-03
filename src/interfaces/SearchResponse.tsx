import Movie from "./Movie";
import Person from "./Person";
import TvShow from "./TvShow";

export interface SearchResponse {
    page: number;
    results: (TvShow | Movie | Person)[];
    total_pages: number;
    total_results: number;
  }
  export default SearchResponse;