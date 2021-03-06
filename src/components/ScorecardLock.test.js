import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ScorecardLock from "./ScorecardLock";

test("renders lock of the correct color", () => {
  render(<ScorecardLock color="red" onLockSpace={() => {}} enabled={true} />);
  const lockElement = screen.getByLabelText(/lock/);

  expect(lockElement).toHaveStyle("color: red");
});

test("does not lock space before it is clicked", () => {
  render(<ScorecardLock color="blue" onLockSpace={() => {}} enabled={true} />);
  const lockElement = screen.getByLabelText(/lock/);

  expect(lockElement).not.toHaveStyle("color: black");
});

test("does not call onLockSpace before it is clicked", () => {
  const onLockSpace = jest.fn();
  render(
    <ScorecardLock color="blue" onLockSpace={onLockSpace} enabled={true} />
  );

  expect(onLockSpace).not.toHaveBeenCalled();
});

test("locks space after it is clicked", () => {
  render(<ScorecardLock color="blue" onLockSpace={() => {}} enabled={true} />);
  const lockElement = screen.getByLabelText(/lock/);

  userEvent.click(lockElement);

  expect(lockElement).toHaveStyle("color: black");
});

test("calls onLockSpace after it is clicked", () => {
  const onLockSpace = jest.fn();
  render(
    <ScorecardLock color="blue" onLockSpace={onLockSpace} enabled={true} />
  );
  const lockElement = screen.getByLabelText(/lock/);

  userEvent.click(lockElement);

  expect(onLockSpace).toHaveBeenCalledTimes(1);
});

test("locks space after it is clicked twice", () => {
  render(<ScorecardLock color="blue" onLockSpace={() => {}} enabled={true} />);
  const lockElement = screen.getByLabelText(/lock/);

  userEvent.click(lockElement);
  userEvent.click(lockElement);

  expect(lockElement).toHaveStyle("color: black");
});

test("calls onLockSpace only once after it is clicked twice", () => {
  const onLockSpace = jest.fn();
  render(
    <ScorecardLock color="blue" onLockSpace={onLockSpace} enabled={true} />
  );
  const lockElement = screen.getByLabelText(/lock/);

  userEvent.click(lockElement);
  userEvent.click(lockElement);

  expect(onLockSpace).toHaveBeenCalledTimes(1);
});

test("does not lock space if it is clicked while not enabled", () => {
  render(
    <ScorecardLock color="green" onLockSpace={() => {}} enabled={false} />
  );
  const lockElement = screen.getByLabelText(/lock/);

  userEvent.click(lockElement);

  expect(lockElement).not.toHaveStyle("color: black");
});

test("does not call onLockSpace if it is clicked while not enabled", () => {
  const onLockSpace = jest.fn();
  render(
    <ScorecardLock color="green" onLockSpace={onLockSpace} enabled={false} />
  );
  const lockElement = screen.getByLabelText(/lock/);

  userEvent.click(lockElement);

  expect(onLockSpace).not.toHaveBeenCalled();
});
