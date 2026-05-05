const tally = require("./tally.js");

test("tally on an empty array returns an empty object", function () {
  expect(tally([])).toEqual({});
});

test("returns counts for each unique item in an array", function () {
  const input = ["a", "a", "b", "c"];
  const expected = { a: 2, b: 1, c: 1 };
  expect(tally(input)).toEqual(expected);
});

test("throws an error when passed a string instead of an array", function () {
  expect(() => {
    tally("not an array");
  }).toThrow("Input must be an array");
});
