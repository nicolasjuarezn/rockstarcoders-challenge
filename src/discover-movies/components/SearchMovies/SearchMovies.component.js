import React, { useRef } from "react";
import PropTypes from "prop-types";
import { moviesService } from "../../../services/movies.service";

export function SearchMovies({ onResults }) {
  const searchInput = useRef(null);

  const onSubmitSearch = (event) => {
    event.preventDefault();
    const searchValue = searchInput.current.value;

    if (searchValue) {
      moviesService.searchMovies(searchValue).then(onResults);
    } else {
      onResults([]);
    }
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
