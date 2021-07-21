import React from "react";
import { render, screen } from "@testing-library/react";

import ScorecardTotalBox from "./ScorecardTotalBox";

test("renders total box with the correct background color", () => {
  render(
    <ScorecardTotalBox
      backgroundColor="white"
      borderColor="black"
      total={10}
      visible={true}
    />
  );
  const boxElement = screen.getByText("10");

  expect(boxElement).toHaveStyle("background-color: white");
});

test("renders total box with the correct border color", () => {
  render(
    <ScorecardTotalBox
      backgroundColor="white"
      borderColor="black"
      total={10}
      visible={true}
    />
  );
  const boxElement = screen.getByText("10");

  expect(boxElement).toHaveStyle("border-color: black");
});

test("renders total box with the correct total number", () => {
  render(
    <ScorecardTotalBox
      backgroundColor="white"
      borderColor="black"
      total={15}
      visible={true}
    />
  );
  const boxElement = screen.getByText("15");

  expect(boxElement).toBeInTheDocument();
});

test("does not render total number when it is not visible", () => {
  render(
    <ScorecardTotalBox
      backgroundColor="white"
      borderColor="black"
      total={15}
      visible={false}
    />
  );
  const boxElement = screen.queryByText("15");

  expect(boxElement).not.toBeInTheDocument();
});
