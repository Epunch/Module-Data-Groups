function dedupe(elements) {
  // Create a new empty array to store unique items
  let uniqueItems = [];

  // Loop through every item in the input array
  for (let i = 0; i < elements.length; i++) {
    // Check if the item is already in our uniqueItems array
    if (!uniqueItems.includes(elements[i])) {
      // If not present, add it to the uniqueItems array
      uniqueItems.push(elements[i]);
    }
  }

  // Return the final array without duplicates
  return uniqueItems;
}

module.exports = dedupe;
