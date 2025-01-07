// Union Types in TypeScript
// Let’s think back to the concept of literal types from an earlier example

// const humidity = 79

// const humidity: 79
// Try
// If we wanted to create a union type that represented the set { 1, 2, 3, 4, 5 } we could do it using the | operator. We can also use the type keyword to give this type a name (we’ll talk more about this in the next chapter)

// type OneThroughFive = 1 | 2 | 3 | 4 | 5

// type OneThroughFive = 1 | 2 | 3 | 4 | 5
// let lowNumber: OneThroughFive = 3

// let lowNumber: OneThroughFive
// lowNumber = 8
// Type '8' is not assignable to type 'OneThroughFive'.
// Try
// and we could create another type called Evens to represent the set { 2, 4, 6, 8 }

// type Evens = 2 | 4 | 6 | 8

// type Evens = 2 | 4 | 6 | 8
// let evenNumber: Evens = 2;

// let evenNumber: Evens
// evenNumber = 5;
// Type '5' is not assignable to type 'Evens'.
// Try
// Explicitly creating the union type is now simple

// let evenOrLowNumber = 5 as Evens | OneThroughFive;
// let evenOrLowNumber: 2 | 4 | 6 | 8 | 1 | 3 | 5
// Working with union types
// Let’s continue with our example from above and attempt to do something with the “outcome” value.

// First, let’s destructure the tuple and see what TypeScript has to say about its members

// function maybeGetUserInfo() {
//     if (flipCoin() === "heads") {
//       return success
//     } else {
//       return fail
//     }
//   }

// const outcome2 = maybeGetUserInfo()

// const [first, second] = outcome2
// first

// const first: "success" | "error"
// second

// const second: {
//     readonly name: "Mike North";
//     readonly email: "mike@example.com";
// } | Error
