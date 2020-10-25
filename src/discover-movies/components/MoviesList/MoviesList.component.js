import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function MoviesList({ movies, errorMessageResult }) {
  return (
    errorMessageResult || (
      <ul>
        {movies.map(({ title, id, vote_average, poster_path }) => (
          <li key={id}>
            <Link to={`movie/${id}`}>
              {title} - {vote_average}
              <img src={poster_path} alt={title} />
            </Link>
          </li>
        ))}
      </ul>
    )
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
