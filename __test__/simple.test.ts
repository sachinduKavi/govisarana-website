import { describe, it, expect } from "@jest/globals";

describe("Simple test", () => {
  it("Simple test - 01", async () => {
    const result = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });

    expect(result).toBe(true);
  });
});
