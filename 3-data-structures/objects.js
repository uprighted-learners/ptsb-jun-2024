// /* 
//     ? Objects
//     * containers for values
//     * organized by key
//     * iterable but not indexed
//     * curly brackets with comma separated key-value pairs
//     * { key: value, key2: value2 }
// */

// let value4 = "value 4"

// let exampleObject = {
//     key: "value1",
//     key2: ["value2"],
//     key3: { nested: "object" },
//     key4: value4
// }

// /* 
//     Keys can be: 
//         * must be literal (when writing the object literal)
//         * any valid JS identifier 
//             * can start with any letter, _, $
//         * any number
//         * any string
// */

// let weirdObject = {
//     1: "one",
//     "thing-2": "two",
// }

// console.log(exampleObject, weirdObject);



/* 
    ? Accessing object values
    * Dot notation
        * requires that you know the key name
        * requires that the key name be a valid JS identifier
    * Bracket notation
        * every other situation :)
        * evaluates the brackets before accessing the object
*/


const videoGames = {
    sdv: "Stardew Valley",
    tek: "Tekken",
    ds: "Dark Souls",
    "sh": "Sonic the Hedgehog",
    24: "EA: 24"
}

console.log(videoGames.tek);
console.log(videoGames.sh);

const stardew = "sdv"
console.log(videoGames.stardew) // undefined (it's not looking at the variable, only the object keys)

// whatever we put in the brackets will be FIRST evaluated as a JS expression
console.log(videoGames[stardew]); // Stardew Valley (the brackets get evaluated)
console.log(videoGames[24]); // anything that's not a valid JS identifier (like numbers) has to use bracket notation to access
console.log(videoGames[12 * 2]);
// console.log(videoGames[ds]) // ReferenceError: ds is not defined
console.log(videoGames["ds"]); // Dark Souls


/* 
    ? Destructuring
    * use this when you want to save the value as a variable
    * can get multiple keys out at the same time
        * but use it even with single values, for consistency
*/

// const ds = videoGames.ds
const { ds } = videoGames // exact same thing
const { sdv, tek } = videoGames

console.log(ds, sdv, tek);


const { sh: sonic } = videoGames
console.log(sonic);


/* 
    ? Modifying objects
*/

videoGames.ac = "Animal Crossing"
videoGames["cod"] = "Call of Duty"
videoGames.sh = "Sonic and Knuckles"


// ? Deleting key-value pair

delete videoGames.sdv
delete videoGames[24]

console.log(videoGames);



/* 
    ? Looping over objects
*/

// for..in loops work just like for..of loops, but for objects
for (game in videoGames) {
    // we are looping over the keys
    console.log(videoGames[game]);
}


/* 
    ? Built-in methods
    * there are three super useful static methods
        * Object.keys() returns an array with all the keys
        * Object.values() returns an array with all the values
        * Object.entries() returns an array of arrays with key and value
*/


Object.keys(videoGames).forEach(game => console.log(game.toUpperCase()))

for (game of Object.values(videoGames)) {
    console.log(game);
}

console.log(Object.entries(videoGames)[2][1]); // Sonic and Knuckles

const catalog = Object.entries(videoGames).map(game => `${game[0].toUpperCase()}: ${game[1]}`)
console.log(catalog);

// this is the same as the above
let catalog2 = []
for (game in videoGames) {
    catalog2.push(`${game.toUpperCase()}: ${videoGames[game]}`)
}
console.log(catalog2);


const gameConsoles = {
    xbox: {
        newest: "X-Series",
        releaseYear: 2022,
    },
    dreamcast: {
        newest: "Deamcast",
        releaseYear: 1999,
        games: [{sonic: "Sonic Adventures"}, "Shen-Mu"]
    }
}

console.log(gameConsoles["dreamcast"].games[0].sonic);
