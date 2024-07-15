/* 
    ? Object-Oriented Programming (OOP)

    Four core concepts of OOP
    ? APIE
    * Abstraction
        * the obfuscation of implementation details
    * Polymorphism
        * ability to use constructor to make different object instances
    * Inheritance
        * sharing attribues and methods between classes/objects
    * Encapsulation
        * making data available in some places but not everywhere
        * keeping things scoped
        * organizes information by keeping it scoped to where it is relevant    
*/

// ? Abstraction

const process = require("process");
process.stdout.write("use the process object to write to the console");
console.log("or let the console object do it");

const numArr = [1, 2, 3];
numArr[numArr.length] = 4; // this is the implementation
numArr.push(5); // this is the abstraction

console.log(numArr);

// ? Polymorphism

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  eat() {
    console.log(`${this.name} consumes carbon and other materials`);
  }
}

// two separate instances of the same type
// these are polymorphs, different objects with the same "shape"
// (you can think of a class as defining the "shape")
const ant23859293 = new Animal("one of many ants", "ant");
const ant572i2983 = new Animal("another ant", "ant");

// ? Inheritance

class Human extends Animal {
  constructor(name) {
    super(name, "human"); // this is the parent class constructor
  }

  useLanguage() {
    console.log(`${this.name} communicates using human language`);
  }
}

const scott = new Human("Scott");
scott.eat();
scott.useLanguage();
// ant23859293.useLanguage(); // TypeError: ant23859293.useLanguage is not a function

console.log(scott instanceof Human); // true
console.log(scott instanceof Array); // false
console.log(scott instanceof Animal); // true (because all Humans are instances of Animal)

// ? Encapsulation

// const penny = "Ricardo's dog";

const ricardosHouse = () => {
  const penny = "Ricardo's dog";
  return penny;
};

const ricardosHouse2 = {
  dog: penny,
};

// console.log("I kidnapped", penny); // this one doesn't work after penny is moved inside the house
console.log("I kinapped", ricardosHouse()); // now I have to access the house before I can get penny
console.log("I kidnapped", ricardosHouse2.dog); // when we say "encapsulate" we usually mean in objects or classes
