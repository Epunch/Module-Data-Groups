// This function checks if the target exists in the list
function includes(list, target) {
  // We use for...of for a cleaner syntax (refactoring)
  for (const element of list) {
    if (element === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;
