/*
    ? Loops
    * execute a block of code repeatedly
    * a loop keeps going until an exit condition is met
        * exit conditions are sometimes explicit and sometimes implicit
    * JS has many, many ways to write loops
    * "for loops" are for when the number of times is pre-defined
    * "while loops" are for when the number of times is unknown at the start
*/
let word = "iteration"

// while loop
// while (condition) {code block}

let count = 0
while (count < word.length) {
    // console.log(word[count])
    count++
}

let num = 0
while (num < 0.9) {
    num = Math.random()
    // console.log(num)
}

// classic for loop
for (let i = 15; i <= 27; i += 3) {
    // console.log(i)
}

for (let i = 2; i <= 100000; i) {
    // console.log(i)
    i = i ** 2
}

for (let index = 0; index < word.length; index++) {
    // console.log(`letter index ${index}: ${word[index]}`)
    // console.log(word[index])
}

// for..of loop
// for (element of iterable) {code block}
// element refers to a single value in the iterable
// element is a new variable, implicitly declared in the for..of definition
// iterable has to be something that already exists (and is an iterable type)

for (letter of word) {
    // console.log(letter) // letter is the actual element!
}

const daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]

// for (day of daysOfWeek) {
//     if (day === "Wed") {
//         console.log("Wednesday")
//     } else if (day === "Sat") {
//         console.log("Saturday")
//     } else {
//         console.log(`${day}day`)
//     }
// }

const numbers = "123"
const letters = "abc"

// for (num of numbers) {
//     console.log("outer: ", num)
//     for (letter of letters) {
//         console.log("middle: ", letter)
//         for (num of numbers) {
//             console.log("inner: ", num)
//         }
//     }
// }

// for (num of numbers) {
//     console.log(num)
//     if (num == 2) {
//         break
//     }
// }

// const vowels = "aeiou"
// let vowelsOnly = ""

// for (letter of word) {
//     for (vowel of vowels) {
//         if (letter === vowel) {
//             vowelsOnly += letter
//         }–
//     }
// }
// console.log(vowelsOnly)

// a clock!

for (let i = 1; i <= 12; i++) {
    console.log(`${i} o'clock`)
    for (let j = 0; j < 60; j += 15) {
        if (j > 0) {
            console.log(`${i}:${j}`)
        }
    }
}
