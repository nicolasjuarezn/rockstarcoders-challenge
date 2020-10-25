import React, { useEffect, useReducer } from "react";
import { MoviesList } from "./components/MoviesList/MoviesList.component";
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

  const errorMessageResult = searchError || filterError || "";
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
      {state.isLoading ? (
        "...Loading"
      ) : (
        <MoviesList
          movies={moviesToRender}
          errorMessageResult={errorMessageResult}
        />
      )}
    </div>
  );
}
