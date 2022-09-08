/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import {
  AnswerForm,
  SinglePlayerLogin,
  MultiPlayerLogin,
  Form,
  MultiPlayerScores,
  QNumber,
  Question,
  Subject
} from "./index";

describe("Running components", () => {
  const componentsArr = [
    AnswerForm,
    SinglePlayerLogin,
    MultiPlayerLogin,
    Form,
    MultiPlayerScores,
    QNumber,
    Question,
    Subject
  ];

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
