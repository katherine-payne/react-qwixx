import React, { useState } from "react";

import classes from "./ScorecardPenaltyBox.module.css";

const ScorecardPenaltyBox = () => {
  const [marked, setMarked] = useState(false);

  const markBox = () => {
    setMarked(true);
  };

  const boxClasses = `${classes.ScorecardPenaltyBox} ${
    marked ? classes.marked : ""
  }`;
  const boxLabel = `${marked ? "marked" : ""} penalty box`;

  return (
    <div className={boxClasses} onClick={markBox} aria-label={boxLabel}></div>
  );
};

export default ScorecardPenaltyBox;
