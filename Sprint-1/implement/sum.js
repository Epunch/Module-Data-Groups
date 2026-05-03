function sum(elements) {
  // Start with a total of 0
  let total = 0;

  // Go through every item in the array one by one
  for (let i = 0; i < elements.length; i++) {
    // We only care about numbers, so we check the type
    if (typeof elements[i] === "number") {
      // Add the number to our total
      total = total + elements[i];
    }
  }

  // Return the final result
  return total;
}

module.exports = sum;
