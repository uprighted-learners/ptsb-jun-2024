import "./App.css"
import PokeBox from "./components/PokeBox/PokeBox"
import TypeSelect from "./components/TypeSelect/TypeSelect"
import { useEffect, useState } from "react"

function App() {
  const [types, setTypes] = useState([])
  const [currentType, setCurrentType] = useState("normal")

  // useEffect takes a callback and an array of dependencies
  // it will call the given function whenever one of the dependencies updates
  useEffect(() => {
    // it's usually used to make async calls to outside resources
    // such as fetch!
    // the callback itself can't be async, so we can make an async function inside it

    // const getTypes = async () => {
    //   const res = await fetch("https://pokeapi.co/api/v2/type/")
    //   const data = await res.json()
    //   setTypes(data.results)
    // }
    // getTypes()

    // or just use resolvers
    fetch("https://pokeapi.co/api/v2/type/")
      .then((res) => res.json())
      .then((data) => setTypes(data.results))
      .catch((err) => console.warn(err))
  }, [])

  return (
    <div className="App">
      <TypeSelect
        types={types}
        currentType={currentType}
        onTypeChange={setCurrentType}
      />
      <PokeBox type={currentType} onTypeChange={setCurrentType} />
    </div>
  )
}

export default App
