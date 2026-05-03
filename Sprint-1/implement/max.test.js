const findMax = require("./max.js");

test("given an empty array, returns -Infinity", () => {
  // Test case for empty input
  expect(findMax([])).toBe(-Infinity);
});

test("given an array with one number, it returns that number", () => {
  // Test case for single element
  expect(findMax([5])).toBe(5);
});

test("given an array with both positive and negative numbers, it returns the largest", () => {
  // Test case for mixed positive and negative numbers
  expect(findMax([-1, 10, -5])).toBe(10);
});

test("given an array with just negative numbers, it returns the closest one to zero", () => {
  // Test case for negative numbers
  expect(findMax([-10, -1, -5])).toBe(-1);
});

test("given an array with decimal numbers, it returns the largest decimal number", () => {
  // Test case for decimal numbers
  expect(findMax([1.1, 1.5, 1.2])).toBe(1.5);
});

test("given an array with non-number values, it returns the max and ignores others", () => {
  // Test case to ensure non-numeric values are ignored
  expect(findMax([10, "hi", 20, null])).toBe(20);
});

test("given an array with only non-number values, it returns -Infinity", () => {
  // Test case where no valid numbers exist in the array
  expect(findMax(["a", "b", "c"])).toBe(-Infinity);
});
