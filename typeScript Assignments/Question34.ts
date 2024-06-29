const pizzas: string[] = ['Chicken Fajita', 'Margherita', 'Veggie'];
// Printing the name of each pizza
console.log("Pizza names:");
for (let i = 0; i < pizzas.length; i++) {
  console.log(pizzas[i]);
}

// Printing a sentence using the name of each pizza
console.log("\nPizza statements:");
for (let i = 0; i < pizzas.length; i++) {
  console.log(`I like ${pizzas[i]} pizza.`);
}

// Additional sentence about liking pizza
console.log("\nI really love pizza!");
