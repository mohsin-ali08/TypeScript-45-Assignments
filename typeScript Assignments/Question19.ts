let guest_List_: string[]= ["Maradona", "Lionel Messi", "Iniesta", "Ronaldo", "Mbappe", "Dybala"];

console.log("Sorry, but we can only invite two people for dinner.");

// Removing guests until only two names remain
while (guest_List_.length > 2) {
  let removedGuest: string = guest_List_.pop()!; // Remove the last guest from the list
  console.log("Sorry, " + removedGuest + ", but we can't invite you to dinner.");
}

// Invitation message for remaining two guests
for(let i = 0; i < guest_List_.length; i++){
  console.log("Dear "+guest_List_[i]+", You are still invited to dinner. We look forward to your presence."); 
}

console.log("Number of people invited to dinner: "+guest_List_.length);
