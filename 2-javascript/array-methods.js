const worstMovies = [
    'Sex and the City The Movie',
    'Joe Dirt',
    'Kazaam',
    'Steele',
    'Hot Rod',
    'Justice League',
    [
        'Twilight',
        'The Twilight Saga: New Moon',
        'The Twilight Saga: Eclipse',
        [
            'The Twilight Saga: Breaking Dawn Part 1',
            'The Twilight Saga: Breaking Dawn Part 2'
        ]
    ],
    'Cabin Boy'
]

// accessing nested arrays
console.log(worstMovies[6]); // the whole nested array
console.log(worstMovies[6][3]); // the sub-nested array
console.log(worstMovies[6][3][1]); // The Twilight Saga: Breaking Dawn Part 2


// ! Methods
// add and remove

// .push() adds to the end of an array
// it also returns the new length of the array
const pushed = worstMovies.push("Bodies Bodies Bodies")
console.log(pushed);

// .pop() removes from the end
// AND returns the removed value
const bodies = worstMovies.pop()
console.log(bodies);


// these are called shift because the indexes all move

// .shift() removes and returns the first item
const shifted = worstMovies.shift()
console.log(shifted);

// console.log(worstMovies[6][3][1]); // undefined (because the indexes all changed)


// .unshift() adds to the beginning of an array
worstMovies.unshift(bodies)

console.log(worstMovies);


// Boolean array methods

// .includes() returns a bool
// whether the array includes the given value
console.log(worstMovies.includes("Sharknado")); // false
console.log(worstMovies.includes("Steele")); // true

// .every() returns a bool
// takes a callback that returns a bool
// checks whether EVERY element passes the test

let isString = worstMovies.every(element => typeof element == 'string')
console.log(isString); // false
worstMovies[6] = "Twilight"
isString = worstMovies.every(element => typeof element == 'string')
console.log(isString); // true

// .some()
// similar to .every(), but checks whether ANY element passes the test

let isShort = worstMovies.some(el => el.length < 6)
console.log(isShort); // false

isShort = worstMovies.some(el => el.length < 10)
console.log(isShort); // true



// Ordering / indexing

// .at()
// just like access by index, except it can take negative number

let twilight = worstMovies.at(2)
console.log(twilight); // Twilight



// .slice()
// returns a given chunk (a new copy)
// takes two params
//      * start (inclusive)
//      * end (exclusive, will not be included in result)
//          * optional, defaults to end of array
            
console.log(worstMovies.slice(3, 6));
console.log(worstMovies); // unchanged

console.log(worstMovies.slice(6)); // [ 'Twilight', 'Cabin Boy' ]
console.log(worstMovies.slice(-2));// [ 'Twilight', 'Cabin Boy' ]
console.log(worstMovies.slice(-5, -2)); // [ 'Steele', 'Hot Rod', 'Justice League' ]


// .splice()
// replaces a chunk of an array (or inserts a new chunk)
// * at least two params
//      * start, first value to replace / location to insert
//      * deleteCount - how many values to remove
//      * newValue - values to insert (arbitrary number of them) (number does not have to match)


console.log(worstMovies);
worstMovies.splice(1, 6, "Moonfall")
console.log(worstMovies);



// .toSorted() returns a sorted copy
// .sort() sorts an array in place (mutate in place)
// reverse and toReverse work the same way

let sortedCopy = worstMovies.toSorted()
console.log(worstMovies) // unchanged
console.log(sortedCopy) // sorted array (alphabetical)


worstMovies.sort()
console.log(worstMovies); // this is now changed!

// the default sort is by UTF-16 char codes
let nums = [1, 2, 4, 5, 100, 110, 1500].sort()

// but you can write your own sorting function if you want! (see docs)
nums.sort((a, b) => b - a)
console.log(nums);



// ! Looping

// for..of loop
for (movie of worstMovies) {
    console.log(movie);
}


/* 
    .forEach() is just a basic loop! 
    runs the callback one time for each element in the array
    callback params: 
        * element (required)
        * index (optional)
        * array (optional)
*/

worstMovies.forEach((m, index) => console.log(index, m))


/* 
    ? Map, Filter, Reduce
    * always return a copy and leave the original alone
    * all take a callback
*/


// .map() creates a new value for every element in an array
// the predicate must take one param and return something (unless you're ignoring the new array)
const screamingMovies = worstMovies.map(movie => {
    console.log("this ran once");
    return movie.toUpperCase()
})
console.log(screamingMovies);
// console.log(worstMovies); // unchanged


// .filter() returns a new array 
// that includes only the original elements that pass the test
// the predicate takes one param, must return a boolean
const longTitles = worstMovies.filter(m => m.length > 10)
console.log(longTitles);


// .reduce() 
// the second argument is the starting value
// the first arg of the predicate is the value we're building up
// the second arg of the predicate is each element as we go through the array
const charCount = worstMovies.reduce((a, b) => a + b.length, 0)
console.log(charCount);
