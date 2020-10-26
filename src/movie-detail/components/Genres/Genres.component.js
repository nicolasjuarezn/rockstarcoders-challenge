import React from "react";
import PropTypes from "prop-types";
import { genres__wrapper, genres__li } from "./Genres.module.css";

export function Genres({ data }) {
  return (
    <ul className={genres__wrapper}>
      {data.map(({ id, name }) => {
        return (
          <li key={id} className={genres__li}>
            {name}
          </li>
        );
      })}
    </ul>
  );
}

Genres.propTypes = {
  data: PropTypes.array,
};
