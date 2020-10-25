import {
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

export const setSearchResults = (movieSearchResults) => ({
  type: SET_SEARCH_RESULTS,
  movieSearchResults,
});
