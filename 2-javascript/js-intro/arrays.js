/* 
    ? Arrays
    * list-like objects
    * reference data type
    * hold multiple data types (literally anything that can be stored in JS)
    * array type has methods to perform traversal and mutation operations
    * written like this: [content, goes, here, comma, separated, values]
    * iterable (can be iterated over)
    * can be accessed by index
*/

let newArray = [] // new array literal
let newArrayFromConstructor = Array()

console.log(newArray, newArrayFromConstructor)
console.log(Boolean([])) // true

let worstMovies = ["Sex and the City The Movie", "Joe Dirt", "Kazaam"]

console.log(worstMovies)

// .length is the only array attributes
console.log(worstMovies.length)

// access by index
console.log(worstMovies[2]) // Kazaam

// ? assign by index

// assign new values
worstMovies[3] = "Steele"
worstMovies[8] = "Princess Bride" // they don't have to be consecutive!

console.log(worstMovies)
console.log(worstMovies[6])

// assign over old values

console.log(worstMovies)
worstMovies[8] = "Hot Rod"

// assign by dynamic index (any expression that evaluates to a number can be used)
worstMovies[worstMovies.length] = "Justice League"
worstMovies[worstMovies.length] = "Twilight"

console.log(worstMovies)

// this is how we actually add to the end of arrays
worstMovies.push("Cabin Boy")
console.log(worstMovies)
