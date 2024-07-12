/* 
    ? Classes
    * template or blueprint for creating objects
    * they encapsulate data 
*/

class Medal {
  constructor(level, sport, year) {
    this.level = level;
    this.sport = sport;
    this.year = year;
  }
}

class OlympicAthlete {
  constructor(fullName, sport, country) {
    this.name = fullName;
    this.sport = sport;
    this.country = country;
    this.yearsCompeted = [];
    this.medals = [];
  }

  describe() {
    return `${this.name} is an Olympic athlete who competes for ${this.country} in the sport of ${this.sport}. \
She has competed in ${this.yearsCompeted.length} Olympics. She has won ${this.medals.length} Olympic medals.`;
  }

  compete(year, medal) {
    if (!this.yearsCompeted.includes(year)) {
      this.yearsCompeted.push(year);
    }

    if (medal) {
      let newMedal = new Medal(medal, this.sport, year);
      this.medals.push(newMedal);
    }
  }
}

const simone = new OlympicAthlete("Simone Biles", "gymnastics", "USA");
const katie = new OlympicAthlete("Katie Ledecky", "swimming", "USA");
const faith = new OlympicAthlete("Faith Kipyegon", "running", "Kenya");

console.log(simone.describe());
console.log(katie.describe());
console.log(faith.describe());

faith.compete(2012);
faith.compete(2016, "gold");
faith.compete(2020, "gold");
// faith.compete(2024);

katie.compete(2012, "gold");

katie.compete(2016, "gold");
katie.compete(2016, "gold");
katie.compete(2016, "gold");
katie.compete(2016, "gold");
katie.compete(2016, "silver");

katie.compete(2020, "gold");
katie.compete(2020, "gold");
katie.compete(2020, "silver");
katie.compete(2020, "silver");
katie.compete(2020);

// console.log(faith);
// console.log(faith.describe());
console.log(katie);
console.log(katie.describe());

// We can still interact with these object in the regular ways
simone.goat = true;
console.log(simone.goat);

if (simone.goat) {
  console.log("Simone Biles is the greatest gymnast of all time");
}

if (katie.goat) {
  console.log("This won't happen");
}
