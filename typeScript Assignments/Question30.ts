const usernames: string[] = ['Admin','Aftab','Azeem','Zafar','Alizabeth'];

for (const index in usernames){
  const username = usernames[index];

  if(username == "Admin"){
    console.log("Hello Admin, Would you like to see the reports?");
  
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
    
  }
}