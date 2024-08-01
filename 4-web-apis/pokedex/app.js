/* 
Stuff we want to do:
- add pictures
  - add shiny pictures
- get other types
  - display actual type
- add location 
  - weaknesses / strengths
  - power level
  - battle stats
- filter by... 
*/

const resultsDiv = document.getElementById("results");

const getNormalPokemon = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/type/1");
  const data = await res.json();
  data.pokemon.forEach((p) => {
    // create a new card for each pokemon in the list
    createPokemonCard(p);
  });
};

// create a new card for a given pokemon object
const createPokemonCard = async (pokemon) => {
  const monster = await getPokemonData(pokemon);
  // TODO: handle missing sprites

  // create card element
  const card = document.createElement("div");
  card.classList.add("card");

  // create name element
  const nameSpan = document.createElement("span");
  nameSpan.textContent = `Name: ${pokemon.pokemon.name}`;

  // create type element
  const typeSpan = document.createElement("span");
  typeSpan.textContent = `Type: Normal`; // TODO: fill in actual type

  // create img element
  const img = document.createElement("img");
  img.src = monster.sprites.front_default;

  // add card to page
  resultsDiv.appendChild(card);
  // add spans to card

  card.appendChild(img);
  card.appendChild(nameSpan);
  card.appendChild(typeSpan);
};

const getPokemonData = async (pokemon) => {
  const res = await fetch(pokemon.pokemon.url);
  const data = await res.json();
  return data;
};

getNormalPokemon();
