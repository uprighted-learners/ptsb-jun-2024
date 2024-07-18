/*
States - state is the current condition or status of data
* "managing state" or "maintaining state" mean controlling the data at different points in a process
    * very close to the meaning in English, for example in "The State of the Union", or
        * if "hunger" is a state
            * the state of your hunger slowly increases 
            * until an event (eating) changes the state 
        * if "childhood" is a boolean state
            * you start with a state of true
            * at some point in your life the state updates to false and never changes back


? State Machines
    * system with finite and defined states
    * use logic to read, write, or update the state
    * state machines are helpful when 
        * dealing with large / complex data sets
        * doing complex operations with data


More examples of state
- liquid, solid, gas
- an online purchase - submitted, received, processing, shipped, delivered
- a game - level 1, level 2, level 3, final boss, completed
- a user in a game - (health, inventory, location), ex (full health, 1 potion, the forest), or (50% health, a shield and a staff, the desert) 
*/


//Stoplight example

let currentState = "red";
console.log(`The light is ${currentState}`);

const possibleLightStates = {
    green: ["yellow"],
    yellow: ["red", "yellowFlashing"],
    yellowFlashing: ["yellow", "red"],
    red: ["green", "redFlashing"],
    redFlashing: ["green", "red"]
}

function changeState(newState) {
    if (possibleLightStates[currentState].includes(newState)) {
        currentState = newState;
        console.log(`The light is ${currentState}`);
    }
    else {
        console.log(`The light cannot change from ${currentState} to ${newState}`)
    }
}
//attempting to change from red to yellow - should not be allowed
changeState("yellow")
//attempting to change from red to green alowed
changeState("green")
changeState("yellow")
console.log(currentState)





//Road Trip example

console.log(`Going on a road trip!`)

const states = {
    "Alabama": ["Florida", "Georgia", "Mississippi", "Tennessee"],
    "Alaska": [],
    "Arizona": ["California", "Colorado", "Nevada", "New Mexico", "Utah"],
    "Arkansas": ["Louisiana", "Mississippi", "Missouri", "Oklahoma", "Tennessee", "Texas"],
    "California": ["Arizona", "Nevada", "Oregon"],
    "Colorado": ["Arizona", "Kansas", "Nebraska", "New Mexico", "Oklahoma", "Utah", "Wyoming"],
    "Connecticut": ["Massachusetts", "New York", "Rhode Island"],
    "Delaware": ["Maryland", "New Jersey", "Pennsylvania"],
    "Florida": ["Alabama", "Georgia"],
    "Georgia": ["Alabama", "Florida", "North Carolina", "South Carolina", "Tennessee"],
    "Hawaii": [],
    "Idaho": ["Montana", "Nevada", "Oregon", "Utah", "Washington", "Wyoming"],
    "Illinois": ["Indiana", "Iowa", "Kentucky", "Missouri", "Wisconsin"],
    "Indiana": ["Illinois", "Kentucky", "Michigan", "Ohio"],
    "Iowa": ["Illinois", "Minnesota", "Missouri", "Nebraska", "South Dakota", "Wisconsin"],
    "Kansas": ["Colorado", "Missouri", "Nebraska", "Oklahoma"],
    "Kentucky": ["Illinois", "Indiana", "Missouri", "Ohio", "Tennessee", "Virginia", "West Virginia"],
    "Louisiana": ["Arkansas", "Mississippi", "Texas"],
    "Maine": ["New Hampshire"],
    "Maryland": ["Delaware", "Pennsylvania", "Virginia", "West Virginia"],
    "Massachusetts": ["Connecticut", "New Hampshire", "New York", "Rhode Island", "Vermont"],
    "Michigan": ["Indiana", "Ohio", "Wisconsin"],
    "Minnesota": ["Iowa", "North Dakota", "South Dakota", "Wisconsin"],
    "Mississippi": ["Alabama", "Arkansas", "Louisiana", "Tennessee"],
    "Missouri": ["Arkansas", "Illinois", "Iowa", "Kansas", "Kentucky", "Nebraska", "Oklahoma", "Tennessee"],
    "Montana": ["Idaho", "North Dakota", "South Dakota", "Wyoming"],
    "Nebraska": ["Colorado", "Iowa", "Kansas", "Missouri", "South Dakota", "Wyoming"],
    "Nevada": ["Arizona", "California", "Idaho", "Oregon", "Utah"],
    "New Hampshire": ["Maine", "Massachusetts", "Vermont"],
    "New Jersey": ["Delaware", "New York", "Pennsylvania"],
    "New Mexico": ["Arizona", "Colorado", "Oklahoma", "Texas", "Utah"],
    "New York": ["Connecticut", "Massachusetts", "New Jersey", "Pennsylvania", "Vermont"],
    "North Carolina": ["Georgia", "South Carolina", "Tennessee", "Virginia"],
    "North Dakota": ["Minnesota", "Montana", "South Dakota"],
    "Ohio": ["Indiana", "Kentucky", "Michigan", "Pennsylvania", "West Virginia"],
    "Oklahoma": ["Arkansas", "Colorado", "Kansas", "Missouri", "New Mexico", "Texas"],
    "Oregon": ["California", "Idaho", "Nevada", "Washington"],
    "Pennsylvania": ["Delaware", "Maryland", "New Jersey", "New York", "Ohio", "West Virginia"],
    "Rhode Island": ["Connecticut", "Massachusetts"],
    "South Carolina": ["Georgia", "North Carolina"],
    "South Dakota": ["Iowa", "Minnesota", "Montana", "Nebraska", "North Dakota", "Wyoming"],
    "Tennessee": ["Alabama", "Arkansas", "Georgia", "Kentucky", "Mississippi", "Missouri", "North Carolina", "Virginia"],
    "Texas": ["Arkansas", "Louisiana", "New Mexico", "Oklahoma"],
    "Utah": ["Arizona", "Colorado", "Idaho", "Nevada", "New Mexico", "Wyoming"],
    "Vermont": ["Massachusetts", "New Hampshire", "New York"],
    "Virginia": ["Kentucky", "Maryland", "North Carolina", "Tennessee", "West Virginia"],
    "Washington": ["Idaho", "Oregon"],
    "West Virginia": ["Kentucky", "Maryland", "Ohio", "Pennsylvania", "Virginia"],
    "Wisconsin": ["Illinois", "Iowa", "Michigan", "Minnesota"],
    "Wyoming": ["Colorado", "Idaho", "Montana", "Nebraska", "South Dakota", "Utah"]
};


class RoadTripper {
    constructor(name, vehicle, currentState) {
        this.name = name;
        this.vehicle = vehicle;
        this.currentState = currentState;
    }

    describeStatus() {
        console.log(`${this.name} is roaming ${this.currentState} in my ${this.vehicle}`)
        console.log(`Looking at the map I could go to ${states[this.currentState].join(", ")}`)
    }

    changeState(newState) {
        if (states[this.currentState].includes(newState)) {
            this.currentState = newState;
        }
        else {
            console.log(`Sorry you can't get to ${newState} from ${this.currentState} without a plane ticket.`)
        }
    }

}

let scott = new RoadTripper("Scott", "1999 Ford Ranger", "Vermont")
scott.describeStatus()
scott.changeState("California")
scott.changeState("New York")
scott.describeStatus()
scott.changeState("New Jersey")
scott.describeStatus()
/*scott = 
{ 
  name: "Scott,
  vehicle: "1999 Ford Ranger",
  currentState: "Vermont" 
"}*/

