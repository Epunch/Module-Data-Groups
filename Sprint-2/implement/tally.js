function tally(items) {
  // Error handling: if input is not an array, throw an error as requested
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  const result = {};

  if (items.length === 0) {
    return result;
  }

  for (const item of items) {
    // If the item is already a key in our object, increment it
    if (item in result) {
      result[item] = result[item] + 1;
    } else {
      // Otherwise, it's the first time we see it, so set it to 1
      result[item] = 1;
    }
  }

  return result;
}

module.exports = tally;

console.log(tally(["apple", "banana", "apple"]));
