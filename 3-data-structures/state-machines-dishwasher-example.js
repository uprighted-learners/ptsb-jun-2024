/* 
    ? Dishwasher
    states: 
        * off -> washing
        * washing -> drying, off
        * drying -> off
*/

class DishwasherState {
  constructor(status, display, nextStates) {
    this.status = status;
    this.display = display;
    this.nextStates = nextStates;
  }
}

const off = new DishwasherState("off", "The dishwasher is off", ["washing"]);
const washing = new DishwasherState(
  "washing",
  "The dishwasher is running a wash cycle",
  ["drying", "off"]
);
const drying = new DishwasherState(
  "drying",
  "The diswasher is running a heated dry cycle",
  ["off"]
);

const stateLookup = {
  off: off,
  washing: washing,
  drying: drying,
};

let currentState = "off";

let proceed = (nextState) => {
  const current = stateLookup[currentState];
  if (current.nextStates.includes(nextState)) {
    currentState = nextState;
    return current.display;
  } else {
    return `The diswasher can't go from ${current.status} to ${stateLookup[nextState].status}`;
  }
};

console.log(proceed("washing"));
console.log(proceed("drying"));
console.log(proceed("off"));
console.log(proceed("drying"));
