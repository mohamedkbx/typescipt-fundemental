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

// TypeScript adds a second heritage clause that can be used to state that a given class should produce instances that confirm to a given interface: implements.

// interface AnimalLike {
//   eat(food): void
// }

// class Dog implements AnimalLike {
// Class 'Dog' incorrectly implements interface 'AnimalLike'.
//   Property 'eat' is missing in type 'Dog' but required in type 'AnimalLike'.
//   bark() {
//     return "woof"
//   }
// }
// // Try
// // In the example above, we can see that TypeScript is objecting to us failing to add an eat() method to our Dog class. Without this method, instances of Dog do not conform to the AnimalLike interface. Let’s update our code:

// interface AnimalLike {
//   eat(food): void
// }

// class Dog implements AnimalLike {
//   bark() {
//     return "woof"
//   }
//   eat(food) {
//     consumeFood(food)
//   }
// }
// Try
// There, that’s better. While TypeScript (and JavaScript) does not support true multiple inheritance (extending from more than one base class), this implements keyword gives us the ability to validate, at compile time, that instances of a class conform to one or more “contracts” (types). Note that both extends and implements can be used together:

// class LivingOrganism {
//   isAlive() {
//     return true
//   }
// }
// interface AnimalLike {
//   eat(food): void
// }
// interface CanBark {
//   bark(): string
// }

// class Dog2
//   extends LivingOrganism
//   implements AnimalLike, CanBark
// {
//   bark() {
//     return "woof"
//   }
//   eat(food) {
//     consumeFood(food)
//   }
// }
// Try
// While it’s possible to use implements with a type alias…

// type CanJump = {
//     jumpToHeight(): number
// }

// class Dog3 implements CanJump {
//   jumpToHeight() {
//     return 1.7
//   }
//   eat(food) {
//     consumeFood(food)
//   }
// }
//----------------------------------------------------------------
// Open Interfaces
// TypeScript interfaces are “open”, meaning that unlike in type aliases, you can have multiple declarations in the same scope:
interface AnimalLike {
  // From before
  eat(food): void;
}
function feed(animal: AnimalLike) {
  animal.eat;

  animal.isAlive;
}

// SECOND DECLARATION OF THE SAME NAME
interface AnimalLike {
  isAlive(): boolean;
}

// Use case: augmenting existing built-in or library types
// Imagine a situation where you want to add a global property to the window object

window.document; // an existing property

window.exampleProperty = 42;

// tells TS that `exampleProperty` exists
interface Window {
  exampleProperty: number;
}
//--------------------------------------------------------
// Choosing whether to use type or interface
// In many situations, either a type alias or an interface would be perfectly fine, however…

// If you need to define something other than an object type (e.g., use of the | union type operator), you must use a type alias
// If you need to define a type to use with the implements heritage term on a class, use an interface
// If you need to allow consumers of your types to augment them, you must use an interface.
