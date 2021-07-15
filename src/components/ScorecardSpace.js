import React from "react";
import PropTypes from "prop-types";

import classes from "./ScorecardSpace.module.css";

const ScorecardSpace = (props) => {
  return (
    <p className={classes.ScorecardSpace} style={{ color: props.color }}>
      {props.number}
    </p>
  );
};

ScorecardSpace.propTypes = {
  color: PropTypes.string,
  number: PropTypes.number,
};

export default ScorecardSpace;
