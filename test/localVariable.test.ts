import { expect, it } from "@jest/globals";
import { do_ } from "@";

it("local variable", () => {
  const result = do_(() => {
    const x = 4;
    return x * (x + 1);
  });

  expect(result).toBe(20);
});
