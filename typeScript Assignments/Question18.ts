let places: string[] = ["Germany", "England", "Thailand", "Maldvies", "China"];

// Original order
console.log("Original Order: "+places);

//  Print alphabetical order without modifying the original list
console.log("Alphabetical order: "+[...places].sort());

// Original order
console.log("Original Order: "+places);

// Print reverse alphabetical order without modifying the original list
console.log("Alphabetical order: "+[...places].sort().reverse());

// Original order
console.log("Original Order: "+places);

// Reverse the order of the list
console.log("Reverse order: "+places.reverse());

// Reverse the order of the list again
console.log("Reversing the order again: "+places.reverse());

// Sort the list in alphabetical order
console.log("Sorting the list in Alphabetical order: "+places.sort());

// Sort the list in reverse alphabetical order
console.log("Sorting the list in reverse alphabetical order: "+places.sort().reverse());
