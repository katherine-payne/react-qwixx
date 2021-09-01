import React, { useState } from "react";

import classes from "./App.module.css";
import StartForm from "./components/StartForm";
import GameDice from "./components/GameDice";
import Scorecard from "./components/Scorecard";

const textColors = ["black", "black", "white", "white", "white", "white"];

const getBackgroundValue = (hexColor) => {
  const rgbColor = parseInt(hexColor, 16);
  const backgroundRGB = Math.round(rgbColor * 0.25 + 255 * 0.75);
  return backgroundRGB.toString(16);
};

const App = () => {
  const [dice, setDice] = useState(6);
  const [colors, setColors] = useState([
    "#C71010",
    "#FFD30F",
    "#0CAD3A",
    "#0825C7",
  ]);
  const [backgroundColors, setBackgroundColors] = useState([
    "#F1C3C3",
    "#FFF4C3",
    "#C2EBCE",
    "#C1C9F1",
  ]);
  const [gameStarted, setGameStarted] = useState(false);

  const onStartGame = (input) => {
    setDice(input.dice);
    setColors(input.colors);
    setBackgroundColors(
      input.colors.map((color) => {
        const rVal = getBackgroundValue(color.substring(1, 3));
        const gVal = getBackgroundValue(color.substring(3, 5));
        const bVal = getBackgroundValue(color.substring(5, 7));
        return "#" + rVal + gVal + bVal;
      })
    );
    setGameStarted(true);
  };

  return (
    <div className={classes.App}>
      <header className={classes["App-header"]}>
        <h1 className={classes["App-h1"]}>React Qwixx</h1>
      </header>
      {!gameStarted ? (
        <StartForm
          initialDice={dice}
          initialColors={colors}
          onStartGame={onStartGame}
        />
      ) : (
        <div>
          <GameDice
            maxRoll={dice}
            backgroundColors={["white", "white", ...colors]}
            textColors={textColors}
          />
          <Scorecard
            diceType={dice}
            backgroundColors={backgroundColors}
            colors={colors}
          />
          <button
            className={classes["App-button"]}
            onClick={() => {
              setGameStarted(false);
            }}
          >
            New Game
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
