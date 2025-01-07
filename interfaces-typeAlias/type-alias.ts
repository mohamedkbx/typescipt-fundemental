// Type aliases
// Think back to the : {name: string, email: string} syntax we’ve used up until this point for type annotations. This syntax will get increasingly complicated as more properties are added to this type. Furthermore, if we pass objects of this type around through various functions and variables, we will end up with a lot of types that need to be manually updated whenever we need to make any changes!

// Type aliases help to address this, by allowing us to:

// define a more meaningful name for this type
// declare the shape of the type in a single place
// import and export this type from modules, the same as if it were an importable/exportable value

type Point = {
  x: number;
  y: number;
};

function printCoor(pt: Point) {
  console.log(`x: ${pt.x}, y: ${pt.y}`);
}

// Extending type aliases

type User = {
  name: string;
  age: number;
};
type Employer = User & {
  company: string;
};

const employer: Employer = {
  name: "John",
  age: 30,
  company: "Google",
};
