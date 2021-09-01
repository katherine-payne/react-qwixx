import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import StartForm from "./StartForm";

test("renders dice heading", () => {
  render(
    <StartForm
      initialDice={6}
      initialColors={["red", "yellow", "green", "blue"]}
      onStartGame={() => {}}
    />
  );
  const diceHeading = screen.getByText("Choose Dice:");

  expect(diceHeading).toBeInTheDocument();
});

test("renders dice label", () => {
  render(
    <StartForm
      initialDice={6}
      initialColors={["red", "yellow", "green", "blue"]}
      onStartGame={() => {}}
    />
  );
  const diceLabel = screen.getByText("Dice");

  expect(diceLabel).toBeInTheDocument();
});

test("renders colors heading", () => {
  render(
    <StartForm
      initialDice={6}
      initialColors={["red", "yellow", "green", "blue"]}
      onStartGame={() => {}}
    />
  );
  const colorsHeading = screen.getByText("Choose Row Colors:");

  expect(colorsHeading).toBeInTheDocument();
});

test("renders color labels", () => {
  render(
    <StartForm
      initialDice={6}
      initialColors={["red", "yellow", "green", "blue"]}
      onStartGame={() => {}}
    />
  );
  const colorLabel1 = screen.getByText("Row Color 1");
  const colorLabel2 = screen.getByText("Row Color 2");
  const colorLabel3 = screen.getByText("Row Color 3");
  const colorLabel4 = screen.getByText("Row Color 4");

  expect(colorLabel1).toBeInTheDocument();
  expect(colorLabel2).toBeInTheDocument();
  expect(colorLabel3).toBeInTheDocument();
  expect(colorLabel4).toBeInTheDocument();
});

test("renders start button", () => {
  render(
    <StartForm
      initialDice={6}
      initialColors={["red", "yellow", "green", "blue"]}
      onStartGame={() => {}}
    />
  );
  const startButton = screen.getByText("Start Game");

  expect(startButton).toBeInTheDocument();
});

test("does not call onStartGame before start button is clicked", () => {
  const onStartGame = jest.fn();
  render(
    <StartForm
      initialDice={6}
      initialColors={["red", "yellow", "green", "blue"]}
      onStartGame={onStartGame}
    />
  );

  expect(onStartGame).not.toHaveBeenCalled();
});

test("calls onStartGame when start button is clicked", () => {
  const onStartGame = jest.fn();
  render(
    <StartForm
      initialDice={6}
      initialColors={["red", "yellow", "green", "blue"]}
      onStartGame={onStartGame}
    />
  );
  const startButton = screen.getByText("Start Game");

  userEvent.click(startButton);

  expect(onStartGame).toHaveBeenCalledTimes(1);
});

test("calls onStartGame with initial values when not customized", () => {
  const onStartGame = jest.fn();
  render(
    <StartForm
      initialDice={6}
      initialColors={["red", "yellow", "green", "blue"]}
      onStartGame={onStartGame}
    />
  );
  const startButton = screen.getByText("Start Game");

  userEvent.click(startButton);

  expect(onStartGame).toHaveBeenCalledWith({
    dice: 6,
    colors: ["red", "yellow", "green", "blue"],
  });
});

test("calls onStartGame with custom values when selected", () => {
  const onStartGame = jest.fn();
  render(
    <StartForm
      initialDice={6}
      initialColors={["red", "yellow", "green", "blue"]}
      onStartGame={onStartGame}
    />
  );
  const selectDice = screen.getByRole("combobox", { name: "Dice" });
  const colorPicker1 = screen.getByLabelText(/Row Color 1/);
  const colorPicker2 = screen.getByLabelText(/Row Color 2/);
  const colorPicker3 = screen.getByLabelText(/Row Color 3/);
  const colorPicker4 = screen.getByLabelText(/Row Color 4/);
  const startButton = screen.getByText("Start Game");

  userEvent.selectOptions(selectDice, "d8");
  fireEvent.input(colorPicker1, { target: { value: "#000000" } });
  fireEvent.input(colorPicker2, { target: { value: "#545454" } });
  fireEvent.input(colorPicker3, { target: { value: "#bababa" } });
  fireEvent.input(colorPicker4, { target: { value: "#ffffff" } });
  userEvent.click(startButton);

  expect(onStartGame).toHaveBeenCalledWith({
    dice: 8,
    colors: ["#000000", "#545454", "#bababa", "#ffffff"],
  });
});
