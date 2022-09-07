/**
 * @jest-environment jsdom
 */

import React from "react";
import * as router from "react-router";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import MultiPlayerScores from ".";

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
});

describe("MultiPlayerScores component", () => {
  beforeEach(() => {
    render(<MultiPlayerScores />);
  });

  it("Maps through all 'h1' & checks role is 'heading'", () => {
    const heading = screen.queryAllByRole("heading");

    heading.map((singleHeadingInArr) => {
      expect(singleHeadingInArr).toBeInTheDocument();
    });
  });
});
