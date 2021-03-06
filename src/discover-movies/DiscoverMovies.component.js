import React, { useCallback, useEffect, useReducer } from "react";
import { parseQuery } from "../core/helpers/query-parse.helpers";
import { Header } from "../shared-components/Header/Header.component";
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
  discoverMoviesInitialState,
  discoverMoviesReducer,
} from "./store/discover-movies.state";

export function DiscoverMovies() {
  const [state, dispatch] = useReducer(
    discoverMoviesReducer,
    discoverMoviesInitialState
  );

  useEffect(
    function getMovies() {
      const { search } = parseQuery(window.location.search);

      if (search) {
        fetchSearchMovies(dispatch, search);
      }

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
      <Header highlight="Search or filter by your preferences">
        <SearchMovies
          onSubmit={(searchValue) => fetchSearchMovies(dispatch, searchValue)}
        />
        <RateFilterMovies
          onFilterChange={onFilterChange}
          dataToFilter={dataToFilter}
        />
      </Header>
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
