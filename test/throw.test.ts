import { expect, it } from "@jest/globals";
import { do_ } from "@";

describe("throw", () => {
  it("error", () => {
    expect(() => {
      const _ = do_(() => {
        const result = Number.parseInt("oops");
        if (Number.isNaN(result)) throw new Error();
        return result;
      });
    }).toThrow();
  });

  it("ok", () => {
    const result = do_(() => {
      const result = Number.parseInt("100");
      if (Number.isNaN(result)) throw new Error();
      return result;
    });
    expect(result).toBe(100);
  });
});
