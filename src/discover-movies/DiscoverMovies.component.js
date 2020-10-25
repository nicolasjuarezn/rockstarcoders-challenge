import React, { useEffect, useState } from "react";
import { moviesService } from "../services/movies.service";
import { RateFilterMovies } from "./components/RateFilterMovies/RateFilterMovies.component";
import { SearchMovies } from "./components/SearchMovies/SearchMovies.component";

export function DiscoverMovies() {
  const [movies, setMovies] = useState([]);
  const [movieSearchResult, setMovieSearchResults] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(
    function getMovies() {
      moviesService.getDiscoverMovies().then(setMovies);
    },
    [setMovies]
  );

  const moviesList = movieSearchResult.length ? movieSearchResult : movies;

  const onFilterChange = ({ minRange, maxRange }) => {
    const filteredMovies = moviesList.filter(
      ({ vote_average }) => vote_average >= minRange && vote_average <= maxRange
    );
    setFilteredMovies(filteredMovies);
  };

  const moviesToRender = filteredMovies.length ? filteredMovies : moviesList;

  return (
    <div>
      <SearchMovies onResults={setMovieSearchResults} />
      <RateFilterMovies onFilterChange={onFilterChange} />
      <ul>
        {moviesToRender.map(({ title, id, vote_average }) => (
          <li key={id}>
            <a href="#1">
              {title} - {vote_average}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
