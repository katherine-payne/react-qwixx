import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ScorecardSpace from "./ScorecardSpace";
import classes from "./ScorecardSpace.module.css";

test("renders space of the correct color", () => {
  render(
    <ScorecardSpace
      color="red"
      number={1}
      onMarkSpace={() => {}}
      enabled={true}
    />
  );
  const spaceElement = screen.getByText("1");

  expect(spaceElement).toHaveStyle("color: red");
});

test("renders space with the correct number", () => {
  render(
    <ScorecardSpace
      color="red"
      number={1}
      onMarkSpace={() => {}}
      enabled={true}
    />
  );
  const spaceElement = screen.getByText("1");

  expect(spaceElement).toBeInTheDocument();
});

test("does not mark space before it is clicked", () => {
  render(
    <ScorecardSpace
      color="blue"
      number={2}
      onMarkSpace={() => {}}
      enabled={true}
    />
  );
  const spaceElement = screen.getByText("2");

  expect(spaceElement).not.toHaveClass(classes.marked);
});

test("does not call onMarkSpace before it is clicked", () => {
  const onMarkSpace = jest.fn();
  render(
    <ScorecardSpace
      color="blue"
      number={2}
      onMarkSpace={onMarkSpace}
      enabled={true}
    />
  );

  expect(onMarkSpace).not.toHaveBeenCalled();
});

test("marks space after it is clicked", () => {
  render(
    <ScorecardSpace
      color="blue"
      number={2}
      onMarkSpace={() => {}}
      enabled={true}
    />
  );
  const spaceElement = screen.getByText("2");

  userEvent.click(spaceElement);

  expect(spaceElement).toHaveClass(classes.marked);
});

test("calls onMarkSpace after it is clicked", () => {
  const onMarkSpace = jest.fn();
  render(
    <ScorecardSpace
      color="blue"
      number={2}
      onMarkSpace={onMarkSpace}
      enabled={true}
    />
  );
  const spaceElement = screen.getByText("2");

  userEvent.click(spaceElement);

  expect(onMarkSpace).toHaveBeenCalledTimes(1);
});

test("marks space after it is clicked twice", () => {
  render(
    <ScorecardSpace
      color="blue"
      number={2}
      onMarkSpace={() => {}}
      enabled={true}
    />
  );
  const spaceElement = screen.getByText("2");

  userEvent.click(spaceElement);
  userEvent.click(spaceElement);

  expect(spaceElement).toHaveClass(classes.marked);
});

test("calls onMarkSpace only once after it is clicked twice", () => {
  const onMarkSpace = jest.fn();
  render(
    <ScorecardSpace
      color="blue"
      number={2}
      onMarkSpace={onMarkSpace}
      enabled={true}
    />
  );
  const spaceElement = screen.getByText("2");

  userEvent.click(spaceElement);
  userEvent.click(spaceElement);

  expect(onMarkSpace).toHaveBeenCalledTimes(1);
});

test("does not mark space if it is clicked while not enabled", () => {
  render(
    <ScorecardSpace
      color="green"
      number={3}
      onMarkSpace={() => {}}
      enabled={false}
    />
  );
  const spaceElement = screen.getByText("3");

  userEvent.click(spaceElement);

  expect(spaceElement).not.toHaveClass(classes.marked);
});

test("does not call onMarkSpace if it is clicked while not enabled", () => {
  const onMarkSpace = jest.fn();
  render(
    <ScorecardSpace
      color="green"
      number={3}
      onMarkSpace={onMarkSpace}
      enabled={false}
    />
  );
  const spaceElement = screen.getByText("3");

  userEvent.click(spaceElement);

  expect(onMarkSpace).not.toHaveBeenCalled();
});
