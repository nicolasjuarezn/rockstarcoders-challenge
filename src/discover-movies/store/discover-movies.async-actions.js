import { moviesService } from "../../services/movies.service";
import {
  setMovies,
  setSearchResults,
  startFetchLoading,
  stopFetchLoading,
} from "./discover-movies.actions";

export const fetchMoviesToDiscover = async (dispatch) => {
  dispatch(startFetchLoading());
  try {
    const movies = await moviesService.getDiscoverMovies();
    dispatch(setMovies(movies));
  } catch (error) {
    dispatch(setMovies([]));
    dispatch(stopFetchLoading());
  }
};

export const fetchSearchMovies = async (dispatch, searchValue) => {
  dispatch(startFetchLoading());
  try {
    const movieSearchResults = await moviesService.searchMovies(searchValue);
    dispatch(setSearchResults(movieSearchResults));
  } catch (error) {
    dispatch(setSearchResults([]));
    dispatch(stopFetchLoading());
  }
};
