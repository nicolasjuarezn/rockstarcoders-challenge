import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export function RateFilterMovies({
  onFilterChange,
  maxScoreRange,
  starsSteps,
  dataToFilter,
}) {
  const [activeRate, setActiveRate] = useState(-1);
  const [filters, setFilters] = useState({
    minRange: 0,
    maxRange: maxScoreRange,
  });

  const onClickStar = ({ currentTarget: { id } }) => {
    const elementId = Number(id);
    const filterStep = maxScoreRange / starsSteps;
    const minRange = elementId * filterStep;
    const maxRange = minRange + filterStep;
    const newActiveRate = activeRate === elementId ? -1 : elementId;

    setActiveRate(newActiveRate);
    setFilters({ minRange, maxRange });
  };

  useEffect(
    function updateFilterResults() {
      const isFiltering = activeRate > -1;
      const filteredMovies = dataToFilter.filter(({ vote_average }) => {
        return (
          vote_average >= filters.minRange &&
          vote_average <= filters.maxRange &&
          isFiltering
        );
      });

      onFilterChange({ filteredMovies, isFiltering });
    },
    [onFilterChange, filters, dataToFilter, activeRate]
  );

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
