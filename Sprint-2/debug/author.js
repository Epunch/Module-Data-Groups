// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};
// Error: Objects are not iterable, so we cannot use for...of directly on them.
// Fix: We use Object.values() to turn the object values into an array first.
for (const value of Object.values(author)) {
  console.log(value);
}
