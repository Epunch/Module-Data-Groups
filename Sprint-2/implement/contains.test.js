const contains = require("./contains.js");

// 1. Testing an empty object
test("contains on empty object returns false", function () {
  const result = contains({}, "a");
  expect(result).toBe(false);
});

// 2. Testing an existing property
test("returns true if the object contains the property", function () {
  const result = contains({ a: 1, b: 2 }, "a");
  expect(result).toBe(true);
});

// 3. Testing a non-existent property
test("returns false if the property does not exist", function () {
  const result = contains({ a: 1, b: 2 }, "c");
  expect(result).toBe(false);
});

// 4. Testing invalid input (Array)
test("returns false if the input is an array", function () {
  const result = contains([1, 2], "0");
  expect(result).toBe(false);
});
