let GuestList: string[]= ["Lionel Messi", "Ronaldihno", "Mbappe"];
let guestCannotMakeIt: string = GuestList[1];
// let indexToRemove: number = 1; //Supposing Ronaldihno cant make it.
let newGuest: string = "Ronaldo"; //New Guest

console.log(guestCannotMakeIt+" cannot make it to the dinner");
GuestList[1] = newGuest;  //Replace
// guest_List.splice(indexToRemove, 1, newGuest);   // Removed Ronaldihno and placed Ronaldo in its place.

for (let i = 0; i < GuestList.length; i++){
  console.log("Dear "+GuestList[i]+", you are cordially invited to dinner. We would be honored to have your presence.");
}

console.log("\n\n");