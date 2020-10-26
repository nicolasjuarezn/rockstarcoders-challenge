import React, { useRef } from "react";
import PropTypes from "prop-types";
import {
  search_form,
  search_form__input,
  search_form__button,
} from "./SearchMovies.module.css";
import { parseQuery } from "../../../core/helpers/query-parse.helpers";

export function SearchMovies({ onSubmit }) {
  const searchInput = useRef(null);

  const onSubmitSearch = (event) => {
    event.preventDefault();
    const searchValue = searchInput.current.value;

    const url = searchValue
      ? `${window.location.pathname}?search=${searchValue}`
      : window.location.pathname;

    window.history.pushState({}, "", url);

    onSubmit(searchValue);
  };

  const { search } = parseQuery(window.location.search);

  return (
    <form onSubmit={onSubmitSearch} className={search_form}>
      <input
        type="text"
        placeholder="Type your search here"
        defaultValue={search}
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
