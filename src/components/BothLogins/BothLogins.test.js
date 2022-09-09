/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { SinglePlayerLogin, MultiPlayerLogin } from "./index";

describe("Running components", () => {
  const componentsArr = [SinglePlayerLogin, MultiPlayerLogin];

  it("Renders without crashing", () => {
    render(
      <BrowserRouter>
        {componentsArr.forEach((singleComponent) => {
          return singleComponent;
        })}
      </BrowserRouter>
    );
  });
});
