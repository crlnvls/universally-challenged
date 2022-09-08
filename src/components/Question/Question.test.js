/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Question from "./index";

describe("Running components", () => {
  it("Renders without crashing", () => {
    render(
      <BrowserRouter>
        <Question
          questionData={
            ({ question1: "test1", answer1: "test2" },
            { question2: "test4", answer2: "test5" })
          }
        />
      </BrowserRouter>
    );
  });
});

describe("Check type", () => {
  it("Returns a function", () => {
    const componentFunc = () => () => {
      <BrowserRouter>
        <Question
          questionData={{
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
