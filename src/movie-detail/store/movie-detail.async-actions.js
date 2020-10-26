import { moviesService } from "../../core/services/movies.service";
import {
  setMovieDetails,
  startLoading,
  stopLoading,
} from "./movie-detail.actions";

export const fetchMovieDetail = async (dispatch, id) => {
  dispatch(startLoading());
  try {
    const movieDetail = await moviesService.getMovieDetailById(id);
    dispatch(setMovieDetails(movieDetail));
  } catch (error) {
    dispatch(stopLoading());
  }
};
