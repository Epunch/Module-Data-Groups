function contains(object, propertyName) {
  // Check if object is null or not an object (like a string or number)
  // Also check if it's an array, because we want to return false for arrays
  if (object === null || typeof object !== "object" || Array.isArray(object)) {
    return false;
  }

  // The 'in' operator checks for the key in the object
  return propertyName in object;
}

// Manual test - Run this file using: node implement/contains.js
console.log("Test 1 (Should be true):", contains({ a: 1 }, "a"));
console.log("Test 2 (Should be false):", contains({}, "a"));
console.log("Test 3 (Should be false):", contains([], "a"));

module.exports = contains;
