import React from "react";

import classes from "./App.module.css";
import GameDice from "./components/GameDice";
import Scorecard from "./components/Scorecard";

const colors = ["#C71010", "#FFD30F", "#0CAD3A", "#0825C7"];
const backgroundColors = ["#F1C3C3", "#FFF4C3", "#C2EBCE", "#C1C9F1"];
const textColors = ["black", "black", "white", "white", "white", "white"];

const App = () => {
  return (
    <div className={classes.App}>
      <header className={classes["App-header"]}>
        <h1>React Qwixx</h1>
      </header>
      <GameDice
        backgroundColors={["white", "white", ...colors]}
        textColors={textColors}
      />
      <Scorecard backgroundColors={backgroundColors} colors={colors} />
    </div>
  );
};

export default App;
