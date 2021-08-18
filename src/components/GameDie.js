import React from "react";
import PropTypes from "prop-types";

import classes from "./GameDie.module.css";

const GameDie = (props) => {
  return (
    <p
      className={classes.GameDie}
      style={{ backgroundColor: props.backgroundColor, color: props.textColor }}
    >
      {props.number}
    </p>
  );
};

GameDie.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  number: PropTypes.number,
};

export default GameDie;
