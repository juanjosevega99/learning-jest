const randomStrings = require("../index");

describe("Test randomString function", () => {
  test("It should return a string", () => {
    expect(typeof randomStrings()).toBe("string");
  });

  test("Check if a sport does not exits", () => {
    expect(randomStrings()).not.toMatch(/trail/);
  });
});
