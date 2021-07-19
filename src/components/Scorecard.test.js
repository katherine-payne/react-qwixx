import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Scorecard from "./Scorecard";
import spaceClasses from "./ScorecardSpace.module.css";
import boxClasses from "./ScorecardPenaltyBox.module.css";

test("renders without errors", () => {
  expect(render(<Scorecard />)).toBeTruthy();
});

test("marks a space in the correct row after it is clicked", () => {
  render(<Scorecard />);
  const spacesArray = screen.getAllByText("2");

  userEvent.click(spacesArray[1]);

  expect(spacesArray[0]).not.toHaveClass(spaceClasses.marked);
  expect(spacesArray[1]).toHaveClass(spaceClasses.marked);
  expect(spacesArray[2]).not.toHaveClass(spaceClasses.marked);
  expect(spacesArray[3]).not.toHaveClass(spaceClasses.marked);
});

test("marks multiple spaces in different rows after they are clicked", () => {
  render(<Scorecard />);
  const space3Array = screen.getAllByText("3");
  const space11Array = screen.getAllByText("11");

  userEvent.click(space3Array[1]);
  userEvent.click(space11Array[2]);

  expect(space3Array[0]).not.toHaveClass(spaceClasses.marked);
  expect(space3Array[1]).toHaveClass(spaceClasses.marked);
  expect(space3Array[2]).not.toHaveClass(spaceClasses.marked);
  expect(space3Array[3]).not.toHaveClass(spaceClasses.marked);
  expect(space11Array[0]).not.toHaveClass(spaceClasses.marked);
  expect(space11Array[1]).not.toHaveClass(spaceClasses.marked);
  expect(space11Array[2]).toHaveClass(spaceClasses.marked);
  expect(space11Array[3]).not.toHaveClass(spaceClasses.marked);
});

test("marks multiple spaces with the same number after they are clicked", () => {
  render(<Scorecard />);
  const spacesArray = screen.getAllByText("6");

  userEvent.click(spacesArray[0]);
  userEvent.click(spacesArray[2]);

  expect(spacesArray[0]).toHaveClass(spaceClasses.marked);
  expect(spacesArray[1]).not.toHaveClass(spaceClasses.marked);
  expect(spacesArray[2]).toHaveClass(spaceClasses.marked);
  expect(spacesArray[3]).not.toHaveClass(spaceClasses.marked);
});

test("locks multiple locks in different rows after they are clicked", () => {
  render(<Scorecard />);
  const locksArray = screen.getAllByLabelText(/lock/);

  userEvent.click(locksArray[1]);
  userEvent.click(locksArray[3]);

  expect(locksArray[0]).not.toHaveStyle("color: black");
  expect(locksArray[1]).toHaveStyle("color: black");
  expect(locksArray[2]).not.toHaveStyle("color: black");
  expect(locksArray[3]).toHaveStyle("color: black");
});

test("marks multiple penalty boxes after they are clicked", () => {
  render(<Scorecard />);
  const boxesArray = screen.getAllByLabelText(/penalty box/);

  userEvent.click(boxesArray[0]);
  userEvent.click(boxesArray[3]);

  expect(boxesArray[0]).toHaveClass(boxClasses.marked);
  expect(boxesArray[1]).not.toHaveClass(boxClasses.marked);
  expect(boxesArray[2]).not.toHaveClass(boxClasses.marked);
  expect(boxesArray[3]).toHaveClass(boxClasses.marked);
});
