import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import GameDice from "./GameDice";

test("renders dice of the correct background colors", () => {
  const random = jest.spyOn(Math, "random");
  random.mockReturnValue(0);

  render(
    <GameDice
      maxRoll={6}
      backgroundColors={["white", "white", "red", "yellow", "green", "blue"]}
      textColors={["black", "black", "white", "white", "white", "white"]}
    />
  );
  const dice = screen.getAllByText("1");

  expect(dice).toHaveLength(6);
  expect(dice[0]).toHaveStyle("backgroundColor: white");
  expect(dice[1]).toHaveStyle("backgroundColor: white");
  expect(dice[2]).toHaveStyle("backgroundColor: red");
  expect(dice[3]).toHaveStyle("backgroundColor: yellow");
  expect(dice[4]).toHaveStyle("backgroundColor: green");
  expect(dice[5]).toHaveStyle("backgroundColor: blue");

  random.mockRestore();
});

test("renders dice of the correct text colors", () => {
  const random = jest.spyOn(Math, "random");
  random.mockReturnValue(0);

  render(
    <GameDice
      maxRoll={6}
      backgroundColors={["white", "white", "red", "yellow", "green", "blue"]}
      textColors={["black", "black", "white", "white", "white", "white"]}
    />
  );
  const dice = screen.getAllByText("1");

  expect(dice).toHaveLength(6);
  expect(dice[0]).toHaveStyle("color: black");
  expect(dice[1]).toHaveStyle("color: black");
  expect(dice[2]).toHaveStyle("color: white");
  expect(dice[3]).toHaveStyle("color: white");
  expect(dice[4]).toHaveStyle("color: white");
  expect(dice[5]).toHaveStyle("color: white");

  random.mockRestore();
});

test("assigns dice random values within the correct range", () => {
  render(
    <GameDice
      maxRoll={6}
      backgroundColors={["white", "white", "red", "yellow", "green", "blue"]}
      textColors={["black", "black", "white", "white", "white", "white"]}
    />
  );
  let numDice = 0;

  for (let i = 1; i <= 6; i++) {
    const dice = screen.queryAllByText(i);
    if (dice) {
      numDice += dice.length;
    }
  }

  expect(numDice).toBe(6);
});

test("assigns dice values within correct range when roll button is clicked", () => {
  render(
    <GameDice
      maxRoll={6}
      backgroundColors={["white", "white", "red", "yellow", "green", "blue"]}
      textColors={["black", "black", "white", "white", "white", "white"]}
    />
  );
  let numDice = 0;
  const rollButton = screen.getByText("Roll");

  userEvent.click(rollButton);

  for (let i = 1; i <= 6; i++) {
    const dice = screen.queryAllByText(i);
    if (dice) {
      numDice += dice.length;
    }
  }

  expect(numDice).toBe(6);
});

test("assigns dice values within correct range for different max roll", () => {
  render(
    <GameDice
      maxRoll={10}
      backgroundColors={["white", "white", "red", "yellow", "green", "blue"]}
      textColors={["black", "black", "white", "white", "white", "white"]}
    />
  );
  let numDice = 0;

  for (let i = 1; i <= 10; i++) {
    const dice = screen.queryAllByText(i);
    if (dice) {
      numDice += dice.length;
    }
  }

  expect(numDice).toBe(6);
});
