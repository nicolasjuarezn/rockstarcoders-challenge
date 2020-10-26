import React from "react";
import PropTypes from "prop-types";

import {
  background_image,
  header__highlight,
  header__title,
  header__wrapper,
  header,
} from "./Header.module.css";

export function Header({ children, highlight, backgroundSRC }) {
  return (
    <header className={header}>
      {backgroundSRC && (
        <img src={backgroundSRC} alt={highlight} className={background_image} />
      )}
      <div className={header__wrapper}>
        <h1 className={header__title}>Discover your favorite movies</h1>
        <p className={header__highlight}>{highlight}</p>
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
  backgroundSRC: PropTypes.string,
  highlight: PropTypes.string,
};
