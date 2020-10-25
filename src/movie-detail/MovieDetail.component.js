import React, { useEffect, useState } from "react";
import { moviesService } from "../services/movies.service";

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
      <h1>{movieDetail.original_title}</h1>
      <img src={movieDetail.poster_path} alt={movieDetail.original_title} />
    </div>
  ) : (
    "Loading"
  );
}
