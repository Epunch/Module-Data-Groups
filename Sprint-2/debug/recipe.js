// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

// Error: Logging the whole object 'recipe' results in "[object Object]".
// Fix: We need to access 'recipe.ingredients' and log each item separately.

console.log(recipe.title + " serves " + recipe.serves);
console.log("ingredients:");

// We use a loop to log each ingredient on a new line
for (const item of recipe.ingredients) {
  console.log(item);
}
