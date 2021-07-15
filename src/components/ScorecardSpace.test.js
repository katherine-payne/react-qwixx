import React from "react";
import { render, screen } from "@testing-library/react";

import ScorecardSpace from "./ScorecardSpace";

test("renders space of the correct color", () => {
  render(<ScorecardSpace color="red" number={1} />);
  const spaceElement = screen.getByText("1");
  expect(spaceElement).toHaveProperty("style.color", "red");
});

test("renders space with the correct number", () => {
  render(<ScorecardSpace color="red" number={1} />);
  const spaceElement = screen.getByText("1");
  expect(spaceElement).toBeInTheDocument();
});
