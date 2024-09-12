import "./card.css"
import { useEffect, useState } from "react"

function Card({ url, type, onTypeChange }) {
  const [pokemon, setPokemon] = useState({})

  // TODO: add more data
  // TODO: filter??
  // TODO: toggle shiny sprite

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.warn(err))
  }, [url])

  const altSprite =
    "https://www.giantbomb.com/a/uploads/scale_small/9/95666/1879714-pokeball.png"

  // this is one way of handling conditional rendering
  // we'll render a value that we give different values
  // in different circumstances
  let typeDisplay
  if (pokemon.types) {
    if (pokemon.types[0].type.name === type) {
      typeDisplay = pokemon.types[0].type.name
    } else {
      typeDisplay = (
        <span
          className="alt-type"
          onClick={(e) => onTypeChange(e.target.textContent)}
        >
          {pokemon.types[0].type.name}
        </span>
      )
    }
  } else {
    typeDisplay = "unknown"
  }

  return (
    <div className="card">
      {/* we can also handle conditional rendering right here in the JSX */}
      {/* this ternary will either set the src as the sprite, or the alt url */}
      <img
        src={pokemon.sprites ? pokemon.sprites.front_default : altSprite}
        alt={`sprite for the pokemon ${pokemon.name}`}
      />

      <span>Name: {pokemon.name}</span>
      <span>Primary Type: {typeDisplay}</span>

      {/* this version doesn't renter at all if pokemon.types is falsey */}
      {/* {pokemon.types && (
          <span>Primary Type: {pokemon.types[0].type.name}</span>
        )} */}

      {/* this version will show "unkown" if pokemon.types is falsey */}
      {/* <span>
        Primary Type:
        {pokemon.types ? pokemon.types[0].type.name : "unknown"}
      </span> */}
    </div>
  )
}

export default Card
