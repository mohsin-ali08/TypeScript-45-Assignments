interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow arbitrary number of additional properties
  }
  
  function createCar(manufacturer: string, model: string, ...options: any[]): Car {
    const car: Car = {
      manufacturer,
      model
    };
  
    options.forEach(option => {
      const [key, value] = option;
      car[key] = value;
    });
  
    return car;
  }
  
  // Example usage
  const myCar = createCar("Tesla", "Model S", ["color", "red"], ["features", ["autopilot", "sunroof"]]);
  console.log(myCar);
  