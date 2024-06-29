
let myName = "mohsin-ali";

console.log(`Hello ${myName.toLowerCase()}, Have a nice day`);
console.log(`Hello ${myName.toUpperCase()}, Have a nice day`);
console.log(`Hello ${toTitleCase(myName)}, Have a nice day`);

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
