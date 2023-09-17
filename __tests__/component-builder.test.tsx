import ComponentBuilder from "../src";
import { describe, expect, it } from "vitest"; // <-- **
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

describe("Button", () => {
  it("render button correctly", () => {
    render(<ComponentBuilder component="a">Button</ComponentBuilder>);
    expect(screen).toBeTruthy();
  });
});
