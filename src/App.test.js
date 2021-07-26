import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders heading", () => {
  render(<App />);
  const headingElement = screen.getByText("React Qwixx");
  expect(headingElement).toBeInTheDocument();
});
