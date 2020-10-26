const getSearchError = (state) =>
  state.isSearching &&
  !state.movieSearchResults.length &&
  "No results for your search criteria";

const getFilterError = (state) =>
  state.isFiltering &&
  !state.filteredMovies.length &&
  "No results for your filtering criteria";

const getMoviesResultError = (state) =>
  state.movies && !state.movies.length && "Oops something went wrong";

export const getErrorMessageResult = (state) =>
  getSearchError(state) ||
  getFilterError(state) ||
  getMoviesResultError(state) ||
  "";
