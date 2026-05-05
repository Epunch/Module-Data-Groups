// Predict and explain first...

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};
// The error was using [0] like an array.
// In JavaScript, we use the property name to get the value from an object.
// We use the dot notation here to get houseNumber.
console.log("My house number is " + address.houseNumber);
