import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ScorecardPenaltyBox from "./ScorecardPenaltyBox";
import classes from "./ScorecardPenaltyBox.module.css";

test("does not mark penalty box before it is clicked", () => {
  render(<ScorecardPenaltyBox />);
  const boxElement = screen.getByLabelText(/penalty box/);

  expect(boxElement).not.toHaveClass(classes.marked);
});

test("marks penalty box after it is clicked", () => {
  render(<ScorecardPenaltyBox />);
  const boxElement = screen.getByLabelText(/penalty box/);

  userEvent.click(boxElement);

  expect(boxElement).toHaveClass(classes.marked);
});

test("marks penalty box after it is clicked twice", () => {
  render(<ScorecardPenaltyBox />);
  const boxElement = screen.getByLabelText(/penalty box/);

  userEvent.click(boxElement);
  userEvent.click(boxElement);

  expect(boxElement).toHaveClass(classes.marked);
});
