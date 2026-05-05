const createLookup = require("./lookup.js");

test("creates a country currency code lookup for multiple codes", function () {
  const input = [
    ["US", "USD"],
    ["CA", "CAD"],
    ["GB", "GBP"],
  ];

  const expectedOutput = {
    US: "USD",
    CA: "CAD",
    GB: "GBP",
  };

  const result = createLookup(input);

  // In Jest, we use toEqual to compare objects
  expect(result).toEqual(expectedOutput);
});

test("returns an empty object when passed an empty array", function () {
  const result = createLookup([]);
  expect(result).toEqual({});
});
