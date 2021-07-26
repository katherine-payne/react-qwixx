import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ScorecardLock from "./ScorecardLock";

test("renders lock of the correct color", () => {
  render(<ScorecardLock color="red" />);
  const lockElement = screen.getByLabelText(/lock/);

  expect(lockElement).toHaveStyle("color: red");
});

test("does not lock space before it is clicked", () => {
  render(<ScorecardLock color="blue" />);
  const lockElement = screen.getByLabelText(/lock/);

  expect(lockElement).not.toHaveStyle("color: black");
});

test("locks space after it is clicked", () => {
  render(<ScorecardLock color="blue" />);
  const lockElement = screen.getByLabelText(/lock/);

  userEvent.click(lockElement);

  expect(lockElement).toHaveStyle("color: black");
});

test("locks space after it is clicked twice", () => {
  render(<ScorecardLock color="blue" />);
  const lockElement = screen.getByLabelText(/lock/);

  userEvent.click(lockElement);
  userEvent.click(lockElement);

  expect(lockElement).toHaveStyle("color: black");
});
