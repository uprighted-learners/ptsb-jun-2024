/* 
Stuff we want to do:
- x add pictures
  - x add shiny pictures
- x get other types
  - x display actual type
- add location 
  - weaknesses / strengths
  - power level
  - battle stats
- filter by... 
*/

const resultsDiv = document.getElementById("results");

const getPokemonByType = async (type) => {
  const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  const data = await res.json();
  data.pokemon.forEach((p) => {
    // create a new card for each pokemon in the list
    createPokemonCard(p);
  });
};

// create a new card for a given pokemon object
const createPokemonCard = async (pokemon) => {
  const monster = await getPokemonData(pokemon);

  if (monster) {
    // create card element
    const card = document.createElement("div");
    card.classList.add("card");

    // create name element
    const nameSpan = document.createElement("span");
    nameSpan.textContent = `Name: ${pokemon.pokemon.name}`;

    // create type element
    const typeSpan = document.createElement("span");
    typeSpan.textContent = `Primary Type: ${monster.types[0].type.name}`;

    // create img element
    const img = document.createElement("img");
    if (monster.sprites.front_default) {
      img.src = monster.sprites.front_default;
      img.addEventListener("click", (e) => {
        if (img.src == monster.sprites.front_default) {
          img.src = monster.sprites.front_shiny;
        } else {
          img.src = monster.sprites.front_default;
        }
      });
    } else {
      // TODO: why does this CSS offset the card?
      img.src =
        "https://www.giantbomb.com/a/uploads/scale_small/9/95666/1879714-pokeball.png";
      img.style.height = "130px";
    }

    // add card to page
    resultsDiv.appendChild(card);

    // add spans to card
    card.appendChild(img);
    card.appendChild(nameSpan);
    card.appendChild(typeSpan);
  }
};

const getPokemonData = async (pokemon) => {
  try {
    const res = await fetch(pokemon.pokemon.url);
    const data = await res.json();
    return data;
  } catch {
    return null;
  }
};

const buildSelect = async () => {
  const select = document.getElementById("type-select");

  const res = await fetch("https://pokeapi.co/api/v2/type/");
  const data = await res.json();

  data.results.forEach((type) => {
    const option = document.createElement("option");
    option.value = type.name;
    option.textContent = type.name;
    select.appendChild(option);
  });

  select.addEventListener("change", (e) => {
    resultsDiv.innerHTML = "";
    getPokemonByType(e.target.value);
  });
};

buildSelect();
