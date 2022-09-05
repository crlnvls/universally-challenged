/**
 * @jest-environment jsdom
 */

import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import SinglePlayerLogin from ".";

describe("SinglePlayerLogin component", () => {
  beforeEach(() => {
    render(<SinglePlayerLogin />);
  });

  it("Maps through all 'h1' & checks role is 'heading'", () => {
    const heading = screen.queryAllByRole("heading");

    heading.map((singleHeadingInArr) => {
      expect(singleHeadingInArr).toBeInTheDocument();
    });
  });
});
