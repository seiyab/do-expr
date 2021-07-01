import { expect, it } from "@jest/globals";
import { do_ } from "@";

it("await", async () => {
  const result = await do_(async () => {
    const x = await Promise.resolve({ isSuccess: true });
    if (x.isSuccess) return "ok";
    return "oops";
  });
  expect(result).toBe("ok");
});
