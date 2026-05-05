function createLookup(countryCurrencyPairs) {
  // Error handling: If input is not an array, return an empty object
  if (!Array.isArray(countryCurrencyPairs)) {
    return {};
  }

  // We create an empty object to store our pairs
  const lookup = {};

  // We loop through each pair in the array
  for (const pair of countryCurrencyPairs) {
    const country = pair[0]; // The first item is the country code
    const currency = pair[1]; // The second item is the currency code

    // We add this pair to our object
    lookup[country] = currency;
  }

  return lookup;
}

module.exports = createLookup;

// --- Manual Test ---
const inputData = [
  ["US", "USD"],
  ["CA", "CAD"],
  ["BE", "EUR"],
];
const result = createLookup(inputData);

console.log("My Result:");
console.log(result);
// -------------------
