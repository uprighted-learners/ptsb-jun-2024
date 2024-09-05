import "./App.css"
import Counter from "./components/Counter/Counter"

function App() {
  return (
    <div className="App">
      <Counter startValue="2" />
      <Counter />
      <Counter startValue="-2" />
    </div>
  )
}

export default App
