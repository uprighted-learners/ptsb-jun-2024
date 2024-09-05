import "./App.css"
import ContentBox from "./components/ContentBox/ContentBox"
import { useState } from "react"

function App() {
  // state "belongs to" the component that declares it
  // but both the state values and the setters can be passed to children
  // to read or call
  let [goodMovies, setGoodMovies] = useState([])
  let [badMovies, setBadMovies] = useState([])

  return (
    <div className="App">
      <ContentBox
        setItems={setGoodMovies}
        items={goodMovies}
        placeholder="Add a good movie"
        wrapperId="best"
      />
      <ContentBox
        setItems={setBadMovies}
        items={badMovies}
        placeholder="Add a bad movie"
        wrapperId="worst"
      />
    </div>
  )
}

export default App
