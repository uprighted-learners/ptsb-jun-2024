/* 
    ? JS Expressions
    * an expression is a piece of code that can be evaluated to a value
*/

let consoleOutput = console.log("console logs return undefined")
console.log(consoleOutput)
/* 
    ? BOOLEANS 
    * stores a binary value
    * true, false
    * boolean expressions evaluate to true or false
    * JS leans heavily on "truthy" or "falsy"
*/

let yes = true
let no = false

console.log(yes, no)
console.log(Boolean()) // false
console.log(Boolean(yes))
console.log(Boolean(0)) // false
console.log(Boolean(1)) // true
console.log(Boolean(2)) // every non-zero number is truthy
console.log(Boolean(-1))
console.log(Boolean(0.0000000000000000001))
console.log(Boolean(NaN)) // false

console.log(Boolean("a string")) // true
console.log(Boolean("")) // false (empty string is the only falsey string)
console.log(Boolean(" ")) // true
console.log(Boolean("0")) // true
console.log(Boolean("false")) // true

// the reference types are ALL truthy
console.log(Boolean([1])) // true
console.log(Boolean([0])) // true
console.log(Boolean([false])) // true
console.log(Boolean([])) // true
console.log(Boolean({})) // true

console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false

/* 
    ? Comparisons
    * comparison operators create boolean expressions that return true or false
    * the comparison operators are
        * == (is equal to)
        * != (is not equal to)
        * === (is strictly equal to)
        * !== (is not strictly equal to)
        * > (these do exactly what you think)
        * < 
        * >=
        * <=

*/

// the == operator will coerce types

console.log(yes == true) // true
console.log(yes != "whatever")
console.log(yes == 1) // true
console.log(yes == "") // false

// strict equality
// must match value AND TYPE
// will not coerce
// default to === for safety
console.log(yes === true) // true
console.log(yes === 1) // false

console.log(yes !== true) // false
console.log(yes !== 1) // true

console.log(1 > 2) // false
console.log(1 < 2) // true
console.log(1 >= 1) // true
console.log(1 <= 1) // true
console.log(1 <= 0) // false

console.log("a" < "A") // if you want to use these on things other than numbers, look up what they'll do first!

/* 
    ? Chaining conditions
    ? Complex conditions
    * AND: &&
    * OR: ||
    * evaulate truthiness and falsiness
    * These return whatever the last value in the chain was
        * not necessarily a boolean
*/

// both sides of an AND have to be true
console.log(yes != no && true) // true
console.log(yes != no && false) // false
console.log(yes != no && true && no == 0 && true === yes) // true

// ANY one of the OR options can be true
console.log(yes != no || true) // true
console.log(yes == no || false) // false
console.log(yes == no || false || no == 0 || true !== yes) // true

console.log(yes === no && "string") // false
console.log(yes === no || "string") // string
console.log("string" && yes === no) // false

// the OR quits when it hits the first truthy value (because it doesn't need to know anything after that)
// and it returns whatever the most recent value it encountered was
console.log("" || 0 || "truthy" || "even more truthy") // "truthy"
