import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";

import classes from "./ScorecardLock.module.css";

const ScorecardLock = (props) => {
  const [locked, setLocked] = useState(false);

  const lockSpace = () => {
    setLocked(true);
  };

  const lockColor = `${locked ? "black" : props.color}`;
  const lockLabel = `${locked ? "closed" : "open"} lock`;

  return (
    <div className={classes.ScorecardLock}>
      <FontAwesomeIcon
        icon={locked ? faLock : faLockOpen}
        style={{ color: lockColor }}
        onClick={lockSpace}
        aria-label={lockLabel}
      />
    </div>
  );
};

ScorecardLock.propTypes = {
  color: PropTypes.string,
};

export default ScorecardLock;
