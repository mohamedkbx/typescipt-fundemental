const fileExtension = ["ts", "ts"]; // had inferred to string

const car = [
  {
    make: "Tesla",
    model: "Model 3",
    year: 2020,
    chargeVoltage: 220,
  },
  {
    make: "Tesla",
    model: "Model 3",
    year: 2020,
    chargeVoltage: 220,
  },
];

// tuples // array of fixed length

// Syntax:

// let tupleName: [type1, type2, type3] = [value1, value2, value3];
// example

let magic: [string, number, boolean] = ["magic", 42, true];

let myTuple: [string, number] = ["Alice", 25];

// Modifying elements
myTuple[0] = "Bob";
myTuple[1] = 30;

console.log(myTuple); // Output: ["Bob", 30]

// Adding elements (beyond the tuple definition)
myTuple.push(100); // TypeScript does not prevent this
console.log(myTuple); // Output: ["Bob", 30, 100]

// Making Tuples Read-Only:
// To make a tuple read-only, use the readonly modifier. This prevents changes to the tuple elements or adding new elements.
let myTuple2: readonly [string, number] = ["Alice", 25];

// Attempting to modify or add elements will cause errors:
myTuple[0] = "Bob"; // Error: Cannot assign to '0' because it is a read-only property.
myTuple.push(100); // Error: Property 'push' does not exist on type 'readonly [string, number]'.

console.log(myTuple); // Output: ["Alice", 25]
