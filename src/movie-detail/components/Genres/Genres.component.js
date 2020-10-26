import React from "react";
import PropTypes from "prop-types";

export function Genres({ data }) {
  return (
    <ul>
      {data.map(({ id, name }) => {
        return <span key={id}>{name}</span>;
      })}
    </ul>
  );
}

Genres.propTypes = {
  data: PropTypes.array,
};
