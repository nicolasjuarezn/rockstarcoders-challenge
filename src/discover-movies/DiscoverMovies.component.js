import React, { useCallback, useEffect, useReducer } from "react";
import { Loader } from "../shared-components/Loader/Loader.component";
import { MoviesList } from "./components/MoviesList/MoviesList.component";
import { RateFilterMovies } from "./components/RateFilterMovies/RateFilterMovies.component";
import { SearchMovies } from "./components/SearchMovies/SearchMovies.component";
import { setFilteredMovies } from "./store/discover-movies.actions";
import {
  fetchMoviesToDiscover,
  fetchSearchMovies,
} from "./store/discover-movies.async-actions";
import { getErrorMessageResult } from "./store/discover-movies.selectors";
import {
  fetchStatesInitialState,
  fetchStatesReducer,
} from "./store/discover-movies.state";
import {
  discover_movies_header,
  discover_movies_header__wrapper,
  discover_movies_header__title,
  discover_movies_header__highlight,
} from "./DiscoverMovies.module.css";

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

  const onFilterChange = useCallback(
    ({ filteredMovies, isFiltering }) => {
      dispatch(setFilteredMovies({ filteredMovies, isFiltering }));
    },
    [dispatch]
  );

  const errorMessageResult = getErrorMessageResult(state);

  const searchResults =
    state.movieSearchResults.length && state.movieSearchResults;
  const filterResults = state.filteredMovies.length && state.filteredMovies;

  const dataToFilter = searchResults || state.movies;
  const moviesToRender = filterResults || searchResults || state.movies;

  return (
    <>
      <header className={discover_movies_header}>
        <div className={discover_movies_header__wrapper}>
          <h1 className={discover_movies_header__title}>
            Discover your favorite movies
          </h1>
          <p className={discover_movies_header__highlight}>
            Search or filter by your preferences
          </p>
          <SearchMovies
            onSubmit={(searchValue) => fetchSearchMovies(dispatch, searchValue)}
          />
          <RateFilterMovies
            onFilterChange={onFilterChange}
            dataToFilter={dataToFilter}
          />
        </div>
      </header>
      {state.isLoading ? (
        <Loader />
      ) : (
        <MoviesList
          movies={moviesToRender}
          errorMessageResult={errorMessageResult}
        />
      )}
    </>
  );
}
