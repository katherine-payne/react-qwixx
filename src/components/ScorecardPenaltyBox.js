import React, { useState } from "react";
import PropTypes from "prop-types";

import classes from "./ScorecardPenaltyBox.module.css";

const ScorecardPenaltyBox = (props) => {
  const [marked, setMarked] = useState(false);

  const markBox = () => {
    if (!marked) {
      setMarked(true);
      props.onMarkBox(props.index, 5);
    }
  };

  const boxClasses = `${classes.ScorecardPenaltyBox} ${
    marked ? classes.marked : ""
  }`;
  const boxLabel = `${marked ? "marked" : ""} penalty box`;

  return (
    <div className={boxClasses} onClick={markBox} aria-label={boxLabel}></div>
  );
};

ScorecardPenaltyBox.propTypes = {
  index: PropTypes.number,
  onMarkBox: PropTypes.func,
};

export default ScorecardPenaltyBox;
