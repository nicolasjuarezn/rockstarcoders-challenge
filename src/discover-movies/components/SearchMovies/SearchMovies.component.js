import React from "react";
import PropTypes from "prop-types";
import {
  search_form,
  search_form__input,
  search_form__button,
} from "./SearchMovies.module.css";
import { parseQuery } from "../../../core/helpers/query-parse.helpers";
import { debounce } from "lodash";

export function SearchMovies({ onSubmit }) {
  const onChangeInputSearch = debounce(({ target: { value: searchValue } }) => {
    const url = searchValue
      ? `${window.location.pathname}?search=${searchValue}`
      : window.location.pathname;

    window.history.pushState({}, "", url);
    onSubmit(searchValue);
  }, 300);

  const { search } = parseQuery(window.location.search);

  return (
    <form className={search_form}>
      <input
        type="text"
        placeholder="Type your search here"
        defaultValue={search}
        name="search"
        id="search"
        className={search_form__input}
        onChange={onChangeInputSearch}
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
