/* 
    ? Promises
    * object that may produce a value in the future
    * three states:
        * Pending (unfinished)
        * Fulfilled (complete, with result)
        * Rejected (error)
    * allow code to execute without having to wait for its completion 
*/

const synchronousFx = () => {
    return "no promises here"
}

console.log(synchronousFx(), 1);


const promiseHelper = (resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve("a promise!")
    } else {
        setTimeout(() => {
            reject("something bad happened")
        }, 2000)
    }
}


const promiseFx = () => {
    // the Promise constructor uses the new keyword
    // it takes one argument, a callback with two params
    return new Promise(promiseHelper)
}

// returns a promise object
// console.log(promiseFx());


// in order to get the data out of a Promise, we must resolve it
// one way is to use resolvers!
// resolvers take a callback with one arg
promiseFx()
    .then(resolution => console.log(resolution))
    // .then(r => console.log(r))
    .then(_ => console.log("you can do more .then()s, but the original promise only resolves once"))
    .catch(err => console.log(err))
    .finally(() => console.log("this runs at the end"))



console.log(synchronousFx(), 2);
console.log(synchronousFx(), 3);



/* 
    ? Asynchronous Functions
    * introduced after ES6 (ES2017?)
    * alternative to writing explicit Promise objects
    * a function that returns a promise 
    * 
    Syntax: 
    * async function myFx() {}
    * const myFx = async function() {}
    * const myFx = async () => {}
    * 
    The async keyword automatically turns the return value into a Promise
*/


let asyncFx = async () => {
    return "Hello world"
}

console.log(asyncFx()); // returns unresolved Promise 

asyncFx()
    .then(data => console.log(data))


// or! use await

/* 
    ? Await keyword
    * can be used inside of async functions
    * tells JS to wait on a promise before moving on
*/

let start = async () => {
    const result = await asyncFx()
    console.log(result, 91);
    return result
}

const newPromise = start()
console.log(newPromise, 96);