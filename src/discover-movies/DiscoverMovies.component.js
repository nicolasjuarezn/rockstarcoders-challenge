import React, { useEffect, useState } from "react";
import { moviesService } from "../services/movies.service";
import { SearchMovies } from "./components/SearchMovies/SearchMovies.component";

export function DiscoverMovies() {
  const [movies, setMovies] = useState([]);
  const [movieSearchResult, setMovieSearchResults] = useState([]);

  useEffect(
    function getMovies() {
      moviesService.getDiscoverMovies().then(setMovies);
    },
    [setMovies]
  );

  const moviesList = movieSearchResult.length ? movieSearchResult : movies;

  return (
    <div>
      <SearchMovies onResults={setMovieSearchResults} />
      <ul>
        {moviesList.map(({ title, id }) => (
          <li key={id}>
            <a href="#1">{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
