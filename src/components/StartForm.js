import React, { useState } from "react";
import PropTypes from "prop-types";

import classes from "./StartForm.module.css";

const StartForm = (props) => {
  const [dice, setDice] = useState(props.initialDice);
  const [color1, setColor1] = useState(props.initialColors[0]);
  const [color2, setColor2] = useState(props.initialColors[1]);
  const [color3, setColor3] = useState(props.initialColors[2]);
  const [color4, setColor4] = useState(props.initialColors[3]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.onStartGame({ dice, colors: [color1, color2, color3, color4] });
      }}
    >
      <h2 className={classes["StartForm-h2"]}>Choose Dice:</h2>
      <div>
        <label htmlFor="dice" className={classes["StartForm-label"]}>
          Dice
        </label>
        <select
          id="dice"
          name="dice"
          value={dice}
          onChange={(event) => setDice(parseInt(event.target.value, 10))}
        >
          <option value={4}>d4</option>
          <option value={6}>d6</option>
          <option value={8}>d8</option>
          <option value={10}>d10</option>
          <option value={12}>d12</option>
        </select>
      </div>
      <h2 className={classes["StartForm-h2"]}>Choose Row Colors:</h2>
      <ul className={classes["StartForm-ul"]}>
        <li>
          <label htmlFor="color_1" className={classes["StartForm-label"]}>
            Row Color 1
          </label>
          <input
            type="color"
            id="color_1"
            name="color_1"
            value={color1}
            onChange={(event) => setColor1(event.target.value)}
          ></input>
        </li>
        <li>
          <label htmlFor="color_2" className={classes["StartForm-label"]}>
            Row Color 2
          </label>
          <input
            type="color"
            id="color_2"
            name="color_2"
            value={color2}
            onChange={(event) => setColor2(event.target.value)}
          ></input>
        </li>
        <li>
          <label htmlFor="color_3" className={classes["StartForm-label"]}>
            Row Color 3
          </label>
          <input
            type="color"
            id="color_3"
            name="color_3"
            value={color3}
            onChange={(event) => setColor3(event.target.value)}
          ></input>
        </li>
        <li>
          <label htmlFor="color_4" className={classes["StartForm-label"]}>
            Row Color 4
          </label>
          <input
            type="color"
            id="color_4"
            name="color_4"
            value={color4}
            onChange={(event) => setColor4(event.target.value)}
          ></input>
        </li>
      </ul>
      <button type="submit" className={classes["StartForm-button"]}>
        Start Game
      </button>
    </form>
  );
};

StartForm.propTypes = {
  initialDice: PropTypes.number,
  initialColors: PropTypes.arrayOf(PropTypes.string),
  onStartGame: PropTypes.func,
};

export default StartForm;
