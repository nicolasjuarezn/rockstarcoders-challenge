import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { moviesService } from "../services/movies.service";
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

  return movieDetail.original_title ? (
    <div>
      <Link to="/">Go back to home</Link>
      <h1>{movieDetail.original_title}</h1>
      <img src={movieDetail.poster_path} alt={movieDetail.original_title} />
    </div>
  ) : (
    <Loader />
  );
}
