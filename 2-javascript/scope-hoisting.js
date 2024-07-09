/* 
    ? Scope
    * determines how information is accessible/available in different parts of the program

    Three levels of scope:
    * global
        * outermost scope
        * accessible everywhere (from every other scope)
            * within the same JS file (module) in node
            * window object
    * block 
        * within a code block
        * introduced with ES6, with let and const
    * function
        * within a function   
*/

// generally we avoid declaring variables in the global scope
let globalScopeVar = "this is global scope"

// UNLESS we want a global constant for some reason
const ALPHABET_ENGLISH_UPPERCASE = "ABCDEFG..."

function abc() {
    const functionScopeVar = "this is function scope"
    if (true) {
        const blockScopeVar = "this is block scope"

        console.log(globalScopeVar)
        console.log(functionScopeVar)
        console.log(ALPHABET_ENGLISH_UPPERCASE)
        console.log(blockScopeVar)
    }

    // this outside the if block, but still inside the function
    console.log(globalScopeVar)
    console.log(functionScopeVar)
    console.log(ALPHABET_ENGLISH_UPPERCASE)
    // console.log(blockScopeVar) // ReferenceError: blockScopeVar is not defined
}

// this is outside the function, at the global level
// console.log(functionScopeVar) // ReferenceError: functionScopeVar is not defined

abc()

function outerFx() {
    let outerScopeVar = "outer scope"

    function innerFx() {
        const innerScopeVar = "inner scope"
        console.log(outerScopeVar)

        let letter // the declaration determines scope
        for (char of "abc") {
            letter = char // this variable isn't declared inside this scope
        }
        console.log(letter) // c
    }
    innerFx()
    // console.log(innerScopeVar) // ReferenceError: innerScopeVar is not defined
}

outerFx()

/* 
    ? HOISTING
    * the JS parsing engine reads top to bottom, left to right
    * the JS interpreter reads the code twice
    * first it looks for function declarations and vars and hoists them
        * it allocates memory space to those declarations
    * then it executes the code line by line
    * function expressions, lets and consts are not hoisted
    ! DO NOT RELY ON THIS
*/

// console.log(firstName) // ReferenceError: Cannot access 'firstName' before initialization
let firstName = "Danny"

// console.log(lastName)
const lastName = "Burrow"

// vars are hoisted, but only the declaration, not the assignment
// this is one reason we don't use var!
console.log(middleName) // undefined
var middleName = ""

// Function declarations ARE hoisted
displayName()
function displayName() {
    console.log(firstName, middleName, lastName)
}

// Function Expressions are NOT hoisted
// sayHi() // ReferenceError: Cannot access 'sayHi' before initialization
const sayHi = () => {
    console.log("Hi,", firstName)
}

/* 
    ? let/const vs var
    * var is hoisted, let and const are not
    * let and const can be block scoped
    * var can only be function scoped or global
*/

const newFunction = () => {
    if (1) {
        let letVar = 1234 // block scoped
        var varVar = 4321 // function scoped
    }
    // console.log(letVar)
    console.log(varVar) // 4321
}
newFunction()
// console.log(varVar) // ReferenceError: varVar is not defined
