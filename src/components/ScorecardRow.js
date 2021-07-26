import React from "react";
import PropTypes from "prop-types";

import classes from "./ScorecardRow.module.css";
import ScorecardSpace from "./ScorecardSpace";
import ScorecardLock from "./ScorecardLock";

const ScorecardRow = (props) => {
  return (
    <div
      className={classes.ScorecardRow}
      style={{ backgroundColor: props.color }}
    >
      {props.numbers.map((num) => (
        <ScorecardSpace color={props.color} number={num} key={num} />
      ))}
      <ScorecardLock color={props.color} />
    </div>
  );
};

ScorecardRow.propTypes = {
  color: PropTypes.string,
  numbers: PropTypes.arrayOf(PropTypes.number),
};

export default ScorecardRow;
