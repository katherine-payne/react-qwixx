import React from "react";

import classes from "./Scorecard.module.css";
import ScorecardRow from "./ScorecardRow";

const numbersAsc = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const numbersDesc = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

const Scorecard = () => {
  return (
    <div className={classes.Scorecard}>
      <ScorecardRow color="#C71010" numbers={numbersAsc} />
      <ScorecardRow color="#FFD30F" numbers={numbersAsc} />
      <ScorecardRow color="#0CAD3A" numbers={numbersDesc} />
      <ScorecardRow color="#0825C7" numbers={numbersDesc} />
    </div>
  );
};

export default Scorecard;
