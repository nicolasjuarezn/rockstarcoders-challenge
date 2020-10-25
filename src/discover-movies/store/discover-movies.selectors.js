const getSearchError = (state) =>
  state.isSearching &&
  !state.movieSearchResults.length &&
  "No results for your search criteria";

const getFilterError = (state) =>
  state.isFiltering &&
  !state.filteredMovies.length &&
  "No results for your filtering criteria";

export const getErrorMessageResult = (state) =>
  getSearchError(state) || getFilterError(state) || "";
