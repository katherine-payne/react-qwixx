import React from "react";
import { render, screen } from "@testing-library/react";

import ScorecardRow from "./ScorecardRow";

test("renders spaces of the correct color", () => {
  render(<ScorecardRow color="red" numbers={[1, 2, 3]} />);
  const spaceElement = screen.getByText("1");
  expect(spaceElement).toHaveProperty("style.color", "red");
});

test("renders spaces with the correct numbers", () => {
  render(<ScorecardRow color="red" numbers={[1, 2, 3]} />);
  const space1 = screen.getByText("1");
  const space2 = screen.getByText("2");
  const space3 = screen.getByText("3");
  expect(space1).toBeInTheDocument();
  expect(space2).toBeInTheDocument();
  expect(space3).toBeInTheDocument();
});
