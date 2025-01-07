//An interface declaration is another way to name an object type:

interface Magic {
  name: string;
  age: number;
  email?: string;
}

//useing interface

const id: Magic = {
  name: "moja",
  age: 23,
};

interface Employer1 extends Magic {
  job: string;
}

const employeer1: Employer1 = {
  name: "moja",
  age: 23,
  job: "developer",
};

// Interfaces for Functions
// You can define the shape of a function using an interface.
interface Add {
  (a: number, b: number): number;
}

const add: Add = (x, y) => x + y;
//----------------------------------------------------------------
// Implement Keyword
// The implements keyword is used to enforce that a class meets a certain interface’s requirements. If a class does not meet these requirements, TypeScript will throw an error.
