import { expect, it } from "@jest/globals";
import { do_ } from "@";

var x = 1; // eslint-disable-line

it("hoisting", () => {
  const result = do_(() => {
    return x;
    var x; // eslint-disable-line
  });
  expect(result).toBe(undefined);
});
