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

  userEvent.click(space3);

  expect(space2).not.toHaveClass(classes.marked);
  expect(space3).toHaveClass(classes.marked);
  expect(space4).not.toHaveClass(classes.marked);
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
  const space3 = screen.getByText("3");

  userEvent.click(space3);

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

  userEvent.click(space3);
  userEvent.click(space3);

  expect(space2).not.toHaveClass(classes.marked);
  expect(space3).toHaveClass(classes.marked);
  expect(space4).not.toHaveClass(classes.marked);
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
  const space3 = screen.getByText("3");

  userEvent.click(space3);
  userEvent.click(space3);

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
  userEvent.click(space3);

  expect(space2).toHaveClass(classes.marked);
  expect(space3).toHaveClass(classes.marked);
  expect(space4).not.toHaveClass(classes.marked);
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
  const space3 = screen.getByText("3");

  userEvent.click(space2);
  userEvent.click(space3);

  expect(onUpdateScore).toHaveBeenCalledTimes(2);
  expect(onUpdateScore).toHaveBeenNthCalledWith(1, 2, 1);
  expect(onUpdateScore).toHaveBeenNthCalledWith(2, 2, 2);
});

test("does not mark a space after it is clicked out of order", () => {
  const onUpdateScore = jest.fn();
  render(
    <ScorecardRow
      color="green"
      numbers={[2, 3, 4, 5]}
      index={3}
      onUpdateScore={onUpdateScore}
    />
  );
  const space2 = screen.getByText("2");
  const space3 = screen.getByText("3");

  userEvent.click(space3);
  userEvent.click(space2);

  expect(space2).not.toHaveClass(classes.marked);
  expect(space3).toHaveClass(classes.marked);
});

test("does not call onUpdateScore if a space is clicked out of order", () => {
  const onUpdateScore = jest.fn();
  render(
    <ScorecardRow
      color="green"
      numbers={[2, 3, 4, 5]}
      index={3}
      onUpdateScore={onUpdateScore}
    />
  );
  const space2 = screen.getByText("2");
  const space3 = screen.getByText("3");

  userEvent.click(space3);
  userEvent.click(space2);

  expect(onUpdateScore).toHaveBeenCalledTimes(1);
  expect(onUpdateScore).toHaveBeenCalledWith(3, 1);
});

test("does not mark the last space if it is clicked too early", () => {
  const onUpdateScore = jest.fn();
  render(
    <ScorecardRow
      color="green"
      numbers={[2, 3, 4, 5]}
      index={3}
      onUpdateScore={onUpdateScore}
    />
  );
  const space5 = screen.getByText("5");

  userEvent.click(space5);

  expect(space5).not.toHaveClass(classes.marked);
});

test("does not call onUpdateScore if the last space is clicked too early", () => {
  const onUpdateScore = jest.fn();
  render(
    <ScorecardRow
      color="green"
      numbers={[2, 3, 4, 5]}
      index={3}
      onUpdateScore={onUpdateScore}
    />
  );
  const space5 = screen.getByText("5");

  userEvent.click(space5);

  expect(onUpdateScore).not.toHaveBeenCalled();
});

test("does not mark the lock if it is clicked too early", () => {
  const onUpdateScore = jest.fn();
  render(
    <ScorecardRow
      color="green"
      numbers={[2, 3, 4, 5]}
      index={3}
      onUpdateScore={onUpdateScore}
    />
  );
  const lock = screen.getByLabelText(/lock/);

  userEvent.click(lock);

  expect(lock).not.toHaveStyle("color: black");
});

test("does not call onUpdateScore if the lock is clicked too early", () => {
  const onUpdateScore = jest.fn();
  render(
    <ScorecardRow
      color="green"
      numbers={[2, 3, 4, 5]}
      index={3}
      onUpdateScore={onUpdateScore}
    />
  );
  const lock = screen.getByLabelText(/lock/);

  userEvent.click(lock);

  expect(onUpdateScore).not.toHaveBeenCalled();
});

test("marks the last space if it is clicked at the right time", () => {
  const onUpdateScore = jest.fn();
  render(
    <ScorecardRow
      color="green"
      numbers={[2, 3, 4, 5, 6, 7]}
      index={3}
      onUpdateScore={onUpdateScore}
    />
  );
  const space2 = screen.getByText("2");
  const space3 = screen.getByText("3");
  const space4 = screen.getByText("4");
  const space5 = screen.getByText("5");
  const space6 = screen.getByText("6");
  const space7 = screen.getByText("7");

  userEvent.click(space2);
  userEvent.click(space3);
  userEvent.click(space4);
  userEvent.click(space5);
  userEvent.click(space6);
  userEvent.click(space7);

  expect(space7).toHaveClass(classes.marked);
});

test("calls onUpdateScore if the last space is clicked at the right time", () => {
  const onUpdateScore = jest.fn();
  render(
    <ScorecardRow
      color="green"
      numbers={[2, 3, 4, 5, 6, 7]}
      index={3}
      onUpdateScore={onUpdateScore}
    />
  );
  const space2 = screen.getByText("2");
  const space3 = screen.getByText("3");
  const space4 = screen.getByText("4");
  const space5 = screen.getByText("5");
  const space6 = screen.getByText("6");
  const space7 = screen.getByText("7");

  userEvent.click(space2);
  userEvent.click(space3);
  userEvent.click(space4);
  userEvent.click(space5);
  userEvent.click(space6);
  userEvent.click(space7);

  expect(onUpdateScore).toHaveBeenCalledTimes(6);
  expect(onUpdateScore).toHaveBeenNthCalledWith(6, 3, 6);
});

test("marks the lock if it is clicked at the right time", () => {
  const onUpdateScore = jest.fn();
  render(
    <ScorecardRow
      color="green"
      numbers={[2, 3, 4, 5, 6, 7]}
      index={3}
      onUpdateScore={onUpdateScore}
    />
  );
  const space2 = screen.getByText("2");
  const space3 = screen.getByText("3");
  const space4 = screen.getByText("4");
  const space5 = screen.getByText("5");
  const space6 = screen.getByText("6");
  const space7 = screen.getByText("7");
  const lock = screen.getByLabelText(/lock/);

  userEvent.click(space2);
  userEvent.click(space3);
  userEvent.click(space4);
  userEvent.click(space5);
  userEvent.click(space6);
  userEvent.click(space7);
  userEvent.click(lock);

  expect(lock).toHaveStyle("color: black");
});

test("calls onUpdateScore if the lock is clicked at the right time", () => {
  const onUpdateScore = jest.fn();
  render(
    <ScorecardRow
      color="green"
      numbers={[2, 3, 4, 5, 6, 7]}
      index={3}
      onUpdateScore={onUpdateScore}
    />
  );
  const space2 = screen.getByText("2");
  const space3 = screen.getByText("3");
  const space4 = screen.getByText("4");
  const space5 = screen.getByText("5");
  const space6 = screen.getByText("6");
  const space7 = screen.getByText("7");
  const lock = screen.getByLabelText(/lock/);

  userEvent.click(space2);
  userEvent.click(space3);
  userEvent.click(space4);
  userEvent.click(space5);
  userEvent.click(space6);
  userEvent.click(space7);
  userEvent.click(lock);

  expect(onUpdateScore).toHaveBeenCalledTimes(7);
  expect(onUpdateScore).toHaveBeenLastCalledWith(3, 7);
});
