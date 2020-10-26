import { moviesService } from "../../core/services/movies.service";
import {
  setMovies,
  setSearchResults,
  startLoading,
  stopLoading,
} from "./discover-movies.actions";

export const fetchMoviesToDiscover = async (dispatch) => {
  dispatch(startLoading());
  try {
    const movies = await moviesService.getDiscoverMovies();
    dispatch(setMovies(movies));
  } catch (error) {
    dispatch(setMovies([]));
    dispatch(stopLoading());
  }
};

export const fetchSearchMovies = async (dispatch, searchValue) => {
  dispatch(startLoading());
  try {
    if (searchValue) {
      const movieSearchResults = await moviesService.searchMovies(searchValue);
      dispatch(setSearchResults({ movieSearchResults, isSearching: true }));
    } else {
      dispatch(
        setSearchResults({ movieSearchResults: [], isSearching: false })
      );
    }
  } catch (error) {
    dispatch(stopLoading());
  }
};
