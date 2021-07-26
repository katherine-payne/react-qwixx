import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ScorecardRow from "./ScorecardRow";
import classes from "./ScorecardSpace.module.css";

test("renders spaces of the correct color", () => {
  render(<ScorecardRow color="red" numbers={[1, 2, 3]} />);
  const space1 = screen.getByText("1");
  const space2 = screen.getByText("2");
  const space3 = screen.getByText("3");

  expect(space1).toHaveStyle("color: red");
  expect(space2).toHaveStyle("color: red");
  expect(space3).toHaveStyle("color: red");
});

test("renders spaces with the correct numbers", () => {
  render(<ScorecardRow color="red" numbers={[1, 2, 3]} />);
  const space1 = screen.getByText("1");
  const space2 = screen.getByText("2");
  const space3 = screen.getByText("3");

  expect(space1).toBeInTheDocument();
  expect(space2).toBeInTheDocument();
  expect(space3).toBeInTheDocument();
});

test("does not mark spaces before they are clicked", () => {
  render(<ScorecardRow color="blue" numbers={[2, 3, 4]} />);
  const space2 = screen.getByText("2");
  const space3 = screen.getByText("3");
  const space4 = screen.getByText("4");

  expect(space2).not.toHaveClass(classes.marked);
  expect(space3).not.toHaveClass(classes.marked);
  expect(space4).not.toHaveClass(classes.marked);
});

test("marks the correct space after it is clicked", () => {
  render(<ScorecardRow color="blue" numbers={[2, 3, 4]} />);
  const space2 = screen.getByText("2");
  const space3 = screen.getByText("3");
  const space4 = screen.getByText("4");

  userEvent.click(space4);

  expect(space2).not.toHaveClass(classes.marked);
  expect(space3).not.toHaveClass(classes.marked);
  expect(space4).toHaveClass(classes.marked);
});

test("marks the correct space after it is clicked twice", () => {
  render(<ScorecardRow color="blue" numbers={[2, 3, 4]} />);
  const space2 = screen.getByText("2");
  const space3 = screen.getByText("3");
  const space4 = screen.getByText("4");

  userEvent.click(space4);
  userEvent.click(space4);

  expect(space2).not.toHaveClass(classes.marked);
  expect(space3).not.toHaveClass(classes.marked);
  expect(space4).toHaveClass(classes.marked);
});

test("marks multiple spaces after they are clicked", () => {
  render(<ScorecardRow color="blue" numbers={[2, 3, 4]} />);
  const space2 = screen.getByText("2");
  const space3 = screen.getByText("3");
  const space4 = screen.getByText("4");

  userEvent.click(space2);
  userEvent.click(space4);

  expect(space2).toHaveClass(classes.marked);
  expect(space3).not.toHaveClass(classes.marked);
  expect(space4).toHaveClass(classes.marked);
});
