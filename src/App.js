import React from "react";

import classes from "./App.module.css";
import Scorecard from "./components/Scorecard";

const App = () => {
  return (
    <div className={classes.App}>
      <header className={classes["App-header"]}>
        <h1>React Qwixx</h1>
      </header>
      <Scorecard />
    </div>
  );
};

export default App;
