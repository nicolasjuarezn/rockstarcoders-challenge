import React, { useRef } from "react";
import PropTypes from "prop-types";
import {
  search_form,
  search_form__input,
  search_form__button,
} from "./SearchMovies.module.css";

export function SearchMovies({ onSubmit }) {
  const searchInput = useRef(null);

  const onSubmitSearch = (event) => {
    event.preventDefault();
    const searchValue = searchInput.current.value;
    onSubmit(searchValue);
  };

  return (
    <form onSubmit={onSubmitSearch} className={search_form}>
      <input
        type="search"
        placeholder="Type your search here"
        name="search"
        id="search"
        ref={searchInput}
        className={search_form__input}
      />
      <button type="submit" className={search_form__button}>
        Search
      </button>
    </form>
  );
}

SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
