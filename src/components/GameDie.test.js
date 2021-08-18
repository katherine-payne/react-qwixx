import React from "react";
import { render, screen } from "@testing-library/react";

import GameDie from "./GameDie";

test("renders die of the correct background color", () => {
  render(<GameDie backgroundColor="red" textColor="white" number={6} />);
  const dieElement = screen.getByText("6");

  expect(dieElement).toHaveStyle("backgroundColor: red");
});

test("renders die of the correct text color", () => {
  render(<GameDie backgroundColor="red" textColor="white" number={6} />);
  const dieElement = screen.getByText("6");

  expect(dieElement).toHaveStyle("color: white");
});

test("renders die with the correct number", () => {
  render(<GameDie backgroundColor="red" textColor="white" number={6} />);
  const dieElement = screen.getByText("6");

  expect(dieElement).toBeInTheDocument();
});
