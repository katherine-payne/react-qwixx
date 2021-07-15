import React from "react";
import { render } from "@testing-library/react";

import Scorecard from "./Scorecard";

test("renders without errors", () => {
  expect(render(<Scorecard />)).toBeTruthy();
});
