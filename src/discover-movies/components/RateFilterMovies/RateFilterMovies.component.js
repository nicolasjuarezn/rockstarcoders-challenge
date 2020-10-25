import React from "react";
import PropTypes from "prop-types";

export function RateFilterMovies({
  onFilterChange,
  maxScoreRange,
  starsSteps,
}) {
  const onClickStar = ({ currentTarget }) => {
    const filterStep = maxScoreRange / starsSteps;
    const minRange = currentTarget.id * filterStep;
    const maxRange = minRange + filterStep;

    onFilterChange({ minRange, maxRange });
  };

  return (
    <div>
      {Array.from(Array(starsSteps).keys()).map((_, index) => (
        <span id={index} key={index} onClick={onClickStar}>
          {index}
        </span>
      ))}
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
