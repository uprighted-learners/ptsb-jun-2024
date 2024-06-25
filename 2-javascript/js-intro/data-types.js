console.log("hello world")

/* 
    ? JAVASCRIPT
    * founded in 1996 by Brandon Eich
    * ECMA sets the standard
        * ECMAScript5 is from 2009, ES6 is 2015, 
        * now there's a new edition every year
        * we're on the 14th edition
    * client-side language (runs in browser)
    * interpreted, not compiled
    * first-class functions (functions are a type)
    * weakly typed (as opposed to strongly typed, like Java or C++)
    * dynamically typed (as opposed to statically typed, like TypeScript or Java)
    * multi-paradigm language
        * functional language
        * object-oriented language
        * prototype-based
        * imperative
        
    

    ? COMMENTS
    * blocks of code that are not interpreted
    * denoted by // for single lines
    * denoted by /* for multiple lines

    * comments are read but not executed
    * they are still read by the parser
    * do not keep actual secrets in the comments! 

    * as learners, comments help us take notes
    * as developers, comments help
        * communicate with other developers (including our future selves)
        * keep code "readable" -- easy to understand and maintain
    
    * shortcuts:
        * cmd/ctrl + / for single lines
        * optn/alt + shift + a for multi lines

    ? CONSOLE OBJECT
    * gives us access to the interpreter's console
    * allows us to view output from the program
*/

console.log(1231234)

/* 
    ? DATA TYPES
    Primitive types (immutable, hold one piece of information)
        * string
        * number (including NaN)
        * boolean (true and false)
        * null
        * undefined
        * (bigint)
        * (Symbol)
    Reference types (these are actually all implementations of Object)
        * object
        * array
        * function
        * map
        * set
        * (and more)
*/

// string constructor
console.log(String())
console.log(String("strings!"))

console.log("a string is text between two quote marks") // these are string literals
console.log("can use single or double quote marks")
console.log("you can operate" + " " + "on strings") // concatenation (no longer a literal)
console.log("you", "can", "log", "multiple", "strings")

console.log("Unique's dog is named Omega." + 'Omega says "woof"')
// the escape character stops a char from being interpreted as code
console.log('Lucy\'s dog is named Teddy. Teddy says "woof"')

// Template Strings (or string templates)
console.log(`can contain ' and " with no conflict`) // template string literal
console.log(`String templates have at least ${1 + 1} superpowers`) // string interpolation (no longer a literal)
// you can evaluate any valid JS code between the curly brackets

// String methods
console.log("hello".toUpperCase())
// and tons more

// String attributes (there's only one!)
console.log("hello".length)

// ? Numbers

console.log(Number()) // 0

console.log(typeof 2)
console.log(2 + 2)
console.log(2 - 2)
console.log(2 * 5)
console.log(5 / 2)
console.log(3 ** 3)
console.log(13 % 5) // modulus (remainder)

// Math object
console.log(Math.floor(13 / 5)) // 2
console.log(Math.ceil(13 / 5)) // 3
console.log(Math.E)
console.log(Math.PI)
console.log(Math.sqrt(-1)) // NaN (no imaginary numbers!)

// Built-in objects
console.log(typeof NaN) // Not a Number, belongs to type Number
console.log(Infinity / 2)

// TYPE COERCION
// implicit coercion
console.log(2 + "2") // 22
console.log(2 * "2") // 4
console.log(2 * "two") // NaN
console.log(2 + [2, 2]) // 22,2

// type conversion, explicit coercion, type casting
// done using the type constructors
console.log(typeof Number("22"))
console.log(Number("two")) // NaN
console.log(String(22))
console.log(String(console.log))
console.log(String([2, 3]))

// undefined and null
console.log(undefined) // there is a place for information, but no information yet
console.log(null) // the information here is "null" (or nothingness, not-information)
