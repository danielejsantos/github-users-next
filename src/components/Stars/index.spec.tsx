import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
// import { expect, describe, it } from "@jest/globals";

// const { expect, describe, it } = require("@jest/globals");

import Stars from ".";

jest.mock("../../contexts/userData", () => ({
  useGitHub: jest.fn(() => ({ userData: {} })),
}));

describe("Stars component", () => {
  it("should render default empty stars when user has no followers and publicRepos", () => {
    const { container } = render(<Stars />);

    expect(container.querySelectorAll("svg")).toHaveLength(5);
  });

  it("should render 1 filled star when user has up to 2 followers and 1 or more repositories", () => {
    jest
      .spyOn(require("../../contexts/userData"), "useGitHub")
      .mockReturnValue({
        userData: { followers: 2, public_repos: 1 },
      });

    const { container } = render(<Stars />);

    const starSharpIcon = container.querySelectorAll(
      "[data-testid='StarSharpIcon']"
    );
    const starOutlineIcon = container.querySelectorAll(
      "[data-testid='StarOutlineIcon']"
    );

    expect(starSharpIcon.length).toBe(1);
    expect(starOutlineIcon.length).toBe(4);
  });

  it("should render 2 filled stars when user has up to 4 followers and 3 or more repositories", () => {
    jest
      .spyOn(require("../../contexts/userData"), "useGitHub")
      .mockReturnValue({
        userData: { followers: 4, public_repos: 3 },
      });

    const { container } = render(<Stars />);

    const starSharpIcon = container.querySelectorAll(
      "[data-testid='StarSharpIcon']"
    );
    const starOutlineIcon = container.querySelectorAll(
      "[data-testid='StarOutlineIcon']"
    );

    expect(starSharpIcon.length).toBe(2);
    expect(starOutlineIcon.length).toBe(3);
  });

  it("should render 3 filled stars when user has up to 6 followers and 5 or more repositories", () => {
    jest
      .spyOn(require("../../contexts/userData"), "useGitHub")
      .mockReturnValue({
        userData: { followers: 6, public_repos: 6 },
      });

    const { container } = render(<Stars />);

    const starSharpIcon = container.querySelectorAll(
      "[data-testid='StarSharpIcon']"
    );
    const starOutlineIcon = container.querySelectorAll(
      "[data-testid='StarOutlineIcon']"
    );

    expect(starSharpIcon.length).toBe(3);
    expect(starOutlineIcon.length).toBe(2);
  });

  it("should render 4 filled stars when user has up to 9 followers and 7 or more repositories", () => {
    jest
      .spyOn(require("../../contexts/userData"), "useGitHub")
      .mockReturnValue({
        userData: { followers: 9, public_repos: 10 },
      });

    const { container } = render(<Stars />);

    const starSharpIcon = container.querySelectorAll(
      "[data-testid='StarSharpIcon']"
    );
    const starOutlineIcon = container.querySelectorAll(
      "[data-testid='StarOutlineIcon']"
    );

    expect(starSharpIcon.length).toBe(4);
    expect(starOutlineIcon.length).toBe(1);
  });

  it("should render 5 filled stars when user has 10 or more followers and 8 or more repositories", () => {
    jest
      .spyOn(require("../../contexts/userData"), "useGitHub")
      .mockReturnValue({
        userData: { followers: 100, public_repos: 42 },
      });

    const { container } = render(<Stars />);

    const starSharpIcon = container.querySelectorAll(
      "[data-testid='StarSharpIcon']"
    );
    const starOutlineIcon = container.querySelectorAll(
      "[data-testid='StarOutlineIcon']"
    );

    expect(starSharpIcon.length).toBe(5);
    expect(starOutlineIcon.length).toBe(0);
  });
});
