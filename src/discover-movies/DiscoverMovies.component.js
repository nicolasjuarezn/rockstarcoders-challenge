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

  const [filteredMovies, setFilteredMovies] = useState({
    movies: [],
    isFiltering: false,
  });

  useEffect(
    function getMovies() {
      fetchMoviesToDiscover(dispatch);
    },
    [dispatch]
  );

  const searchResults =
    Boolean(state.movieSearchResults.length) && state.movieSearchResults;
  const filterResults =
    Boolean(filteredMovies.movies.length) && filteredMovies.movies;

  const searchError =
    state.isSearching &&
    !searchResults &&
    "No results for your search criteria";

  const filterError =
    filteredMovies.isFiltering &&
    !filterResults &&
    "No results for your filtering criteria";

  const moviesList = searchResults || state.movies;
  const moviesToRender = filterResults || searchResults || state.movies;

  return (
    <div>
      <SearchMovies onResults={dispatch} />
      <RateFilterMovies
        onFilterChange={setFilteredMovies}
        dataToFilter={moviesList}
      />
      {state.isLoading
        ? "...Loading"
        : searchError ||
          filterError || (
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
