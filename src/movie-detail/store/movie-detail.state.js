import {
  SET_DETAILS,
  START_LOADING,
  STOP_LOADING,
} from "./movie-detail.action-types";

export const movieDetailInitialState = {
  isLoading: false,
  movieDetail: [],
};

export function movieDetailReducer(state, action) {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case STOP_LOADING:
      return { ...state, isLoading: false };
    case SET_DETAILS:
      return {
        ...state,
        movieDetail: action.movieDetail,
        isLoading: false,
      };
    default:
      return state;
  }
}
