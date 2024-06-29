let guest_List: string[]= ["Maradona", "Lionel Messi", "Iniesta", "Ronaldo", "Mbappe", "Dybala"];

console.log("Sorry, but we can only invite two people for dinner.");

// Removing guests until only two names remain
while (guest_List.length > 2) {
  let removedGuest: string = guest_List.pop()!; // Remove the last guest from the list
  console.log("Sorry, " + removedGuest + ", but we can't invite you to dinner.");
}

// Invitation message for remaining two guests
for(let i = 0; i < guest_List.length; i++){
  console.log("Dear "+guest_List[i]+", You are still invited to dinner. We look forward to your presence."); 
}

while(guest_List.length){
  let empty_list: string = guest_List.pop()! ;
}
console.log("Final Guest list: "+guest_List);
