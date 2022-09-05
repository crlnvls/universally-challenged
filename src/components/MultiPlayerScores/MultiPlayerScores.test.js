/**
 * @jest-environment jsdom
 */

import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import MultiPlayerScores from ".";

describe("MultiPlayerScores component", () => {
  it("Maps through all 'h1' & checks role is 'heading'", () => {
    render(<MultiPlayerScores />);

    const heading = screen.queryAllByRole("heading");

    heading.map((singleHeadingInArr) => {
      expect(singleHeadingInArr).toBeInTheDocument();
    });
  });
});
