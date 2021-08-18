import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Scorecard from "./Scorecard";
import spaceClasses from "./ScorecardSpace.module.css";
import boxClasses from "./ScorecardPenaltyBox.module.css";

test("renders without errors", () => {
  expect(
    render(
      <Scorecard
        backgroundColors={["red", "yellow", "lime", "blue"]}
        colors={["darkred", "gold", "green", "mediumblue"]}
      />
    )
  ).toBeTruthy();
});

test("renders rows of the correct color", () => {
  render(
    <Scorecard
      backgroundColors={["red", "yellow", "lime", "blue"]}
      colors={["darkred", "gold", "green", "mediumblue"]}
    />
  );
  const space6Array = screen.getAllByText("6");

  expect(space6Array[0]).toHaveStyle("color: darkred");
  expect(space6Array[1]).toHaveStyle("color: gold");
  expect(space6Array[2]).toHaveStyle("color: green");
  expect(space6Array[3]).toHaveStyle("color: mediumblue");
});

test("renders total boxes of the correct background color", () => {
  render(
    <Scorecard
      backgroundColors={["red", "yellow", "lime", "blue"]}
      colors={["darkred", "gold", "green", "mediumblue"]}
    />
  );

  const calcScoreButton = screen.getByText("Calculate Score");
  userEvent.click(calcScoreButton);

  const total0Boxes = screen.getAllByText("0");

  expect(total0Boxes[0]).toHaveStyle("backgroundColor: red");
  expect(total0Boxes[1]).toHaveStyle("backgroundColor: yellow");
  expect(total0Boxes[2]).toHaveStyle("backgroundColor: lime");
  expect(total0Boxes[3]).toHaveStyle("backgroundColor: blue");
});

test("renders total boxes of the correct border color", () => {
  render(
    <Scorecard
      backgroundColors={["red", "yellow", "lime", "blue"]}
      colors={["darkred", "gold", "green", "mediumblue"]}
    />
  );

  const calcScoreButton = screen.getByText("Calculate Score");
  userEvent.click(calcScoreButton);

  const total0Boxes = screen.getAllByText("0");

  expect(total0Boxes[0]).toHaveStyle("borderColor: darkred");
  expect(total0Boxes[1]).toHaveStyle("borderColor: gold");
  expect(total0Boxes[2]).toHaveStyle("borderColor: green");
  expect(total0Boxes[3]).toHaveStyle("borderColor: mediumblue");
});

test("marks a space in the correct row after it is clicked", () => {
  render(
    <Scorecard
      backgroundColors={["red", "yellow", "lime", "blue"]}
      colors={["darkred", "gold", "green", "mediumblue"]}
    />
  );
  const spacesArray = screen.getAllByText("2");

  userEvent.click(spacesArray[1]);

  expect(spacesArray[0]).not.toHaveClass(spaceClasses.marked);
  expect(spacesArray[1]).toHaveClass(spaceClasses.marked);
  expect(spacesArray[2]).not.toHaveClass(spaceClasses.marked);
  expect(spacesArray[3]).not.toHaveClass(spaceClasses.marked);
});

test("marks multiple spaces in different rows after they are clicked", () => {
  render(
    <Scorecard
      backgroundColors={["red", "yellow", "lime", "blue"]}
      colors={["darkred", "gold", "green", "mediumblue"]}
    />
  );
  const space3Array = screen.getAllByText("3");
  const space11Array = screen.getAllByText("11");

  userEvent.click(space3Array[1]);
  userEvent.click(space11Array[2]);

  expect(space3Array[0]).not.toHaveClass(spaceClasses.marked);
  expect(space3Array[1]).toHaveClass(spaceClasses.marked);
  expect(space3Array[2]).not.toHaveClass(spaceClasses.marked);
  expect(space3Array[3]).not.toHaveClass(spaceClasses.marked);
  expect(space11Array[0]).not.toHaveClass(spaceClasses.marked);
  expect(space11Array[1]).not.toHaveClass(spaceClasses.marked);
  expect(space11Array[2]).toHaveClass(spaceClasses.marked);
  expect(space11Array[3]).not.toHaveClass(spaceClasses.marked);
});

test("marks multiple spaces with the same number after they are clicked", () => {
  render(
    <Scorecard
      backgroundColors={["red", "yellow", "lime", "blue"]}
      colors={["darkred", "gold", "green", "mediumblue"]}
    />
  );
  const spacesArray = screen.getAllByText("6");

  userEvent.click(spacesArray[0]);
  userEvent.click(spacesArray[2]);

  expect(spacesArray[0]).toHaveClass(spaceClasses.marked);
  expect(spacesArray[1]).not.toHaveClass(spaceClasses.marked);
  expect(spacesArray[2]).toHaveClass(spaceClasses.marked);
  expect(spacesArray[3]).not.toHaveClass(spaceClasses.marked);
});

test("locks multiple locks in different rows after they are clicked", () => {
  render(
    <Scorecard
      backgroundColors={["red", "yellow", "lime", "blue"]}
      colors={["darkred", "gold", "green", "mediumblue"]}
    />
  );
  const space12Array = screen.getAllByText("12");
  const space11Array = screen.getAllByText("11");
  const space10Array = screen.getAllByText("10");
  const space9Array = screen.getAllByText("9");
  const space8Array = screen.getAllByText("8");
  const space2Array = screen.getAllByText("2");
  const locksArray = screen.getAllByLabelText(/lock/);

  userEvent.click(space12Array[2]);
  userEvent.click(space11Array[2]);
  userEvent.click(space10Array[2]);
  userEvent.click(space9Array[2]);
  userEvent.click(space8Array[2]);
  userEvent.click(space2Array[2]);
  userEvent.click(locksArray[2]);

  userEvent.click(space12Array[3]);
  userEvent.click(space11Array[3]);
  userEvent.click(space10Array[3]);
  userEvent.click(space9Array[3]);
  userEvent.click(space8Array[3]);
  userEvent.click(space2Array[3]);
  userEvent.click(locksArray[3]);

  expect(locksArray[0]).not.toHaveStyle("color: black");
  expect(locksArray[1]).not.toHaveStyle("color: black");
  expect(locksArray[2]).toHaveStyle("color: black");
  expect(locksArray[3]).toHaveStyle("color: black");
});

test("marks multiple penalty boxes after they are clicked", () => {
  render(
    <Scorecard
      backgroundColors={["red", "yellow", "lime", "blue"]}
      colors={["darkred", "gold", "green", "mediumblue"]}
    />
  );
  const boxesArray = screen.getAllByLabelText(/penalty box/);

  userEvent.click(boxesArray[0]);
  userEvent.click(boxesArray[3]);

  expect(boxesArray[0]).toHaveClass(boxClasses.marked);
  expect(boxesArray[1]).not.toHaveClass(boxClasses.marked);
  expect(boxesArray[2]).not.toHaveClass(boxClasses.marked);
  expect(boxesArray[3]).toHaveClass(boxClasses.marked);
});

test("shows correct totals when no boxes have been clicked", () => {
  render(
    <Scorecard
      backgroundColors={["red", "yellow", "lime", "blue"]}
      colors={["darkred", "gold", "green", "mediumblue"]}
    />
  );

  const calcScoreButton = screen.getByText("Calculate Score");
  userEvent.click(calcScoreButton);

  const totalBoxes = screen.getAllByText("0");

  expect(totalBoxes).toHaveLength(6);
});

test("updates totals correctly after a space is clicked", () => {
  render(
    <Scorecard
      backgroundColors={["red", "yellow", "lime", "blue"]}
      colors={["darkred", "gold", "green", "mediumblue"]}
    />
  );

  const spacesArray = screen.getAllByText("6");
  userEvent.click(spacesArray[0]);
  const calcScoreButton = screen.getByText("Calculate Score");
  userEvent.click(calcScoreButton);

  const total0Boxes = screen.getAllByText("0");
  const total1Boxes = screen.getAllByText("1");

  expect(total0Boxes).toHaveLength(4);
  expect(total1Boxes).toHaveLength(2);
});

test("updates totals correctly after a lock is clicked", () => {
  render(
    <Scorecard
      backgroundColors={["red", "yellow", "lime", "blue"]}
      colors={["darkred", "gold", "green", "mediumblue"]}
    />
  );

  const space2Array = screen.getAllByText("2");
  const space3Array = screen.getAllByText("3");
  const space4Array = screen.getAllByText("4");
  const space5Array = screen.getAllByText("5");
  const space6Array = screen.getAllByText("6");
  const space12Array = screen.getAllByText("12");
  const locksArray = screen.getAllByLabelText(/lock/);

  userEvent.click(space2Array[1]);
  userEvent.click(space3Array[1]);
  userEvent.click(space4Array[1]);
  userEvent.click(space5Array[1]);
  userEvent.click(space6Array[1]);
  userEvent.click(space12Array[1]);
  userEvent.click(locksArray[1]);
  const calcScoreButton = screen.getByText("Calculate Score");
  userEvent.click(calcScoreButton);

  const total0Boxes = screen.getAllByText("0");
  const total28Boxes = screen.getAllByText("28");

  expect(total0Boxes).toHaveLength(4);
  expect(total28Boxes).toHaveLength(2);
});

test("updates totals correctly after a penalty box is clicked", () => {
  render(
    <Scorecard
      backgroundColors={["red", "yellow", "lime", "blue"]}
      colors={["darkred", "gold", "green", "mediumblue"]}
    />
  );

  const boxesArray = screen.getAllByLabelText(/penalty box/);
  userEvent.click(boxesArray[0]);
  userEvent.click(boxesArray[1]);
  userEvent.click(boxesArray[2]);
  const calcScoreButton = screen.getByText("Calculate Score");
  userEvent.click(calcScoreButton);

  const total0Boxes = screen.getAllByText("0");
  const total15Boxes = screen.getAllByText("15");
  const totalMinus15Boxes = screen.getAllByText("-15");

  expect(total0Boxes).toHaveLength(4);
  expect(total15Boxes).toHaveLength(1);
  expect(totalMinus15Boxes).toHaveLength(1);
});

test("does not update totals when boxes that are not enabled are clicked", () => {
  render(
    <Scorecard
      backgroundColors={["red", "yellow", "lime", "blue"]}
      colors={["darkred", "gold", "green", "mediumblue"]}
    />
  );

  const space6Array = screen.getAllByText("6");
  const space5Array = screen.getAllByText("5");
  const locksArray = screen.getAllByLabelText(/lock/);

  userEvent.click(space6Array[0]);
  userEvent.click(space5Array[0]);
  userEvent.click(locksArray[0]);
  const calcScoreButton = screen.getByText("Calculate Score");
  userEvent.click(calcScoreButton);

  const total0Boxes = screen.getAllByText("0");
  const total1Boxes = screen.getAllByText("1");

  expect(total0Boxes).toHaveLength(4);
  expect(total1Boxes).toHaveLength(2);
});

test("shows correct totals when multiple boxes have been clicked", () => {
  render(
    <Scorecard
      backgroundColors={["red", "yellow", "lime", "blue"]}
      colors={["darkred", "gold", "green", "mediumblue"]}
    />
  );

  const space2Array = screen.getAllByText("2");
  const space3Array = screen.getAllByText("3");
  const space4Array = screen.getAllByText("4");
  const space5Array = screen.getAllByText("5");
  const space6Array = screen.getAllByText("6");
  const space12Array = screen.getAllByText("12");
  const locksArray = screen.getAllByLabelText(/lock/);
  const boxesArray = screen.getAllByLabelText(/penalty box/);

  userEvent.click(space2Array[0]);
  userEvent.click(space3Array[0]);
  userEvent.click(space4Array[0]);
  userEvent.click(space5Array[0]);
  userEvent.click(space6Array[0]);
  userEvent.click(space6Array[1]);
  userEvent.click(space12Array[0]);
  userEvent.click(locksArray[0]);
  userEvent.click(boxesArray[0]);
  const calcScoreButton = screen.getByText("Calculate Score");
  userEvent.click(calcScoreButton);

  const total0Boxes = screen.getAllByText("0");
  const total1Boxes = screen.getAllByText("1");
  const spaceAndTotal5Boxes = screen.getAllByText("5");
  const total28Boxes = screen.getAllByText("28");
  const total24Boxes = screen.getAllByText("24");

  expect(total0Boxes).toHaveLength(2);
  expect(total1Boxes).toHaveLength(1);
  expect(spaceAndTotal5Boxes).toHaveLength(5);
  expect(total28Boxes).toHaveLength(1);
  expect(total24Boxes).toHaveLength(1);
});
