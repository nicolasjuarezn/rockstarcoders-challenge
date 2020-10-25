import React, { useState } from "react";
import PropTypes from "prop-types";

export function RateFilterMovies({
  onFilterChange,
  maxScoreRange,
  starsSteps,
  dataToFilter,
}) {
  const [activeRate, setActiveRate] = useState(-1);

  const onClickStar = ({ currentTarget: { id } }) => {
    const elementId = Number(id);
    const filterStep = maxScoreRange / starsSteps;
    const minRange = elementId * filterStep;
    const maxRange = minRange + filterStep;
    const clearFilter = activeRate === elementId;

    const movies = dataToFilter.filter(({ vote_average }) => {
      return (
        vote_average >= minRange && vote_average <= maxRange && !clearFilter
      );
    });

    const newActiveRate = clearFilter ? -1 : elementId;

    setActiveRate(newActiveRate);
    onFilterChange({ movies, isFiltering: newActiveRate > -1 });
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
  dataToFilter: [],
};

RateFilterMovies.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  maxScoreRange: PropTypes.number,
  starsSteps: PropTypes.number,
  dataToFilter: PropTypes.array,
};
