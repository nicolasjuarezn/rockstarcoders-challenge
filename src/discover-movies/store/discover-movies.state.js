import {
  SET_FILTERED_MOVIES,
  SET_MOVIES,
  SET_SEARCH_RESULTS,
  START_LOADING,
  STOP_LOADING,
} from "./discover-movies.action-types";

export const fetchStatesInitialState = {
  filteredMovies: [],
  isFiltering: false,
  isLoading: false,
  movies: [],
  movieSearchResults: [],
};

export function fetchStatesReducer(state, action) {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case STOP_LOADING:
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
    case SET_FILTERED_MOVIES:
      return {
        ...state,
        filteredMovies: action.filteredMovies,
        isFiltering: action.isFiltering,
      };
    default:
      return state;
  }
}
