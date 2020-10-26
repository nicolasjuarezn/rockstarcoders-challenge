import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { EN } from "../core/constants/languages.constants";
import { Header } from "../shared-components/Header/Header.component";
import { Loader } from "../shared-components/Loader/Loader.component";
import { header__link } from "./MovieDetail.module.css";
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

  const movieDetail = state.movieDetail;

  const isForeign = movieDetail.original_language !== EN;

  const movieTitle = isForeign
    ? `${movieDetail.title} (${movieDetail.original_title})`
    : movieDetail.title;

  const highlight = !state.isLoading ? movieTitle : "";

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
        <div>
          <img src={movieDetail.poster_path} alt={movieDetail.original_title} />
          <img
            src={movieDetail.backdrop_path}
            alt={movieDetail.original_title}
          />
        </div>
      )}
    </>
  );
}
