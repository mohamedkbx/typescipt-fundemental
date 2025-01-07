let car3: {
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
function printCar1(car: { make: string; model: string; year: number; chargeVoltage?: number }) {
  console.log(`${car.make} ${car.model} (${car.year})`);
  //* Optional properties
  //? Insert into function printCar
  let str = `${car.make} ${car.model} (${car.year})`;
  car.chargeVoltage;
  if (typeof car.chargeVoltage !== "undefined") str += `// ${car.chargeVoltage}v`; // within these brackets charged voltage is a number => and this called Narrowing
}

// printCar({ //? optional property works too!
//     make: "Tesla",
//     model: "Model 3",
//     year: 2020,
//     chargeVoltage: 220,
// })

//* Excess property checking

// printCar({
//   make: "Tesla",
//   model: "Model 3",
//   year: 2020,
//   color: "RED", //? EXTRA PROPERTY
// });
