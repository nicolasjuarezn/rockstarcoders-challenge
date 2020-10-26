import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  error_message,
  movie_list__li,
  movie_list,
} from "./MoviesList.module.css";

export function MoviesList({ movies, errorMessageResult }) {
  return errorMessageResult ? (
    <p className={error_message}>{errorMessageResult}</p>
  ) : (
    <ul className={movie_list}>
      {movies.map(({ title, id, poster_path }) => (
        <li key={id} className={movie_list__li} title={title}>
          <Link to={`movie/${id}`}>
            <img src={poster_path} alt={title} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

MoviesList.defaultProos = {
  movies: [],
  errorMessageResult: "",
};

MoviesList.propTypes = {
  movies: PropTypes.array,
  errorMessageResult: PropTypes.string,
};
