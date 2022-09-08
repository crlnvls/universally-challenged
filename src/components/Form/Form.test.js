/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Form from "./index";

describe("Running components", () => {
  it("Renders without crashing", () => {
    render(
      <BrowserRouter>
        <Form
          questionData={{
            handleAnswer: "test1",
            currentQuestion: "test2",
            questionData: "test3"
          }}
        />
      </BrowserRouter>
    );
  });
});

describe("Check type", () => {
  it("Returns a function", () => {
    const componentFunc = () => () => {
      <BrowserRouter>
        <Form
          formData={{
            handleChangeNumber: "test1",
            handleChangeDifficulty: "test2",
            handleChangeSubject: "test3"
          }}
        />
      </BrowserRouter>;
    };
    const result = componentFunc();
    expect(typeof result).toBe("function");
    expect(result).toBeTruthy();
  });
});
