// Ways of categorizing type systems
// Now is a good time to take a step back and think about some conceptual aspects of types and type systems. How is TypeScript similar and different from Java and JavaScript?

//What is type checking?
// As we discussed earlier, type-checking can be thought of as a task that attempts to evaluate the question of compatibility or type equivalence.

//“is type y equivalent to type x? —> “does the type of y fit within the type of x?

// This question can be asked at a function call

/*
function foo(x) {
   ... mystery code ...
}

 TYPE CHECKING
 -------------
 Is `myValue` type-equivalent to
     what `foo` wants to receive?
foo(myValue)
 */

/*or a function return,

function bar(): string[] {
  if (Math.random() > 0.5) return
Type 'undefined' is not assignable to type 'string[]'.
  // TYPE CHECKING
  // -------------
  // Is `myStrings` type-equivalent to
  //     what `bar` states it will return?
  return ["a"];
} */

/*
  function bar(): string[] {
  if (Math.random() > 0.5) return
Type 'undefined' is not assignable to type 'string[]'.
   TYPE CHECKING
  -------------
   Is `myStrings` type-equivalent to
       what `bar` states it will return?
  return ["a"];
} */

//   Static vs dynamic
// Sorting type systems as either static or dynamic has to do with whether type-checking is performed at compile time or not.

// TypeScript’s type system is static.

// Java, C#, C++ all fit into this category. Keep in mind that inference can still occur in static type systems — TypeScript, Scala, and Haskell all have some form of static type checking.

// Dynamic type systems perform their “type equivalence” evaluation purely at runtime. JavaScript, Python, Ruby, Perl and PHP fall into this category, although there are some great projects like Sorbet(ruby), Mypy(python) and others that bring static type-checking to these languages.

// Duck typing
// “Duck typing” gets its name from the “duck test”.

// “If it looks like a duck, swims like a duck, and quacks like a duck, then it’s probably is a duck”.

// In practice, this is very similar to structural typing, but “Duck typing” is usually used to describe dynamic type systems.

// Structural type systems are all about structure or shape. Let’s look at a TypeScript example:

class Car {
  make: string;
  model: string;
  year: number;
  isElectric: boolean;
}

class Truck {
  make: string;
  model: string;
  year: number;
  towingCapacity: number;
}

const vehicle = {
  make: "Honda",
  model: "Accord",
  year: 2017,
};

function printCar(car: { make: string; model: string; year: number }) {
  console.log(`${car.make} ${car.model} (${car.year})`);
}

printCar(new Car()); // Fine
printCar(new Truck()); // Fine
printCar(vehicle); // Fine
