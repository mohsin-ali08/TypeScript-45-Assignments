let animals: string[] = ["Lion", "Tiger", "Jaguar"];

// Printing the name of each animal from the list
console.log("Animal's name:");

for(let i=0; i<animals.length; i++){
  console.log(animals[i]);
}
console.log("\n");

// Modifying program to print a statement with animal name
console.log("Printing a statement with animal name:");

for(let i=0; i<animals.length; i++){
  console.log(`The ${animals[i]} is a most dangerous Animal. ${animals[i]}'s are very powerful.`);
}

console.log("\n");

// at the end of your program stating what these animals have in common.
console.log("These Animals have common:");

for(let i=0; i<animals.length; i++){
  console.log(`${animals[i]} is the king of jungle.`);
}