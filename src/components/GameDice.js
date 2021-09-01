import React, { useState } from "react";
import PropTypes from "prop-types";

import classes from "./GameDice.module.css";
import GameDie from "./GameDie";

const GameDice = (props) => {
  const generateNewRoll = () => {
    const newNumbers = [];
    for (let i = 0; i < 6; i++) {
      newNumbers.push(Math.floor(Math.random() * props.maxRoll + 1));
    }
    return newNumbers;
  };

  const [diceNumbers, setDiceNumbers] = useState(generateNewRoll());

  const rollDice = () => {
    setDiceNumbers(generateNewRoll());
  };

  return (
    <div className={classes.GameDice}>
      <GameDie
        backgroundColor={props.backgroundColors[0]}
        textColor={props.textColors[0]}
        number={diceNumbers[0]}
      />
      <GameDie
        backgroundColor={props.backgroundColors[1]}
        textColor={props.textColors[1]}
        number={diceNumbers[1]}
      />
      <GameDie
        backgroundColor={props.backgroundColors[2]}
        textColor={props.textColors[2]}
        number={diceNumbers[2]}
      />
      <GameDie
        backgroundColor={props.backgroundColors[3]}
        textColor={props.textColors[3]}
        number={diceNumbers[3]}
      />
      <GameDie
        backgroundColor={props.backgroundColors[4]}
        textColor={props.textColors[4]}
        number={diceNumbers[4]}
      />
      <GameDie
        backgroundColor={props.backgroundColors[5]}
        textColor={props.textColors[5]}
        number={diceNumbers[5]}
      />
      <button className={classes["GameDice-button"]} onClick={rollDice}>
        Roll
      </button>
    </div>
  );
};

GameDice.propTypes = {
  maxRoll: PropTypes.number,
  backgroundColors: PropTypes.arrayOf(PropTypes.string),
  textColors: PropTypes.arrayOf(PropTypes.string),
};

export default GameDice;
