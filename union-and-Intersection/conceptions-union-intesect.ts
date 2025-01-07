// Evens = { 2, 4, 6, 8 }
// OneThroughFive = { 1, 2, 3, 4, 5 }

/*

Union types |
A union type can be thought of as OR, for types, and TypeScript uses the pipe (|) symbol to represent the Union type operator

Using the example above, if we wanted to find OneThroughFive | Evens we’d combine all the members of the OneThroughFive set and all of the members of the Evens set.

OneThroughFive | Evens => { 1, 2, 3, 4, 5, 6, 8 }
*/

/**
 * Intersection types &
An intersection type can be thought of as AND, for types, and TypeScript uses the ampersand (&) symbol to represent the Intersection type operator

Using the example again, if we wanted to find OneThroughFive & Evens we’d find all members that the OneThroughFive and Evens sets have in common

OneThroughFive & Evens => { 2, 4 }
 */
