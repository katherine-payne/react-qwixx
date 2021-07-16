import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Scorecard from "./Scorecard";
import classes from "./ScorecardSpace.module.css";

test("renders without errors", () => {
  expect(render(<Scorecard />)).toBeTruthy();
});

test("marks a space in the correct row after it is clicked", () => {
  render(<Scorecard />);
  const spacesArray = screen.getAllByText("2");

  userEvent.click(spacesArray[1]);

  expect(spacesArray[0]).not.toHaveClass(classes.marked);
  expect(spacesArray[1]).toHaveClass(classes.marked);
  expect(spacesArray[2]).not.toHaveClass(classes.marked);
  expect(spacesArray[3]).not.toHaveClass(classes.marked);
});

test("marks multiple spaces in different rows after they are clicked", () => {
  render(<Scorecard />);
  const space3Array = screen.getAllByText("3");
  const space11Array = screen.getAllByText("11");

  userEvent.click(space3Array[1]);
  userEvent.click(space11Array[2]);

  expect(space3Array[0]).not.toHaveClass(classes.marked);
  expect(space3Array[1]).toHaveClass(classes.marked);
  expect(space3Array[2]).not.toHaveClass(classes.marked);
  expect(space3Array[3]).not.toHaveClass(classes.marked);
  expect(space11Array[0]).not.toHaveClass(classes.marked);
  expect(space11Array[1]).not.toHaveClass(classes.marked);
  expect(space11Array[2]).toHaveClass(classes.marked);
  expect(space11Array[3]).not.toHaveClass(classes.marked);
});

test("marks multiple spaces with the same number after they are clicked", () => {
  render(<Scorecard />);
  const spacesArray = screen.getAllByText("6");

  userEvent.click(spacesArray[0]);
  userEvent.click(spacesArray[2]);

  expect(spacesArray[0]).toHaveClass(classes.marked);
  expect(spacesArray[1]).not.toHaveClass(classes.marked);
  expect(spacesArray[2]).toHaveClass(classes.marked);
  expect(spacesArray[3]).not.toHaveClass(classes.marked);
});
