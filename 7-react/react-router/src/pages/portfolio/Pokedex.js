import PokeBox from "../../components/pokedex/PokeBox/PokeBox"
import TypeSelect from "../../components/pokedex/TypeSelect/TypeSelect"
import { useEffect, useState } from "react"

function Pokedex() {
  const [types, setTypes] = useState([])
  const [currentType, setCurrentType] = useState("normal")

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type/")
      .then((res) => res.json())
      .then((data) => setTypes(data.results))
      .catch((err) => console.warn(err))
  }, [])

  return (
    <div className="Pokedex">
      <TypeSelect
        types={types}
        currentType={currentType}
        onTypeChange={setCurrentType}
      />
      <PokeBox type={currentType} onTypeChange={setCurrentType} />
    </div>
  )
}

export default Pokedex
