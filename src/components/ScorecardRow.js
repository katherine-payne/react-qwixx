import React, { useState } from "react";
import PropTypes from "prop-types";

import classes from "./ScorecardRow.module.css";
import ScorecardSpace from "./ScorecardSpace";
import ScorecardLock from "./ScorecardLock";

const ScorecardRow = (props) => {
  const [numMarked, setNumMarked] = useState(0);

  const onMarkSpace = () => {
    const newNumMarked = numMarked + 1;
    setNumMarked((prevNum) => {
      return ++prevNum;
    });
    props.onUpdateScore(props.index, newNumMarked);
  };

  return (
    <div
      className={classes.ScorecardRow}
      style={{ backgroundColor: props.color }}
    >
      {props.numbers.map((num) => (
        <ScorecardSpace
          color={props.color}
          number={num}
          key={num}
          onMarkSpace={onMarkSpace}
        />
      ))}
      <ScorecardLock color={props.color} onLockSpace={onMarkSpace} />
    </div>
  );
};

ScorecardRow.propTypes = {
  color: PropTypes.string,
  numbers: PropTypes.arrayOf(PropTypes.number),
  index: PropTypes.number,
  onUpdateScore: PropTypes.func,
};

export default ScorecardRow;
