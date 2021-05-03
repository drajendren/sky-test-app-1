import Movie from "../interfaces/Movie";
import Person from "../interfaces/Person";
import TvShow from "../interfaces/TvShow";

export const getTitles = (results: (Movie | TvShow | Person)[]) => {
    let titlesArray: string[] = [];

    results.forEach((result) => {
        if(result.media_type === 'movie') {
            titlesArray.push((result as Movie).title);
        } else if (result.media_type === 'tv') {
            titlesArray.push((result as TvShow).name);
        } else {
            titlesArray.push((result as Person).name);
        }
    })

    return titlesArray;
  };
  export default getTitles;
  