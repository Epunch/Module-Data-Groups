const dedupe = require("./dedupe.js");

test("given an empty array, it returns an empty array", () => {
  // If input is empty, output should be empty
  expect(dedupe([])).toEqual([]);
});

test("given an array with no duplicates, it returns a copy of the original array", () => {
  // If there are no duplicates, the array stays the same
  expect(dedupe([1, 2, 3])).toEqual([1, 2, 3]);
});

test("given an array with strings or numbers, it removes duplicate values", () => {
  // Test if duplicates like 'a' or '1' are removed
  expect(dedupe(["a", "a", "b"])).toEqual(["a", "b"]);
  expect(dedupe([1, 1, 2, 2, 3])).toEqual([1, 2, 3]);
});
