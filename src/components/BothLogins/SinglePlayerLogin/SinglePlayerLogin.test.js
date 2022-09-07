/**
 * @jest-environment jsdom
 */

import React from "react";
import * as router from "react-router";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import SinglePlayerLogin from ".";

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
});

describe("SinglePlayerLogin component", () => {
  beforeEach(() => {
    render(<SinglePlayerLogin inputValue={{ username: "Test" }} />);
  });

  describe("To check roles of elements", () => {
    it("Maps through all 'h1' & checks role is 'heading'", () => {
      const heading = screen.queryAllByRole("heading");

      heading.map((singleHeadingInArr) => {
        expect(singleHeadingInArr).toBeInTheDocument();
      });
    });

    it("Checks form element role is 'form", () => {
      const form = screen.queryByRole("form");
      expect(form).toBeInTheDocument();
    });

    it("Checks input element role is 'input", () => {
      const input = screen.queryByRole("input");
      expect(input).toBeInTheDocument();
    });

    it("Checks p element role is 'warningPara", () => {
      const paraElem = screen.queryByRole("warningPara");
      expect(paraElem).not.toBeInTheDocument();
    });

    it("Checks button element role is 'submit", () => {
      const button = screen.queryByRole("submit");
      expect(button).toBeInTheDocument();
    });
  });
});
