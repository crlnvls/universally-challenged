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

describe("SinglePlayerLogin component element roles", () => {
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

describe("Running SinglePlayerLogin component", () => {
  let component;

  beforeEach(() => {
    component = render(<SinglePlayerLogin />);
  });

  it("Renders without crashing", () => {
    component;
  });
});

describe("Attribute testing", () => {
  test("should find 'h1' id attribute", () => {
    const { container } = render(<SinglePlayerLogin />);
    console.log("LOOK==> ", container.outerHTML);
    const mockComponent = container.querySelector("h1#singlePlayerTitle");
    expect(mockComponent).toBeInTheDocument();
  });

  test("should find form id attribute", () => {
    const { container } = render(<SinglePlayerLogin />);
    const mockComponent = container.querySelector(
      "form#singlePlayerFormContainer"
    );
    expect(mockComponent).toBeInTheDocument();
  });

  test("should find input id attribute", () => {
    const { container } = render(<SinglePlayerLogin />);
    const mockComponent = container.querySelector("input#username");
    expect(mockComponent).toBeInTheDocument();
  });

  test("should find button class attribute", () => {
    const { container } = render(<SinglePlayerLogin />);
    const mockComponent = container.querySelector("button.btn");
    expect(mockComponent).toBeInTheDocument();
  });
});
