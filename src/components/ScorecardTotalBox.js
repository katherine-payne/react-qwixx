import React from "react";
import PropTypes from "prop-types";

import classes from "./ScorecardTotalBox.module.css";

const ScorecardTotalBox = (props) => {
  return (
    <p
      className={classes.ScorecardTotalBox}
      style={{
        backgroundColor: props.backgroundColor,
        borderColor: props.borderColor,
      }}
    >
      {props.visible && props.total}
    </p>
  );
};

ScorecardTotalBox.propTypes = {
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  total: PropTypes.number,
  visible: PropTypes.bool,
};

export default ScorecardTotalBox;
