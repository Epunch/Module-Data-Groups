const sum = require("./sum.js");

test("given an empty array, returns 0", () => {
  expect(sum([])).toBe(0);
});

test("given an array with just one number, returns that number", () => {
  expect(sum([10])).toBe(10);
});

test("given an array containing negative numbers, returns correct total", () => {
  expect(sum([10, -5, 5])).toBe(10);
});

test("given an array with decimal/float numbers, returns correct total", () => {
  expect(sum([1.5, 2.5, 1])).toBe(5);
});

test("given an array containing non-number values, ignores them", () => {
  expect(sum(["hey", 10, "hi", 60, 10])).toBe(80);
});

test("given an array with only non-number values, returns 0", () => {
  // 0 is the 'least surprising value' since it's the starting point
  expect(sum(["apple", "orange"])).toBe(0);
});
