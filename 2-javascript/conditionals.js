/* 
    ? CONDITIONALS
    * also called logic gates or logic trees
    * if/else statements
    * code blocks that only execute under certain conditions
    * if (condition) { code block } 
    * condition - anything here BECOMES a boolean expression
*/

if (1) {
    console.log("this will definitely happen")
}

if ("") {
    console.log("this defnitely won't happen")
}

// this is not inside the curly brackets, and therefore not subject to the condition
console.log("this happens regardless")

let condition = "a condition"
if (condition === "A condition") {
    console.log("this is an exact match")
} else {
    console.log("this match is not exact")
}

condition = "????"
if (condition == "wheee!") {
    console.log("either this one will happen")
} else if (condition === "hello world") {
    console.log("or this one")
} else if (condition == "????") {
    console.log("or this one will happen")
} else {
    console.log("if none of the above are true, this one happens")
}

const firstName = "Dave"
const role = "TA"

if (firstName == "Danny" && role == "instructor") {
    console.log("Danny is here and class is starting")
} else if (role == "instructor") {
    console.log(`${firstName} will be teaching class today`)
} else if (firstName == "Scott" && role == "TA") {
    console.log("Scott is here and we are waiting for Danny")
} else if (role == "TA") {
    console.log(`${firstName} will be a guest TA today`)
} else {
    console.log("please wait for class to start")
}

// This is the exact same as the above conditional
// but it is someone more organized and readable
// because it uses nested conditionals
// conditionals inside of conditionals
if (role == "instructor") {
    if (firstName == "Danny") {
        console.log("Danny is here and class is starting")
    } else {
        console.log(`${firstName} will be teaching class today`)
    }
} else if (role == "TA") {
    if (firstName == "Scott") {
        console.log("Scott is here and we are waiting for Danny")
    } else {
        console.log(`${firstName} will be a guest TA today`)
    }
} else {
    console.log("please wait for class to start")
}

// ! Watch for conditions that perform actions!

if (console.log("this message logs")) {
    console.log("but this one doesn't")
}

let val = 0

if (val++) {
    // this returns 0!
    console.log(val) // so this doesn't happen!
}

if (val++) {
    // but it incremented, so this is 1
    console.log(val) // and then it incremented again, so now this is 2
}

// keep in mind that putting your conditions in a sensible order can save you some work
let temperature = 105

if (temperature > 110 || temperature <= 15) {
    console.log(":( :( :( :( :( :( :(")
} else if (temperature > 100) {
    console.log("I'm melting")
} else if (temperature > 80) {
    console.log("it's pretty hot")
} else if (temperature > 65) {
    console.log("it's warm out!")
} else if (temperature > 35) {
    console.log("at least it's not freezing")
} else {
    console.log("this is way too cold")
}
