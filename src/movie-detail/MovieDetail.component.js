import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { EN } from "../core/constants/languages.constants";
import { Header } from "../shared-components/Header/Header.component";
import { Loader } from "../shared-components/Loader/Loader.component";
import { Genres } from "./components/Genres/Genres.component";
import { header__link, detail_wrapper } from "./MovieDetail.module.css";
import { fetchMovieDetail } from "./store/movie-detail.async-actions";
import {
  movieDetailInitialState,
  movieDetailReducer,
} from "./store/movie-detail.state";

export function MovieDetail({
  match: {
    params: { id },
  },
}) {
  const [state, dispatch] = useReducer(
    movieDetailReducer,
    movieDetailInitialState
  );

  useEffect(
    function getMovieDetail() {
      fetchMovieDetail(dispatch, id);
    },
    [id, dispatch]
  );

  const {
    title,
    original_language,
    original_title,
    poster_path,
    backdrop_path,
    genres,
    vote_average,
  } = state.movieDetail;

  const isForeign = original_language !== EN;

  const movieTitle = isForeign ? `${title} (${original_title})` : title;

  const highlight = !state.isLoading ? movieTitle : "";

  const hasGenres = genres && Boolean(genres.length);

  return (
    <>
      <Header highlight={highlight}>
        <Link to="/" className={header__link}>
          Go back to home
        </Link>
      </Header>
      {state.isLoading ? (
        <Loader />
      ) : (
        <div className={detail_wrapper}>
          {hasGenres && <Genres data={genres} />}
          <p>Vote average: {vote_average}</p>
          <img src={poster_path} alt={original_title} />
          <img src={backdrop_path} alt={original_title} />
        </div>
      )}
    </>
  );
}
