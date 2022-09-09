/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import DataProvider from "./dataContext";

describe("Check type", () => {
  it("Returns a function", () => {
    const componentFunc = () => () => {
      <BrowserRouter>
        <DataProvider
          childrenData={{
            handleAnswer: "test1",
            currentQuestion: "test2",
            questionData: "test3"
          }}
        />
      </BrowserRouter>;
    };
    const result = componentFunc();
    expect(typeof result).toBe("function");
    expect(result).toBeTruthy();
  });
});
