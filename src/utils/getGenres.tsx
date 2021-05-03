export const getGenres = (genreArray?: number[]) => {
  let genres: string[] = [];
  genreArray?.forEach((genre) => {
    switch (genre) {
      case 28:
        genres.push("Action");
        break;
      case 12:
        genres.push("Adventure");
        break;
      case 16:
        genres.push("Animation");
        break;
      case 35:
        genres.push("Comedy");
        break;
      case 80:
        genres.push("Crime");
        break;
      case 99:
        genres.push("Documentary");
        break;
      case 18:
        genres.push("Drama");
        break;
      case 10751:
        genres.push("Family");
        break;
      case 14:
        genres.push("Fantasy");
        break;
      case 36:
        genres.push("History");
        break;
      case 27:
        genres.push("Horror");
        break;
      case 10402:
        genres.push("Music");
        break;
      case 9648:
        genres.push("Mystery");
        break;
      case 10749:
        genres.push("Romance");
        break;
      case 878:
        genres.push("Science Fiction");
        break;
      case 53:
        genres.push("Thriller");
        break;
      case 10770:
        genres.push("TV Movie");
        break;
      case 10752:
        genres.push("War");
        break;
      case 37:
        genres.push("Western");
        break;
      default:
        break;
    }
  });
  return genres;
};
export default getGenres;
