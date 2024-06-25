/* 
    ? VARIABLES
    * a variable represents one piece of data in memory
    * in JS variables must be declared
    * declaration
        * allows memory space to be reserved using an identifier
        * starts with keywords: let, const, or (archaic) var
        * must start with a letter, $, or _
        * if no value is assigned, it's undefined
    * assignment
        * gives the variable a data value
        * can be any value or data type
        * can be reassigned (unless declared with const)
    * initialization
        * giving a new variable its first value
        * usually done on the same line as declaration
*/

let a // declaration
a = 1 // assignment (and initialization, because it's the first time)
const b = 2

a = 2
console.log(a)
// b = 3 //TypeError: Assignment to constant variable

let c = a + b

c = 5
c = c + 1 // you can refer a variable to itself
c++ // incrementer operator, same as above line

let d = c
c++
c++
c++

console.log(c)
console.log(d) // d retains the value it had when it was set

/* 
    ? what makes a good variable name? 
    * describe what information the variable stores
    * follow casing conventions
        * kebab-case (we use this in HTML and CSS)
        * camelCase (we use this in JS)
        * PascalCase or WordCase (this has special use cases in JS)
        * snake_case (other languages use this, for example Python)
        * CONSTANT_CASE or SCREAMING_SNAKE_CASE (for constants)
*/

const firstName = "Danny"
const lastName = "Burrow"
const indefiniteArticle = "an"
const role = "instructor"

const sentence = `${firstName} ${lastName} is ${indefiniteArticle} ${role}`
// combines multiple variables within an operation
console.log(sentence)

let radius = 10
const areaOfACircle = Math.PI * radius ** 2
console.log(areaOfACircle.toFixed(3))

const randomNumberBetween1and10 = Math.ceil(Math.random() * 10)
console.log(randomNumberBetween1and10)
