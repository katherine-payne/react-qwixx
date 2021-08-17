import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

import classes from "./Scorecard.module.css";
import ScorecardRow from "./ScorecardRow";
import ScorecardPenaltyBox from "./ScorecardPenaltyBox";
import ScorecardTotals from "./ScorecardTotals";

const numbersAsc = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const numbersDesc = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

const Scorecard = (props) => {
  const [currentScores, setCurrentScores] = useState([0, 0, 0, 0, 0]);

  const updateScore = useCallback(
    (index, scoreIncrease) => {
      setCurrentScores((prevScores) => {
        const newScores = [...prevScores];
        newScores[index] += scoreIncrease;
        return newScores;
      });
    },
    [setCurrentScores]
  );

  const penaltyBoxes = [];
  for (let i = 0; i < 4; i++) {
    penaltyBoxes.push(
      <ScorecardPenaltyBox key={i} index={4} onMarkBox={updateScore} />
    );
  }

  return (
    <div className={classes.Scorecard}>
      <div className={classes.ScorecardRows}>
        <ScorecardRow
          color={props.colors[0]}
          numbers={numbersAsc}
          index={0}
          onUpdateScore={updateScore}
        />
        <ScorecardRow
          color={props.colors[1]}
          numbers={numbersAsc}
          index={1}
          onUpdateScore={updateScore}
        />
        <ScorecardRow
          color={props.colors[2]}
          numbers={numbersDesc}
          index={2}
          onUpdateScore={updateScore}
        />
        <ScorecardRow
          color={props.colors[3]}
          numbers={numbersDesc}
          index={3}
          onUpdateScore={updateScore}
        />
      </div>
      <p className={classes["penalty-label"]}>Penalty (-5)</p>
      <div className={classes.ScorecardPenaltyBoxes}>{penaltyBoxes}</div>
      <ScorecardTotals
        backgroundColors={props.backgroundColors}
        borderColors={props.colors}
        totals={currentScores}
      />
    </div>
  );
};

Scorecard.propTypes = {
  backgroundColors: PropTypes.arrayOf(PropTypes.string),
  colors: PropTypes.arrayOf(PropTypes.string),
};

export default Scorecard;
