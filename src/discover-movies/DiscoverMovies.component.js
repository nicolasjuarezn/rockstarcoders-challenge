import React, { useEffect, useReducer, useState } from "react";
import { RateFilterMovies } from "./components/RateFilterMovies/RateFilterMovies.component";
import { SearchMovies } from "./components/SearchMovies/SearchMovies.component";
import { fetchMoviesToDiscover } from "./store/discover-movies.async-actions";
import {
  fetchStatesInitialState,
  fetchStatesReducer,
} from "./store/discover-movies.state";

export function DiscoverMovies() {
  const [state, dispatch] = useReducer(
    fetchStatesReducer,
    fetchStatesInitialState
  );

  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(
    function getMovies() {
      fetchMoviesToDiscover(dispatch);
    },
    [dispatch]
  );

  const moviesList = state.movieSearchResults.length
    ? state.movieSearchResults
    : state.movies;

  const onFilterChange = ({ minRange, maxRange, clearFilter }) => {
    const newFilteredMovies = moviesList.filter(({ vote_average }) => {
      const isOnAverageRange =
        vote_average >= minRange && vote_average <= maxRange;

      return isOnAverageRange && !clearFilter;
    });
    setFilteredMovies(newFilteredMovies);
  };

  const moviesToRender = filteredMovies.length ? filteredMovies : moviesList;

  return (
    <div>
      <SearchMovies onResults={dispatch} />
      <RateFilterMovies onFilterChange={onFilterChange} />
      {state.isLoading ? (
        "...Loading"
      ) : (
        <ul>
          {moviesToRender.map(({ title, id, vote_average }) => (
            <li key={id}>
              <a href="#1">
                {title} - {vote_average}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
