function findMax(elements) {
  // First, we filter the list to keep ONLY numbers
  const onlyNumbers = elements.filter((item) => typeof item === "number");

  // If there are no numbers at all, we return -Infinity (standard math behavior)
  if (onlyNumbers.length === 0) {
    return -Infinity;
  }

  // Use Math.max with the spread operator (...) to find the largest number
  return Math.max(...onlyNumbers);
}

module.exports = findMax;
