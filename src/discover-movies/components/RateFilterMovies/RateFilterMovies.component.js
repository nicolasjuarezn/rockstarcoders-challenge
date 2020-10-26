import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  filter_box,
  filter_item___active,
  filter_item,
  filter_title,
  filter_wrapper___filtering,
  filter_wrapper,
} from "./RateFilterMovies.module.css";

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

  const isFiltering = activeRate > -1;

  useEffect(
    function updateFilterResults() {
      const filteredMovies = dataToFilter.filter(({ vote_average }) => {
        return (
          vote_average >= filters.minRange &&
          vote_average <= filters.maxRange &&
          isFiltering
        );
      });

      onFilterChange({ filteredMovies, isFiltering });
    },
    [onFilterChange, filters, dataToFilter, activeRate, isFiltering]
  );

  return (
    <div className={filter_box}>
      <span className={filter_title}>Rating:</span>
      <div
        className={`${filter_wrapper} ${
          isFiltering ? filter_wrapper___filtering : ""
        }`}
      >
        {Array.from(Array(starsSteps).keys()).map((_, index) => {
          const isSelected = activeRate === index;
          return (
            <button
              id={index}
              key={index}
              onClick={onClickStar}
              className={`${filter_item} ${
                isSelected ? filter_item___active : ""
              }`}
            >
              {index}
            </button>
          );
        })}
      </div>
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
