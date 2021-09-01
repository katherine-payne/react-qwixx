import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

import classes from "./Scorecard.module.css";
import ScorecardRow from "./ScorecardRow";
import ScorecardPenaltyBox from "./ScorecardPenaltyBox";
import ScorecardTotals from "./ScorecardTotals";

const Scorecard = (props) => {
  let maxNumber = props.diceType * 2;

  let numbersAsc = [];
  for (let i = 2; i <= maxNumber; i++) {
    numbersAsc.push(i);
  }

  let numbersDesc = [];
  for (let i = maxNumber; i >= 2; i--) {
    numbersDesc.push(i);
  }

  let width;
  switch (props.diceType) {
    case 4:
      width = "40%";
      break;
    case 6:
      width = "60%";
      break;
    case 8:
      width = "80%";
      break;
    default:
      width = "85%";
  }

  const fontSize = `calc(10px + ${
    props.diceType === 12 ? "3vh" : props.diceType === 10 ? "4.5vh" : "5vh"
  })`;

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
    <div
      className={classes.Scorecard}
      style={{ width: width, fontSize: fontSize }}
    >
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
  diceType: PropTypes.number,
  backgroundColors: PropTypes.arrayOf(PropTypes.string),
  colors: PropTypes.arrayOf(PropTypes.string),
};

export default Scorecard;
