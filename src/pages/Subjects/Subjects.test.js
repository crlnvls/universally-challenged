/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Subjects from ".";

describe("Header component", () => {
  it("Displays an H1 with appropriate text", () => {
    render(
      <BrowserRouter>
        <Subjects />
      </BrowserRouter>
    );

    const heading = screen.queryByRole("header-subjects");

    expect(heading).toBeInTheDocument();
  });
});
