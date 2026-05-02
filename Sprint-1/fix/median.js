function calculateMedian(list) {
  // Check if input is a valid array
  if (!Array.isArray(list)) {
    return null;
  }

  // Filter the list to keep only numbers
  const numbers = list.filter((item) => typeof item === "number");

  // Return null if no numbers are found
  if (numbers.length === 0) {
    return null;
  }

  // Sort the numbers in ascending order
  // Note: we use [...numbers] or just numbers because filter already created a new array
  numbers.sort((a, b) => a - b);

  const middleIndex = Math.floor(numbers.length / 2);

  // If the count of numbers is odd, return the middle one
  if (numbers.length % 2 !== 0) {
    return numbers[middleIndex];
  }

  // If the count is even, return the average of the two middle numbers
  return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
}
module.exports = calculateMedian;
