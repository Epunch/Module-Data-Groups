// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

// 1. Existing Test (Fixed now)
test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});

// 2. Edge Case: Empty String
test("returns empty object for empty string", () => {
  expect(parseQueryString("")).toEqual({});
});

// 3. Edge Case: Multiple Parameters
test("parses multiple parameters correctly", () => {
  expect(parseQueryString("name=alice&age=25")).toEqual({
    name: "alice",
    age: "25",
  });
});
