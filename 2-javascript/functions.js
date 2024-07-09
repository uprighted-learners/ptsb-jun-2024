// /*
//     ? FUNCTIONS
//     - block of code that performs a task and/or returns a value
//     - runs when "invoked" or called

//     Functions can be defined with:
//         - Declaration
//         - Expression
// */

// /*
//     ? Function declaration

//     function functionName(optional, params) {
//         ... code block
//     }

//     1. function keyword
//     2. name of the function
//     3. parens () which hold any parameters (or none)
//     4. curly brackets to define the code block (as always!)

// */

// function hello() {
//     console.log("hello")
// }

// // functions happen when they are called, not when they are defined
// hi()
// hello()
// // the same function can be called any number of times
// hi()
// console.log(hello()) // undefined

// function hi() {
//     console.log("hi")
// }

// function greeting(name) {
//     console.log(`Hello ${name}`)
// }

// // the params we pass in are assigned as the value of the variable
// // in the function's param definition
// greeting("Hannah")
// greeting("Barnie the Dinosaur")
// greeting([1, 2, 3])

// function subtract(x, y) {
//     console.log(x - y)
// }

// // positional arguments are assigned in the order they are defined
// subtract(2, 1)
// subtract(3, "four") // NaN

// /*
//     ? Function Expression

//     const functionName = function (optional, params) {
//         ... code block
//     }

//     ? Or, with ES6 syntax

//     const functionName = (params) => {
//         ... code block
//     }

//     1. variable declaration
//     2. function name
//     3. assignment operator
//     4. params
//     5. "fat arrow"
//     6. code block with curly brackets

// */

// const add = (x, y) => {
//     console.log(x + y)
// }

// add(1, 2)
// add(1, "two")

// /*
//     ? Return values
//     - every function has a return value
//     - if you don't define one, it's undefined
//     - the function call is a JS expression
//         - the expression resolves to the return value
// */

// // add() does not define a return value
// console.log(add(3, 4)) // undefined

// const multiply = (x, y) => {
//     return x * y
// }

// let output = multiply(10, 2)
// console.log(output)
// console.log(multiply(6, 3))

// // because the call is an expression that resolves to a value
// // functions can be used as part of larger expressions

// let numbers = multiply(4, 8) + multiply(8, 1) / multiply(2, 3)
// console.log(numbers)

// // include within other function calls
// console.log(multiply(5, multiply(4, 9)))

// const introduction = (firstName, state, hobby) => {
//     return `Hello, I'm ${firstName}, I live in ${state} and I like to ${hobby}`
// }

// let simon = introduction("Simon", "Maine", "make music")
// // the output becomes an instance of the return type
// console.log(simon.toUpperCase())

// console.log(introduction("M", "Victoria, Canada"))
// console.log(
//     introduction("Alexi", "Canby OR", "raise pigs", "garden", "make preserves")
// )

// const spongebob = text => {
//     let newText = ""
//     for (char of text) {
//         if (Math.random() > 0.5) {
//             newText += char.toUpperCase()
//         } else {
//             newText += char.toLowerCase()
//         }
//     }
//     return newText
// }

// console.log(spongebob("Danny"))
// console.log(spongebob("Scott"))

// const students = [
//     "Adeyemi",
//     "Rey",
//     "Unique",
//     "Chris",
//     "Tanner",
//     "Betty",
//     "Lucy",
//     "Samuel",
//     "Aaron",
//     "Ricardo",
//     "Jasmine",
//     "John",
//     "Urmi",
//     "Paulo",
// ]

// // here the function object is passed as a parameter...
// const roster = (learners, randomizer) => {
//     for (learner of learners) {
//         console.log(randomizer(learner))
//     }
// }

// // ... when passing a function object, don't invoke it with parentheses
// roster(students, spongebob)

// // tip calculator
// const tipCalc = (bill, tipRate) => {
//     const percentage = tipRate / 100
//     return bill * percentage
// }

// const cashTip = (bill, tipRate) => {
//     // this one calls another function!
//     return Math.ceil(tipCalc(bill, tipRate))
// }

// console.log(tipCalc(100, 20))
// console.log(cashTip(72.36, 18))

// // ! Anagram checker activity
// // Write a function that checks whether two strings are anagrams
// // It can return true or false, or for an extra challenge have it return
// //      "these are anagrams" or "these are not anagrams"
// // step 1: write a function that checks whether two strings are the same
// // step 2: update your function to use Array.toSorted()
// //      turn you string into array like this: Array(...stringVar)
// // extra challenge: make it case insensitive

// const stringSorter = s => {
//     let stringAsArray = Array(...s.toLowerCase())
//     // console.log(stringAsArray) // [ 'd', 'u', 's', 't', 'y' ]
//     let sortedArray = stringAsArray.toSorted()
//     // console.log(sortedArray) // [ 'd', 's', 't', 'u', 'y' ]
//     let sortedString = sortedArray.toString()
//     // console.log(sortedString) // d,s,t,u,y
//     return sortedString
// }

// const stringSorter2 = s => {
//     return Array(...s.toLowerCase())
//         .toSorted()
//         .toString()
// }

// const anagramChecker = (s1, s2) => {
//     if (stringSorter(s1) == stringSorter(s2)) {
//         return "this is an anagram"
//     }
//     return "this is not an anagram"
// }

// console.log(anagramChecker("dusty", "study")) // true
// console.log(anagramChecker("below", "elbow")) // true
// console.log(anagramChecker("CATS", "Acts")) // true
// console.log(anagramChecker("not", "anagram")) // false

// TODO: concise syntax
// TODO: explain spread operator (and rest?)

/* 
    ? Concise syntax
    - if the body fits on one line
        - the curly brackets are optional
        - if no curly brackets, the return is implicit
    - if there is only param, the parens are optional
*/

let add = (x, y) => x + y

console.log(add(3, 4))

let double = x => x * 2

console.log(double(15))

/* 
    ? Spread and rest operators
*/

// spread unpacks an iterable into positional parameters
const sumThree = (x, y, z) => x + y + z
sumThree(...[1, 2, 3]) // spread

// rest bundles variable params into a single Array (in this case args is an array)
const paramCounter = (...args) => args.length // rest
console.log(paramCounter(1, 2, 3, 3, 3, 3, 4, 23, 43, 141))
