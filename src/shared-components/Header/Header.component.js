import React from "react";
import PropTypes from "prop-types";

import {
  header,
  header__wrapper,
  header__title,
  header__highlight,
} from "./Header.module.css";

export function Header({ children, highlight }) {
  return (
    <header className={header}>
      <div className={header__wrapper}>
        <h1 className={header__title}>Discover your favorite movies</h1>
        {highlight && <p className={header__highlight}>{highlight}</p>}
        {children}
      </div>
    </header>
  );
}

Header.defaultProps = {
  highlight: "",
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  highlight: PropTypes.string,
};
