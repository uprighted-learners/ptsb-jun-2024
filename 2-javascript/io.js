/*
    ? IO - Input Output
    * Process
        * an event that runs in the foreground or background on a computer
    * Node.js allows us to access its process via a process object
    * this allows us to handle user input and internal output
        * using process.stdin and process.stdout
*/

const process = require("process")

console.log("hello world")

process.stdout.write("hello world")
process.stdout.write("\n(backslash n makes a new line) \n")
process.stdout.write("\t (backslash t makes a tab)\n")

console.log(`This is an output from Node: PID ${process.pid}`)
console.log(`This is an output from Node: PID ${process.pid}`)

/*
    ? EVENT LISTENERS
    * .once() is an example of an event listener
        * it listens for a data event
        * it takes an event name
        * and a callback function
        * the callback is triggered when the event occurs
*/

const inputHandler = data => {
    console.log(`You said ${data}`)
    // process.exit()
}

process.stdout.write("\nWhat do you have to say?: ")
process.stdin.once("data", inputHandler)

/* 
    .on() method allows us to listen to a continuous data stream
*/

process.stdin.on("data", input => {
    const text = input.toString().trim()

    if (text == "quit") {
        console.log("Goodbye")
        process.exit()
    }
    console.log(`You said ${text}`)
})

/* 
    ? Readline
    Readline provides an interface we can use to interact with the process
    in a more coherent way
*/

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("What is your name? ", data => {
    rl.setPrompt(`Nice to meet you, ${data}`)
    rl.prompt()
    rl.question("Where are you from?", data2 => {
        rl.setPrompt(`I hear ${data2} is nice`)
        rl.prompt()
        rl.close()
    })
})

// this function takes in a string and returns a promise object
// the promise will resolve with the input from readline.question()
function ask(questionText) {
    return new Promise((resolve, reject) => {
        rl.question(questionText, resolve)
    })
}

// rl.question()

// this has to be an async function because we use await within it
async function start() {
    const question1 = await ask("What is your name? ")
    console.log(`Nice to meet you, ${question1}`)

    const question2 = await ask("Where are you from? ")
    if (question2 == "Idaho") {
        console.log("I'm sorry to hear that")
    } else {
        console.log(`I hear ${question2} is nice`)
    }

    rl.close()
}

start()
