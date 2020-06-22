const text = "Hello World";

test("Must have a text", () => {
  expect(text).toMatch(/World/);
});
