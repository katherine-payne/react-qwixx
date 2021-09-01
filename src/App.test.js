import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

test("renders heading", () => {
  render(<App />);
  const headingElement = screen.getByText("React Qwixx");
  expect(headingElement).toBeInTheDocument();
});

test("renders start form before start button is clicked", () => {
  render(<App />);
  const diceHeading = screen.getByText("Choose Dice:");
  const colorsHeading = screen.getByText("Choose Row Colors:");
  const startButton = screen.getByText("Start Game");

  expect(diceHeading).toBeInTheDocument();
  expect(colorsHeading).toBeInTheDocument();
  expect(startButton).toBeInTheDocument();
});

test("renders game after start button is clicked", () => {
  render(<App />);
  const startButton = screen.getByText("Start Game");

  userEvent.click(startButton);

  const rollButton = screen.getByText("Roll");
  const space12Array = screen.getAllByText("12");
  const newGameButton = screen.getByText("New Game");

  expect(rollButton).toBeInTheDocument();
  expect(space12Array).toHaveLength(4);
  expect(newGameButton).toBeInTheDocument();
});

test("renders scoreboard for dice type selected on start form", () => {
  render(<App />);
  const selectDice = screen.getByRole("combobox", { name: "Dice" });
  const startButton = screen.getByText("Start Game");

  userEvent.selectOptions(selectDice, "d12");
  userEvent.click(startButton);

  const space24Array = screen.getAllByText("24");

  expect(space24Array).toHaveLength(4);
});

test("renders scoreboard with colors selected on start form", () => {
  render(<App />);
  const colorPicker1 = screen.getByLabelText(/Row Color 1/);
  const colorPicker2 = screen.getByLabelText(/Row Color 2/);
  const colorPicker3 = screen.getByLabelText(/Row Color 3/);
  const colorPicker4 = screen.getByLabelText(/Row Color 4/);
  const startButton = screen.getByText("Start Game");

  fireEvent.input(colorPicker1, { target: { value: "#000000" } });
  fireEvent.input(colorPicker2, { target: { value: "#545454" } });
  fireEvent.input(colorPicker3, { target: { value: "#bababa" } });
  fireEvent.input(colorPicker4, { target: { value: "#ffffff" } });
  userEvent.click(startButton);

  const space12Array = screen.getAllByText("12");

  expect(space12Array[0]).toHaveStyle("color: #000000");
  expect(space12Array[1]).toHaveStyle("color: #545454");
  expect(space12Array[2]).toHaveStyle("color: #bababa");
  expect(space12Array[3]).toHaveStyle("color: #ffffff");
});

test("renders start form after new game button is clicked", () => {
  render(<App />);
  let startButton = screen.getByText("Start Game");

  userEvent.click(startButton);
  const newGameButton = screen.getByText("New Game");
  userEvent.click(newGameButton);

  const diceHeading = screen.getByText("Choose Dice:");
  const colorsHeading = screen.getByText("Choose Row Colors:");
  startButton = screen.getByText("Start Game");

  expect(diceHeading).toBeInTheDocument();
  expect(colorsHeading).toBeInTheDocument();
  expect(startButton).toBeInTheDocument();
});
