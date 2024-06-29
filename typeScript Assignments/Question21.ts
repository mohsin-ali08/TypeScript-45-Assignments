// Define a type for city Array
type Mountain = {
    name: string,
    country: string,
    height: number
  }
  
  // Creating array of Mountain objects
  let MountainList = [
    {name: "Mount Everest", country: "Nepal", height: 8848 },
    {name: "K2", country: "Pakistan", height: 8611 },
    {name: "Nanga Parbat", country: "Pakistan", height: 8126  },
    {name: "Rakaposhi", country: "Pakistan", height: 7788 },
    {name: "Hindu-Kush", country: "India-Pakistan", height: 7708 },
    {name: "Babu-sar Top", country: "Pakistan", height: 4173 },
  ]
  
  // Print information about each city
  console.log("Information about mountains:");
  for(let i=0; i<MountainList.length; i++){
    let Mountain = MountainList[i];
    console.log(`name: ${Mountain.name} , country: ${Mountain.country} , height: ${Mountain.height} m`);
  }