/**
 * @jest-environment jsdom
 */

import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import MultiPlayerLogin from ".";

describe("MultiPlayerLogin component w/ out beforeEach", () => {
  it("Displays correct Title", () => {
    const { getByText } = render(<MultiPlayerLogin title="Create your room" />);

    expect(getByText("Create your room")).toBeInTheDocument();

    waitFor(() => expect(getByText("Create your room3")).toBeInTheDocument());
  });
});
