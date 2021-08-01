import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ScorecardPenaltyBox from "./ScorecardPenaltyBox";
import classes from "./ScorecardPenaltyBox.module.css";

test("does not mark penalty box before it is clicked", () => {
  const onMarkBox = jest.fn();
  render(<ScorecardPenaltyBox index={1} onMarkBox={onMarkBox} />);
  const boxElement = screen.getByLabelText(/penalty box/);

  expect(boxElement).not.toHaveClass(classes.marked);
});

test("does not call onMarkBox before it is clicked", () => {
  const onMarkBox = jest.fn();
  render(<ScorecardPenaltyBox index={1} onMarkBox={onMarkBox} />);

  expect(onMarkBox).not.toHaveBeenCalled();
});

test("marks penalty box after it is clicked", () => {
  const onMarkBox = jest.fn();
  render(<ScorecardPenaltyBox index={1} onMarkBox={onMarkBox} />);
  const boxElement = screen.getByLabelText(/penalty box/);

  userEvent.click(boxElement);

  expect(boxElement).toHaveClass(classes.marked);
});

test("calls onMarkBox after it is clicked", () => {
  const onMarkBox = jest.fn();
  render(<ScorecardPenaltyBox index={1} onMarkBox={onMarkBox} />);
  const boxElement = screen.getByLabelText(/penalty box/);

  userEvent.click(boxElement);

  expect(onMarkBox).toHaveBeenCalledTimes(1);
  expect(onMarkBox).toHaveBeenCalledWith(1, 5);
});

test("marks penalty box after it is clicked twice", () => {
  const onMarkBox = jest.fn();
  render(<ScorecardPenaltyBox index={4} onMarkBox={onMarkBox} />);
  const boxElement = screen.getByLabelText(/penalty box/);

  userEvent.click(boxElement);
  userEvent.click(boxElement);

  expect(boxElement).toHaveClass(classes.marked);
});

test("calls onMarkBox only once after it is clicked twice", () => {
  const onMarkBox = jest.fn();
  render(<ScorecardPenaltyBox index={4} onMarkBox={onMarkBox} />);
  const boxElement = screen.getByLabelText(/penalty box/);

  userEvent.click(boxElement);
  userEvent.click(boxElement);

  expect(onMarkBox).toHaveBeenCalledTimes(1);
  expect(onMarkBox).toHaveBeenCalledWith(4, 5);
});
