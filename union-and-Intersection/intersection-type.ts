// Intersection Types in TypeScript
// Intersection types in TypeScript can be described using the & (ampersand) operator.

// Let’s look again at our example using sets of numbers

// function printEven(even: Evens): void {}
// function printLowNumber(lowNum: OneThroughFive): void {}
// function printEvenNumberUnder5(num: 2 | 4): void {}
// function printNumber(num: number): void {}

// let y = 4 as Evens & OneThroughFive;

// let y: 2 | 4

//  What does Evens & OneThroughFive accept as values?
// let evenAndLowNumber: Evens & OneThroughFive;
// evenAndLowNumber = 6 //✔️ An even
// Type '6' is not assignable to type '2 | 4'.
// evenAndLowNumber = 3 //✔️ A low number
// Type '3' is not assignable to type '2 | 4'.
// evenAndLowNumber = 4 //✔️ A even low number

//  What requirements can `Evens & OneThroughFive` meet?
// printEven(y)
// printLowNumber(y)
// printEvenNumberUnder5(y)
// printNumber(y)
// Try
// Again, we see some degree of asymmetry, but it’s almost like it’s in the opposite direction compared to union types. The intersection type can accept a very narrow range of values, but because of this, it can meet the type-checking requirements of all four print* functions.

// Essentially, & means “anything that is in both sets” in terms of the allowed values, and because of this, we can use “any of the behavior definitely present on members of either set”.
