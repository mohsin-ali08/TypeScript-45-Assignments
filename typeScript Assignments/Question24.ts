// MASLA HA ABHI ISME

let string1 = 'hello';
let string2 = 'world';
let number1 = 10;
let number2 = 20;
let array = [1, 2, 3, 4, 5];

// Tests for equality and inequality with strings
console.log("Is string1 is equals to string2? I predict False.");
console.log(string1 == string2); // False

console.log("Is string1 not equals to string2? I predict True.");
console.log(string1 != string2); // True

// Tests using the lower case function
console.log("Is string1 is in Lower case? I predict True.");
console.log(string1.toLowerCase() == 'hello'); // True

console.log("Is string2 is in Lower case 'WORLD'? I predict False.");
console.log(string2.toLowerCase() == 'WORLD'); // False

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is number1 equals to number2? I predict False.");
console.log(number1 == number2); // False

console.log("Is number1 not equals to number2? I predict True.");
console.log(number1 != number2); // True

console.log("Is number1 greater than number2? I predict False.");
console.log(number1 > number2); // False

console.log("Is number1 less than number2? I predict True.");
console.log(number1 < number2); // True

console.log("Is number1 greater than equal to number2? I predict False.");
console.log(number1 >= number2); // False

console.log("Is number1 less than equal to number2? I predict True.");
console.log(number1 <= number2); // True

// Tests using "and" and "or" operators
console.log("Is number1 greater than 5 and number2 less than 30? I predict True.");
console.log(number1 > 5 && number2 < 30); // True

console.log("Is number1 less than 5 or number2 less than 30? I predict True.");
console.log(number1 < 5 || number2 < 30); // True

// Test whether an item is in an array
console.log("Is 3 in the array? I predict True.");
console.log(array.includes(3)); // True

console.log("Is 6 in the array? I predict False.");
console.log(array.includes(6)); // False

// Test whether an item is not in an array
console.log("Is 5 not in the array? I predict False.");
console.log(!array.includes(5)); // False

console.log("Is 8 not in the array? I predict True.");
console.log(!array.includes(8)); // True
