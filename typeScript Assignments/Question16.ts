let Guest_List: string[]= ["Lionel Messi", "Ronaldihno", "Mbappe"];
let GuestCannotMakeIt: string = Guest_List[1];
console.log(GuestCannotMakeIt+" cannot make it to the dinner.");

// Updating guest list
let NewGuest: string = "Ronaldo";
Guest_List[1] = NewGuest;  

console.log("Good news ! We found a bigger dinner table.");

// Adding new guests
Guest_List.unshift("Maradona");
Guest_List.splice(Math.floor(Guest_List.length / 2), 0, "Iniesta"); 
Guest_List.push("Dybala");

// Print invitation messages for the new guest list
for (let i = 0; i < Guest_List.length; i++) {
  console.log("Dear " + Guest_List[i] + ", you are cordially invited to dinner. We would be honored to have your presence.");
}
