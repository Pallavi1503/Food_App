import React from "react";
import "@testing-library/jest-dom";
import Contact from "../Contact";
import { render, screen } from "@testing-library/react";

describe("Contact Component", () => {
  beforeAll(() => {
    console.log(1);
  });
  beforeEach(() => {
    console.log("before each");
  });
  afterAll(() => {
    console.log("After All");
  });
  afterEach(() => {
    console.log("After each");
  });
  test("should render contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  /* test("should render contact us component",()=>{
    render(<Contact/>);

    const button=screen.getByRole("button")

    expect(button).toBeInTheDocument();
}) */

  test("should render contact us component", () => {
    render(<Contact />);

    const button = screen.getByText("Click 1");

    expect(button).toBeInTheDocument();
  });
  //test/it both are same it is just a alias
  it("should render contact us component", () => {
    render(<Contact />);

    const button = screen.getAllByRole("button");

    expect(button.length).toBe(2);
  });
});
