import React, { useEffect, useState } from "react";
import { moviesService } from "../services/movies.service";

export function DiscoverMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(
    function getMovies() {
      moviesService.getDiscoverMovies().then(setMovies);
    },
    [setMovies]
  );

  return (
    <ul>
      {movies.map(({ title, id }) => (
        <li key={id}>
          <a href="#1">{title}</a>
        </li>
      ))}
    </ul>
  );
}
