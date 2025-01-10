// keyof
// The keyof type query allows us to obtain type representing all property keys on a given interface

type DatePropertyNames = keyof Date;

// Not all keys are strings, so we can separate out those keys that are symbols and those that are strings using the intersection operator (&).

// If you remember your geometry, it may be useful to think of this as kind of like a dot product, in that when we use the intersection operator, we’re left only with the sub-part of the keyof Date that also is included by string or symbol, respectively.

type DateStringPropertyNames = DatePropertyNames & string;

//type DateStringPropertyNames = "toString" | "toDateString" | "toTimeString" | "toLocaleString" | "toLocaleDateString" | "toLocaleTimeString" | "valueOf" | "getTime" | "getFullYear" | "getUTCFullYear" | ... 33 more ... | "getVarDate"

type DateSymbolPropertyNames = DatePropertyNames & symbol;
//type DateSymbolPropertyNames = typeof Symbol.toPrimitive
//Interesting! this Symbol.toPrimitive property is the only non-string. 1
