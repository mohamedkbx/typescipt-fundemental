let car: {
  make: string;
  model: string;
  year: number;
};

// The type that would describe this object’s structure:

// {
//     make: string
//     model: string
//     year: number
//   }

/**
 * Print information about a car to the console
 * @param car - the car to print
 */
function printCar(car: { make: string; model: string; year: number; chargeVoltage?: number }) {
  console.log(`${car.make} ${car.model} (${car.year})`);
  //* Optional properties
  //? Insert into function printCar
  let str = `${car.make} ${car.model} (${car.year})`;
  car.chargeVoltage;
  if (typeof car.chargeVoltage !== "undefined") str += `// ${car.chargeVoltage}v`;
}
