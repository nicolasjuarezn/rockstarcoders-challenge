import React, { useState } from "react";
import PropTypes from "prop-types";

export function RateFilterMovies({
  onFilterChange,
  maxScoreRange,
  starsSteps,
}) {
  const [activeRate, setActiveRate] = useState(-1);

  const onClickStar = ({ currentTarget: { id } }) => {
    const elementId = Number(id);
    const filterStep = maxScoreRange / starsSteps;
    const minRange = elementId * filterStep;
    const maxRange = minRange + filterStep;

    const clearFilter = activeRate === elementId;
    onFilterChange({ minRange, maxRange, clearFilter });
    setActiveRate(clearFilter ? -1 : elementId);
  };

  return (
    <div>
      {Array.from(Array(starsSteps).keys()).map((_, index) => {
        const isSelected = activeRate === index;
        return (
          <span
            id={index}
            key={index}
            onClick={onClickStar}
            className={isSelected ? "active" : ""}
          >
            {index}
          </span>
        );
      })}
    </div>
  );
}

RateFilterMovies.defaultProps = {
  maxScoreRange: 10,
  starsSteps: 5,
};

RateFilterMovies.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  maxScoreRange: PropTypes.number,
  starsSteps: PropTypes.number,
};
