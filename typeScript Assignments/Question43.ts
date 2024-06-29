function makeGreat(_magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of _magicians) {
      greatMagicians.push(magician + " the Great");
    }
    return greatMagicians;
  }
  
  function showMagicians(_magicians: string[]): void {
    for (const magician of _magicians) {
      console.log(magician);
    }
  }
  
  // Original list of magicians' names
  const _magicians: string[] = ['harry houdini', 'david blaine', 'teller'];
  
  // Create a copy of the list and make it great
  const greatMagicians: string[] = makeGreat([..._magicians]);
  
  // Show the original magicians' names
  console.log("Original Magicians:");
  showMagicians(_magicians);
  
  // Show the list with "the Great" added to each name
  console.log("\nGreat Magicians:");
  showMagicians(greatMagicians);