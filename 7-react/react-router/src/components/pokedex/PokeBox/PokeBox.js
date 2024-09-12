import { useEffect, useState } from "react"
import Card from "../Card/Card"

function PokeBox({ type, onTypeChange }) {
  const [pokemon, setPokemon] = useState([])

  // passing in "type" as the dependency means
  // this callback will fire when the "type" prop changes
  useEffect(() => {
    if (type) {
      fetch(`https://pokeapi.co/api/v2/type/${type}`)
        .then((res) => res.json())
        .then((data) => setPokemon(data.pokemon))
        .catch((err) => console.warn(err))
    }
  }, [type])

  return (
    <div>
      {pokemon.map((p) => (
        <Card
          url={p.pokemon.url}
          type={type}
          onTypeChange={onTypeChange}
          key={p.pokemon.name}
        />
      ))}
    </div>
  )
}

export default PokeBox
