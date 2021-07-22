import React, { useState } from "react";
import PropTypes from "prop-types";

import classes from "./ScorecardRow.module.css";
import ScorecardSpace from "./ScorecardSpace";
import ScorecardLock from "./ScorecardLock";

const ScorecardRow = (props) => {
  const [numMarked, setNumMarked] = useState(0);

  const initialState = [];
  const numSpaces = props.numbers.length;

  for (let i = 0; i < numSpaces - 1; i++) {
    initialState.push({ number: props.numbers[i], enabled: true });
  }
  initialState.push({ number: props.numbers[numSpaces - 1], enabled: false });

  const [rowState, setRowState] = useState(initialState);
  const [lockState, setLockState] = useState(false);

  const onMarkSpace = (num = null) => {
    const newNumMarked = numMarked + 1;
    setNumMarked((prevNum) => {
      return ++prevNum;
    });
    props.onUpdateScore(props.index, newNumMarked);

    setRowState((prevRowState) => {
      const newRowState = [...prevRowState];

      if (!newRowState[numSpaces - 1].enabled && newNumMarked >= 5) {
        newRowState[numSpaces - 1].enabled = true;
      }

      if (num && newRowState[numSpaces - 1].number === num) {
        setLockState(true);
      }

      for (let i = 0; i < numSpaces; i++) {
        newRowState[i].enabled = false;
        if (num && newRowState[i].number === num) {
          break;
        }
      }

      if (!num) {
        setLockState(false);
      }

      return newRowState;
    });
  };

  return (
    <div
      className={classes.ScorecardRow}
      style={{ backgroundColor: props.color }}
    >
      {rowState.map((space) => (
        <ScorecardSpace
          color={props.color}
          number={space.number}
          key={space.number}
          onMarkSpace={onMarkSpace}
          enabled={space.enabled}
        />
      ))}
      <ScorecardLock
        color={props.color}
        onLockSpace={onMarkSpace}
        enabled={lockState}
      />
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
