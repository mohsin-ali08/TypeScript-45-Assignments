function checkUsernameAvailability(currentUsers: string[], newUsers: string[]): void {
    const lowercaseCurrentUsers = currentUsers.map(user => user.toLowerCase());
  
    for (const newUser of newUsers) {
      const lowercaseNewUser = newUser.toLowerCase();
  
      if (lowercaseCurrentUsers.indexOf(lowercaseNewUser) !== -1) {
        console.log(`Username '${newUser}' is not available. Please enter a new username.`);
      } else {
        console.log(`Username '${newUser}' is available.`);
      }
    }
  }
  
  // Example usage
const currentUsers: string[] = ['Abbas', 'Baqar', 'sakina', 'Ali', 'Mohammad'];
const newUsers: string[] = ['Sakina', 'Sualeha', 'abbas', 'Sadaf', 'Mustafa'];
  
checkUsernameAvailability(currentUsers, newUsers);  