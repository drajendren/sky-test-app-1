import Movie from "../interfaces/Movie";
import TvShow from "../interfaces/TvShow";

export const personDetailsData = {
  profile_path: "/tTWRomgIMOoIB3CJLPlVbqSawEm.jpg",
  adult: true,
  id: 123,
  media_type: "person",
  known_for: [
    {
      adult: false,
      backdrop_path: "/jOh79POQu4hyVIseUxdQxTW7vOf.jpg",
      genre_ids: [12, 14, 28],
      id: 22,
      media_type: "movie",
      original_language: "en",
      original_title: "Pirates of the Caribbean: The Curse of the Black Pearl",
      overview:
        "Jack Sparrow, a freewheeling 18th-century pirate, quarrels with a rival pirate bent on pillaging Port Royal. When the governor's daughter is kidnapped, Sparrow decides to help the girl's love save her.",
      poster_path: "/z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg",
      release_date: "2003-07-09",
      title: "Pirates of the Caribbean: The Curse of the Black Pearl",
      video: false,
      vote_average: 7.7,
      vote_count: 15917,
    },
    {
      adult: false,
      backdrop_path: "/8Qsr8pvDL3s1jNZQ4HK1d1Xlvnh.jpg",
      genre_ids: [12, 14],
      id: 259316,
      media_type: "movie",
      original_language: "en",
      original_title: "Fantastic Beasts and Where to Find Them",
      overview:
        "In 1926, Newt Scamander arrives at the Magical Congress of the United States of America with a magically expanded briefcase, which houses a number of dangerous creatures and their habitats. When the creatures escape from the briefcase, it sends the American wizarding authorities after Newt, and threatens to strain even further the state of magical and non-magical relations.",
      poster_path: "/h6NYfVUyM6CDURtZSnBpz647Ldd.jpg",
      release_date: "2016-11-16",
      title: "Fantastic Beasts and Where to Find Them",
      video: false,
      vote_average: 7.4,
      vote_count: 15311,
    },
  ],
  popularity: 124922,
  name: "test Person",
};

export const movieDetailsData = {
adult: false,
backdrop_path: "/kWYfW2Re0rUDE6IHhy4CRuKWeFr.jpg",
genre_ids: [
  12,
  14,
  28
],
id: 121,
media_type: "movie",
original_language: "en",
original_title: "The Lord of the Rings: The Two Towers",
overview: "Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.",
popularity: 66.168,
poster_path: "/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
release_date: "2002-12-18",
title: "The Lord of the Rings: The Two Towers",
video: false,
vote_average: 8.3,
vote_count: 16434
};

export const detailsPageData = {props: {
  backdrop_path: "/iIQKA17YHJUmGYRpXmP0KXaxq99.jpg",
  first_air_date: "1996-08-26",
  genre_ids: [
    10759,
    16
  ],
  id: 1168,
  media_type: "tv",
  name: "The Real Adventures of Jonny Quest",
  origin_country: [
    "US"
  ],
  original_language: "en",
  original_name: "The Real Adventures of Jonny Quest",
  overview: "The Real Adventures of Jonny Quest is an American animated action-adventure television series.",
  popularity: 23.65,
  poster_path: "/vx8KdVNOpHVBR0x30shg5kcGnd7.jpg",
  vote_average: 7.1,
  vote_count: 26
}};

export const resultData = [
    {
      adult: false,
      backdrop_path: "/jOh79POQu4hyVIseUxdQxTW7vOf.jpg",
      genre_ids: [12, 14, 28],
      id: 22,
      media_type: "movie",
      original_language: "en",
      original_title: "Pirates of the Caribbean: The Curse of the Black Pearl",
      overview:
        "Jack Sparrow, a freewheeling 18th-century pirate, quarrels with a rival pirate bent on pillaging Port Royal. When the governor's daughter is kidnapped, Sparrow decides to help the girl's love save her.",
      poster_path: "/z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg",
      release_date: "2003-07-09",
      title: "Pirates of the Caribbean: The Curse of the Black Pearl",
      video: false,
      vote_average: 7.7,
      vote_count: 15917,
    } as Movie,
    {
      backdrop_path: "/l0qVZIpXtIo7km9u5Yqh0nKPOr5.jpg",
      first_air_date: "1994-09-22",
      genre_ids: [
        35,
        18
      ],
      id: 1668,
      media_type: "tv",
      name: "Friends",
      origin_country: [
        "US"
      ],
      original_language: "en",
      original_name: "Friends",
      overview: "The misadventures of a group of friends as they navigate the pitfalls of work, life and love in Manhattan.",
      popularity: 204.559,
      poster_path: "/f496cm9enuEsZkSPzCwnTESEK5s.jpg",
      vote_average: 8.4,
      vote_count: 4407
    } as TvShow
  ];

  export const searchWithResultsData = 
    {
      setSearchValue: jest.fn(),
      searchValue: "harry potter and the goble",
      handleClick: jest.fn(),
      searchSuggestion: {
        page: 1,
        results: [
          {
            adult: false,
            backdrop_path: "/8f9dnOtpArDrOMEylpSN9Sc6fuz.jpg",
            genre_ids: [
              12,
              14,
              10751
            ],
            id: 674,
            media_type: "movie",
            original_language: "en",
            original_title: "Harry Potter and the Goblet of Fire",
            overview: "When Harry Potter's name emerges from the Goblet of Fire, he becomes a competitor in a grueling battle for glory among three wizarding schools — the Triwizard Tournament. But since Harry never submitted his name for the Tournament, who did? Now Harry must confront a deadly dragon, fierce water demons and an enchanted maze only to find himself in the cruel grasp of He Who Must Not Be Named. In this fourth film adaptation of J.K. Rowling's Harry Potter series, everything changes as Harry, Ron and ...",
            popularity: 121.041,
            poster_path: "/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg",
            release_date: "2005-11-16",
            title: "Harry Potter and the Goblet of Fire",
            video: false,
            vote_average: 7.8,
            vote_count: 15465
          }
        ],
        total_pages: 1,
        total_results: 1
      }
    };
    
  export const searchWithLessThanFiveCharactersData = 
  {
    setSearchValue: jest.fn(),
    searchValue: "harr",
    handleClick: jest.fn(),
    searchSuggestion: {
      page: 1,
      results: [
      ],
      total_pages: 1,
      total_results: 1
    }
  }
  