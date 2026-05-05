function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Find the position of the first "="
    const index = pair.indexOf("=");

    // If there is no "=", we can skip or handle as needed
    if (index === -1) continue;

    // Everything before the first "=" is the key
    const key = pair.slice(0, index);
    // Everything after the first "=" is the value
    const value = pair.slice(index + 1);

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;

// --- Manual Test ---
const result = parseQueryString("equation=x=y+1&name=meysam");
console.log("Parsed Result:");
console.log(result);
