import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ScorecardTotals from "./ScorecardTotals";

test("renders all total boxes with the correct background colors", () => {
  render(
    <ScorecardTotals
      backgroundColors={["red", "yellow", "lime", "blue"]}
      borderColors={["darkred", "gold", "green", "mediumblue"]}
      totals={[10, 1, 3, 0, 5]}
    />
  );

  const calcScoreButton = screen.getByText("Calculate Score");
  userEvent.click(calcScoreButton);

  const redBox = screen.getByText("10");
  const yellowBox = screen.getByText("1");
  const greenBox = screen.getByText("3");
  const blueBox = screen.getByText("0");
  const penaltyBox = screen.getByText("5");
  const totalBox = screen.getByText("9");

  expect(redBox).toHaveStyle("background-color: red");
  expect(yellowBox).toHaveStyle("background-color: yellow");
  expect(greenBox).toHaveStyle("background-color: lime");
  expect(blueBox).toHaveStyle("background-color: blue");
  expect(penaltyBox).toHaveStyle("background-color: white");
  expect(totalBox).toHaveStyle("background-color: white");
});

test("renders all total boxes with the correct border colors", () => {
  render(
    <ScorecardTotals
      backgroundColors={["red", "yellow", "lime", "blue"]}
      borderColors={["darkred", "gold", "green", "mediumblue"]}
      totals={[10, 1, 3, 0, 5]}
    />
  );

  const calcScoreButton = screen.getByText("Calculate Score");
  userEvent.click(calcScoreButton);

  const redBox = screen.getByText("10");
  const yellowBox = screen.getByText("1");
  const greenBox = screen.getByText("3");
  const blueBox = screen.getByText("0");
  const penaltyBox = screen.getByText("5");
  const totalBox = screen.getByText("9");

  expect(redBox).toHaveStyle("border-color: darkred");
  expect(yellowBox).toHaveStyle("border-color: gold");
  expect(greenBox).toHaveStyle("border-color: green");
  expect(blueBox).toHaveStyle("border-color: mediumblue");
  expect(penaltyBox).toHaveStyle("border-color: darkgray");
  expect(totalBox).toHaveStyle("border-color: gray");
});

test("renders all total boxes with the correct total numbers", () => {
  render(
    <ScorecardTotals
      backgroundColors={["red", "yellow", "lime", "blue"]}
      borderColors={["darkred", "gold", "green", "mediumblue"]}
      totals={[10, 1, 3, 0, 5]}
    />
  );

  const calcScoreButton = screen.getByText("Calculate Score");
  userEvent.click(calcScoreButton);

  const redBox = screen.getByText("10");
  const yellowBox = screen.getByText("1");
  const greenBox = screen.getByText("3");
  const blueBox = screen.getByText("0");
  const penaltyBox = screen.getByText("5");

  expect(redBox).toBeInTheDocument();
  expect(yellowBox).toBeInTheDocument();
  expect(greenBox).toBeInTheDocument();
  expect(blueBox).toBeInTheDocument();
  expect(penaltyBox).toBeInTheDocument();
});

test("calculates total score correctly", () => {
  render(
    <ScorecardTotals
      backgroundColors={["red", "yellow", "lime", "blue"]}
      borderColors={["darkred", "gold", "green", "mediumblue"]}
      totals={[15, 0, 6, 21, 10]}
    />
  );

  const calcScoreButton = screen.getByText("Calculate Score");
  userEvent.click(calcScoreButton);

  const totalBox = screen.getByText("32");

  expect(totalBox).toBeInTheDocument();
});

test("renders button and not scores initially", () => {
  render(
    <ScorecardTotals
      backgroundColors={["red", "yellow", "lime", "blue"]}
      borderColors={["darkred", "gold", "green", "mediumblue"]}
      totals={[10, 1, 3, 0, 5]}
    />
  );

  const calcScoreButton = screen.getByText("Calculate Score");

  expect(calcScoreButton).toBeInTheDocument();
});

test("renders scores and not button once button has been clicked", () => {
  render(
    <ScorecardTotals
      backgroundColors={["red", "yellow", "lime", "blue"]}
      borderColors={["darkred", "gold", "green", "mediumblue"]}
      totals={[10, 1, 3, 0, 5]}
    />
  );

  const calcScoreButton = screen.getByText("Calculate Score");
  userEvent.click(calcScoreButton);

  const redBox = screen.getByText("10");
  expect(calcScoreButton).not.toBeInTheDocument();
  expect(redBox).toBeInTheDocument();
});
