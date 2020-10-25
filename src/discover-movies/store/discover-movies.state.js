import {
  SET_MOVIES,
  SET_SEARCH_RESULTS,
  START_FETCH_LOADING,
  STOP_FETCH_LOADING,
} from "./discover-movies.action-types";

export const fetchStatesInitialState = {
  isLoading: false,
  movies: [],
  movieSearchResults: [],
  filteredMovies: [],
};

export function fetchStatesReducer(state, action) {
  switch (action.type) {
    case START_FETCH_LOADING:
      return { ...state, isLoading: true };
    case STOP_FETCH_LOADING:
      return { ...state, isLoading: false };
    case SET_MOVIES:
      return { ...state, movies: action.movies, isLoading: false };
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        movieSearchResults: action.movieSearchResults,
        isSearching: action.isSearching,
        isLoading: false,
      };
    default:
      return state;
  }
}
