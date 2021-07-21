import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faEquals } from "@fortawesome/free-solid-svg-icons";

import classes from "./ScorecardTotals.module.css";
import ScorecardTotalBox from "./ScorecardTotalBox";

const ScorecardTotals = (props) => {
  const [scoreVisible, setScoreVisible] = useState(false);

  const showScore = () => {
    setScoreVisible(true);
  };

  const totalScore =
    props.totals[0] +
    props.totals[1] +
    props.totals[2] +
    props.totals[3] -
    props.totals[4];

  return (
    <div className={classes.ScorecardTotals}>
      <ScorecardTotalBox
        backgroundColor={props.backgroundColors[0]}
        borderColor={props.borderColors[0]}
        total={props.totals[0]}
        visible={scoreVisible}
      />
      <FontAwesomeIcon icon={faPlus} className={classes.operators} />
      <ScorecardTotalBox
        backgroundColor={props.backgroundColors[1]}
        borderColor={props.borderColors[1]}
        total={props.totals[1]}
        visible={scoreVisible}
      />
      <FontAwesomeIcon icon={faPlus} className={classes.operators} />
      <ScorecardTotalBox
        backgroundColor={props.backgroundColors[2]}
        borderColor={props.borderColors[2]}
        total={props.totals[2]}
        visible={scoreVisible}
      />
      <FontAwesomeIcon icon={faPlus} className={classes.operators} />
      <ScorecardTotalBox
        backgroundColor={props.backgroundColors[3]}
        borderColor={props.borderColors[3]}
        total={props.totals[3]}
        visible={scoreVisible}
      />
      <FontAwesomeIcon icon={faMinus} className={classes.operators} />
      <ScorecardTotalBox
        backgroundColor="white"
        borderColor="darkgray"
        total={props.totals[4]}
        visible={scoreVisible}
      />
      <FontAwesomeIcon icon={faEquals} className={classes.operators} />
      {scoreVisible ? (
        <ScorecardTotalBox
          backgroundColor="white"
          borderColor="gray"
          total={totalScore}
          visible={scoreVisible}
        />
      ) : (
        <button onClick={showScore}>Calculate Score</button>
      )}
    </div>
  );
};

ScorecardTotals.propTypes = {
  backgroundColors: PropTypes.arrayOf(PropTypes.string),
  borderColors: PropTypes.arrayOf(PropTypes.string),
  totals: PropTypes.arrayOf(PropTypes.number),
};

export default ScorecardTotals;
