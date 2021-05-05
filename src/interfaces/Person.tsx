import Movie from "./Movie";
import TvShow from "./TvShow";

export interface Person {
  profile_path: string;
  adult?: boolean;
  id?: number;
  media_type: string;
  known_for?: (TvShow | Movie)[];
  popularity?: number;
  name: string;
}
export default Person;
