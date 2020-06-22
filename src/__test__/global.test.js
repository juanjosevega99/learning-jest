const text = "Onta Deadpool";

test("It should has the word Deadpool", () => {
  expect(text).toMatch(/Deadpool/);
});
