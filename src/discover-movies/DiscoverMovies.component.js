import React, { useEffect, useState } from "react";
import { movieService } from "../services/movies.service";

export function DiscoverMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(
    function getMovies() {
      movieService.getDiscoverMovies().then(setMovies);
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
