import React, { useRef } from "react";
import PropTypes from "prop-types";

export function SearchMovies({ onSubmit }) {
  const searchInput = useRef(null);

  const onSubmitSearch = (event) => {
    event.preventDefault();
    const searchValue = searchInput.current.value;
    onSubmit(searchValue);
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
  onSubmit: PropTypes.func.isRequired,
};
