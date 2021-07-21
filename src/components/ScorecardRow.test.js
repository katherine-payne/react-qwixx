import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ScorecardRow from "./ScorecardRow";
import classes from "./ScorecardSpace.module.css";

test("renders spaces of the correct color", () => {
  const onUpdateScore = jest.fn();
  render(
    <ScorecardRow
      color="red"
      numbers={[1, 2, 3]}
      index={1}
      onUpdateScore={onUpdateScore}
    />
  );
  const space1 = screen.getByText("1");
  const space2 = screen.getByText("2");
  const space3 = screen.getByText("3");

  expect(space1).toHaveStyle("color: red");
  expect(space2).toHaveStyle("color: red");
  expect(space3).toHaveStyle("color: red");
});

test("renders spaces with the correct numbers", () => {
  const onUpdateScore = jest.fn();
  render(
    <ScorecardRow
      color="red"
      numbers={[1, 2, 3]}
      index={1}
      onUpdateScore={onUpdateScore}
    />
  );
  const space1 = screen.getByText("1");
  const space2 = screen.getByText("2");
  const space3 = screen.getByText("3");

  expect(space1).toBeInTheDocument();
  expect(space2).toBeInTheDocument();
  expect(space3).toBeInTheDocument();
});

test("does not mark spaces before they are clicked", () => {
  const onUpdateScore = jest.fn();
  render(
    <ScorecardRow
      color="blue"
      numbers={[2, 3, 4]}
      index={2}
      onUpdateScore={onUpdateScore}
    />
  );
  const space2 = screen.getByText("2");
  const space3 = screen.getByText("3");
  const space4 = screen.getByText("4");

  expect(space2).not.toHaveClass(classes.marked);
  expect(space3).not.toHaveClass(classes.marked);
  expect(space4).not.toHaveClass(classes.marked);
});

test("does not call onUpdateScore before spaces are clicked", () => {
  const onUpdateScore = jest.fn();
  render(
    <ScorecardRow
      color="blue"
      numbers={[2, 3, 4]}
      index={2}
      onUpdateScore={onUpdateScore}
    />
  );

  expect(onUpdateScore).not.toHaveBeenCalled();
});

test("marks the correct space after it is clicked", () => {
  const onUpdateScore = jest.fn();
  render(
    <ScorecardRow
      color="blue"
      numbers={[2, 3, 4]}
      index={2}
      onUpdateScore={onUpdateScore}
    />
  );
  const space2 = screen.getByText("2");
  const space3 = screen.getByText("3");
  const space4 = screen.getByText("4");

  userEvent.click(space4);

  expect(space2).not.toHaveClass(classes.marked);
  expect(space3).not.toHaveClass(classes.marked);
  expect(space4).toHaveClass(classes.marked);
});

test("calls onUpdateScore after a space is clicked", () => {
  const onUpdateScore = jest.fn();
  render(
    <ScorecardRow
      color="blue"
      numbers={[2, 3, 4]}
      index={2}
      onUpdateScore={onUpdateScore}
    />
  );
  const space4 = screen.getByText("4");

  userEvent.click(space4);

  expect(onUpdateScore).toHaveBeenCalledTimes(1);
  expect(onUpdateScore).toHaveBeenCalledWith(2, 1);
});

test("marks the correct space after it is clicked twice", () => {
  const onUpdateScore = jest.fn();
  render(
    <ScorecardRow
      color="blue"
      numbers={[2, 3, 4]}
      index={2}
      onUpdateScore={onUpdateScore}
    />
  );
  const space2 = screen.getByText("2");
  const space3 = screen.getByText("3");
  const space4 = screen.getByText("4");

  userEvent.click(space4);
  userEvent.click(space4);

  expect(space2).not.toHaveClass(classes.marked);
  expect(space3).not.toHaveClass(classes.marked);
  expect(space4).toHaveClass(classes.marked);
});

test("calls onUpdateScore only once after a space is clicked twice", () => {
  const onUpdateScore = jest.fn();
  render(
    <ScorecardRow
      color="blue"
      numbers={[2, 3, 4]}
      index={2}
      onUpdateScore={onUpdateScore}
    />
  );
  const space4 = screen.getByText("4");

  userEvent.click(space4);
  userEvent.click(space4);

  expect(onUpdateScore).toHaveBeenCalledTimes(1);
  expect(onUpdateScore).toHaveBeenCalledWith(2, 1);
});

test("marks multiple spaces after they are clicked", () => {
  const onUpdateScore = jest.fn();
  render(
    <ScorecardRow
      color="blue"
      numbers={[2, 3, 4]}
      index={2}
      onUpdateScore={onUpdateScore}
    />
  );
  const space2 = screen.getByText("2");
  const space3 = screen.getByText("3");
  const space4 = screen.getByText("4");

  userEvent.click(space2);
  userEvent.click(space4);

  expect(space2).toHaveClass(classes.marked);
  expect(space3).not.toHaveClass(classes.marked);
  expect(space4).toHaveClass(classes.marked);
});

test("calls onUpdateScore multiple times after multiple spaces are clicked", () => {
  const onUpdateScore = jest.fn();
  render(
    <ScorecardRow
      color="blue"
      numbers={[2, 3, 4]}
      index={2}
      onUpdateScore={onUpdateScore}
    />
  );
  const space2 = screen.getByText("2");
  const space4 = screen.getByText("4");

  userEvent.click(space2);
  userEvent.click(space4);

  expect(onUpdateScore).toHaveBeenCalledTimes(2);
  expect(onUpdateScore).toHaveBeenNthCalledWith(1, 2, 1);
  expect(onUpdateScore).toHaveBeenNthCalledWith(2, 2, 2);
});
