function MakeGreat(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = magicians[i] + " the Great";
    }
  }
  
  function ShowMagicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  // Original list of magicians' names
  const magicians: string[] = ['harry houdini', 'david blaine', 'teller'];
  
  // Modify the list by adding "the Great" to each name
  MakeGreat(magicians);
  
  // Show the modified list of magicians' names
  ShowMagicians(magicians);