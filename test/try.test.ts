import { expect, it } from "@jest/globals";
import { do_ } from "@";

it("try", () => {
  const result = do_(() => {
    try {
      throw new Error();
    } catch {
      return "caught";
    }
  });
  expect(result).toBe("caught");
});
