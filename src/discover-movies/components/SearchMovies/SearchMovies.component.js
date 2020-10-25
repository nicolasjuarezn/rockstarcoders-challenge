import React, { useRef } from "react";
import PropTypes from "prop-types";
import { fetchSearchMovies } from "../../store/discover-movies.async-actions";

export function SearchMovies({ onResults }) {
  const searchInput = useRef(null);

  const onSubmitSearch = (event) => {
    event.preventDefault();
    const searchValue = searchInput.current.value;

    fetchSearchMovies(onResults, searchValue);
  };

  return (
    <form onSubmit={onSubmitSearch}>
      <input
        type="search"
        placeholder="Type your search here"
        name="search"
        id="search"
        ref={searchInput}
      />
      <button type="submit">Search</button>
    </form>
  );
}

SearchMovies.propTypes = {
  onResults: PropTypes.func.isRequired,
};
