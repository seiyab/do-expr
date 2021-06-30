import { expect, it } from "@jest/globals";
import { do_ } from "@";

it("if", () => {
  const result = do_(() => {
    if (1 % 2 === 1) return "true";
    return "false";
  });
  expect(result).toBe("true");
});
