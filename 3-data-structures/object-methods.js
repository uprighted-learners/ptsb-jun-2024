const states = {
    or: {
        name: "Oregon",
        counter: 0
    },
    vt: {
        name: "Vermont",
        counter: 0
    },
    ny: {
        name: "New York",
        counter: 0
    },
    me: {
        name: "Maine",
        counter: 0
    },
    md: {
        name: "Maryland",
        counter: 0
    },
    mostRecentBattleWinner: undefined,

    display(state) {
        // the keyword "this" means "the object we're in right now"
        // console.log(this);

        let thisState = this[state.toLowerCase()]
        if (thisState) {
            return thisState.name
        } else {
            return "Invalid state code"
        }
    },

    battle(state1, state2) {
        if (this.display(state1) == "Invalid state code" || this.display(state2) == "Invalid state code") {
            return "No battle today"
        }

        if (Math.random() > 0.5) {
            console.log(`${this.display(state1)} defeats ${this.display(state2)}`)
            this.mostRecentBattleWinner = state1
            this[state1.toLowerCase()].counter++
        } else {
            console.log(`${this.display(state2)} defeats ${this.display(state1)}`)
            this.mostRecentBattleWinner = state2
            this[state2.toLowerCase()].counter++        
        }
    },

    addState(code, name) {
        this[code] = {
            name, // same as `name: name`
            counter: 0
        }
    },

    deleteSelf() {
        delete this.deleteSelf
    }
}

console.log(this);

states.battle("or", "VA")
states.battle("or", "NE")

states.addState("va", "Virginia")
console.log(states);

states.battle("or", "VA")
states.battle("or", "VA")
states.battle("or", "VA")
states.battle("or", "VA")
states.battle("or", "VA")
states.battle("or", "VA")



console.log(states.display(states.mostRecentBattleWinner));

states.deleteSelf() // this one worked
// states.deleteSelf() // TypeError: states.deleteSelf is not a function


console.log(states);