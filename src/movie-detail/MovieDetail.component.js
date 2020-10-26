import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { moviesService } from "../services/movies.service";
import { Header } from "../shared-components/Header/Header.component";
import { Loader } from "../shared-components/Loader/Loader.component";

export function MovieDetail({
  match: {
    params: { id },
  },
}) {
  const [movieDetail, setMovieDetail] = useState({});

  useEffect(
    function getMovieDetail() {
      moviesService.getMovieDetailById(id).then(setMovieDetail);
    },
    [id, setMovieDetail]
  );

  return (
    <>
      <Header highlight={movieDetail.original_title}>
        <Link to="/">Go back to home</Link>
      </Header>
      {movieDetail.original_title ? (
        <div>
          <img src={movieDetail.poster_path} alt={movieDetail.original_title} />
          <img
            src={movieDetail.backdrop_path}
            alt={movieDetail.original_title}
          />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
