import {
  SET_FILTERED_MOVIES,
  SET_MOVIES,
  SET_SEARCH_RESULTS,
  START_FETCH_LOADING,
  STOP_FETCH_LOADING,
} from "./discover-movies.action-types";

export const startFetchLoading = () => ({
  type: START_FETCH_LOADING,
});

export const stopFetchLoading = () => ({
  type: STOP_FETCH_LOADING,
});

export const setMovies = (movies) => ({
  type: SET_MOVIES,
  movies,
});

export const setSearchResults = ({ movieSearchResults, isSearching }) => ({
  type: SET_SEARCH_RESULTS,
  movieSearchResults,
  isSearching,
});

export const setFilteredMovies = ({ filteredMovies, isFiltering }) => ({
  type: SET_FILTERED_MOVIES,
  filteredMovies,
  isFiltering,
});
