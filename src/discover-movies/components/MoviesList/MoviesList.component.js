import React from "react";
import PropTypes from "prop-types";

export function MoviesList({ movies, errorMessageResult }) {
  return (
    errorMessageResult || (
      <ul>
        {movies.map(({ title, id, vote_average }) => (
          <li key={id}>
            <a href="#1">
              {title} - {vote_average}
            </a>
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
