import {
  SET_DETAILS,
  START_LOADING,
  STOP_LOADING,
} from "./movie-detail.action-types";

export const startLoading = () => ({
  type: START_LOADING,
});

export const stopLoading = () => ({
  type: STOP_LOADING,
});

export const setMovieDetails = (movieDetail) => ({
  type: SET_DETAILS,
  movieDetail,
});
