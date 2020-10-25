import React, { useEffect, useReducer } from "react";
import { RateFilterMovies } from "./components/RateFilterMovies/RateFilterMovies.component";
import { SearchMovies } from "./components/SearchMovies/SearchMovies.component";
import { setFilteredMovies } from "./store/discover-movies.actions";
import {
  fetchMoviesToDiscover,
  fetchSearchMovies,
} from "./store/discover-movies.async-actions";
import {
  fetchStatesInitialState,
  fetchStatesReducer,
} from "./store/discover-movies.state";

export function DiscoverMovies() {
  const [state, dispatch] = useReducer(
    fetchStatesReducer,
    fetchStatesInitialState
  );

  useEffect(
    function getMovies() {
      fetchMoviesToDiscover(dispatch);
    },
    [dispatch]
  );

  const searchResults =
    Boolean(state.movieSearchResults.length) && state.movieSearchResults;
  const filterResults =
    Boolean(state.filteredMovies.length) && state.filteredMovies;

  const searchError =
    state.isSearching &&
    !searchResults &&
    "No results for your search criteria";

  const filterError =
    state.isFiltering &&
    !filterResults &&
    "No results for your filtering criteria";

  const moviesList = searchResults || state.movies;
  const moviesToRender = filterResults || searchResults || state.movies;

  return (
    <div>
      <SearchMovies
        onSubmit={(searchValue) => fetchSearchMovies(dispatch, searchValue)}
      />
      <RateFilterMovies
        onFilterChange={({ filteredMovies, isFiltering }) => {
          dispatch(setFilteredMovies({ filteredMovies, isFiltering }));
        }}
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
