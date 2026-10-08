import { describe, it, expect } from "vitest";
import { lunches } from "./lunch";

describe("lunches", () => {
  it("should have at least 3 items", () => {
    expect(lunches.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'pizza'", () => {
    expect(lunches).toContain("pizza");
  });
});