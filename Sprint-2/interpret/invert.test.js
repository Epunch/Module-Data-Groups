const invert = require("./invert.js");

describe("invert()", () => {
  test("swaps keys and values for a simple object", () => {
    const input = { a: 1, b: 2 };
    const expected = { 1: "a", 2: "b" };
    expect(invert(input)).toEqual(expected);
  });

  test("works with string values", () => {
    const input = { firstName: "John", lastName: "Doe" };
    const expected = { John: "firstName", Doe: "lastName" };
    expect(invert(input)).toEqual(expected);
  });

  test("returns an empty object when passed an empty object", () => {
    expect(invert({})).toEqual({});
  });
});
