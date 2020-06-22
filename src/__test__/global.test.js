const text = "Onta Deadpool";
const skills = ["frontend", "backend", "IA"];

test("It should has the word Deadpool", () => {
  expect(text).toMatch(/Deadpool/);
});
// Test arrays
test("It should has backend?", () => {
  expect(skills).toContain("backend");
});
// Test numbers
test("It should be greater than", () => {
  expect(10).toBeGreaterThan(9);
});
// Test booleans
test("It should be true", () => {
  expect(true).toBeTruthy();
});

// reverse strings function
const reverseString = (str, cb) => {
  cb(str.split("").reverse().join(""));
};
//test callbacks
test("the callback should return a reversed word", () => {
  reverseString("Platzi", (str) => {
    expect(str).toBe("iztalP");
  });
});
