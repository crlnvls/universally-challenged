/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import ScoreMulti from ".";

describe("Running component", () => {
  it("Renders without crashing", () => {
    render(
      <BrowserRouter>
        <ScoreMulti />
      </BrowserRouter>
    );
  });
});
