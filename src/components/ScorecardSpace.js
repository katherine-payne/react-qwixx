import React, { useState } from "react";
import PropTypes from "prop-types";

import classes from "./ScorecardSpace.module.css";

const ScorecardSpace = (props) => {
  const [marked, setMarked] = useState(false);

  const markSpace = () => {
    if (!marked) {
      setMarked(true);
      props.onMarkSpace();
    }
  };

  const spaceClasses = `${classes.ScorecardSpace} ${
    marked ? classes.marked : ""
  }`;

  return (
    <p
      className={spaceClasses}
      style={{ color: props.color }}
      onClick={markSpace}
    >
      {props.number}
    </p>
  );
};

ScorecardSpace.propTypes = {
  color: PropTypes.string,
  number: PropTypes.number,
  onMarkSpace: PropTypes.func,
};

export default ScorecardSpace;
