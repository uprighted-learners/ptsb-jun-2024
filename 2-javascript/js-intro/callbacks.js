/* 
    ? Callbacks
    A callback is a function that is passed to another function as an argument
    - usually anonymous, but don't have to be
    - some common built-in methods take callbacks
    - and of course, we can write our own
*/

let numArray = [1, 2, 3, 4, 5]

const filterHelper = x => {
    return x > 2
    // if (x > 2) {
    //     return true
    // }
    // return false
}

// this is one example of a function passed as an argument to another function
const filteredArray = numArray.filter(filterHelper)
console.log(filteredArray)

const filteredArray2 = numArray.filter(x => x > 2)
console.log(filteredArray2)

const filteredArray3 = numArray.filter(x => {
    console.log("you can do anything in here")
    return x > 2
})
console.log(filteredArray3)

// here we write a function that can do a different math operation every time we call it
const mathOperation = (num1, num2, cb) => {
    return cb(num1, num2)
}

const add = (x, y) => x + y
const subract = (x, y) => x - y

console.log(mathOperation(10, 5, add))
console.log(mathOperation(10, 5, subract))
