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

const reverseStringPromise = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("There is no string"));
    }
    resolve(str.split("").reverse().join(""));
  });
};
// test promises
test("The promise should return a reserved word", () => {
  return reverseStringPromise("Platzi").then((str) => {
    expect(str).toBe("iztalP");
  });
});

// test async-await
test("the async-await block code should return a reversed word", async () => {
  const str = await reverseStringPromise("nike");
  expect(str).toBe("ekin");
});

// Function that runs after each test.
afterEach(() => console.log("After each test"));
// Function that runs after all tests.
afterAll(() => console.log("All the test ended."));

// Function that runs before each tests.
beforeEach(() => console.log("Before each test"));
// Function that runs before all tests.
beforeAll(() => console.log("Beginning of all the tests"));
